import { createApp } from 'vue'
import CommonSelect from './CommonSelect.vue'
/** 公用下拉框实例 */
let Instance
let vm
let $container
/** 全部绑定公用下拉框的虚拟数组实例的renderId */
const consumeInstanceList = []

const getCommonSelect = (renderId) => {
  // console.log(renderId)
  // 收集正在使用公用下拉框的renderId
  consumeInstanceList.push(renderId)
  if (Instance) return Instance

  $container = document.createElement('div')

  vm = createApp(CommonSelect)

  Instance = vm.mount($container)

  return Instance
}

const destory = () => {
  vm.unmount()
  vm = undefined
  Instance = undefined
  $container = undefined
}

/** 解除虚拟组件和公用下拉框的绑定 */
const unBind = (renderId) => {
  const idx = consumeInstanceList.findIndex(i => i === renderId)
  if (idx === -1) return
  consumeInstanceList.splice(idx, 1)
  // 如果没有实例使用公用下拉框销毁公用下拉框
  if (consumeInstanceList.length === 0) destory()
}

export { getCommonSelect, unBind }
