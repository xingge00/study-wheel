
<script setup>
import { computed } from 'vue'
import RenderList from '../RenderList.vue'
import AddNodeBtn from '../AddNodeBtn.vue'
const props = defineProps({
  node: {
    type: Object,
    default: () => ({}),
  },
})
const branchList = computed(() => props.node.branch || [])
const handleAddNode = () => {
  if (!props.node.branch) props.node.branch = []
  props.node.branch.push({
    id: Date.now(),
    type: 'if',
  })
}
</script>

<template>
  <div class="node-wrapper">
    <div class="c-circle switch">
      switch
    </div>
    <div class="line"></div>
    <AddNodeBtn @addNode="handleAddNode"></AddNodeBtn>
  </div>
  <div class="branch-wrapper">
    <RenderList v-for="(nodeList, idx) in branchList" :key="idx" :node-list="nodeList"></RenderList>
  </div>
  <div class="line"></div>
</template>

<style lang="scss" scoped>
.switch {
  background-color: aqua;
}
</style>
