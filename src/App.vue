<template>
  <div class="container">
    <sideBar style="width:168px;"></sideBar>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import sideBar from './layout/sideBar.vue'
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display:flex;
}
.main {
  flex:1;
  /* padding: 16px; */
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
</style>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 6px;
    height: 7px;
  }

  /*滚动条有滑块的轨道部分*/
  ::-webkit-scrollbar-thumb {
    background-color: #ebebeb;
    border-radius: 7px;
  }

  /*滚动条滑块(竖向:vertical 横向:horizontal)*/
  ::-webkit-scrollbar-thumb:hover {
    background-color: darkgrey;
  }

  /*同时拥有垂直和水平滚动条时交汇部分*/
  ::-webkit-scrollbar-corner {
    display: block; /*修复交会时出现的白块*/
  }
</style>
