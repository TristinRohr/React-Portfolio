import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages hosts this project below /React-Portfolio/, while Netlify hosts at the domain root.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/React-Portfolio/' : '/',
  plugins: [react()],
})
