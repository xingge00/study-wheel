
<script setup>
import { sourceCode } from '@@@/src/views/miniVue/main.js'
</script>

<template>
  <div class="wrapper">
    <highlightjs
      style="margin: 0;"
      language="js"
      :code="sourceCode"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 0 20px;
  margin: 20px 0;
  box-sizing: border-box;
  height: calc(100vh - 40px);
  overflow: auto;
}
</style>
