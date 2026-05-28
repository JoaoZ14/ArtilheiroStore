/**
 * Product Service
 * Se VITE_USE_MOCK_DATA=true, retorna dados do mockData local.
 * Se false, consome a API real do backend.
 */

import { httpClient } from './httpClient'
import { allProducts, getProductDetail } from '../../data/mockData'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'

// ── Mock helpers ──────────────────────────────────────────────────────────────

function normalizeProduct(raw) {
  if (!raw) return null
  const sizes = raw.sizes || []
  const sizeStock = raw.sizeStock || {}
  if (!raw.sizeStock && sizes.length) sizes.forEach((s) => { sizeStock[s] = 5 })
  const mainImage = raw.image || ''
  const hoverImage = raw.imageHover || mainImage
  const gallery =
    raw.gallery ||
    [mainImage, hoverImage].filter(Boolean).map((src, i) => ({
      src,
      label: i === 0 ? 'Principal' : 'Detalhe',
    }))
  const hasPromo = raw.isPromo || raw.badge === 'Promo'
  return {
    id: raw.id,
    name: raw.name,
    price: Number(raw.price),
    originalPrice: raw.originalPrice != null ? Number(raw.originalPrice) : null,
    image: mainImage,
    imageHover: hoverImage,
    badge: raw.badge || (hasPromo ? 'Promo' : null),
    link: raw.link || `/produto/${raw.id}`,
    team: raw.team,
    liga: (raw.liga ?? '').trim() || null,
    category: raw.category || 'chapeus-palha',
    sizes,
    sizeStock,
    isPromo: hasPromo,
    salesCount: raw.salesCount || 0,
    createdAt: raw.createdAt || new Date().toISOString(),
    gallery,
    material: raw.material || 'Materiais selecionados com cuidado',
    shipping: raw.shipping || 'Envio em até 5 dias úteis',
    exchange: raw.exchange || 'Troca fácil em até 7 dias',
    season: raw.season,
    description: raw.description ?? null,
    frete_gratis: Boolean(raw.frete_gratis ?? raw.freteGratis),
    active: raw.active !== false,
  }
}

function filterMockList(products, params = {}) {
  let list = [...products]
  if (params.liga) {
    const l = params.liga.toLowerCase()
    list = list.filter((p) => (p.liga || '').toLowerCase() === l)
  }
  if (params.category) list = list.filter((p) => p.category === params.category)
  if (params.team)     list = list.filter((p) => p.team === params.team)
  if (params.search) {
    const q = params.search.toLowerCase()
    list = list.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.liga?.toLowerCase().includes(q) ||
        p.team?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
    )
  }
  return list.map(normalizeProduct)
}

// ── Exports ───────────────────────────────────────────────────────────────────

export async function getAll(params = {}) {
  if (USE_MOCK) return filterMockList(allProducts, params)

  const query = new URLSearchParams()
  if (params.liga)     query.set('liga', params.liga)
  if (params.category) query.set('category', params.category)
  if (params.team)     query.set('team', params.team)
  if (params.search)   query.set('search', params.search)
  const qs = query.toString()
  return httpClient.get(`/api/products${qs ? `?${qs}` : ''}`)
}

export async function getById(id) {
  if (USE_MOCK) {
    const detail = getProductDetail(id)
    if (!detail) throw new Error('Produto não encontrado')
    return normalizeProduct(detail)
  }
  return httpClient.get(`/api/products/${id}`)
}

export const productService = { getAll, getById }
