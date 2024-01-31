
<script setup>
import { computed, useAttrs } from 'vue'
import RenderList from '../RenderList.vue'
import AddNodeBtn from '../AddNodeBtn.vue'
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
const addBranch = () => {
  bindBranch.value.push([])
}

// 获取当前节点占用列数
const getColCount = (node) => {
  if (!node) return 0
  if (!(node?.branchList?.length)) return 1

  return node.branchList.reduce((acc, cur) =>
    acc + Math.max(...cur.map(i => getColCount(i)), 1)
  , 0)
}
const colCount = computed(() => getColCount(props.modelValue))

const removeBranch = (idx) => {
  bindBranch.value.splice(idx, 1)
}
</script>

<template>
  <div class="node-wrapper" v-bind="attrs">
    <div class="c-circle c-switch">
      switch
    </div>
  </div>
  <template v-if="!isPreview">
    <div class="line"></div>
    <AddNodeBtn class="on-bottom" :end-line="false" add-type="branch" @toAdd="addBranch"></AddNodeBtn>
    <div class="branch-wrapper branch-wrapper-width" :style="{ '--var-col-count': colCount }">
      <RenderList
        v-for="(nodeList, idx) in bindBranch"
        :key="idx"
        v-model="bindBranch[idx]"
        :branch-count="bindBranch.length"
        @removeBranch="() => removeBranch(idx)"
      ></RenderList>
    </div>
  </template>
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
  width:calc(#{$node-wrapper-size} * var(--var-col-count))
}
</style>
