import { computed, onMounted, ref } from 'vue'

export default function () {
  // 拖动距离和节点移动比率
  const DRAG_RATIO = 1
  let tempPos = [0, 0]
  const positionDist = ref([0, 0])
  const calcDist = ref([0, 0])
  const handleMouseDown = (e) => {
  // 排除节点拖动和分支拖动的情况(即：拖动初始位置在canvas-mian，或者最外层的render-list-wrapper)
    if (![...e.target.classList].includes('canvas-main')
    && !([...e.target.classList].includes('render-list-wrapper') && e.target.attributes.draggable?.value !== 'true')
    ) return

    e.target.style.cursor = 'grab'
    console.log('e.target.style.cursor', e.target.style.cursor)
    tempPos = [e.screenX, e.screenY]

    document.onmousemove = function (e) { // 鼠标移动的时候计算元素的位置
      e.target.style.cursor = 'grabbing'
      console.log('onmousemove')

      calcDist.value = [
        (e.screenX - tempPos[0]) * DRAG_RATIO,
        (e.screenY - tempPos[1]) * DRAG_RATIO,
      ]
    }
  }
  const handleMouseUp = (e) => {
    if (e?.target?.style) {
      e.target.style.cursor = 'default'
    }

    const [x, y] = positionDist.value
    const [xc, yc] = calcDist.value
    positionDist.value = [x + xc, y + yc]
    calcDist.value = [0, 0]
    document.onmousemove = document.onmouseup = null
  }

  // 当前画板的比例100为正常
  const curRatio = ref(100)
  const scale = computed(() => curRatio.value / 100)
  let canvasMain = null

  const toZoom = (calcVal) => {
    if (calcVal === 0) return

    const temp = curRatio.value + calcVal
    if (calcVal > 0 && temp >= 300) return false
    if (calcVal < 0 && temp <= 10) return false

    curRatio.value += calcVal
    return true
  }
  const onMouseWheel = (e) => {
    e.preventDefault?.()// 阻止默认事件

    const [x, y] = positionDist.value

    const down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0

    if (!e.ctrlKey) {
      if (down) positionDist.value = [x, y - 30]
      else positionDist.value = [x, y + 30]
      return
    }

    const { width = 0, height = 0 } = canvasMain?.getBoundingClientRect() || {}
    const { pageX, pageY } = e

    const [xc, yc] = [width / 2, height / 2]
    const [distX, distY] = [(pageX - xc) / xc * 20, (pageY - yc) / yc * 20]

    if (down) {
      if (!toZoom(-10)) return
      positionDist.value = [x + distX, y + distY]
    } else {
      if (!toZoom(10)) return
      positionDist.value = [x - distX, y - distY]
    }
  }

  onMounted(() => {
    canvasMain = document.querySelector('#canvas-main')
    // 监听页面的mouseleave事件，当鼠标移出浏览器页面可用区域 并 松开按键时，停止拖动
    document.addEventListener('mouseleave', (e) => {
      handleMouseUp(e)
    })
  })

  return {
    handleMouseDown, // 鼠标按压
    handleMouseUp, // 鼠标按压抬起
    positionDist, // 定位偏移
    calcDist, // 拖动偏移
    onMouseWheel, // 鼠标滚动
    scale, // 缩放大小
  }
}
