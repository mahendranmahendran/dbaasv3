import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // Fixed port
    strictPort: true, // Don't try other ports
    headers: {
      'Content-Security-Policy': "style-src 'self' 'unsafe-inline'"
    }
  },
  build: {
    sourcemap: true
  },
  base: './'
})