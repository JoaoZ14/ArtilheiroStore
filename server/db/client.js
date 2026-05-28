import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

const isSupabase = process.env.DATABASE_URL?.includes('supabase.co')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isSupabase ? { rejectUnauthorized: false } : false,
})

pool.on('error', (err) => {
  console.error('[DB] Erro inesperado no pool:', err.message)
})

export default pool
