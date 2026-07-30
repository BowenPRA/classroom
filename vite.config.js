import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at https://<user>.github.io/classroom/
// If you rename the repo, change `base` to match (keep the leading + trailing slash).
export default defineConfig({
  plugins: [react()],
  base: '/classroom/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
