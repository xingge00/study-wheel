
<script setup>
import { computed } from 'vue'
import AddNodeBtn from './AddNodeBtn.vue'
import nodeConfig, { ErrorItem } from './nodeConfig'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
})
const emits = defineEmits(['update:modelValue', 'addNode'])
const node = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const nodeComponent = computed(() => (nodeConfig.find(i => i.type === node.value.type) || ErrorItem).component)
</script>

<template>
  <component :is="nodeComponent" v-model="node"></component>

  <template v-if="node.type !== 'end'">
    <div class="line"></div>
    <AddNodeBtn @toAdd="(node) => emits('addNode', node)"></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
