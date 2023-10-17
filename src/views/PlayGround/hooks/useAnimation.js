import { computed, onMounted, ref, unref } from 'vue'
const formatNumber = (num) => {
  const separator = ','
  num = Number(num).toFixed(0)
  num += ''
  const x = num.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? `.${x[1]}` : ''
  const rgx = /(\d+)(\d{3})/
  if (separator) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, `$1${separator}$2`)
    }
  }
  return x1 + x2
}
const useCountTo = (target, time) => {
  console.time('time')
  const curCount = ref(0)
  const count = computed(() => {
    return formatNumber(unref(curCount))
  })

  const steps = target / (time / (1000 / 60))
  const animationFn = () => {
    const cur = unref(curCount) + steps
    if (cur >= target) {
      curCount.value = target
      console.timeEnd('time')
      return
    }
    curCount.value = cur
    requestAnimationFrame(animationFn)
  }
  animationFn()

  return {
    count,
  }
}

const useDrag = (DragRef) => {
  const x = ref(0)
  const y = ref(0)
  let offset = {
    x: 0,
    y: 0,
  }
  const handleDrag = (e) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  let flag = false

  const doFn = () => {
    if (!flag) return
    unref(DragRef).style.left = `${unref(x) - offset.x}px`
    unref(DragRef).style.top = `${unref(y) - offset.y}px`
    requestAnimationFrame(doFn)
  }
  const handleDragEnd = (e) => {
    flag = false
    window.removeEventListener('mousemove', handleDrag)
    window.removeEventListener('mouseup', handleDragEnd)
  }
  const handleDragStart = (e) => {
    offset = {
      x: e.offsetX,
      y: e.offsetY,
    }
    flag = true
    requestAnimationFrame(doFn)
    window.addEventListener('mousemove', handleDrag)
    window.addEventListener('mouseup', handleDragEnd)
  }

  onMounted(() => {
    DragRef.value.addEventListener('mousedown', handleDragStart)
  })

  // requestAnimationFrame(doFn)
  return {
    x,
    y,
    handleDragStart,
  }
}

export { useCountTo, useDrag }
