import pool from '../db/client.js'
import { sendStatusEmail } from '../lib/mailer.js'

const VALID_ORDER_STATUSES = [
  'PAYMENT_PENDING',
  'PAYMENT_APPROVED',
  'PAYMENT_REJECTED',
  'PAYMENT_IN_PROCESS',
  'CANCELLED',
  'SHIPPED',
  'DELIVERED',
]

export async function getStats(req, reply) {
  const [{ rows: orderRows }, { rows: productRows }] = await Promise.all([
    pool.query(`
      SELECT
        COUNT(*)                                                          AS total_orders,
        COUNT(*) FILTER (WHERE status = 'PAYMENT_APPROVED')              AS approved_orders,
        COUNT(*) FILTER (WHERE status = 'PAYMENT_PENDING')               AS pending_orders,
        COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE)          AS orders_today,
        COALESCE(SUM(total) FILTER (WHERE status = 'PAYMENT_APPROVED'), 0) AS total_revenue,
        COALESCE(AVG(total) FILTER (WHERE status = 'PAYMENT_APPROVED'), 0) AS avg_ticket
      FROM orders
    `),
    pool.query(`
      SELECT
        COUNT(*) FILTER (WHERE active)             AS active_products,
        COUNT(*) FILTER (WHERE is_promo AND active) AS promo_products
      FROM products
    `),
  ])

  const o = orderRows[0]
  const p = productRows[0]

  return {
    totalOrders: Number(o.total_orders),
    approvedOrders: Number(o.approved_orders),
    pendingOrders: Number(o.pending_orders),
    ordersToday: Number(o.orders_today),
    totalRevenue: Number(o.total_revenue),
    avgTicket: Number(o.avg_ticket),
    activeProducts: Number(p.active_products),
    promoProducts: Number(p.promo_products),
  }
}

export async function getOrdersChart(req, reply) {
  const { rows } = await pool.query(`
    SELECT
      TO_CHAR(DATE(created_at), 'YYYY-MM-DD') AS date,
      COUNT(*)::int                            AS count,
      COALESCE(SUM(total), 0)                 AS revenue
    FROM orders
    WHERE created_at >= NOW() - INTERVAL '30 days'
    GROUP BY DATE(created_at)
    ORDER BY date
  `)

  return rows.map((r) => ({
    date: r.date,
    count: r.count,
    revenue: Number(r.revenue),
  }))
}

export async function listAdminOrders(req, reply) {
  const { status, search, page = 1, limit = 20 } = req.query
  const offset = (Number(page) - 1) * Number(limit)

  const conditions = []
  const values = []

  if (status) {
    values.push(status)
    conditions.push(`o.status = $${values.length}`)
  }
  if (search) {
    values.push(`%${search.toLowerCase()}%`)
    const n = values.length
    conditions.push(`(LOWER(o.customer_name) LIKE $${n} OR LOWER(o.customer_email) LIKE $${n} OR LOWER(o.id) LIKE $${n})`)
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''

  const [{ rows }, { rows: countRows }] = await Promise.all([
    pool.query(
      `SELECT o.id, o.customer_name, o.customer_email, o.customer_cpf,
              o.status, o.total, o.created_at,
              COUNT(oi.id)::int AS item_count
       FROM orders o
       LEFT JOIN order_items oi ON oi.order_id = o.id
       ${where}
       GROUP BY o.id
       ORDER BY o.created_at DESC
       LIMIT $${values.length + 1} OFFSET $${values.length + 2}`,
      [...values, Number(limit), offset]
    ),
    pool.query(`SELECT COUNT(*) FROM orders o ${where}`, values),
  ])

  return {
    orders: rows.map((r) => ({ ...r, total: Number(r.total) })),
    total: Number(countRows[0].count),
    page: Number(page),
    limit: Number(limit),
  }
}

export async function getAdminOrderDetail(req, reply) {
  const { id } = req.params

  const [{ rows: orderRows }, { rows: itemRows }, { rows: paymentRows }] = await Promise.all([
    pool.query('SELECT * FROM orders WHERE id = $1', [id]),
    pool.query(
      `SELECT oi.*, p.name AS product_name, p.image AS product_image
       FROM order_items oi
       LEFT JOIN products p ON p.id = oi.product_id
       WHERE oi.order_id = $1`,
      [id]
    ),
    pool.query(
      'SELECT mp_payment_id, status, status_detail, method, created_at FROM payments WHERE order_id = $1 ORDER BY created_at DESC',
      [id]
    ),
  ])

  if (!orderRows.length) {
    return reply.status(404).send({ message: 'Pedido não encontrado.' })
  }

  const o = orderRows[0]
  return {
    id: o.id,
    status: o.status,
    total: Number(o.total),
    createdAt: o.created_at,
    updatedAt: o.updated_at,
    customer: {
      name: o.customer_name,
      email: o.customer_email,
      cpf: o.customer_cpf,
    },
    address: {
      cep: o.address_cep,
      rua: o.address_rua,
      numero: o.address_numero,
      complemento: o.address_complemento,
      cidade: o.address_cidade,
      estado: o.address_estado,
    },
    items: itemRows.map((i) => ({
      productId: i.product_id,
      productName: i.product_name,
      productImage: i.product_image,
      size: i.size,
      quantity: i.quantity,
      unitPrice: Number(i.unit_price),
    })),
    payments: paymentRows,
  }
}

export async function updateOrderStatus(req, reply) {
  const { id } = req.params
  const { status } = req.body

  if (!VALID_ORDER_STATUSES.includes(status)) {
    return reply.status(400).send({ message: 'Status inválido.' })
  }

  const { rows: orderRows } = await pool.query(
    `UPDATE orders SET status = $1, updated_at = NOW()
     WHERE id = $2
     RETURNING id, status, total, customer_name, customer_email`,
    [status, id]
  )

  if (!orderRows.length) {
    return reply.status(404).send({ message: 'Pedido não encontrado.' })
  }

  const order = orderRows[0]

  const { rows: itemRows } = await pool.query(
    `SELECT oi.quantity, oi.unit_price, oi.size, p.name AS product_name, p.id AS product_id
     FROM order_items oi
     LEFT JOIN products p ON p.id = oi.product_id
     WHERE oi.order_id = $1`,
    [id]
  )

  sendStatusEmail({
    orderId: order.id,
    customerName: order.customer_name,
    customerEmail: order.customer_email,
    status: order.status,
    total: Number(order.total),
    items: itemRows.map((i) => ({
      productId: i.product_id,
      productName: i.product_name,
      size: i.size,
      quantity: i.quantity,
      unitPrice: Number(i.unit_price),
    })),
  })

  return { success: true, status }
}
