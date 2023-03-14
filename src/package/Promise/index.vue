<script setup>
import { sourceCode } from '@@@/src/package/Promise/index.js'
import { onMounted } from 'vue'
import { MyPromise, p0, p1, p2, p3 } from './index.js'
onMounted(async () => {
  const all1 = await Promise.race([p0, p1, p2, p3])

  // const all2 = await MyPromise.race([p0, p1, p2, p3])
  // console.log('all2', all2)
})
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
