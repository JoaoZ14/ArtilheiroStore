/**
 * Admin Service
 * Se VITE_USE_MOCK_DATA=true, retorna dados falsos locais.
 * Se false, consome a API real do backend.
 */

import { httpClient } from './httpClient'
import {
  MOCK_STATS,
  buildMockChart,
  getMockOrders,
  getMockOrderDetail,
  getMockCategories,
  getMockCollections,
  getMockFeedbacks,
  getMockAdminProducts,
} from '../../data/mockAdminData'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export const adminService = {
  getStats() {
    if (USE_MOCK) return Promise.resolve(MOCK_STATS)
    return httpClient.get('/api/admin/stats')
  },

  getOrdersChart() {
    if (USE_MOCK) return Promise.resolve(buildMockChart())
    return httpClient.get('/api/admin/orders-chart')
  },

  getOrders(params = {}) {
    if (USE_MOCK) return Promise.resolve(getMockOrders(params))
    const qs = new URLSearchParams()
    if (params.status) qs.set('status', params.status)
    if (params.search) qs.set('search', params.search)
    if (params.page)   qs.set('page', params.page)
    if (params.limit)  qs.set('limit', params.limit)
    return httpClient.get(`/api/admin/orders?${qs}`)
  },

  getOrderDetail(id) {
    if (USE_MOCK) {
      const order = getMockOrderDetail(id)
      return order
        ? Promise.resolve(order)
        : Promise.reject(new Error('Pedido não encontrado.'))
    }
    return httpClient.get(`/api/admin/orders/${id}`)
  },

  updateOrderStatus(id, status) {
    if (USE_MOCK) return Promise.resolve({ success: true, status })
    return httpClient.patch(`/api/admin/orders/${id}/status`, { status })
  },

  getCategories() {
    if (USE_MOCK) return Promise.resolve(getMockCategories())
    return httpClient.get('/api/admin/categories')
  },

  getCollections() {
    if (USE_MOCK) return Promise.resolve(getMockCollections())
    return httpClient.get('/api/admin/collections')
  },

  getFeedbacks() {
    if (USE_MOCK) return Promise.resolve(getMockFeedbacks())
    return httpClient.get('/api/admin/feedbacks')
  },

  getAdminProducts(params = {}) {
    if (USE_MOCK) return Promise.resolve(getMockAdminProducts(params))
    const qs = new URLSearchParams()
    if (params.search) qs.set('search', params.search)
    if (params.category) qs.set('category', params.category)
    return httpClient.get(`/api/products?${qs}`)
  },
}
