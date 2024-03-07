
<script setup>
import { computed, inject, ref, watch } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import BranchInfo from './BranchInfo.vue'
import NodeInfo from './NodeInfo.vue'

// 面板宽度
const PANEL_WIDTH = '350px'
const activateNode = inject('activateNode')

const curNode = ref(null)
const visible = ref(false)
watch(() => activateNode.value, (val) => {
  if (!val) return
  curNode.value = val
  visible.value = true
})

const close = () => {
  visible.value = false
  curNode.value = null
}
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
    <template v-if="curNode">
      <BranchInfo v-if="Array.isArray(curNode)" />
      <NodeInfo v-else />
    </template>
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
  z-index: 9999;
  box-shadow: -2px 0 8px rgba(0, 0, 0, .15);
}
</style>./BranchInfo.vue
