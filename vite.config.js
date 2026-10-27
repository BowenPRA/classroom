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
          // Guess Who's libraries ride with the game. Left in `vendor`, every
          // lesson would download the Supabase client on its first load.
          if (/node_modules[\\/](@supabase|uqr|tslib)[\\/]/.test(id)) return 'guess-who-vendor'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
