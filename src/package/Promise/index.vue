<script setup>
import { sourceCode as myPromise } from '@@@/src/package/Promise/index.js'
import { sourceCode as concurrent } from '@@@/src/package/Promise/concurrent.js'
import { ref } from 'vue'

const activeName = ref('myPromise')
const codeMap = {
  myPromise,
  concurrent,
}
</script>

<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="手写Promise" name="myPromise"></el-tab-pane>
    <el-tab-pane label="异步任务最大并发数" name="concurrent"></el-tab-pane>
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
