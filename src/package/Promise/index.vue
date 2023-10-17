<script setup>
import { sourceCode as myPromise } from '@@@/src/package/Promise/index.js'
import { sourceCode as concurrent } from '@@@/src/package/Promise/concurrent.js'
import { sourceCode as concurrent2 } from '@@@/src/package/Promise/concurrent2.js'
import { ref } from 'vue'

const activeName = ref('myPromise')
const codeMap = {
  myPromise,
  concurrent,
  concurrent2,
}
</script>

<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="手写Promise" name="myPromise"></el-tab-pane>
    <el-tab-pane label="动态并发任务" name="concurrent"></el-tab-pane>
    <el-tab-pane label="并发任务" name="concurrent2"></el-tab-pane>
  </el-tabs>
  <div class="wrapper">
    <highlightjs
      style="margin: 0;"
      language="js"
      :code="codeMap[activeName]"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 20px;
  margin: 0 0 20px;
  box-sizing: border-box;
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>
