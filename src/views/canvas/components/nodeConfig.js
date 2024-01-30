import { markRaw } from 'vue'
import Start from './nodeComp/Start.vue'
import If from './nodeComp/If.vue'
import Switch from './nodeComp/Switch.vue'
import End from './nodeComp/End.vue'
import Error from './nodeComp/Error.vue'

export const ErrorItem = {
  type: 'error',
  component: markRaw(Error),
}

export default [
  {
    type: 'start',
    component: markRaw(Start),
  },
  {
    type: 'if',
    component: markRaw(If),
  },
  {
    type: 'switch',
    component: markRaw(Switch),
  },
  {
    type: 'end',
    component: markRaw(End),
  },
]
