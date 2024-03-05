import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from 'vite-plugin-dts'
import { fileURLToPath } from "node:url";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir:'dist/types'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir:'dist/es',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TJDesignVue',
      fileName: 'tj-design-vue',
      formats:['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    },
  }
})
