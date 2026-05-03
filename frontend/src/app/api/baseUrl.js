/**
 * Base URL for all API requests.
 * - In development: empty string → Vite proxy forwards /auth /users /dash to localhost:3600
 * - In production: defaults to Render backend, or VITE_API_URL
 */
const BASE_URL = import.meta.env.PROD 
    ? (import.meta.env.VITE_API_URL || 'https://techdome.onrender.com') 
    : (import.meta.env.VITE_API_URL || '')

export default BASE_URL
