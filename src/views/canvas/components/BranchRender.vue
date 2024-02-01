
<script setup>
import { computed } from 'vue'
import RenderList from './RenderList.vue'
import AddNodeBtn from './AddNodeBtn.vue'
import { getColCountByBranch, getColCountByNode } from './utils.js'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  curNode: {
    type: Object,
    default: () => ({}),
  },

})
const emits = defineEmits(['addBranch', 'removeBranch', 'update:modelValue'])
const bindBranch = computed({
  get: () => props.modelValue || [],
  set: val => emits('update:modelValue', val),
})
const colCount = computed(() => getColCountByNode(props.curNode))
const firstBranchColCount = computed(() => getColCountByBranch(bindBranch.value?.[0]))
const lastBranchColCount = computed(() => getColCountByBranch(bindBranch.value?.[bindBranch.value.length - 1]))
</script>

<template>
  <div class="line"></div>
  <AddNodeBtn
    v-if="curNode.type === 'switch'"
    class="on-bottom"
    :end-line="false"
    add-type="branch"
    @toAdd="emits('addBranch')"
  ></AddNodeBtn>
  <div
    class="branch-wrapper branch-wrapper-width"
    :style="{
      '--var-col-count': colCount,
      '--var-first-branch-col-count': firstBranchColCount,
      '--var-last-branch-col-count': lastBranchColCount,
    }"
  >
    <RenderList
      v-for="(nodeList, idx) in bindBranch"
      :key="idx"
      v-model="bindBranch[idx]"
      :branch-count="bindBranch.length"
      @removeBranch="() => emits('removeBranch', idx)"
    ></RenderList>
  </div>
</template>

<style lang="scss" scoped>

</style>
