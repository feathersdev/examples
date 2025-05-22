import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
