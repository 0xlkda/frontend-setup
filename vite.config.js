import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SERVER_PATH = '../server/bundles'

const build = {
  emptyOutDir: true,
  outDir: `${SERVER_PATH}`,
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      login: resolve(__dirname, 'login.html'),
    }
  }
}

export default defineConfig({
  build,

  plugins: [
    react()
  ],

  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './') }
    ]
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
