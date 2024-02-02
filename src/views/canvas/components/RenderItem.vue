
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
const emits = defineEmits(['update:modelValue', 'update:nodeList', 'addNode', 'subNode', 'moveTo'])
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
const dragstart = (ev) => {
  window.__custom_drop_data = {
    node: node.value,
    curBranch: curBranch.value,
    target: null,
  }
  console.log(ev)
  console.log('dragstart', window.__custom_drop_data)
}

const ondragend = () => {
  console.log('ondragend')
}

// 放
const instance = getCurrentInstance()
const drop = () => {
  if (window.__custom_drop_data.target !== instance) return

  emits('moveTo', window.__custom_drop_data.node, window.__custom_drop_data.curBranch)
  window.__custom_drop_data = null
}
const dragenter = () => {
  // debugger

  window.__custom_drop_data.target = instance
  console.log('dragenter', window.__custom_drop_data)
}
const dragleave = () => {
  window.__custom_drop_data.target = null
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

    @dragstart.stop="dragstart"
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

      @dragover.prevent=""
      @drop="drop"
      @dragenter="dragenter"
      @dragleave="dragleave"
    ></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
