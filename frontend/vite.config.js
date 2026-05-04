import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': 'https://techdome.onrender.com:3600',
      '/users': 'https://techdome.onrender.com:3600',
      '/dash': 'https://techdome.onrender.com:3600',
    }
  }
})
