import pool from '../db/client.js'

function toFeedback(row) {
  return {
    id: row.id,
    imageUrl: row.image_url,
    caption: row.caption,
    displayOrder: row.display_order,
    active: row.active,
    createdAt: row.created_at,
  }
}

export async function listFeedbacks(req, reply) {
  const { rows } = await pool.query(
    `SELECT * FROM feedback_screenshots
     WHERE active = true
     ORDER BY display_order ASC, created_at DESC`
  )
  return rows.map(toFeedback)
}

export async function listAdminFeedbacks(req, reply) {
  const { rows } = await pool.query(
    `SELECT * FROM feedback_screenshots
     ORDER BY display_order ASC, created_at DESC`
  )
  return rows.map(toFeedback)
}

export async function createFeedback(req, reply) {
  const { imageUrl, caption, displayOrder = 0 } = req.body

  if (!imageUrl) {
    return reply.status(400).send({ message: 'imageUrl é obrigatório.' })
  }

  const { rows } = await pool.query(
    `INSERT INTO feedback_screenshots (image_url, caption, display_order)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [imageUrl, caption || null, Number(displayOrder)]
  )
  return reply.status(201).send(toFeedback(rows[0]))
}

export async function updateFeedback(req, reply) {
  const { id } = req.params
  const { imageUrl, caption, displayOrder } = req.body

  const { rows, rowCount } = await pool.query(
    `UPDATE feedback_screenshots
     SET image_url     = COALESCE($1, image_url),
         caption       = $2,
         display_order = COALESCE($3, display_order)
     WHERE id = $4
     RETURNING *`,
    [imageUrl || null, caption ?? null, displayOrder != null ? Number(displayOrder) : null, id]
  )

  if (!rowCount) {
    return reply.status(404).send({ message: 'Feedback não encontrado.' })
  }
  return toFeedback(rows[0])
}

export async function toggleFeedbackStatus(req, reply) {
  const { id } = req.params
  const { active } = req.body

  if (typeof active !== 'boolean') {
    return reply.status(400).send({ message: 'Campo "active" (boolean) é obrigatório.' })
  }

  const { rowCount } = await pool.query(
    'UPDATE feedback_screenshots SET active = $1 WHERE id = $2',
    [active, id]
  )

  if (!rowCount) {
    return reply.status(404).send({ message: 'Feedback não encontrado.' })
  }
  return { success: true, active }
}

export async function deleteFeedback(req, reply) {
  const { id } = req.params
  const { rowCount } = await pool.query(
    'DELETE FROM feedback_screenshots WHERE id = $1',
    [id]
  )

  if (!rowCount) {
    return reply.status(404).send({ message: 'Feedback não encontrado.' })
  }
  return reply.status(204).send()
}
