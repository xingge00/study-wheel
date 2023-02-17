
<script setup>
import { useName } from '@/package/customHooks/useName.js'
const [name, setName] = useName()
const changeName = () => {
  setName(Math.random())
}
</script>

<template>
  <div @click="changeName">
    {{ name }}
  </div>
</template>

<style scoped>

</style>
