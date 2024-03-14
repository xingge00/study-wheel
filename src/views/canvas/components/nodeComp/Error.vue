
<script setup>

</script>

<template>
  <div class="node-wrapper">
    <slot></slot>
    <div class="c-circle c-other">
      <slot name="showName">
        error
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
