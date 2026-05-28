import { getConfig } from '../controllers/configController.js'

export default async function configRoutes(app) {
  app.get('/config', getConfig)
}
