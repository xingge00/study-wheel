<script setup>
import { onMounted } from 'vue'
import { MyPromise, p0, p1, p2, p3 } from './index.js'
onMounted(async () => {
  const all1 = await Promise.race([p0, p1, p2, p3])

  // const all2 = await MyPromise.race([p0, p1, p2, p3])
  // console.log('all2', all2)
})
</script>

<template>
  <div>
    Promise
  </div>
</template>

<style scoped>
</style>
