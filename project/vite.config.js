import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@xenova/transformers', 'buffer']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          transformers: ['@xenova/transformers']
        }
      }
    }
  }
})