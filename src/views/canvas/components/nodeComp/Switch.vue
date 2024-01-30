
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
  get: () => props.modelValue.branch,
  set: val => emits('update:modelValue', { ...props.modelValue, branch: val }),
})
const attrs = useAttrs()
const addBranch = () => {
  bindBranch.value.push([])
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
    <div class="branch-wrapper branch-wrapper-width" :style="{ '--var-branch-count': bindBranch?.length || 1 }">
      <RenderList v-for="(nodeList, idx) in bindBranch" :key="idx" v-model="bindBranch[idx]"></RenderList>
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
  width:calc(#{$node-wrapper-size} * var(--var-branch-count))
}
</style>
