const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    process.env.APP_URL || 'https://techdome.vercel.app',
    'https://techdom.onrender.com',
    'https://techdome.vercel.app'
]

module.exports = allowedOrigins