
<script setup>
import { defineExpose, ref } from 'vue'
const position = ref({ x: 1, y: 1 })
const visible = ref(false)
const show = (pos) => {
  console.log('pos', pos)
  position.value = pos
  visible.value = true
}
const close = () => {
  visible.value = false
}

defineExpose({
  show,
  close,
})
</script>

<template>
  <div
    v-show="visible"
    class="add-node-dialog"
    :style="{
      '--var-dialog-left': `${position.x}px`,
      '--var-dialog-top': `${position.y}px`,
    }
    "
  >
  </div>
</template>

<style lang="scss" scoped>
.add-node-dialog {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  left: var(--var-dialog-left);
  top: var(--var-dialog-top);
  z-index: 10;
  transition: all .25s ease;
}
</style>
