
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import sideBar from '@/layout/sideBar.vue'
const route = useRoute()
console.log('route', route)

const showSideBar = ref(true)
watch(() => route, () => {
  if (route.path)
    showSideBar.value = !['/playBall'].includes(route.path)
})
</script>

<template>
  <div class="app-container">
    <sideBar></sideBar>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display:flex;
  background-color: $theme-background-color;
  .main {
    padding: 15px;
    box-sizing: border-box;
    flex:1;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
