
<script setup>
import { ref } from 'vue'

import { sourceCode as curVueCode } from '@@@/src/views/PlayGround/index.vueshow'

const shoaDialog = ref(false)

const openDialog = () => {
  shoaDialog.value = true
}
</script>

<template>
  <div class="wrapper">
    <el-button @click="openDialog">
      打开弹窗
    </el-button>
  </div>
  <el-dialog
    v-model="shoaDialog"
    title="当前页面源码"
    top="50px"
  >
    <highlightjs
      style="height:100%;overflow: auto;"
      language="js"
      :code="curVueCode"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="shoaDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.wrapper {

}
</style>
