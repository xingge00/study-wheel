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
    generateNode: branchList => new BaseNode('switch', { branchList }),
  },
  {
    type: 'feat',
    component: markRaw(Feat),
    generateNode: () => new BaseNode('feat'),
  },

]
export class BaseNode {
  static id = 0
  constructor(type, other = { branchList: [] }) {
    const { branchList } = other
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
      let temp = [[], []]
      Object.defineProperty(this, 'branchList', {
        configurable: false,
        get: () => temp,
        set(val) {
          if (val.length !== 2) throw new Error('分支数量必须为2')
          temp = val
        },
      })
    }
    if (type === 'switch') {
      let temp = [[], []]
      Object.defineProperty(this, 'branchList', {
        configurable: false,
        get: () => temp,
        set(val) {
          if (val.length < 2) throw new Error('分支数量至少为2')
          temp = val
        },
      })
    }
  }

  toString() {
    // return Object.entries(this).map(([key, val]) => `${key}: ${val}`)
    // return this
    return 'BaseNode'
  }
}

export const ErrorItem = {
  type: 'error',
  component: markRaw(Error),
  generateNode: () => new BaseNode('error'),
}
export default nodeList
