
<script setup>
import { computed, getCurrentInstance, inject, toRaw } from 'vue'
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
const dragConf = inject('dragConf')
const activateNode = inject('activateNode')

const curHoverNode = computed(() => hoverStack.value[0])
const mouseenter = () => hoverStack.value.unshift(node.value)
const mouseleave = () => hoverStack.value.shift()

// 拖动抓取
const dragstart = () => {
  dragConf.value.customDragData = {
    node: node.value,
    curBranch: curBranch.value,
    target: null,
  }
  const banDropNodeList = []
  const getAllChildNodes = (node, isStart) => {
    !isStart && banDropNodeList.push(node)
    if (!node?.branchList?.length) return
    node.branchList.forEach((branch) => {
      banDropNodeList.push(branch)
      branch.forEach(i => getAllChildNodes(i))
    })
  }
  getAllChildNodes(node.value, true)
  dragConf.value.dragFlag = true
  dragConf.value.banDropNodeList = banDropNodeList
}
const dragend = () => {
  dragConf.value.dragFlag = false
  dragConf.value.banDropNodeList = []
}

// 拖动放置
const instance = getCurrentInstance()
const drop = () => {
  if (!dragConf.value.customDragData) return
  if (dragConf.value.banDropNodeList.includes(node)) return

  if (toRaw(dragConf.value.customDragData.target) !== instance) return
  emits('moveTo', dragConf.value.customDragData.node, dragConf.value.customDragData.curBranch)
  dragConf.value.customDragData = null
  hoverStack.value = []
}
const dragenter = () => {
  if (!dragConf.value.customDragData) return
  dragConf.value.customDragData.target = instance
}
const dragleave = () => {
  if (!dragConf.value.customDragData) return
  dragConf.value.customDragData.target = null
}
const dragover = (e) => {
  if (dragConf.value.dragFlag && !dragConf.value.banDropNodeList.includes(node.value)) {
    e.preventDefault()
  }
}

const clickNode = () => {
  activateNode.value = node.value
}
</script>

<template>
  <div
    :draggable="!['start', 'end'].includes(node.type)"
    class="node-box"
    :class="{
      'hover-node': curHoverNode === node || activateNode === node, // hover或者选中节点高亮
      'no-branch-box': !['if', 'switch'].includes(node.type), // if和switch等有分支的节点包含节点和分支，否则只高亮节点
    }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @dragstart.stop="dragstart"
    @dragend="dragend"
    @click.stop="clickNode"
  >
    <component :is="nodeComponent" v-model="node">
      <SubBtn @toSub="emits('subNode')"></SubBtn>
    </component>
  </div>
  <template v-if="node.type !== 'end'">
    <div class="line"></div>
    <AddNodeBtn
      :class="{ canDropFlag: dragConf.dragFlag && !dragConf.banDropNodeList.includes(node) }"
      @toAdd="(node) => emits('addNode', node)"
      @dragover="dragover"
      @drop="drop"
      @dragenter="dragenter"
      @dragleave="dragleave"
    ></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
