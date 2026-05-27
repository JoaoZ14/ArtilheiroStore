const MS_PER_DAY = 1000 * 60 * 60 * 24

export function daysSince(dateStr) {
  if (!dateStr) return Infinity
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return Infinity
  const now = new Date()
  return Math.floor((now - date) / MS_PER_DAY)
}

export function sortByNewest(products) {
  return [...products].sort(
    (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  )
}

export function groupByRecency(products) {
  const sorted = sortByNewest(products)
  const spotlight = sorted[0] ?? null
  const highlights = sorted.slice(1, 7)
  const shownIds = new Set(
    [spotlight?.id, ...highlights.map((p) => p.id)].filter(Boolean)
  )

  const thisWeek = []
  const thisMonth = []
  const earlier = []

  for (const product of sorted) {
    if (shownIds.has(product.id)) continue
    const days = daysSince(product.createdAt)
    if (days <= 7) thisWeek.push(product)
    else if (days <= 30) thisMonth.push(product)
    else earlier.push(product)
  }

  return {
    sorted,
    spotlight,
    highlights,
    thisWeek,
    thisMonth,
    earlier,
  }
}

export function getUniqueLigas(products) {
  return [...new Set(products.map((p) => p.liga).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  )
}
