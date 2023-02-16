import path from 'path'
import fs from 'fs'
// const path = require('path')
const autoImportKeyWord = 'autoImport'

const readView = async () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}\\src\\views`)
  console.log(targetPath)

  fs.readdir(targetPath, (err, data) => {
    if (err) {
      console.log('出错')
    } else {
      console.log('读取目录成功！')
      console.log(data)
    }
  })
}
const loadRouter = async (id) => {
  if (id !== autoImportKeyWord) return null

  readView()

  const str = `
    const constantRoutes = [
      {
        path: '/',
        component: () => import('@/views/VirtualSelect/index.vue'),
      },
      {
        path: '/:path(.*)',
        component: () => import('@/views/404/index.vue'),
      },
    ]
    export default constantRoutes
  `
  return str
}

const autoImportRouter = () => {
  return {
    name: 'vite-plugin-auto-Import-router',
    enforce: 'pre',
    resolveId(id) {
      if (id === autoImportKeyWord) {
        return id // 返回id表明命中，vite不再询问其他插件处理该id请求
      }
      return null // 返回null表明是其他id要继续处理
    },
    load(id) {
      return loadRouter(id)
    },
  }
}

export default autoImportRouter
export {
  autoImportRouter,
}
