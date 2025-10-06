import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Muy importante para GitHub Pages (nombre EXACTO del repo)
export default defineConfig({
  base: '/lexviaria-checkpoint-02/',
  plugins: [react()],
})
