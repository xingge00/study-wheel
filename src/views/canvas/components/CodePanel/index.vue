
<script setup>
import { ref, watch } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

// 面板宽度
const PANEL_WIDTH = '500px'

const visible = ref(false)

const show = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

defineExpose({
  show,
})
</script>

<template>
  <div
    v-click-outside="close"
    :style="{
      '--var-width': PANEL_WIDTH,
      '--var-right': visible ? 0 : `-${PANEL_WIDTH}`,
      '--var-opacity': Number(visible),
    }"
    class="custom-drawer"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-drawer {
  position: fixed;
  top: 0;
  right: var(--var-right);
  width: var(--var-width);
  opacity: var(--var-opacity);
  height: 100vh;
  background-color: #fff;
  transition: all .15s ease;
  z-index: 99999;
  padding: 20px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, .15);
}
</style>./BranchInfo.vue
