<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { constantRoutes } from '@/router'

// fix:刷新页面根据菜单命中路由
const defaultActive = ref('')
const $router = useRouter()
const unwatch = watch(
  () => $router.currentRoute.value.name,
  (val) => {
    defaultActive.value = val
    unwatch()
  })

const isCollapse = ref(false)

const calcWidth = () => {
  isCollapse.value = window.innerWidth < 900
}
onMounted(() => {
  calcWidth()
  window.addEventListener('resize', calcWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', calcWidth)
})
</script>

<template>
  <el-menu :key="defaultActive" class="sw-menus" :default-active="defaultActive" :collapse="isCollapse" router>
    <el-menu-item v-for="item in constantRoutes" :key="item.name" :index="item.name">
      <el-icon><IEpdocument /></el-icon>
      <template #title>
        {{ item.menuName || item.name }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>

</style>
