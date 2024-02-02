
<script setup>
import { computed, useAttrs } from 'vue'
import BranchRender from '../BranchRender.vue'
// import RenderList from '../RenderList.vue'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  isPreview: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue'])
const bindBranch = computed({
  get: () => props.modelValue.branchList,
  set: val => emits('update:modelValue', { ...props.modelValue, branchList: val }),
})
const attrs = useAttrs()

// 获取当前节点占用列数
const getColCount = (node) => {
  if (!node) return 0
  if (!(node?.branchList?.length)) return 1

  return node.branchList.reduce((acc, cur) =>
    acc + Math.max(...cur.map(i => getColCount(i)), 1)
  , 0)
}
const colCount = computed(() => getColCount(props.modelValue))
</script>

<template>
  <div class="node-wrapper" v-bind="attrs">
    <slot></slot>
    <div class="c-circle c-if">
      if
    </div>
  </div>
  <BranchRender
    v-if="!isPreview"
    v-model="bindBranch"
    :cur-node="modelValue"
  ></BranchRender>
</template>

<style lang="scss" scoped>

</style>
