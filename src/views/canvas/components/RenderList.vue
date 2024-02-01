
<script setup>
import { computed } from 'vue'
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

const addNode = (idx, node) => {
  const newNode = node.generateNode()
  nodeList.value.splice(idx + 1, 0, newNode)
}
</script>

<template>
  <div class="render-list-wrapper">
    <template v-if="startLine">
      <SubBtn v-if="branchCount > 2" @click="emits('removeBranch')"></SubBtn>
      <div class="line"></div>
      <AddNodeBtn @toAdd="(node) => addNode(-1, node)"></AddNodeBtn>
    </template>
    <RenderItem v-for="(node, idx) in nodeList" :key="node.id" v-model="nodeList[idx]" @addNode="(node) => addNode(idx, node)"></RenderItem>
  </div>
</template>

<style lang="scss" scoped>

</style>
