
<script setup>
const emits = defineEmits(['toSub'])

const handleClick = (e) => {
  return emits('toSub')
}
</script>

<template>
  <div class="sub-node" @click.stop="handleClick">
    -
  </div>
</template>

<style lang="scss" scoped>
$add-size: 14px;
.sub-node {
  background: #fff;
  border-radius: 50%;
  color: red;
  border: red 1px solid;
  width: $add-size;
  height: $add-size;
  line-height: $add-size;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  margin:0 auto;
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  // top: calc($add-size / -2);
  top: 0;

  opacity: 0;
  transition: all .25s ease-in-out;
}
</style>
