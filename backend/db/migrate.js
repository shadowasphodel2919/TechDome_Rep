/**
 * SkillOrbit — Neon PostgreSQL Migration
 * Run once: `npm run db:migrate`
 * Creates the users table if it doesn't already exist.
 */
require('dotenv').config({ override: true })
const { neon } = require('@neondatabase/serverless')

const run = async () => {
    const sql = neon(process.env.DATABASE_URL)

    console.log('🚀 Running SkillOrbit migrations...')

    await sql`
        CREATE TABLE IF NOT EXISTS users (
            id          SERIAL PRIMARY KEY,
            username    VARCHAR(50)  UNIQUE NOT NULL,
            email       VARCHAR(150) UNIQUE NOT NULL,
            password    TEXT         NOT NULL,
            mobile      VARCHAR(15)  NOT NULL,
            fields      TEXT[]       NOT NULL DEFAULT '{}',
            created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
        )
    `
    console.log('✅ Table "users" is ready.')
    process.exit(0)
}

run().catch(err => {
    console.error('❌ Migration failed:', err.message)
    process.exit(1)
})
