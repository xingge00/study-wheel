/**
 * fixTableHeight
 * 动态根据页面高度设置table的高度
 */
export default {
  mounted(el, { value }) {
    el.windowChange = (extraHeight) => {
      el.timer && clearTimeout(el.timer)
      el.timer = setTimeout(() => {
        el.style.transition = 'height 0.3s'
        el.style.height = `${window.innerHeight - el.getBoundingClientRect().top - extraHeight}px`
        setTimeout(() => {
          el.style.transition = ''
        }, 334)
      }, 300)
    }
    // 14为默认全局上下内边距,可自行修改
    const extraHeight = value ?? 14
    el.windowChange(extraHeight)
    window.addEventListener('resize', el.windowChange)
  },
  updated(el, { value }) {
    const extraHeight = value ?? 14
    el.windowChange(extraHeight)
  },
  beforeUnmount(el) {
    window.removeEventListener('resize', el.windowChange)
    clearTimeout(el.timer)
    delete el.timer
    delete el.windowChange
  },
}
