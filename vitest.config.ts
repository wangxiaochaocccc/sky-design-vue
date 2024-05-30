///  <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath:'./tsconfig.build.json'
    })
  ],
  //@ts-ignore
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
