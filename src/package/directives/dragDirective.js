
const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent(`on${event}`, handler)
      }
    }
  }
})()

const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent(`on${event}`, handler)
      }
    }
  }
})()

const emitEvent = (el, vnode, eventName) => {
  if (vnode.componentInstance) {
    // Vue组建
    vnode.componentInstance.$emit(eventName)
  } else {
    // 原生html组件
    const evx = new CustomEvent(eventName)
    el.dispatchEvent(evx)
  }
}

function pxToVh(px) {
  return px * 100 / window.innerHeight
}

function setDomStyle(el, styleOpt, isAppend = true) {
  let shouleAddCss

  if (typeof styleOpt === 'string') {
    styleOpt = getStyles(styleOpt)// 格式化为对象
  }

  if (typeof styleOpt === 'object') {
    shouleAddCss = objToCss(isAppend ? { ...getStyles(el), ...styleOpt } : styleOpt)
  }

  if (!shouleAddCss) return false

  // 插入css
  el.style.cssText = shouleAddCss
  return true
}

function objToCss(obj) {
  if (typeof obj !== 'object') return ''
  return Object.keys(obj).reduce((acc, cur) => `${acc}${cur}:${obj[cur]};`, '')
}

function getStyles(elOrCss) {
  const res = {}
  let cssText = elOrCss
  if (elOrCss instanceof HTMLElement) {
    cssText = elOrCss.style.cssText
  }

  let startIdx = 0
  let key = ''
  for (let i = 0; i < cssText.length; i++) {
    if (cssText[i] === ':') {
      key = cssText.slice(startIdx, i)
      startIdx = i + 1
    }
    if (cssText[i] === ';') {
      Object.assign(res, { [key]: cssText.slice(startIdx, i) })
      key = ''
      startIdx = i + 1
    }
  }
  if (key) { // 处理最后一个css没有分号的情况
    Object.assign(res, { [key]: cssText.slice(startIdx) })
  }
  return res
}

/** 格式化选项参数 */
function formatOptoin(option) {
  const { bottomBarHeightNumber, topBarHeightNumber, positionType } = option
  option.bottomBarHeightNumber = bottomBarHeightNumber ? parseInt(bottomBarHeightNumber) : 0
  option.topBarHeightNumber = topBarHeightNumber ? parseInt(topBarHeightNumber) : 10
  option.positionType = positionType === 'relative' ? 'relative' : 'fixed'
  return option
}

function addContainer(el, containerEl) {
  const parentNode = el.parentNode
  parentNode.removeChild(el)
  containerEl.appendChild(el)
  parentNode.appendChild(containerEl)
}

function getElementMaxHeight(el) {
  return Math.max(el.clientHeight, Array.from(el.children).reduce((acc, cur) => acc + cur.clientHeight, 0))
}

function addTransition(el, timer) {
  el.style.transition = `all ${timer / 1000}s`
  setTimeout(() => {
    el.style.transition = ''
  }, timer)
}

// 给元素或者组件暴露事件 refs[component].event调用
function addEvents(el, vnode, bottomBarHeightNumber, topBarHeightNumber) {
  const component = vnode.componentInstance || el

  // 全屏开关
  component.togglefullScreen = (isToFull) => {
    el.style.transition = 'all .5s'
    addTransition(el, 500)
    if (isToFull) {
      setDomStyle(el, {
        top: `calc(-100vh + ${topBarHeightNumber}px + ${bottomBarHeightNumber}px)`,
        height: `calc(100vh - ${topBarHeightNumber}px)`,
      }, true)
    } else {
      setDomStyle(el, {
        top: '0',
        height: `${bottomBarHeightNumber}px`,
      }, true)
    }
  }
  // 半屏
  component.halfScreen = () => {
    addTransition(el, 500)
    setDomStyle(el, {
      top: `calc(-50vh + ${topBarHeightNumber}px + ${bottomBarHeightNumber}px)`,
      height: `calc(50vh - ${topBarHeightNumber}px)`,
    }, true)
  }
}

/**
 * 可拖动面板指令
 * 需要将父容器设置成relative
 * binding.value = {
 *  bottomBarHeightNumber,
 *  topBarHeightNumber
 *  positionType:relative|fixed (fixed是基于屏幕实现拖动，relative基于父容器实现拖动)
 * }
 */
const DragDirective = {
  mounted(el, binding, vnode) {
    const { bottomBarHeightNumber, topBarHeightNumber, positionType } = formatOptoin(binding.value)
    // 创建父容器
    const containerEl = document.createElement('div')
    setDomStyle(containerEl, {
      'height': `${bottomBarHeightNumber}px`,
      'width': '100%',
      'position': positionType,
      'z-index': '1100',
      'bottom': 0,
    })
    // 挂载父容器
    addContainer(el, containerEl)

    setDomStyle(el, { position: 'absolute', height: bottomBarHeightNumber }, true)

    // 创建隐藏的拖动元素
    const _dragTag = document.createElement('div')
    setDomStyle(_dragTag, {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '5px',
      background: 'transparent',
      cursor: 'row-resize',
    }, false)

    let curTop = 0

    // 拖动更新处理
    const handleMousedown = () => {
      const minTop = topBarHeightNumber

      const MaxHeight = positionType === 'fixed' ? window.innerHeight : getElementMaxHeight(containerEl.parentNode)

      const MaxTop = MaxHeight - bottomBarHeightNumber
      const handleMove = (ev) => {
        ev.preventDefault()
        const { clientY } = ev
        curTop = clientY - MaxTop
        if (curTop > 0) {
          emitEvent(el, vnode, 'notExpand')
          curTop = 0
        } else {
          emitEvent(el, vnode, 'isExpand')
        }
        if (curTop < minTop - MaxTop) {
          emitEvent(el, vnode, 'isFullScreen')
          curTop = minTop - MaxTop
        }

        setDomStyle(el, {
          top: `${pxToVh(curTop)}vh`, // 转为vh避免页面高度变化时直接错位 该方法还不太完善
          height: `${pxToVh(Math.abs(bottomBarHeightNumber - curTop))}vh`,
        }, true)
      }

      const handleUp = () => {
        off(document, 'mousemove', handleMove)
        off(document, 'mouseup', handleUp)
      }
      on(document, 'mousemove', handleMove)
      on(document, 'mouseup', handleUp)
    }

    el.handleMousedown = handleMousedown
    // 监听拖动
    on(_dragTag, 'mousedown', el.handleMousedown)

    // 插入隐藏的拖动元素
    el.appendChild(_dragTag)

    addEvents(el, vnode, bottomBarHeightNumber, topBarHeightNumber) // 给组件添加功能事件
  },
  updated(el, binding, vnode) {
    // TODO 选项发生变化时重新初始化
    console.log('componentUpdated', el, binding, vnode)
  },
  unmounted(el, binding, vnode) {
    off(el, 'mousedown', el.handleMousedown)
    console.log(binding, vnode)
  },
}

export { DragDirective }
