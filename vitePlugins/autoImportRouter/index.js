import path from 'path'
import fs from 'fs'

const autoImportKeyWord = 'autoImport'

const readView = async () => {
  const rootPath = process.cwd()
  const targetPath = path.normalize(`${rootPath}/src/views`)

  // 获取页面目录
  const dirList = fs.readdirSync(targetPath)
  return dirList.reduce((acc, curDir) => {
    let pageInfo
    // 判断路径是文件
    if (curDir.includes('.')) {
      if (curDir.endsWith('.vue')) {
        pageInfo = { name: curDir.slice(0, curDir.length - 4) }
      }
    }
    // 判断路径是目并且过滤404页面
    else if (curDir !== '404') {
      const realPath = path.normalize(`${targetPath}/${curDir}`)
      const curInfo = fs.readdirSync(realPath)
      // 如果没有当前目录下没有index.vue则不生成路由
      if (!Array.isArray(curInfo) || !curInfo.includes('index.vue')) {
        return acc
      }
      pageInfo = { name: curDir }
      // 如果当前目录下有desc.json则加载配置
      if (curInfo.includes('desc.json')) {
        const jsonPath = path.normalize(`${realPath}/desc.json`)
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
const loadRouter = async () => {
  const pageInfoList = await readView()
  const routerList = pageInfoList
  // 按sort配置排序
    .sort((a, b) => {
      const num1 = parseInt(a.sort)
      const num2 = parseInt(b.sort)
      const num1IsNaN = Object.is(num1, NaN)
      const num2IsNaN = Object.is(num2, NaN)
      if (num1IsNaN && num2IsNaN) return -1
      if (num1IsNaN || num2IsNaN) return num1IsNaN ? 1 : -1
      return num1 - num2
    })
  // 组装路由信息
    .map(info => `
    {
      path: '/${info.name}',
      name: '${info.name}',
      menuName: ${info.menuName ? `'${info.menuName}'` : info.menuName},
      desc: ${info.desc ? `'${info.desc}'` : info.desc},
      component: () => import('@/views/${info.name}')
    },`).join('')

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
      if (id === autoImportKeyWord) return loadRouter(id)
      return null
    },
  }
}

export default autoImportRouter
export {
  autoImportRouter,
}
