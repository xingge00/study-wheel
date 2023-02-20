import path from 'path'
import fs from 'fs'

const autoImportKeyWord = 'autoImport'

const readView = async () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}\\src\\views`)

  // 获取页面目录
  const dirList = fs.readdirSync(targetPath)
  return dirList.reduce((acc, curDir) => {
    let pageInfo
    if (curDir.includes('.')) {
      if (curDir.endsWith('.vue')) {
        pageInfo = { name: curDir.slice(0, curDir.length - 4) }
      }
    } else if (curDir !== '404') {
      const realPath = path.normalize(`${targetPath}\\${curDir}`)
      const curInfo = fs.readdirSync(realPath)
      pageInfo = { name: curDir }
      if (Array.isArray(curInfo) && curInfo.includes('desc.json')) {
        const jsonPath = `${realPath}\\desc.json`
        try {
          Object.assign(pageInfo, JSON.parse(fs.readFileSync(jsonPath, 'utf-8')))
        } catch (error) {
          console.error('读取页面json配置出错')
          console.error(`报错路径：${jsonPath}`)
        }
      }
    }
    if (pageInfo) {
      acc.push(pageInfo)
    }
    return acc
  }, [])
}
const loadRouter = async (id) => {
  if (id !== autoImportKeyWord) return null

  const pageInfoList = await readView()
  const routerList = pageInfoList.map(info => `
    {
      path: '/${info.name}',
      name: '${info.name}',
      menuName: ${info.menuName ? `'${info.menuName}'` : info.menuName},
      desc: ${info.desc ? `'${info.desc}'` : info.desc},
      component: () => import('@/views/${info.name}')
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
