// 获取当前节点占用列数
export const getColCountByNode = (node) => {
  if (!node) return 0
  if (!(node?.branchList?.length)) return 1

  return node.branchList.reduce((acc, cur) =>
    acc + Math.max(...cur.map(i => getColCountByNode(i)), 1)
  , 0)
}

// 获取分支得列数
export const getColCountByBranch = (branch) => {
  if (!Array.isArray(branch)) return 1
  return Math.max(...branch.map(i => getColCountByNode(i)), 1)
}

export default {}
