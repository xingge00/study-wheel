
<script setup>
import { computed } from 'vue'
import RenderList from '../RenderList.vue'
import AddNodeBtn from '../AddNodeBtn.vue'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
})
const emits = defineEmits(['update:modelValue'])
const branchList = computed({
  get: () => props.modelValue.branch,
  set: val => emits('update:modelValue', { ...props.modelValue, branch: val }),
})
const handleAddNode = () => {
  branchList.value.push([])
}
</script>

<template>
  <div class="node-wrapper">
    <div class="c-circle c-switch">
      switch
    </div>
    <div class="line"></div>
    <AddNodeBtn class="on-bottom" :end-line="false" @addNode="handleAddNode"></AddNodeBtn>
  </div>
  <div class="branch-wrapper branch-wrapper-width" :style="{ '--var-branch-count': branchList?.length || 1 }">
    <RenderList v-for="(nodeList, idx) in branchList" :key="idx" v-model="branchList[idx]"></RenderList>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/canvas.scss';
.node-wrapper {
  position: relative;
  :deep(.on-bottom) {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.branch-wrapper-width {
  width:calc(#{$node-wrapper-size} * var(--var-branch-count))
}
</style>
