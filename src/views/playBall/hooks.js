import { onBeforeUnmount, onMounted, onUnmounted, reactive } from 'vue'
import sharedWorker from './sharedWorker.js'
export const useScreenPosition = (ms) => {
  const pos = reactive([window.screenLeft, window.screenTop])

  let timer = null

  const poll = (ms) => {
    timer = setTimeout(() => {
      pos[0] = window.screenLeft
      pos[1] = window.screenTop
      poll(ms)
    }, ms)
  }
  onMounted(() => {
    poll(ms)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })
  return pos
}

export const useSharedWorker = () => {
  onMounted(() => {
    sharedWorker.Init()
  })
  onBeforeUnmount(() => {
    sharedWorker.close()
  })

  return sharedWorker
}
