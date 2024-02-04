
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
const dragConf = inject('dragConf')
const activateNode = inject('activateNode')

const curHoverNode = computed(() => hoverStack.value[0])
const mouseenter = () => hoverStack.value.unshift(node.value)
const mouseleave = () => hoverStack.value.shift()

// 拖动抓取
const dragstart = (ev) => {
  window.__custom_drop_data = {
    node: node.value,
    curBranch: curBranch.value,
    target: null,
  }
  const banNodeList = []
  const getAllChildNodes = (node, isStart) => {
    !isStart && banNodeList.push(node)
    if (!node?.branchList?.length) return
    node.branchList.forEach((branch) => {
      banNodeList.push(branch)
      branch.forEach(i => getAllChildNodes(i))
    })
  }
  getAllChildNodes(node.value, true)
  console.log('banNodeList', banNodeList)
  dragConf.value.dragFlag = true
  dragConf.value.banNodeList = banNodeList
}
const dragend = () => {
  setTimeout(() => {
    dragConf.value.dragFlag = false
    dragConf.value.banNodeList = []
  }, 100)
}

// 拖动放置
const instance = getCurrentInstance()
const drop = () => {
  console.log('dragConf.value.banNodeList', dragConf.value.banNodeList)
  if (dragConf.value.banNodeList.includes(node)) return

  if (window.__custom_drop_data.target !== instance) return
  emits('moveTo', window.__custom_drop_data.node, window.__custom_drop_data.curBranch)
  window.__custom_drop_data = null
}
const dragenter = () => {
  window.__custom_drop_data.target = instance
}
const dragleave = () => {
  window.__custom_drop_data.target = null
}
const dragover = (e) => {
  if (dragConf.value.dragFlag && !dragConf.value.banNodeList.includes(node.value)) {
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
    :class="{
      'node-box': !['start', 'end'].includes(node.type), // 开始结束不显示交互提示
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
      :class="{ canDropFalg: dragConf.dragFlag && !dragConf.banNodeList.includes(node) }"
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
