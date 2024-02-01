
<script setup>
import { computed, inject } from 'vue'
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

const hoverStack = inject('hoverStack')
const curHoverNode = computed(() => hoverStack.value[0])
const mouseenter = () => hoverStack.value.unshift(node.value)
const mouseleave = () => hoverStack.value.shift()
</script>

<template>
  <div class="node-box" :class="{ 'hover-node': curHoverNode === node }" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <component :is="nodeComponent" v-model="node"></component>
  </div>
  <template v-if="node.type !== 'end'">
    <div class="line"></div>
    <AddNodeBtn @toAdd="(node) => emits('addNode', node)"></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
