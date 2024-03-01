
<script setup>
import { computed, inject, ref, watch } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

// 面板宽度
const PANEL_WIDTH = '350px'
const activateNode = inject('activateNode')

const visible = ref(false)
watch(() => activateNode.value, (val) => {
  if (!val) return
  visible.value = true
})

const close = () => {
  visible.value = false
}
</script>

<template>
  <div
    v-click-outside="close"
    :style="{
      '--var-width': PANEL_WIDTH,
      '--var-right': visible ? 0 : `-${PANEL_WIDTH}`,
    }"
    class="custom-drawer"
  >
    <span>{{ activateNode }}</span>
  </div>
</template>

<style lang="scss" scoped>
.custom-drawer {
  position: fixed;
  top: 0;
  right: var(--var-right);
  width: var(--var-width);
  height: 100vh;
  background-color: #fff;
  transition: right .15s ease;
}
</style>
