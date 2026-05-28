import pool from '../db/client.js'

function rowToCategory(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    image: row.image,
    link: row.link,
    active: row.active,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
  }
}

export async function listCategories(req, reply) {
  const { includeInactive } = req.query
  const whereClause = includeInactive === 'true' ? '' : 'WHERE active = true'
  const { rows } = await pool.query(
    `SELECT * FROM categories ${whereClause} ORDER BY sort_order, id`
  )
  return rows.map(rowToCategory)
}

export async function createCategory(req, reply) {
  const { name, slug, image, link, sortOrder } = req.body
  if (!name || !slug) {
    return reply.status(400).send({ message: 'Nome e slug são obrigatórios.' })
  }
  const { rows } = await pool.query(
    `INSERT INTO categories (name, slug, image, link, sort_order)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, slug, image || null, link || null, sortOrder ?? 0]
  )
  return reply.status(201).send(rowToCategory(rows[0]))
}

export async function updateCategory(req, reply) {
  const { id } = req.params
  const { name, slug, image, link, sortOrder, active } = req.body
  const { rows } = await pool.query(
    `UPDATE categories
     SET name=$1, slug=$2, image=$3, link=$4, sort_order=$5, active=$6
     WHERE id=$7
     RETURNING *`,
    [name, slug, image ?? null, link ?? null, sortOrder ?? 0, active ?? true, id]
  )
  if (!rows.length) return reply.status(404).send({ message: 'Categoria não encontrada.' })
  return rowToCategory(rows[0])
}

export async function deleteCategory(req, reply) {
  const { id } = req.params
  const { rowCount } = await pool.query('DELETE FROM categories WHERE id=$1', [id])
  if (!rowCount) return reply.status(404).send({ message: 'Categoria não encontrada.' })
  return reply.status(204).send()
}
