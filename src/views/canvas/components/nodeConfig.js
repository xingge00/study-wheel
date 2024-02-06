import { markRaw } from 'vue'
import Start from './nodeComp/Start.vue'
import End from './nodeComp/End.vue'
import Error from './nodeComp/Error.vue'
import If from './nodeComp/If.vue'
import Switch from './nodeComp/Switch.vue'
import Feat from './nodeComp/Feat.vue'

const nodeList = [
  {
    type: 'start',
    component: markRaw(Start),
    generateNode: () => new BaseNode('start'),
  },
  {
    type: 'end',
    component: markRaw(End),
    generateNode: () => new BaseNode('end'),
  },
  {
    type: 'if',
    component: markRaw(If),
    generateNode: () => new BaseNode('if'),
  },
  {
    type: 'switch',
    component: markRaw(Switch),
    generateNode: (branchList = [[], []]) => new BaseNode('switch', { branchList }),
  },
  {
    type: 'feat',
    component: markRaw(Feat),
    generateNode: () => new BaseNode('feat'),
  },

]

export const MIN_BRANCH_COUNT = 2 // 节点的最少分支数量
/** 标准化分支数据 */
const formatBranch = (branchList, needCount = MIN_BRANCH_COUNT) => {
  const temp = branchList?.filter(Array.isArray)
  if (!temp?.length) return new Array(needCount).fill(0).map(_ => [])
  // needCount为零 无限制数量
  if (!needCount) return temp.slice()
  if (temp.length >= needCount) return temp.slice(0, needCount)
  else return temp.slice().concat(new Array(needCount - temp.length).fill(0).map(_ => []))
}

export class BaseNode {
  static id = 0
  constructor(type, other) {
    const { branchList = [], parentNode = null, branchIdx = null } = other || {}
    Object.defineProperty(this, 'id', {
      configurable: false,
      writable: false,
      value: ++BaseNode.id,
    })
    Object.defineProperty(this, 'type', {
      configurable: false,
      writable: false,
      value: nodeList.some(node => node.type === type) ? type : 'error',
    })
    Object.defineProperty(this, 'parentNode', {
      configurable: false,
      value: parentNode,
    })
    if (type === 'if') {
      let temp = formatBranch(branchList)
      Object.defineProperty(this, 'branchList', {
        configurable: false,
        get: () => temp,
        set(val) {
          if (val.length !== MIN_BRANCH_COUNT) throw new Error(`分支数量必须为${MIN_BRANCH_COUNT}`)
          console.log('val.length', val.length)
          temp = val
        },
      })
      Object.defineProperty(this, 'branchIdx', {
        configurable: false,
        value: branchIdx,
      })
    }
    if (type === 'switch') {
      let temp = formatBranch(branchList, 0)
      Object.defineProperty(this, 'branchList', {
        configurable: false,
        get: () => temp,
        set(val) {
          if (val.length < MIN_BRANCH_COUNT) throw new Error(`分支数量至少为${MIN_BRANCH_COUNT}`)
          temp = val
        },
      })
      Object.defineProperty(this, 'branchIdx', {
        configurable: false,
        value: branchIdx,
      })
    }
  }

  static copyBranchList(branchList) {
    return branchList?.map((branch) => {
      return branch?.map(node => node.copySelf()) || []
    }) || []
  }

  copySelf() {
    return new BaseNode(this.type, { branchList: BaseNode.copyBranchList(this.branchList) })
  }

  toString() {
    return `{${Object.getOwnPropertyNames(this).reduce((acc, key) => {
      let result = `${acc},${key}:`
      if (Array.isArray(this[key])) {
        result += `[${this[key].toString()}]`
      } else if (typeof this[key] === 'number') {
        result += `${this[key].toString()}`
      } else if (typeof this[key] === 'string') {
        result += `"${this[key].toString()}"`
      }
      return result
    }, '').slice(1)}}`
  }
}

export const ErrorItem = {
  type: 'error',
  component: markRaw(Error),
  generateNode: () => new BaseNode('error'),
}

export const getParentNode = (nodeList, target, parentNode = null) => {
  for (let idx1 in nodeList) {
    idx1 = idx1 - 0
    const node = nodeList[idx1]
    // target为节点
    if (node === target) return {
      nodeList,
      parentNode,
      nodeIdx: idx1,
      branchIdx: null,
    }
    for (let idx2 in (node.branchList || [])) {
      idx2 = idx2 - 0
      const brach = node.branchList[idx2]
      // target为分支
      if (brach === target) return {
        nodeList: brach,
        parentNode: node,
        branchIdx: idx2,
        nodeIdx: null,
      }
      const res = getParentNode(brach, target, node)
      if (res) return res
    }
  }
  return null
}
export default nodeList
