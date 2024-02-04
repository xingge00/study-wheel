
<script setup>
import { inject } from 'vue'
const emits = defineEmits(['toSub'])

const hoverStack = inject('hoverStack')
const handleClick = (e) => {
  hoverStack.value = []
  emits('toSub')
}
</script>

<template>
  <div class="sub-node" @click.stop="handleClick">
    -
  </div>
</template>

<style lang="scss" scoped>
$add-size: 14px;
.sub-node {
  background: #fff;
  border-radius: 50%;
  color: red;
  border: red 1px solid;
  width: $add-size;
  height: $add-size;
  line-height: $add-size;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  position: absolute;
  // 具体定位在canvas.scss

  transition: all .25s ease-in-out;
}
</style>
