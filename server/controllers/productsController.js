import pool from '../db/client.js'

function rowToProduct(row) {
  return {
    id: row.id,
    name: row.name,
    price: Number(row.price),
    originalPrice: row.original_price != null ? Number(row.original_price) : null,
    image: row.image,
    imageHover: row.image_hover,
    badge: row.badge,
    link: row.link || `/produto/${row.id}`,
    team: row.team,
    liga: row.liga,
    category: row.category,
    sizes: row.sizes || [],
    sizeStock: row.size_stock || {},
    isPromo: row.is_promo,
    salesCount: row.sales_count,
    gallery: row.gallery || [],
    material: row.material,
    shipping: row.shipping,
    exchange: row.exchange,
    season: row.season,
    frete_gratis: row.frete_gratis,
    createdAt: row.created_at,
  }
}

export async function listProducts(req, reply) {
  const { liga, category, team, search } = req.query

  const conditions = ['active = true']
  const values = []

  if (liga) {
    values.push(liga.toLowerCase())
    conditions.push(`LOWER(liga) = $${values.length}`)
  }
  if (category) {
    values.push(category)
    conditions.push(`category = $${values.length}`)
  }
  if (team) {
    values.push(team)
    conditions.push(`team = $${values.length}`)
  }
  if (search) {
    values.push(`%${search.toLowerCase()}%`)
    const n = values.length
    conditions.push(
      `(LOWER(name) LIKE $${n} OR LOWER(liga) LIKE $${n} OR LOWER(team) LIKE $${n} OR LOWER(category) LIKE $${n})`
    )
  }

  const where = conditions.join(' AND ')
  const { rows } = await pool.query(
    `SELECT * FROM products WHERE ${where} ORDER BY created_at DESC`,
    values
  )

  return rows.map(rowToProduct)
}

export async function getProduct(req, reply) {
  const { id } = req.params
  const { rows } = await pool.query(
    'SELECT * FROM products WHERE id = $1 AND active = true',
    [id]
  )

  if (!rows.length) {
    return reply.status(404).send({ message: 'Produto não encontrado.' })
  }

  return rowToProduct(rows[0])
}

// ── Admin: gestão de produtos ─────────────────────────────────────────────────

export async function createProduct(req, reply) {
  const body = req.body
  const {
    name, price, originalPrice, image, imageHover, badge,
    team, liga, category, sizes, sizeStock, isPromo,
    material, shipping, exchange, season, freteGratis,
  } = body

  if (!name || !price || !category) {
    return reply.status(400).send({ message: 'Nome, preço e categoria são obrigatórios.' })
  }

  const link = `/produto/${Date.now()}`
  const gallery = JSON.stringify([
    { src: image || '', label: 'Vista principal' },
    ...(imageHover && imageHover !== image ? [{ src: imageHover, label: 'Detalhe' }] : []),
  ])

  const { rows } = await pool.query(
    `INSERT INTO products (
       name, price, original_price, image, image_hover, badge, link,
       team, liga, category, sizes, size_stock, is_promo,
       gallery, material, shipping, exchange, season, frete_gratis
     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)
     RETURNING *`,
    [
      name,
      Number(price),
      originalPrice ? Number(originalPrice) : null,
      image || null,
      imageHover || null,
      badge || null,
      link,
      team || null,
      liga || null,
      category,
      sizes || [],
      JSON.stringify(sizeStock || {}),
      Boolean(isPromo),
      gallery,
      material || null,
      shipping || 'Envio em até 5 dias úteis',
      exchange || 'Troca fácil em até 7 dias',
      season || null,
      Boolean(freteGratis),
    ]
  )

  // Atualiza o link com o ID real
  const newId = rows[0].id
  await pool.query('UPDATE products SET link = $1 WHERE id = $2', [`/produto/${newId}`, newId])

  return reply.status(201).send(rowToProduct({ ...rows[0], link: `/produto/${newId}` }))
}

export async function updateProduct(req, reply) {
  const { id } = req.params
  const body = req.body

  const { rows: existing } = await pool.query('SELECT id FROM products WHERE id = $1', [id])
  if (!existing.length) {
    return reply.status(404).send({ message: 'Produto não encontrado.' })
  }

  const {
    name, price, originalPrice, image, imageHover, badge,
    team, liga, category, sizes, sizeStock, isPromo,
    material, shipping, exchange, season, freteGratis,
  } = body

  const gallery = JSON.stringify([
    { src: image || '', label: 'Vista principal' },
    ...(imageHover && imageHover !== image ? [{ src: imageHover, label: 'Detalhe' }] : []),
  ])

  const { rows } = await pool.query(
    `UPDATE products SET
       name = $1, price = $2, original_price = $3, image = $4, image_hover = $5,
       badge = $6, team = $7, liga = $8, category = $9, sizes = $10,
       size_stock = $11, is_promo = $12, gallery = $13, material = $14,
       shipping = $15, exchange = $16, season = $17, frete_gratis = $18
     WHERE id = $19
     RETURNING *`,
    [
      name,
      Number(price),
      originalPrice ? Number(originalPrice) : null,
      image || null,
      imageHover || null,
      badge || null,
      team || null,
      liga || null,
      category,
      sizes || [],
      JSON.stringify(sizeStock || {}),
      Boolean(isPromo),
      gallery,
      material || null,
      shipping || 'Envio em até 5 dias úteis',
      exchange || 'Troca fácil em até 7 dias',
      season || null,
      Boolean(freteGratis),
      id,
    ]
  )

  return rowToProduct(rows[0])
}

export async function toggleProductStatus(req, reply) {
  const { id } = req.params
  const { active } = req.body

  if (typeof active !== 'boolean') {
    return reply.status(400).send({ message: '"active" deve ser boolean.' })
  }

  const { rowCount } = await pool.query(
    'UPDATE products SET active = $1 WHERE id = $2',
    [active, id]
  )

  if (!rowCount) {
    return reply.status(404).send({ message: 'Produto não encontrado.' })
  }

  return { success: true, active }
}
