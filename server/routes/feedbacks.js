import {
  listFeedbacks,
  listAdminFeedbacks,
  createFeedback,
  updateFeedback,
  toggleFeedbackStatus,
  deleteFeedback,
} from '../controllers/feedbacksController.js'

export default async function feedbacksRoutes(app) {
  app.get('/feedbacks', listFeedbacks)

  app.get('/admin/feedbacks', listAdminFeedbacks)
  app.post('/admin/feedbacks', createFeedback)
  app.put('/admin/feedbacks/:id', updateFeedback)
  app.patch('/admin/feedbacks/:id/status', toggleFeedbackStatus)
  app.delete('/admin/feedbacks/:id', deleteFeedback)
}
