/**
 * Product Service - Comunicação com endpoints de produtos
 */

import { httpClient } from './httpClient'

/**
 * Normaliza dados da API para o formato esperado pelo frontend
 */
function normalizeProduct(apiProduct) {
  if (!apiProduct) return null
  
  // Normaliza sizes: pode vir como objeto { M: 12, G: 15 } ou array [{ label, stock }]
  let sizes = []
  let sizeStock = {}
  
  if (apiProduct.sizes) {
    if (Array.isArray(apiProduct.sizes)) {
      // Formato array: [{ label: "M", stock: 10 }]
      sizes = apiProduct.sizes.map(s => s.label)
      apiProduct.sizes.forEach(s => {
        sizeStock[s.label] = s.stock || 0
      })
    } else if (typeof apiProduct.sizes === 'object') {
      // Formato objeto: { M: 12, G: 15, GG: 6 }
      sizes = Object.keys(apiProduct.sizes)
      sizeStock = { ...apiProduct.sizes }
    }
  }
  
  // Pega primeira imagem como principal
  const mainImage = apiProduct.images?.[0] || ''
  const hoverImage = apiProduct.images?.[1] || mainImage
  
  // Galeria para PDP
  const gallery = (apiProduct.images || []).map((src, index) => ({
    src,
    label: index === 0 ? 'Frente' : index === 1 ? 'Costas' : `Detalhe ${index}`
  }))
  
  // Monta link para PDP
  const link = `/produto/${apiProduct.id}`
  
  // Badge baseado em promoção ou novidade
  let badge = null
  if (apiProduct.isPromotion) {
    badge = 'Promo'
  } else if (apiProduct.isNew) {
    badge = 'Novo'
  }
  
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    price: apiProduct.price,
    originalPrice: apiProduct.originalPrice || null,
    image: mainImage,
    imageHover: hoverImage,
    badge,
    link,
    team: apiProduct.team,
    /** @type {string} Liga do produto (ex.: Brasileirão, Seleção, Libertadores) */
    liga: (apiProduct.liga ?? apiProduct.league ?? '').trim() || null,
    category: apiProduct.category || 'nacionais',
    sizes,
    sizeStock,
    isPromo: apiProduct.isPromotion || false,
    salesCount: apiProduct.salesCount || 0,
    createdAt: apiProduct.createdAt || new Date().toISOString(),
    // Campos extras para PDP
    gallery,
    material: apiProduct.material || '100% Poliéster',
    shipping: apiProduct.shipping || 'Envio em até 48h',
    exchange: apiProduct.exchange || 'Troca fácil em até 7 dias',
    season: apiProduct.season,
  }
}

/**
 * Busca produtos com filtros opcionais (liga, category, team, search).
 * @param {{ liga?: string, category?: string, team?: string, search?: string }} params
 */
export async function getAll(params = {}) {
  try {
    const query = new URLSearchParams()
    if (params.liga) query.set('liga', params.liga)
    if (params.category) query.set('category', params.category)
    if (params.team) query.set('team', params.team)
    if (params.search) query.set('search', params.search)
    const qs = query.toString()
    const url = qs ? `/api/products?${qs}` : '/api/products'
    const data = await httpClient.get(url)

    if (!Array.isArray(data)) {
      throw new Error('Resposta inválida da API')
    }

    return data.map(normalizeProduct)
  } catch (error) {
    console.error('[ProductService] Erro ao buscar produtos:', error)
    throw error
  }
}

/**
 * Busca produto por ID
 */
export async function getById(id) {
  try {
    const data = await httpClient.get(`/api/products/${id}`)
    return normalizeProduct(data)
  } catch (error) {
    console.error(`[ProductService] Erro ao buscar produto ${id}:`, error)
    throw error
  }
}

export const productService = {
  getAll,
  getById,
}
