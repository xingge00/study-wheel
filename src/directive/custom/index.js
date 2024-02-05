export const installDirectives = function (app) {
  const directives = import.meta.glob('./*.js')

  Object.entries(directives).forEach(async ([key, file]) => {
    const direName = getDireName(key)
    if (!direName) return
    const module = await file()
    // console.log(`指令${direName}已注册`)
    app.directive(direName, module.default)
  })
}

// 获取指令名
function getDireName(str) {
  const reg = /.\/(.+?).js/
  const matchArr = str.match(reg)
  if (!matchArr) return false

  return matchArr[1]
}
