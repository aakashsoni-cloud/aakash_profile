import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'fs/promises': 'vite-compatible-fs-module', // Replace this with a custom implementation if needed
    },
  },
})
