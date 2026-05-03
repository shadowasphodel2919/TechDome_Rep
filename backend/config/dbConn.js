const { neon } = require('@neondatabase/serverless')

let sql

const connectDB = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not set in environment variables.')
    }
    try {
        sql = neon(process.env.DATABASE_URL)
        // Verify connection with a lightweight ping
        await sql`SELECT 1`
        console.log('✅ Connected to Neon PostgreSQL')
    } catch (err) {
        console.error('❌ Neon connection error:', err.message)
        throw err
    }
}

const getDb = () => {
    if (!sql) throw new Error('Database not initialized. Call connectDB() first.')
    return sql
}

module.exports = { connectDB, getDb }