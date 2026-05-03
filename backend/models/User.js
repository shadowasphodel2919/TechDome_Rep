/**
 * User model — Neon PostgreSQL
 * Provides the same interface as the old Mongoose model but uses SQL.
 */
const { getDb } = require('../config/dbConn')

const User = {
    /**
     * Find a user by username (case-insensitive).
     */
    findByUsername: async (username) => {
        const sql = getDb()
        const rows = await sql`
            SELECT * FROM users
            WHERE LOWER(username) = LOWER(${username})
            LIMIT 1
        `
        return rows[0] || null
    },

    /**
     * Find a user by their primary key id.
     */
    findById: async (id) => {
        const sql = getDb()
        const rows = await sql`
            SELECT * FROM users WHERE id = ${id} LIMIT 1
        `
        return rows[0] || null
    },

    /**
     * Check if a username already exists.
     */
    existsByUsername: async (username) => {
        const sql = getDb()
        const rows = await sql`
            SELECT 1 FROM users
            WHERE LOWER(username) = LOWER(${username})
            LIMIT 1
        `
        return rows.length > 0
    },

    /**
     * Create a new user. Returns the created user row.
     */
    create: async ({ username, email, password, mobile, fields }) => {
        const sql = getDb()
        const rows = await sql`
            INSERT INTO users (username, email, password, mobile, fields)
            VALUES (${username}, ${email}, ${password}, ${mobile}, ${fields})
            RETURNING *
        `
        return rows[0]
    },

    /**
     * Return all users (without passwords).
     */
    findAll: async () => {
        const sql = getDb()
        return await sql`
            SELECT id, username, email, mobile, fields, created_at
            FROM users
            ORDER BY created_at DESC
        `
    },
}

module.exports = User