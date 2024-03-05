import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from 'vite-plugin-dts'
import { fileURLToPath } from "node:url";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    vueJsx(),
    dts({
      tsconfigPath:'./tsconfig.build.json'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TJDesignVue',
      fileName:'tj-design-vue'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue:'Vue'
        }
      }
    }
  }
})
