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

const genContext = () => {
  return {
    code: '',
  }
}

const genNodeInfo = ({ type, branchList }) => {
  const infoMap = {
    if: {
      condition: '', // 条件表达式
      branchInfoList: [ // 分支信息
        { branchName: '分支1', type: true },
        { branchName: '分支2', type: false },
      ],
    },
    switch: {
      // 分支信息
      condition: '',
      branchInfoList: (branchList || []).map((i, idx) =>
        ({ branchName: `分支${idx}`, condition: '' }),
      ),

    },
  }

  const result = infoMap[type] || {}
  result.type = type
  result.nodeName = type

  return result
}

export class BaseNode {
  static id = 0
  constructor(type, other) {
    const {
      branchList = [],
      nodeInfo = {},
    } = other || {}
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

    if (type === 'if') {
      const temp = formatBranch(branchList)
      Object.defineProperty(this, 'branchList', {
        configurable: false,
        get() {
          return new Proxy(temp, {
            get(target, key, receiver) {
              // todo 拿到splice方法做拦截限制分支数量 / 或者禁用splice
              return Reflect.get(target, key, receiver)
            },
            set(target, key, newValue, receiver) {
              if (['0', '1'].includes(key)) {
                return Reflect.set(target, key, newValue, receiver)
              } else {
                console.error(`分支数量必须为${MIN_BRANCH_COUNT}`)
                return false
              }
            },
          })
        },
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
    }

    const defaultNodeInfo = genNodeInfo(this)
    // 节点原来的值覆盖默认值
    Object.assign(defaultNodeInfo, nodeInfo)

    const proxy = new Proxy(defaultNodeInfo, {
      get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
      },
      set(target, key, newValue, receiver) {
        console.log('修改了', target, '的', key, '为', newValue)
        return Reflect.set(target, key, newValue, receiver)
      },
    })
    this.nodeInfo = proxy
  }

  static copyBranchList(branchList) {
    return branchList?.map((branch) => {
      return branch?.map(node => node.copySelf()) || []
    }) || []
  }

  copySelf() {
    return new BaseNode(this.type, {
      branchList: BaseNode.copyBranchList(this.branchList),
      nodeInfo: JSON.parse(JSON.stringify(this.nodeInfo)),
    })
  }

  static executeNode(node, params = [], context) {
    if (!context) context = genContext()
    const { type, branchList } = node

    let subRes
    if (type === 'if') {
      subRes = BaseNode.executeList(branchList[0], params)
    }

    if (type === 'switch') {
      // 暂时执行第一条分支
      subRes = BaseNode.executeList(branchList[0], params)
    }
    const doMap = {
      start: () => `start
      `,
      feat: () => `feat
      `,
      end: () => `end
      `,
      if: () => `if(){
        ${subRes.context.code}
        }
      `,
      switch: () => `switch(){
        ${subRes.context.code}
      }
      `,
    }

    context.code += doMap[type]()
    return {
      result: params,
      context,
    }
  }

  static executeList(nodeList, params = []) {
    const context = genContext()
    const result = nodeList.reduce((preParams, curNode) => {
      return BaseNode.executeNode(curNode, preParams, context).result
    }, params)
    return {
      result,
      context,
    }
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
      } else {
        result += `{${this[key].toString()}}`
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

const convert = (nodeList, target, parentNode = null) => {
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
      const res = convert(brach, target, node)
      if (res) return res
    }
  }
  return null
}

export const getParentNode = (target) => {
  const nodeList = window?.__nodeList?.value || []
  const activateNode = window?.__activateNode?.value || null
  return convert(nodeList || [], target || activateNode)
}
export default nodeList
