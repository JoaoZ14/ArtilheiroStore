/**
 * Order Service - Comunicação com endpoints de pedidos (checkout transparente)
 */

import { httpClient } from './httpClient'

/**
 * Obtém configuração pública (ex.: chave do Mercado Pago para o frontend)
 *
 * @returns {Promise<Object>} - { mercadopagoPublicKey }
 */
export async function getConfig() {
  const response = await httpClient.get('/api/config')
  return {
    mercadopagoPublicKey: response.mercadopagoPublicKey,
  }
}

/**
 * Cria um novo pedido (checkout transparente: sem checkoutUrl; pagamento na própria página).
 *
 * @param {Object} orderData - Dados do pedido
 * @param {Object} orderData.customer - { name, email, cpf }
 * @param {Object} orderData.address - { cep, rua, numero, complemento, cidade, estado }
 * @param {Array} orderData.items - [{ productId, size, quantity, unitPrice }]
 * @param {number} orderData.total - Valor total do pedido
 * @returns {Promise<Object>} - { orderId, status, checkoutUrl (null), total }
 */
export async function createOrder(orderData) {
  try {
    const payload = {
      customer: {
        name: orderData.customer.name,
        email: orderData.customer.email,
        cpf: String(orderData.customer.cpf).replace(/\D/g, ''),
      },
      address: {
        cep: String(orderData.address.cep).replace(/\D/g, ''),
        rua: orderData.address.rua,
        numero: orderData.address.numero,
        complemento: orderData.address.complemento || '',
        cidade: orderData.address.cidade,
        estado: orderData.address.estado,
      },
      items: orderData.items.map(item => ({
        productId: item.productId,
        size: item.size,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
      })),
      total: Number(orderData.total),
    }

    const response = await httpClient.post('/api/orders', payload)

    return {
      orderId: response.orderId || response.id,
      status: response.status || 'PAYMENT_PENDING',
      checkoutUrl: response.checkoutUrl ?? null,
      preferenceId: response.preferenceId ?? null,
      total: response.total ?? orderData.total,
    }
  } catch (error) {
    console.error('[OrderService] Erro ao criar pedido:', error)
    throw error
  }
}

/**
 * Monta o objeto payer para a API (cartão, PIX ou boleto).
 * @private
 */
function buildPayer(payer, includeAddress = false) {
  const result = {
    email: payer.email,
    name: payer.name || undefined,
    identification: {
      type: payer.identification?.type || 'CPF',
      number: String(payer.identification?.number ?? '').replace(/\D/g, ''),
    },
  }
  if (includeAddress && payer.address) {
    result.address = {
      rua: payer.address.rua,
      numero: String(payer.address.numero ?? ''),
      cep: String(payer.address.cep ?? '').replace(/\D/g, ''),
      cidade: payer.address.cidade,
      estado: payer.address.estado,
    }
  }
  return result
}

/**
 * Cria o pagamento do pedido (cartão com token, PIX ou boleto).
 *
 * Cartão: payment_method_id + token + installments + issuer_id? + payer
 * PIX:    payment_method_id: "pix" + payer (sem token). Resposta: qrCodeBase64, qrCode
 * Boleto: payment_method_id: "bolbradesco" + payer.address (rua, numero, cep, cidade, estado). Resposta: ticketUrl
 *
 * @param {string} orderId - Código do pedido (ex: ART-2025-0001)
 * @param {Object} paymentData - Dados conforme o método (token + payer para cartão; payer para PIX/boleto; address no payer para boleto)
 * @returns {Promise<Object>} - { paymentId, status, statusDetail, orderId, qrCodeBase64?, qrCode?, ticketUrl? }
 */
export async function createPayment(orderId, paymentData) {
  const method = paymentData.payment_method_id
  const isCard = method && method !== 'pix' && method !== 'bolbradesco'

  const payload = {
    payment_method_id: method,
    payer: buildPayer(paymentData.payer, method === 'bolbradesco'),
  }

  if (isCard && paymentData.token) {
    payload.token = paymentData.token
    payload.installments = Number(paymentData.installments ?? 1)
    if (paymentData.issuer_id != null && paymentData.issuer_id !== '') {
      payload.issuer_id = String(paymentData.issuer_id)
    }
  }

  const response = await httpClient.post(`/api/orders/${encodeURIComponent(orderId)}/payments`, payload)
  return {
    paymentId: response.paymentId,
    status: response.status,
    statusDetail: response.statusDetail,
    orderId: response.orderId ?? orderId,
    qrCodeBase64: response.qrCodeBase64,
    qrCode: response.qrCode,
    ticketUrl: response.ticketUrl,
  }
}

/**
 * Consulta o status do pagamento (para polling PIX).
 * Enquanto o usuário estiver na tela do QR code, chame a cada 3–5 s.
 * Quando a API retornar updated: true, o pagamento foi confirmado (ex.: webhook ou checagem no MP).
 *
 * @param {string} orderId - Código do pedido (ex: ART-2026-0001)
 * @param {string} paymentId - ID do pagamento retornado por createPayment
 * @returns {Promise<Object>} - { updated: boolean, status?: string }
 */
export async function getPaymentStatus(orderId, paymentId) {
  const response = await httpClient.get(
    `/api/orders/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}`
  )
  return {
    updated: Boolean(response.updated),
    status: response.status,
  }
}

/**
 * Consulta um pedido por e-mail e código (checkout como convidado)
 *
 * @param {string} email - E-mail do cliente
 * @param {string} orderCode - Código do pedido (ex: ART-10293)
 * @returns {Promise<Object>} - { orderCode, status, total, createdAt, items }
 */
export async function lookupOrder(email, orderCode) {
  const params = new URLSearchParams({
    email: email.trim(),
    code: orderCode.trim(),
  })
  const response = await httpClient.get(`/api/orders/lookup?${params.toString()}`)
  return {
    ...response,
    orderCode: response.orderId ?? response.orderCode,
  }
}

/**
 * Busca pedidos pelo CPF do cliente.
 *
 * @param {string} cpf - CPF (apenas dígitos ou com formatação)
 * @returns {Promise<Array>} - Lista de pedidos do cliente
 */
export async function getOrdersByCpf(cpf) {
  const digits = String(cpf ?? '').replace(/\D/g, '')
  const params = new URLSearchParams({ cpf: digits })
  const response = await httpClient.get(`/api/orders/by-cpf?${params.toString()}`)
  return Array.isArray(response) ? response : response?.orders ?? []
}

export const orderService = {
  getConfig,
  createOrder,
  createPayment,
  getPaymentStatus,
  lookupOrder,
  getOrdersByCpf,
}
