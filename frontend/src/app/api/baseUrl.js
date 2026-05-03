/**
 * Base URL for all API requests.
 * - In development: empty string → Vite proxy forwards /auth /users /dash to localhost:3600
 * - In production: set VITE_API_URL in Vercel environment variables to your backend URL
 *   e.g. https://skillorbit-backend.vercel.app
 */
const BASE_URL = import.meta.env.VITE_API_URL || ''

export default BASE_URL
