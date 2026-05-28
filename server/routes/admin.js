import {
  getStats,
  getOrdersChart,
  listAdminOrders,
  getAdminOrderDetail,
  updateOrderStatus,
} from '../controllers/adminController.js'

import {
  createProduct,
  updateProduct,
  toggleProductStatus,
} from '../controllers/productsController.js'

import {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoriesController.js'

import {
  listCollections,
  createCollection,
  updateCollection,
  deleteCollection,
} from '../controllers/collectionsController.js'

export default async function adminRoutes(app) {
  // KPIs
  app.get('/admin/stats', getStats)
  app.get('/admin/orders-chart', getOrdersChart)

  // Pedidos
  app.get('/admin/orders', listAdminOrders)
  app.get('/admin/orders/:id', getAdminOrderDetail)
  app.patch('/admin/orders/:id/status', updateOrderStatus)

  // Produtos (gestão)
  app.post('/products', createProduct)
  app.put('/products/:id', updateProduct)
  app.patch('/products/:id/status', toggleProductStatus)

  // Categorias (gestão)
  app.get('/admin/categories', (req, reply) => {
    req.query.includeInactive = 'true'
    return listCategories(req, reply)
  })
  app.post('/admin/categories', createCategory)
  app.put('/admin/categories/:id', updateCategory)
  app.delete('/admin/categories/:id', deleteCategory)

  // Coleções (gestão)
  app.get('/admin/collections', (req, reply) => {
    req.query.includeInactive = 'true'
    return listCollections(req, reply)
  })
  app.post('/admin/collections', createCollection)
  app.put('/admin/collections/:id', updateCollection)
  app.delete('/admin/collections/:id', deleteCollection)
}
