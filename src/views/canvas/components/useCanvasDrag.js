import { onMounted, ref } from 'vue'

export default function () {
  // 拖动距离和节点移动比率
  const DRAG_RATIO = 0.8
  let tempPos = [0, 0]
  const positionDist = ref([0, 0])
  const calcDist = ref([0, 0])
  const handleMouseDown = (e) => {
  // 排除节点拖动和分支拖动的情况(即：拖动初始位置在canvas-mian，或者最外层的render-list-wrapper)
    if (![...e.target.classList].includes('canvas-main')
    && !([...e.target.classList].includes('render-list-wrapper') && e.target.attributes.draggable?.value !== 'true')
    ) return

    tempPos = [e.screenX, e.screenY]
    let timer = null
    document.onmousemove = function (e) { // 鼠标移动的时候计算元素的位置
      console.log('onmousemove')
      if (timer) return
      // timer = setTimeout(() => {
      calcDist.value = [
        (e.screenX - tempPos[0]) * DRAG_RATIO,
        (e.screenY - tempPos[1]) * DRAG_RATIO,
      ]
      timer = null
    // }, 1000 / 80)
    }
  }
  const handleMouseUp = () => {
    const [x, y] = positionDist.value
    const [xc, yc] = calcDist.value
    positionDist.value = [x + xc, y + yc]
    calcDist.value = [0, 0]
    document.onmousemove = document.onmouseup = null
  }
  onMounted(() => {
  // 监听页面的mouseleave事件，当鼠标移出浏览器页面可用区域 并 松开按键时，停止拖动
    document.addEventListener('mouseleave', () => {
      handleMouseUp()
    })
  })

  return {
    handleMouseDown, // 鼠标按压
    handleMouseUp, // 鼠标按压抬起
    positionDist, // 定位偏移
    calcDist, // 拖动偏移
  }
}
