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
          // The phone remotes' libraries (Guess Who's and the decks') ride in
          // their own chunk, fetched only by the Guess Who route or a deck's
          // "Phone remote" button. Left in `vendor`, every lesson would
          // download the Supabase client on its first load.
          if (/node_modules[\\/](@supabase|uqr|tslib)[\\/]/.test(id)) return 'remote-vendor'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
