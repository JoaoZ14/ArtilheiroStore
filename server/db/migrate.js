import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import pool from './client.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function migrate() {
  const migrations = ['001_init.sql', '002_feedbacks.sql', '003_categories_collections.sql']
  const client = await pool.connect()
  try {
    for (const file of migrations) {
      const sql = readFileSync(join(__dirname, 'migrations', file), 'utf8')
      await client.query(sql)
      console.log(`[Migrate] ${file} executado com sucesso.`)
    }
  } finally {
    client.release()
    await pool.end()
  }
}

migrate().catch((err) => {
  console.error('[Migrate] Erro:', err.message)
  process.exit(1)
})
