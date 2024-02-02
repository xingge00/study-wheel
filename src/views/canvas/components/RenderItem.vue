
<script setup>
import { computed, getCurrentInstance, inject } from 'vue'
import AddNodeBtn from './AddNodeBtn.vue'
import SubBtn from './SubBtn.vue'
import nodeConfig, { ErrorItem } from './nodeConfig'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  nodeList: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['update:modelValue', 'addNode', 'subNode', 'update:nodeList'])
const node = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const curBranch = computed({
  get: () => props.nodeList,
  set: val => emits('update:nodeList', val),
})

const nodeComponent = computed(() => (nodeConfig.find(i => i.type === node.value.type) || ErrorItem).component)

const hoverStack = inject('hoverStack')
const curHoverNode = computed(() => hoverStack.value[0])
const mouseenter = () => hoverStack.value.unshift(node.value)
const mouseleave = () => hoverStack.value.shift()

// 抓
const dragstart = (e) => {
  console.log('dragstart')

  e.dataTransfer.effectAllowed = 'move'
}

const ondragend = (e) => {
  console.log('ondragend')

  if (!window.__custom_drop_instance) return
  window.__custom_drop_instance.emit('addNode', node.value)
}

// 放
const instance = getCurrentInstance()
const drop = () => {
  console.log('drop')
}
const dragenter = (e) => {
  window.__custom_drop_instance = instance
  console.log('dragenter')
}
const dragleave = (e) => {
  window.__custom_drop_instance = null
  console.log('dragleave')
}
</script>

<template>
  <div
    :draggable="!['start', 'end'].includes(node.type)"
    class="node-box"
    :class="{
      'hover-node': curHoverNode === node,
      'border-box': ['if', 'switch'].includes(node.type),
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"

    @dragstart="dragstart"
    @dragend="ondragend"
  >
    <component :is="nodeComponent" v-model="node">
      <SubBtn @toSub="emits('subNode')"></SubBtn>
    </component>
  </div>
  <template v-if="node.type !== 'end'">
    <div class="line"></div>
    <AddNodeBtn
      :droppable="true"
      @toAdd="(node) => emits('addNode', node)"

      @drop="drop"
      @dragenter.prevent="dragenter"
      @dragleave.prevent="dragleave"
    ></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
