<script setup>
  import { computed, ref } from 'vue';

  const props = defineProps({
    // 真实坐标
    ballPos: {
      type: Array,
      default: () => [0, 0],
    },
    // 浏览器相对屏幕坐标
    screenPos: {
      type: Array,
      default: () => [0, 0],
    },
    size: {
      type: [Number, String],
      default: 100,
    },
  });

  // 物体相对于浏览器坐标
  const relativePos = computed(() => [
    props.ballPos[0] - props.screenPos[0],
    props.ballPos[1] - props.screenPos[1],
  ]);

  const curBall = ref(null);
</script>

<template>
  <div
    ref="curBall"
    :style="{
      '--left-value': `${relativePos[0] - size / 2}px`,
      '--top-value': `${relativePos[1] - size / 2}px`,
      '--size-value': `${size}px`,
    }"
    class="ball"
  >
  </div>
</template>

<style scoped lang="scss">
  .ball {
    position: absolute;
    top: var(--top-value);
    left: var(--left-value);
    width: var(--size-value);
    height: var(--size-value);
    border-radius: 50%;
    background-color: orange;
  }
</style>
