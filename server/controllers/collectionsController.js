import pool from '../db/client.js'

function rowToCollection(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    image: row.image,
    link: row.link,
    description: row.description,
    active: row.active,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
  }
}

export async function listCollections(req, reply) {
  const { includeInactive } = req.query
  const whereClause = includeInactive === 'true' ? '' : 'WHERE active = true'
  const { rows } = await pool.query(
    `SELECT * FROM collections ${whereClause} ORDER BY sort_order, id`
  )
  return rows.map(rowToCollection)
}

export async function createCollection(req, reply) {
  const { name, slug, image, link, description, sortOrder } = req.body
  if (!name || !slug) {
    return reply.status(400).send({ message: 'Nome e slug são obrigatórios.' })
  }
  const { rows } = await pool.query(
    `INSERT INTO collections (name, slug, image, link, description, sort_order)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [name, slug, image || null, link || null, description || null, sortOrder ?? 0]
  )
  return reply.status(201).send(rowToCollection(rows[0]))
}

export async function updateCollection(req, reply) {
  const { id } = req.params
  const { name, slug, image, link, description, sortOrder, active } = req.body
  const { rows } = await pool.query(
    `UPDATE collections
     SET name=$1, slug=$2, image=$3, link=$4, description=$5, sort_order=$6, active=$7
     WHERE id=$8
     RETURNING *`,
    [name, slug, image ?? null, link ?? null, description ?? null, sortOrder ?? 0, active ?? true, id]
  )
  if (!rows.length) return reply.status(404).send({ message: 'Coleção não encontrada.' })
  return rowToCollection(rows[0])
}

export async function deleteCollection(req, reply) {
  const { id } = req.params
  const { rowCount } = await pool.query('DELETE FROM collections WHERE id=$1', [id])
  if (!rowCount) return reply.status(404).send({ message: 'Coleção não encontrada.' })
  return reply.status(204).send()
}
