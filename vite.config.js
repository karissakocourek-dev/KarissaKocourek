import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from https://karissakocourek-dev.github.io/KarissaKocourek/
// using the committed docs/ folder on the main branch.
export default defineConfig({
  plugins: [react()],
  base: '/KarissaKocourek/',
  build: {
    outDir: 'docs',
  },
})
