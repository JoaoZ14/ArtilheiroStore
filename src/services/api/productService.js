/**
 * Product Service — modo mock (sem backend por enquanto)
 */

import { allProducts, getProductDetail } from '../../data/mockData'

function normalizeProduct(raw) {
  if (!raw) return null

  const sizes = raw.sizes || []
  const sizeStock = raw.sizeStock || {}
  if (!raw.sizeStock && sizes.length) {
    sizes.forEach((s) => {
      sizeStock[s] = 5
    })
  }

  const mainImage = raw.image || ''
  const hoverImage = raw.imageHover || mainImage
  const gallery =
    raw.gallery ||
    [mainImage, hoverImage].filter(Boolean).map((src, index) => ({
      src,
      label: index === 0 ? 'Principal' : 'Detalhe',
    }))

  const hasPromo = raw.isPromo || raw.badge === 'Promo'
  const price = Number(raw.price)
  const originalPrice = raw.originalPrice != null ? Number(raw.originalPrice) : null

  return {
    id: raw.id,
    name: raw.name,
    price,
    originalPrice,
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
    frete_gratis: Boolean(raw.frete_gratis ?? raw.freteGratis),
  }
}

function filterMockList(products, params = {}) {
  let list = [...products]

  if (params.liga) {
    const ligaLower = params.liga.toLowerCase()
    list = list.filter((p) => (p.liga || '').toLowerCase() === ligaLower)
  }
  if (params.category) {
    list = list.filter((p) => p.category === params.category)
  }
  if (params.team) {
    list = list.filter((p) => p.team === params.team)
  }
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

export async function getAll(params = {}) {
  const filtered = filterMockList(allProducts, params)
  return Promise.resolve(filtered)
}

export async function getById(id) {
  const detail = getProductDetail(id)
  if (!detail) {
    return Promise.reject(new Error('Produto não encontrado'))
  }
  return Promise.resolve(normalizeProduct(detail))
}

export const productService = {
  getAll,
  getById,
}
