import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': 'http://localhost:3600',
      '/users': 'http://localhost:3600',
      '/dash': 'http://localhost:3600',
      '/health': 'http://localhost:3600',
    }
  }
})
