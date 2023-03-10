import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ElementPlus from 'unplugin-element-plus/vite'
import { autoImportRouter } from './vitePlugins/autoImportRouter'// 自定引入注册路由
import { getSourceCode } from './vitePlugins/getSourceCode'

export default defineConfig({
  base: '/study-wheel/', // github page 部署需要资源前缀
  plugins: [
    vue(),
    autoImportRouter(),
    getSourceCode(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    ElementPlus({
      importStyle: 'sass',
      useSource: true,
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
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
  server: {
    port: 8848,
    open: true,
    outDir: 'dist',
  },

})
