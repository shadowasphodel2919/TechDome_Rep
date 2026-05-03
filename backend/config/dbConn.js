const { neon } = require('@neondatabase/serverless')

let sql

const connectDB = () => {
    if (!process.env.DATABASE_URL) {
        console.warn('⚠️ DATABASE_URL is not set in environment variables.')
        return
    }
    sql = neon(process.env.DATABASE_URL)
    console.log('✅ Neon PostgreSQL client initialized')
}

const getDb = () => {
    if (!sql) {
        if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL missing')
        sql = neon(process.env.DATABASE_URL)
    }
    return sql
}

module.exports = { connectDB, getDb }