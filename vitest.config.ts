///  <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
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
