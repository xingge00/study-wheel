import { markRaw } from 'vue'
import Start from './nodeComp/Start.vue'
import End from './nodeComp/End.vue'
import Error from './nodeComp/Error.vue'
import If from './nodeComp/If.vue'
import Switch from './nodeComp/Switch.vue'
import Feat from './nodeComp/Feat.vue'

const MIN_BRANCH_COUNT = 2 // 有分支节点的最少分支数量
/** 标准化分支数据 */
const formatBranch = (branchList, needCount = MIN_BRANCH_COUNT) => {
  const temp = branchList?.filter(Array.isArray)
  if (!temp?.length) return new Array(needCount).fill(0).map(_ => [])
  // needCount为零 无限制数量
  if (!needCount) return temp.slice()
  if (temp.length >= needCount) return temp.slice(0, needCount)
  else return temp.slice().concat(new Array(needCount - temp.length).fill(0).map(_ => []))
}

const nodeList = [
  {
    type: 'start',
    component: markRaw(Start),
    generateNode: () => generateNode({ type: 'start' }),
  },
  {
    type: 'end',
    component: markRaw(End),
    generateNode: () => generateNode({ type: 'end' }),
  },
  {
    type: 'if',
    component: markRaw(If),
    generateNode: (parentNode = null, branchIdx = null) => generateNode({ type: 'if' }, parentNode, branchIdx),
  },
  {
    type: 'switch',
    component: markRaw(Switch),
    generateNode: (parentNode = null, branchIdx = null) => generateNode({ type: 'switch' }, parentNode, branchIdx),
  },
  {
    type: 'feat',
    component: markRaw(Feat),
    generateNode: (parentNode = null, branchIdx = null) => generateNode({ type: 'feat' }, parentNode, branchIdx),
  },

]

export class BaseNode {
  static id = 0
  constructor(type, other) {
    const { parentNode = null, branchIdx = null } = other || {}
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
      writable: true,
      value: parentNode,
    })
    this.initBranchList(this, [[], []], null)
  }

  initBranchList(parentNode, branchList, branchIdx) {
    const { type } = this
    if (type === 'if') {
      let temp = formatBranch(branchList, MIN_BRANCH_COUNT)
      // 分支数组注入父节点信息
      temp.parentNode = parentNode
      Object.defineProperty(this, 'branchList', {
        configurable: true,
        get: () => temp,
        set(val) {
          if (val.length !== MIN_BRANCH_COUNT) throw new Error(`分支数量必须为${MIN_BRANCH_COUNT}`)
          temp = val
        },
      })
      Object.defineProperty(this, 'branchIdx', {
        configurable: true,
        value: branchIdx,
      })
    }
    if (type === 'switch') {
      let temp = formatBranch(branchList, 0)
      // 分支数组注入父节点信息
      temp.parentNode = this
      Object.defineProperty(this, 'branchList', {
        configurable: true,
        get: () => temp,
        set(val) {
          if (val.length < MIN_BRANCH_COUNT) throw new Error(`分支数量至少为${MIN_BRANCH_COUNT}`)
          temp = val
        },
      })
      Object.defineProperty(this, 'branchIdx', {
        configurable: true,
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

function generateNode(node, parentNode = null, branchIdx = null) {
  const newNode = new BaseNode(node.type, { parentNode, branchIdx })
  newNode.initBranchList(newNode, (node.branchList || [[], []]).map((branch, idx) => generateNodeList(branch, newNode, idx)))
  return newNode
}

export function generateNodeList(nodeList, parentNode = null, branchIdx = null) {
  return nodeList.map((node) => {
    return generateNode(node, parentNode, branchIdx)
  })
}
export default nodeList
