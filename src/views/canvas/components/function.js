export const generateCode = (nodeList, deep = 0) => {
  console.log('nodeList', nodeList)
  // 缩进
  const indent = ''.padStart(deep * 2, '\0')
  const indentPlus = `\0\0${indent}`

  const doMap = {
    start: () => `${indent}\n`,
    end: () => `${indent}\n`,
    if: (node) => {
      const { branchList } = node
      const { condition, branchInfoList } = node.nodeInfo
      const trueIdx = branchInfoList.findIndex(i => i.type)
      const falseIdx = branchInfoList.findIndex(i => !i.type)
      return `${indent}if(${condition}){\n${
        generateCode(branchList[trueIdx], deep + 1)
      }${indent}}else{\n${
        generateCode(branchList[falseIdx], deep + 1)
      }${indent}}\n`
    },
    switch: (node) => {
      const { branchList } = node
      const { condition, branchInfoList } = node.nodeInfo
      return `${indent}switch(${condition}){\n${
        branchInfoList.map((branch, idx) =>
          `${indentPlus}case ${branch.condition}:\n${generateCode(branchList[idx], deep + 1) || '\n'}${indentPlus}break;\n`).join('\n')
        }${indent}}\n`
    },
    feat: () => {
      return `${indent}feat\n`
    },
  }

  const result = nodeList.reduce((acc, cur) => {
    return acc + (doMap[cur.type]?.(cur) || '')
  }, '')
  return result
}
