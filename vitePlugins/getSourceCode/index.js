import path from 'path'
import fs from 'fs'

const keywordPrefix = '@@@'

const loadSourceCode = async (realPath) => {
  const rootPath = process.cwd()
  let targetPath = path.normalize(`${rootPath}${realPath}`)
  if (targetPath.includes('.vueshow')) {
    targetPath = targetPath.replace('.vueshow', '.vue')
  }
  let sourceCode
  try {
    sourceCode = fs.readFileSync(targetPath, 'utf-8')
  } catch (error) {
    console.error(`源码文件读取错误，报错路径：${targetPath}`)
  }

  const encoder = new TextEncoder()
  const binary = encoder.encode(sourceCode)

  const str = `
  const decoder = new TextDecoder();
  let sourceCode = decoder.decode(new Uint8Array([${binary}]));
  export { sourceCode }
  export default sourceCode
`
  return str
}

const getSourceCode = () => {
  return {
    name: 'vite-plugin-get-source-code',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith(keywordPrefix)) {
        return id // 返回id表明命中，vite不再询问其他插件处理该id请求
      }
      return null // 返回null表明是其他id要继续处理
    },
    load(id) {
      if (id.startsWith(keywordPrefix)) {
        console.log('idididid', id)

        return loadSourceCode(id.slice(keywordPrefix.length))
      }
      return null
    },
  }
}

export default getSourceCode
export {
  getSourceCode,
}
