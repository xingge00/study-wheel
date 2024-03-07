
<script setup>
import { computed, inject, ref, watch } from 'vue'
import { getParentNode } from '@/views/canvas/components/nodeConfig.js'
</script>

<template>
  <div>
    {{ getParentNode() }}
  </div>
</template>

<style lang="scss" scoped>

</style>
