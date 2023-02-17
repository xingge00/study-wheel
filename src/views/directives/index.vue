
<script setup>
import { DragDirective as vDrag } from '@/package/directives/dragDirective.js'
const dragOption = {
  bottomBarHeightNumber: 50, // 初始化底部栏高度及底部边界偏移量
  topBarHeightNumber: 50, // 顶部边界下移偏移量
}
</script>

<template>
  <div class="top-bar">
    顶部栏
  </div>
  <div v-drag="dragOption" class="bottom-bar">
    拖动指令
  </div>
</template>

<style scoped>
.top-bar {
  height: 50px;
  background-color: #79bbff;
}
.bottom-bar {
  background-color:azure;
  border-top: 1px solid #ccc;
  width: 100%;
  height: 100%;
}
</style>
