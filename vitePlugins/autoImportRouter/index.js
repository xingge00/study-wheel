import path from 'path'
import fs from 'fs'

const autoImportKeyWord = 'autoImport'

const readView = async () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}\\src\\views`)

  const dirList = fs.readdirSync(targetPath)

  return dirList
    .filter(name => !(name.includes('.') && !name.endsWith('.vue')) && name !== '404')
    .map(name => name.endsWith('.vue') ? name.slice(0, name.length - 4) : name)
}
const loadRouter = async (id) => {
  if (id !== autoImportKeyWord) return null

  const dirList = await readView()
  const routerList = dirList.map(dir => `
    {
      path: '/${dir}',
      name: '${dir}',
      component: () => import('@/views/${dir}')
    },
  `).join('')

  const str = `
    const constantRoutes = [
      ${routerList}
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
