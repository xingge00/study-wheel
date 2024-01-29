
<script setup>
import RenderItem from './RenderItem.vue'
import AddNodeBtn from './AddNodeBtn.vue'
const props = defineProps({
  nodeList: {
    type: Array,
    default: () => [],
  },
  startLine: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="render-list-wrapper">
    <template v-if="startLine">
      <div class="line"></div>
      <AddNodeBtn></AddNodeBtn>
    </template>
    <RenderItem v-for="node in nodeList" :key="node.id" :node="node"></RenderItem>
  </div>
</template>

<style lang="scss" scoped>
.render-list-wrapper {
  display: inline-block;
  text-align: center;
  min-width: 100px;
}
</style>
