import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { autoImportRouter } from './vitePlugins/autoImportRouter'

export default defineConfig({
  plugins: [vue(), autoImportRouter()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    extensions: ['.vue', '.js', '.jsx'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/constant.scss";',
      },
    },
  },

})
