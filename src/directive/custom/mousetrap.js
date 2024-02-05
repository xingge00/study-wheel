import Mousetrap from 'mousetrap'

/**
 *
 * @param {HTMLElement} el - HTML原生组件
 * @param {String|String[]} value - 绑定的键盘事件
 * @param {Vue.VNode} vnode - Vue组件实例
 * @returns {void}
 */
const bindMousetrap = (el, value, vnode) => {
  if (!value?.length) return
  let bindList = value
  if (!Array.isArray(value)) bindList = [value]

  // 单独指令绑定
  const singleBind = keyWord => Mousetrap.bind(keyWord, (ev) => {
    if (vnode.componentInstance) { // Vue组建
      vnode.componentInstance.$emit(keyWord, ev)
    } else {
      const evx = new CustomEvent(keyWord, ev) // 原生html组件
      el.dispatchEvent(evx)
    }
    // 阻止默认事件
    return false
  })
  bindList.forEach(singleBind)
}
const unbindMousetrap = (value) => {
  if (!value?.length) return
  let bindList = value
  if (!Array.isArray(value)) bindList = [value]
  bindList.forEach(keyWord => Mousetrap.unbind(keyWord))
}
export default {
  mounted(el, { value }, vnode) {
    bindMousetrap(el, value, vnode)
  },
  updated(el, { value, oldValue }, vnode) {
    unbindMousetrap(oldValue)
    bindMousetrap(el, value, vnode)
  },
  beforeUnmount(el, { value }) {
    unbindMousetrap(value)
  },
}
