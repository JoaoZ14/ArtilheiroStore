import { listProducts, getProduct } from '../controllers/productsController.js'
import { listCategories } from '../controllers/categoriesController.js'
import { listCollections } from '../controllers/collectionsController.js'

export default async function productsRoutes(app) {
  app.get('/products', listProducts)
  app.get('/products/:id', getProduct)
  app.get('/categories', listCategories)
  app.get('/collections', listCollections)
}
