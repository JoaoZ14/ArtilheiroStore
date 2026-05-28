/**
 * Upload direto para o Supabase Storage via REST API.
 * Usa VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY do .env.local
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const BUCKET = 'images'

export async function uploadToStorage(file, folder = 'produtos') {
  if (!SUPABASE_URL || !ANON_KEY) {
    throw new Error('VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são necessários para upload.')
  }

  const ext = file.name.split('.').pop()
  const filename = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${filename}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ANON_KEY}`,
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'true',
    },
    body: file,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `Erro no upload: ${res.status}`)
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${filename}`
}
