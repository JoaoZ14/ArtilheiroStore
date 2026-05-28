import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'

import configRoutes from './routes/config.js'
import productsRoutes from './routes/products.js'
import ordersRoutes from './routes/orders.js'
import adminRoutes from './routes/admin.js'
import feedbacksRoutes from './routes/feedbacks.js'

const app = Fastify({ logger: true })

await app.register(cors, {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
})

app.register(configRoutes, { prefix: '/api' })
app.register(productsRoutes, { prefix: '/api' })
app.register(ordersRoutes, { prefix: '/api' })
app.register(adminRoutes, { prefix: '/api' })
app.register(feedbacksRoutes, { prefix: '/api' })

app.get('/health', async () => ({ status: 'ok' }))

const PORT = Number(process.env.PORT) || 8080

try {
  await app.listen({ port: PORT, host: '0.0.0.0' })
  console.log(`[Server] Rodando em http://localhost:${PORT}`)
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
