
<script setup>
import { computed, getCurrentInstance, inject, toRaw, useAttrs } from 'vue'
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
  branchName: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:modelValue', 'removeBranch'])
const attrs = useAttrs()
const nodeList = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const branchNameFlag = inject('branchNameFlag')
const dragConf = inject('dragConf')
const hoverStack = inject('hoverStack')

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
  if (!dragConf.value.customDragData) return
  if (dragConf.value.banDropNodeList.includes(nodeList)) return

  if (toRaw(dragConf.value.customDragData.target) !== instance) return

  moveTo(dragConf.value.customDragData.node, dragConf.value.customDragData.curBranch, -1)
  hoverStack.value = []
  dragConf.value.customDragData = null
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
  if (dragConf.value.dragFlag && !dragConf.value.banDropNodeList.includes(nodeList.value)) {
    e.preventDefault()
  }
}
</script>

<template>
  <div class="render-list-wrapper" v-bind="attrs">
    <template v-if="startLine">
      <SubBtn v-if="branchCount > 2" @click="emits('removeBranch')"></SubBtn>
      <div v-if="branchNameFlag" class="branch-name" :class="{ placeholder: !branchName }">
        {{ branchName || '未命名' }}
      </div>
      <div class="line"></div>
      <AddNodeBtn
        :class="{ canDropFlag: dragConf.dragFlag && !dragConf.banDropNodeList.includes(nodeList) }"
        :droppable="dragConf.dragFlag && !dragConf.banDropNodeList.includes(nodeList)"
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
.branch-name {
  width: 100%;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &.placeholder{
    color: #ccc;
  }
}
</style>
