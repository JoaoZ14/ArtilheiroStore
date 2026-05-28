import { MercadoPagoConfig, Payment } from 'mercadopago'
import pool from '../db/client.js'

function getMPClient() {
  return new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
    options: { timeout: 5000 },
  })
}

async function generateOrderId(client) {
  const year = new Date().getFullYear()
  const result = await client.query(
    `INSERT INTO order_sequences (year, last_n) VALUES ($1, 1)
     ON CONFLICT (year) DO UPDATE SET last_n = order_sequences.last_n + 1
     RETURNING last_n`,
    [year]
  )
  const n = result.rows[0].last_n
  return `ART-${year}-${String(n).padStart(4, '0')}`
}

// POST /api/orders
export async function createOrder(req, reply) {
  const { customer, address, items, total } = req.body

  if (!customer?.name || !customer?.email || !customer?.cpf) {
    return reply.status(400).send({ message: 'Dados do cliente incompletos.' })
  }
  if (!address?.cep || !address?.rua || !address?.numero || !address?.cidade || !address?.estado) {
    return reply.status(400).send({ message: 'Endereço incompleto.' })
  }
  if (!Array.isArray(items) || !items.length) {
    return reply.status(400).send({ message: 'O pedido não possui itens.' })
  }

  const dbClient = await pool.connect()
  try {
    await dbClient.query('BEGIN')

    const orderId = await generateOrderId(dbClient)

    await dbClient.query(
      `INSERT INTO orders (
        id, customer_name, customer_email, customer_cpf,
        address_cep, address_rua, address_numero, address_complemento,
        address_cidade, address_estado, total
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        orderId,
        customer.name,
        customer.email,
        customer.cpf,
        address.cep,
        address.rua,
        address.numero,
        address.complemento || null,
        address.cidade,
        address.estado,
        total,
      ]
    )

    for (const item of items) {
      await dbClient.query(
        `INSERT INTO order_items (order_id, product_id, size, quantity, unit_price)
         VALUES ($1,$2,$3,$4,$5)`,
        [orderId, item.productId, item.size || null, item.quantity, item.unitPrice]
      )
    }

    await dbClient.query('COMMIT')

    return reply.status(201).send({
      orderId,
      status: 'PAYMENT_PENDING',
      checkoutUrl: null,
      preferenceId: null,
      total,
    })
  } catch (err) {
    await dbClient.query('ROLLBACK')
    req.log.error(err)
    return reply.status(500).send({ message: 'Erro ao criar pedido.' })
  } finally {
    dbClient.release()
  }
}

// POST /api/orders/:orderId/payments
export async function createPayment(req, reply) {
  const { orderId } = req.params
  const { payment_method_id, token, installments, issuer_id, payer } = req.body

  const { rows } = await pool.query('SELECT * FROM orders WHERE id = $1', [orderId])
  if (!rows.length) {
    return reply.status(404).send({ message: 'Pedido não encontrado.' })
  }
  const order = rows[0]

  const mp = new Payment(getMPClient())

  const isCard = payment_method_id !== 'pix' && payment_method_id !== 'bolbradesco'
  const isBoleto = payment_method_id === 'bolbradesco'

  const paymentBody = {
    transaction_amount: Number(order.total),
    payment_method_id,
    payer: {
      email: payer.email,
      identification: {
        type: payer.identification?.type || 'CPF',
        number: String(payer.identification?.number ?? '').replace(/\D/g, ''),
      },
    },
    metadata: { order_id: orderId },
  }

  if (isCard && token) {
    paymentBody.token = token
    paymentBody.installments = Number(installments ?? 1)
    if (issuer_id != null && issuer_id !== '') {
      paymentBody.issuer_id = String(issuer_id)
    }
  }

  if (isBoleto && payer.address) {
    paymentBody.payer.address = {
      street_name: payer.address.rua,
      street_number: String(payer.address.numero ?? ''),
      zip_code: String(payer.address.cep ?? '').replace(/\D/g, ''),
      city: { name: payer.address.cidade },
      federal_unit: payer.address.estado,
    }
  }

  try {
    const mpResponse = await mp.create({ body: paymentBody })

    const mpStatus = mpResponse.status
    const orderStatus = mapMpStatusToOrderStatus(mpStatus)

    await pool.query(
      `INSERT INTO payments (order_id, mp_payment_id, status, status_detail, method, qr_code_base64, qr_code, ticket_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [
        orderId,
        String(mpResponse.id),
        mpStatus,
        mpResponse.status_detail || null,
        payment_method_id,
        mpResponse.point_of_interaction?.transaction_data?.qr_code_base64 || null,
        mpResponse.point_of_interaction?.transaction_data?.qr_code || null,
        mpResponse.transaction_details?.external_resource_url || null,
      ]
    )

    await pool.query(
      `UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2`,
      [orderStatus, orderId]
    )

    return {
      paymentId: String(mpResponse.id),
      status: mpStatus,
      statusDetail: mpResponse.status_detail,
      orderId,
      qrCodeBase64: mpResponse.point_of_interaction?.transaction_data?.qr_code_base64 || null,
      qrCode: mpResponse.point_of_interaction?.transaction_data?.qr_code || null,
      ticketUrl: mpResponse.transaction_details?.external_resource_url || null,
    }
  } catch (err) {
    req.log.error(err)
    const message = err?.cause?.message || err.message || 'Erro ao processar pagamento.'
    return reply.status(502).send({ message })
  }
}

// GET /api/orders/:orderId/payments/:paymentId
export async function getPaymentStatus(req, reply) {
  const { orderId, paymentId } = req.params

  const { rows } = await pool.query(
    'SELECT status, status_detail FROM payments WHERE order_id = $1 AND mp_payment_id = $2',
    [orderId, paymentId]
  )

  if (!rows.length) {
    return reply.status(404).send({ message: 'Pagamento não encontrado.' })
  }

  const mp = new Payment(getMPClient())

  try {
    const mpResponse = await mp.get({ id: paymentId })
    const newStatus = mpResponse.status
    const currentStatus = rows[0].status

    if (newStatus !== currentStatus) {
      await pool.query(
        'UPDATE payments SET status = $1, status_detail = $2 WHERE mp_payment_id = $3',
        [newStatus, mpResponse.status_detail, paymentId]
      )
      await pool.query(
        'UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2',
        [mapMpStatusToOrderStatus(newStatus), orderId]
      )
      return { updated: true, status: newStatus }
    }

    return { updated: false, status: currentStatus }
  } catch (err) {
    req.log.error(err)
    return { updated: false, status: rows[0].status }
  }
}

// GET /api/orders/lookup?email=&code=
export async function lookupOrder(req, reply) {
  const { email, code } = req.query

  if (!email || !code) {
    return reply.status(400).send({ message: 'E-mail e código são obrigatórios.' })
  }

  const { rows } = await pool.query(
    `SELECT o.*, 
      json_agg(json_build_object(
        'productId', oi.product_id,
        'size', oi.size,
        'quantity', oi.quantity,
        'unitPrice', oi.unit_price
      )) AS items
     FROM orders o
     LEFT JOIN order_items oi ON oi.order_id = o.id
     WHERE LOWER(o.customer_email) = LOWER($1) AND o.id = $2
     GROUP BY o.id`,
    [email.trim(), code.trim()]
  )

  if (!rows.length) {
    return reply.status(404).send({ message: 'Pedido não encontrado.' })
  }

  return formatOrderResponse(rows[0])
}

// GET /api/orders/by-cpf?cpf=
export async function getOrdersByCpf(req, reply) {
  const { cpf } = req.query
  const digits = String(cpf ?? '').replace(/\D/g, '')

  if (!digits) {
    return reply.status(400).send({ message: 'CPF é obrigatório.' })
  }

  const { rows } = await pool.query(
    `SELECT o.*,
      json_agg(json_build_object(
        'productId', oi.product_id,
        'size', oi.size,
        'quantity', oi.quantity,
        'unitPrice', oi.unit_price
      )) AS items
     FROM orders o
     LEFT JOIN order_items oi ON oi.order_id = o.id
     WHERE o.customer_cpf = $1
     GROUP BY o.id
     ORDER BY o.created_at DESC`,
    [digits]
  )

  return rows.map(formatOrderResponse)
}

// POST /api/webhooks/mercadopago
export async function mercadoPagoWebhook(req, reply) {
  const { type, data } = req.body ?? {}

  if (type !== 'payment' || !data?.id) {
    return reply.status(200).send({ received: true })
  }

  try {
    const mp = new Payment(getMPClient())
    const mpResponse = await mp.get({ id: data.id })
    const mpPaymentId = String(data.id)
    const newStatus = mpResponse.status

    const { rows } = await pool.query(
      'SELECT order_id FROM payments WHERE mp_payment_id = $1',
      [mpPaymentId]
    )

    if (rows.length) {
      const orderId = rows[0].order_id
      await pool.query(
        'UPDATE payments SET status = $1, status_detail = $2 WHERE mp_payment_id = $3',
        [newStatus, mpResponse.status_detail, mpPaymentId]
      )
      await pool.query(
        'UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2',
        [mapMpStatusToOrderStatus(newStatus), orderId]
      )
    }
  } catch (err) {
    req.log.error('[Webhook]', err.message)
  }

  return reply.status(200).send({ received: true })
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function mapMpStatusToOrderStatus(mpStatus) {
  const map = {
    approved: 'PAYMENT_APPROVED',
    rejected: 'PAYMENT_REJECTED',
    pending: 'PAYMENT_PENDING',
    in_process: 'PAYMENT_IN_PROCESS',
    cancelled: 'CANCELLED',
    refunded: 'REFUNDED',
    charged_back: 'CHARGED_BACK',
  }
  return map[mpStatus] ?? 'PAYMENT_PENDING'
}

function formatOrderResponse(row) {
  return {
    orderId: row.id,
    orderCode: row.id,
    status: row.status,
    total: Number(row.total),
    createdAt: row.created_at,
    customer: {
      name: row.customer_name,
      email: row.customer_email,
    },
    address: {
      cep: row.address_cep,
      rua: row.address_rua,
      numero: row.address_numero,
      complemento: row.address_complemento,
      cidade: row.address_cidade,
      estado: row.address_estado,
    },
    items: row.items?.filter(Boolean) ?? [],
  }
}
