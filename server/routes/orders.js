import {
  createOrder,
  createPayment,
  getPaymentStatus,
  lookupOrder,
  getOrdersByCpf,
  mercadoPagoWebhook,
} from '../controllers/ordersController.js'

export default async function ordersRoutes(app) {
  app.get('/orders/lookup', lookupOrder)
  app.get('/orders/by-cpf', getOrdersByCpf)
  app.post('/orders', createOrder)
  app.post('/orders/:orderId/payments', createPayment)
  app.get('/orders/:orderId/payments/:paymentId', getPaymentStatus)
  app.post('/webhooks/mercadopago', mercadoPagoWebhook)
}
