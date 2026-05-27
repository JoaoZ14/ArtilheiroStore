const VIACEP_BASE = 'https://viacep.com.br/ws'

export function formatCep(value) {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

export function cepDigits(value) {
  return String(value ?? '').replace(/\D/g, '').slice(0, 8)
}

/**
 * @returns {Promise<{ rua: string, cidade: string, estado: string, bairro: string } | null>}
 */
export async function fetchAddressByCep(cep) {
  const digits = cepDigits(cep)
  if (digits.length !== 8) return null

  const res = await fetch(`${VIACEP_BASE}/${digits}/json/`)
  if (!res.ok) throw new Error('Não foi possível consultar o CEP.')

  const data = await res.json()
  if (data.erro) return null

  const logradouro = (data.logradouro || '').trim()
  const bairro = (data.bairro || '').trim()
  const rua = bairro && logradouro ? `${logradouro}, ${bairro}` : logradouro || bairro

  return {
    rua,
    cidade: (data.localidade || '').trim(),
    estado: (data.uf || '').trim().toUpperCase(),
    bairro,
  }
}
