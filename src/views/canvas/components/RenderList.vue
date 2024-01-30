
<script setup>
import { computed } from 'vue'
import RenderItem from './RenderItem.vue'
import AddNodeBtn from './AddNodeBtn.vue'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  startLine: {
    type: Boolean,
    default: true,
  },
})
const emits = defineEmits(['update:modelValue'])
const nodeList = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const addNode = (idx) => {
  const newNode = { id: Date.now(), type: 'text', content: '' }
  nodeList.value.splice(idx + 1, 0, newNode)
}
</script>

<template>
  <div class="render-list-wrapper">
    <template v-if="startLine">
      <div class="line"></div>
      <AddNodeBtn @addNode="() => addNode(-1)"></AddNodeBtn>
    </template>
    <RenderItem v-for="(node, idx) in nodeList" :key="node.id" v-model="nodeList[idx]" @addNode="() => addNode(idx)"></RenderItem>
  </div>
</template>

<style lang="scss" scoped>

</style>
