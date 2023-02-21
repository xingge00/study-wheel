<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { constantRoutes } from '@/router'

const defaultActive = ref('')
const $router = useRouter()
const unwatch = watch(
  () => $router.currentRoute.value.name,
  (val) => {
    defaultActive.value = val
    unwatch()
  })

const isCollapse = ref(false)
</script>

<template>
  <el-menu :key="defaultActive" class="sw-menus" :default-active="defaultActive" :collapse="isCollapse" router>
    <el-menu-item v-for="item in constantRoutes" :key="item.name" :index="item.name">
      <el-icon><document /></el-icon>
      <template #title>
        {{ item.name }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>

</style>
