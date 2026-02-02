/**
 * Order Service - Comunicação com endpoints de pedidos
 */

import { httpClient } from './httpClient'

/**
 * Cria um novo pedido
 * 
 * @param {Object} orderData - Dados do pedido
 * @param {Object} orderData.customer - { name, email, cpf }
 * @param {Object} orderData.address - { cep, rua, numero, complemento, cidade, estado }
 * @param {Array} orderData.items - [{ productId, size, quantity, unitPrice }]
 * @param {number} orderData.total - Valor total do pedido
 * @returns {Promise<Object>} - { orderId, status, total }
 */
export async function createOrder(orderData) {
  try {
    const payload = {
      customer: {
        name: orderData.customer.name,
        email: orderData.customer.email,
        cpf: orderData.customer.cpf,
      },
      address: {
        cep: orderData.address.cep,
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
        unitPrice: item.unitPrice,
      })),
      total: orderData.total,
    }
    
    const response = await httpClient.post('/api/orders', payload)
    
    return {
      orderId: response.orderId || response.id,
      status: response.status || 'confirmed',
      total: response.total || orderData.total,
    }
  } catch (error) {
    console.error('[OrderService] Erro ao criar pedido:', error)
    throw error
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
  return response
}

export const orderService = {
  createOrder,
  lookupOrder,
}
