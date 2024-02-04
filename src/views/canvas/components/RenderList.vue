
<script setup>
import { computed, getCurrentInstance, inject } from 'vue'
import RenderItem from './RenderItem.vue'
import AddNodeBtn from './AddNodeBtn.vue'
import SubBtn from './SubBtn.vue'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  startLine: {
    type: Boolean,
    default: true,
  },
  branchCount: {
    type: Number,
    default: 1,
  },
})
const emits = defineEmits(['update:modelValue', 'removeBranch'])
const nodeList = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})
const dragConf = inject('dragConf')

const addNode = (idx, node) => {
  const newNode = node.generateNode()
  nodeList.value.splice(idx + 1, 0, newNode)
}

const moveTo = (sourceNode, sourceBranch, idx) => {
  const sourceIdx = sourceBranch.findIndex(i => i === sourceNode)
  // 同一条分支节点移动
  if (sourceBranch === nodeList.value) {
    // 拖放至自身前后位置不变 不需要做操作
    if (sourceIdx === idx + 1 || sourceIdx === idx) return

    if (sourceIdx > idx) {
      sourceBranch.splice(sourceIdx, 1)
      sourceBranch.splice(idx + 1, 0, sourceNode)
    } else {
      sourceBranch.splice(idx + 1, 0, sourceNode)
      sourceBranch.splice(sourceIdx, 1)
    }
  } else {
    sourceBranch.splice(sourceIdx, 1)
    nodeList.value.splice(idx + 1, 0, sourceNode)
  }
}

const subNode = (idx) => {
  nodeList.value.splice(idx, 1)
}

// 拖动放置
const instance = getCurrentInstance()
const drop = () => {
  if (dragConf.value.banNodeList.includes(nodeList)) return

  if (window.__custom_drop_data.target !== instance) return

  moveTo(window.__custom_drop_data.node, window.__custom_drop_data.curBranch, -1)
  window.__custom_drop_data = null
}
const dragenter = () => {
  window.__custom_drop_data.target = instance
}
const dragleave = () => {
  window.__custom_drop_data.target = null
}
const dragover = (e) => {
  if (dragConf.value.dragFlag && !dragConf.value.banNodeList.includes(nodeList.value)) {
    e.preventDefault()
  }
}
</script>

<template>
  <div class="render-list-wrapper">
    <template v-if="startLine">
      <SubBtn v-if="branchCount > 2" @click="emits('removeBranch')"></SubBtn>
      <div class="line"></div>
      <AddNodeBtn
        :class="{ canDropFalg: dragConf.dragFlag && !dragConf.banNodeList.includes(nodeList) }"
        :droppable="dragConf.dragFlag && !dragConf.banNodeList.includes(nodeList)"
        @toAdd="(node) => addNode(-1, node)"
        @dragover="dragover"
        @drop="drop"
        @dragenter="dragenter"
        @dragleave="dragleave"
      ></AddNodeBtn>
    </template>
    <RenderItem
      v-for="(node, idx) in nodeList"
      :key="node.id"
      v-model="nodeList[idx]"
      v-model:node-list="nodeList"
      @addNode="(node) => addNode(idx, node)"
      @subNode="() => subNode(idx)"

      @moveTo="(sNode, sBranch) => moveTo(sNode, sBranch, idx, node)"
    ></RenderItem>
  </div>
</template>

<style lang="scss" scoped>

</style>
