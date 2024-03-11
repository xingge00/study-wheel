
<script setup>
import { computed, inject, ref, watch } from 'vue'
import { getParentNode } from '@/views/canvas/components/nodeConfig.js'

const activateNode = inject('activateNode')
const nodeInfo = computed({
  get: () => activateNode.value?.nodeInfo || {},
  set: (val) => {
    activateNode.value.nodeInfo = val
  },
})
</script>

<template>
  <div>
    {{ getParentNode() }}
  </div>
</template>

<style lang="scss" scoped>

</style>
