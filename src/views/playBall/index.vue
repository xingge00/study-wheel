<script setup>
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useScreenPosition, useSharedWorker } from './hooks'
import Ball from './ball.vue'
import { usePlayBall } from '@/store'

const playBall = usePlayBall()
const { ballList } = storeToRefs(playBall)

const sharedWorker = useSharedWorker()

const screenPos = useScreenPosition(10)

const getBall = (pos, size, isChild = true) => ({
  id: Symbol('ball'),
  isChild,
  pos,
  size,
})

sharedWorker.updateCurBall(getBall([window.innerWidth / 2, window.innerHeight / 2], 100))
// // 球的真实坐标
// const ballList = ref([
//   getBall([window.innerWidth / 2, window.innerHeight / 2], 100),
//   getBall([500, 400], 100),
// ])

watch(
  () => screenPos,
  ([x, y]) => {
    sharedWorker.updateCurBall(getBall([window.innerWidth / 2 + x, window.innerHeight / 2 + y], 100))
  },
  {
    deep: true,
  },
)

const getDistBall = (ball1, ball2) => {
  const x = (ball1?.pos?.[0] || 0) - (ball2?.pos?.[0] || 0)
  const y = (ball1?.pos?.[1] || 0) - (ball2?.pos?.[1] || 0)
  const r1 = (ball1?.size || 0) / 2
  const r2 = (ball2?.size || 0) / 2
  if (Math.sqrt(x * x + y * y) < r1 + r2) {
    return [getBall(ball1.pos, 2 * (r1 + r2), false)]
  }
  console.log('[ball1, ball2]', [ball1, ball2])
  return [ball1, ball2]
}

const renderBallList = computed(() => {
  return getDistBall(...ballList.value)
})
</script>

<template>
  <div class="ball-container">
    <Ball
      v-for="ball in renderBallList"
      :key="ball.id"
      :ball-pos="ball.pos"
      :screen-pos="screenPos"
      :size="ball.size"
      :is-drag="ball.isChild"
    ></Ball>
  </div>
</template>

<style scoped lang="scss">
  .ball-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
