
<script setup>
import { ref, watch } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { copyToClipboard } from '@/utils/copy.js'

// 面板宽度
const PANEL_WIDTH = '500px'

const visible = ref(false)
const code = ref('')
const show = (text) => {
  visible.value = true
  code.value = text
}

const close = () => {
  visible.value = false
}

const copy = (text) => {
  copyToClipboard(text)
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
    <el-button link type="primary" @click="() => copy(code)">
      复制代码
    </el-button>
    <highlightjs
      style="height:100%;overflow: auto;"
      language="js"
      :code="code"
    />

    <pre>
      {{ code }}
    </pre>
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
