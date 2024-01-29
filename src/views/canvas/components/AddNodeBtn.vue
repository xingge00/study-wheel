
<script setup>
const emits = defineEmits(['addNode'])
</script>

<template>
  <div class="add-node" @click.stop="emits('addNode')">
    +
  </div>
  <div class="line"></div>
</template>

<style lang="scss" scoped>
$add-size: 20px;
.add-node {
  background: #fff;
  border-radius: 50%;
  border: #ccc 1px solid;
  width: $add-size;
  height: $add-size;
  line-height: $add-size;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  margin:0 auto;
}
</style>
