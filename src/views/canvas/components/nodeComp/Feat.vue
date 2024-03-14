
<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  isPreview: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="node-wrapper">
    <slot></slot>
    <div class="c-circle c-feat">
      <slot name="showName">
        Feat
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
