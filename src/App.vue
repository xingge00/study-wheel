<template>
  <div class="app-container">
    <sideBar></sideBar>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import sideBar from './layout/sideBar.vue'
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display:flex;
  background-color: $theme-background-color;
  .main {
    flex:1;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
