
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<template>
  404
  <el-button @click="goHome">
    返回
  </el-button>
</template>

<style scoped>

</style>
