import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname, extname, basename } from 'path'
import pool from './client.js'
import supabase from '../lib/supabase.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', '..', 'public')
const BUCKET = 'images'

// ── Storage ──────────────────────────────────────────────────────────────────

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets()
  const exists = buckets?.some((b) => b.name === BUCKET)
  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true })
    if (error) throw new Error(`Erro ao criar bucket: ${error.message}`)
    console.log(`[Storage] Bucket "${BUCKET}" criado.`)
  }
}

async function uploadLocalImage(localPath) {
  const absolutePath = join(PUBLIC_DIR, localPath)
  if (!existsSync(absolutePath)) {
    console.warn(`[Storage] Arquivo não encontrado: ${absolutePath}`)
    return localPath
  }

  const fileBuffer = readFileSync(absolutePath)
  const ext = extname(localPath).toLowerCase()
  const mimeTypes = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' }
  const contentType = mimeTypes[ext] || 'image/jpeg'

  // Remove a barra inicial para formar o caminho no bucket
  const storagePath = localPath.replace(/^\//, '')

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(storagePath, fileBuffer, { contentType, upsert: true })

  if (error) {
    console.warn(`[Storage] Erro ao enviar ${storagePath}: ${error.message}`)
    return localPath
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(storagePath)
  console.log(`[Storage] ✓ ${storagePath}`)
  return data.publicUrl
}

// ── Imagens locais para fazer upload ─────────────────────────────────────────

const LOCAL_IMAGES = [
  '/categorias/chapeu-palha.jpg',
  '/categorias/chapeu-aba-larga.jpg',
  '/categorias/chapeu-feltro.jpg',
  '/categorias/cinta-country.jpg',
  '/hero/glamour-country-hero-hats.jpg',
  '/hero/glamour-country-hero.jpg',
  '/banners/promo-prefooter.jpg',
]

async function uploadAllLocalImages() {
  const urlMap = {}
  for (const path of LOCAL_IMAGES) {
    urlMap[path] = await uploadLocalImage(path)
  }
  return urlMap
}

// ── Produtos ─────────────────────────────────────────────────────────────────

const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

const IMG = {
  hat1: unsplash('1588850561407-ed78c282e89b'),
  hat2: unsplash('1515372039744-b8f02a3ae446'),
  hat3: unsplash('1594633312681-425c7b97ccd1'),
  hat4: unsplash('1521369909029-2afed882baee'),
  field: unsplash('1469474968028-56623f02e42e', 1200),
  belt: unsplash('1551028719-00167b16eac5'),
  scarf: unsplash('1601924994987-69e26d50dc26'),
  woman: unsplash('1496747611176-843222e1e57c'),
}

function getProducts(urlMap) {
  const palha   = urlMap['/categorias/chapeu-palha.jpg']
  const aba     = urlMap['/categorias/chapeu-aba-larga.jpg']
  const feltro  = urlMap['/categorias/chapeu-feltro.jpg']
  const country = urlMap['/categorias/cinta-country.jpg']

  return [
    {
      id: 1, name: 'Chapéu de palha Aurora', price: 189.9, original_price: 219.9,
      image: IMG.hat2, image_hover: IMG.woman, badge: 'Novo', link: '/produto/1',
      team: 'Linha Aurora', liga: 'Palha', category: 'chapeus-palha',
      sizes: ['Único', 'P', 'M'], is_promo: false, sales_count: 84,
      frete_gratis: true, created_at: '2025-04-10',
    },
    {
      id: 2, name: 'Chapéu aba larga Campestre', price: 249.9, original_price: null,
      image: IMG.hat1, image_hover: IMG.hat4, badge: 'Novo', link: '/produto/2',
      team: 'Linha Campestre', liga: 'Aba larga', category: 'chapeus-aba',
      sizes: ['P', 'M', 'G'], is_promo: false, sales_count: 62,
      frete_gratis: true, created_at: '2025-03-22',
    },
    {
      id: 3, name: 'Chapéu feltro Montana', price: 329.9, original_price: 379.9,
      image: IMG.hat3, image_hover: IMG.hat1, badge: 'Promo', link: '/produto/3',
      team: 'Linha Montana', liga: 'Feltro', category: 'chapeus-classicos',
      sizes: ['P', 'M', 'G'], is_promo: true, sales_count: 41,
      created_at: '2025-02-15',
    },
    {
      id: 4, name: 'Chapéu vintage Ranch', price: 279.9, original_price: null,
      image: IMG.hat4, image_hover: IMG.hat3, badge: null, link: '/produto/4',
      team: 'Linha Ranch', liga: 'Clássicos', category: 'chapeus-classicos',
      sizes: ['Único', 'M'], is_promo: false, sales_count: 55,
      created_at: '2025-01-08',
    },
    {
      id: 5, name: 'Chapéu palha Trançado', price: 169.9, original_price: 199.9,
      image: IMG.hat2, image_hover: IMG.field, badge: 'Promo', link: '/produto/5',
      team: 'Linha Trançado', liga: 'Palha', category: 'chapeus-palha',
      sizes: ['Único'], is_promo: true, sales_count: 98,
      frete_gratis: true, created_at: '2025-04-01',
    },
    {
      id: 6, name: 'Chapéu aba média Country', price: 219.9, original_price: null,
      image: IMG.hat1, image_hover: IMG.woman, badge: null, link: '/produto/6',
      team: 'Linha Country', liga: 'Aba larga', category: 'chapeus-aba',
      sizes: ['P', 'M', 'G'], is_promo: false, sales_count: 37,
      created_at: '2024-12-20',
    },
    {
      id: 7, name: 'Chapéu feltro Rosê', price: 349.9, original_price: null,
      image: IMG.hat3, image_hover: IMG.hat4, badge: 'Novo', link: '/produto/7',
      team: 'Linha Rosê', liga: 'Feltro', category: 'chapeus-classicos',
      sizes: ['P', 'M'], is_promo: false, sales_count: 29,
      created_at: '2025-04-18',
    },
    {
      id: 8, name: 'Chapéu palha Leve', price: 159.9, original_price: 189.9,
      image: IMG.hat2, image_hover: IMG.hat1, badge: 'Promo', link: '/produto/8',
      team: 'Linha Leve', liga: 'Palha', category: 'chapeus-palha',
      sizes: ['Único', 'P'], is_promo: true, sales_count: 71,
      created_at: '2024-11-10',
    },
    {
      id: 9, name: 'Cinta country couro', price: 129.9, original_price: 149.9,
      image: country, image_hover: country, badge: 'Promo', link: '/produto/9',
      team: 'Acessórios', liga: 'Country', category: 'country',
      sizes: ['P', 'M', 'G'], is_promo: true, sales_count: 45,
      created_at: '2025-03-05',
    },
    {
      id: 10, name: 'Lenço xadrez country', price: 79.9, original_price: null,
      image: IMG.scarf, image_hover: IMG.scarf, badge: null, link: '/produto/10',
      team: 'Acessórios', liga: 'Country', category: 'country',
      sizes: ['Único'], is_promo: false, sales_count: 52,
      created_at: '2025-02-28',
    },
    {
      id: 11, name: 'Pulseira trançada couro', price: 59.9, original_price: null,
      image: IMG.belt, image_hover: IMG.field, badge: 'Novo', link: '/produto/11',
      team: 'Acessórios', liga: 'Country', category: 'country',
      sizes: ['Único'], is_promo: false, sales_count: 33,
      created_at: '2025-04-12',
    },
    {
      id: 12, name: 'Chapéu aba curta Primavera', price: 199.9, original_price: 229.9,
      image: IMG.hat4, image_hover: IMG.hat2, badge: 'Edição', link: '/produto/12',
      team: 'Linha Primavera', liga: 'Aba larga', category: 'chapeus-aba',
      sizes: ['P', 'M', 'G'], is_promo: false, sales_count: 28,
      frete_gratis: true, created_at: '2025-04-20',
    },
  ]
}

function buildGallery(image, imageHover) {
  return JSON.stringify([
    { src: image, label: 'Vista principal' },
    { src: imageHover, label: 'Detalhe' },
  ])
}

function buildSizeStock(sizes) {
  const stock = {}
  const all = ['Único', 'P', 'M', 'G', 'GG']
  all.forEach((s, i) => {
    stock[s] = sizes.includes(s) ? (i % 4 === 0 ? 0 : 5) : 0
  })
  return JSON.stringify(stock)
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('[Seed] Iniciando upload de imagens para o Supabase Storage...')
  await ensureBucket()
  const urlMap = await uploadAllLocalImages()

  const products = getProducts(urlMap)
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    for (const p of products) {
      const material = p.category?.startsWith('chapeus')
        ? 'Palha natural ou feltro premium (conforme modelo)'
        : 'Couro legítimo e fibras naturais'

      await client.query(
        `INSERT INTO products (
          id, name, price, original_price, image, image_hover, badge, link,
          team, liga, category, sizes, size_stock, is_promo, sales_count,
          gallery, material, shipping, exchange, frete_gratis, created_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21
        )
        ON CONFLICT (id) DO UPDATE SET
          image       = EXCLUDED.image,
          image_hover = EXCLUDED.image_hover,
          gallery     = EXCLUDED.gallery`,
        [
          p.id, p.name, p.price, p.original_price ?? null,
          p.image, p.image_hover, p.badge ?? null, p.link,
          p.team, p.liga, p.category,
          p.sizes,
          buildSizeStock(p.sizes),
          p.is_promo, p.sales_count,
          buildGallery(p.image, p.image_hover),
          material,
          'Envio em até 5 dias úteis',
          'Troca fácil em até 7 dias',
          p.frete_gratis ?? false,
          p.created_at,
        ]
      )
    }

    await client.query(`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products))`)
    await client.query('COMMIT')

    console.log(`[Seed] ✓ ${products.length} produtos inseridos/atualizados com sucesso.`)
  } catch (err) {
    await client.query('ROLLBACK')
    throw err
  } finally {
    client.release()
    await pool.end()
  }
}

seed().catch((err) => {
  console.error('[Seed] Erro:', err.message)
  process.exit(1)
})
