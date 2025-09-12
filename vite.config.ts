import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
<<<<<<< HEAD
  build: {
    outDir: 'build',
  },
=======
  base: '/ARK-Shipping/',
>>>>>>> f17bbe4 (Add GitHub Pages deployment configuration)
  server: {
    watch: {
      usePolling: true // Set to true if file changes aren’t detected (e.g., in WSL or network drives)
    }
  }

})
