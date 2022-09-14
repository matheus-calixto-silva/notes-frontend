import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/login": "http://localhost:3001/",
      "/api/notes": "http://localhost:3001/",
    },
  },
  plugins: [react()]
})
