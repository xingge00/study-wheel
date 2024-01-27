
<script setup>
import RenderItem from './RenderItem.vue'
</script>

<template>
  <div class="canvas-main">
    <RenderItem></RenderItem>
  </div>
</template>

<style lang="scss" scoped>
.canvas-main {
  width:100%;
  height: 100%;
  background-image: radial-gradient(circle,#e5e9e9 15%,#f8f9f9 10%);
  background-position: center center;
  background-size: 20px 20px;
}
</style>
