/**
 * Calcula a porcentagem de desconto entre preço original e preço atual (promocional).
 * @param {number} originalPrice - Preço original (antes do desconto)
 * @param {number} currentPrice - Preço atual (com desconto)
 * @returns {number|null} Porcentagem inteira (ex.: 15 para 15%) ou null se não houver desconto válido
 */
export function getDiscountPercentage(originalPrice, currentPrice) {
  const original = Number(originalPrice)
  const current = Number(currentPrice)
  if (original <= 0 || current >= original) return null
  const percentage = ((original - current) / original) * 100
  return Math.round(percentage)
}
