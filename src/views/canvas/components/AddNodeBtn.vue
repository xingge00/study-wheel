
<script setup>
import { inject, useAttrs } from 'vue'
const props = defineProps({
  endLine: {
    type: Boolean,
    default: true,
  },
  addType: {
    type: String,
    default: 'node', // ['branch',node]
  },
})
const emits = defineEmits(['toAdd'])
const attrs = useAttrs()

const addNodeDialogRef = inject('addNodeDialogRef')

// 获取元素相对于canvas-main的位置
const getPositionByCanvas = (el) => {
  if (el.id === 'canvas-main' || !el) {
    return { x: 0, y: 0 }
  }
  const parentPos = getPositionByCanvas(el.offsetParent)
  return {
    x: parentPos.x + el.offsetLeft,
    y: parentPos.y + el.offsetTop,
  }
}

const addNodeCallBack = (node) => {
  emits('toAdd', node)
}

const handleClick = (e) => {
  if (props.addType === 'branch') {
    return emits('toAdd')
  }
  const { x: domX, y: domY } = getPositionByCanvas(e.target)
  addNodeDialogRef.value.show({ x: e.offsetX + domX, y: e.offsetY + domY }, addNodeCallBack)
}
</script>

<template>
  <div class="add-node" v-bind="attrs" @click.stop="handleClick">
    +
  </div>
  <div v-if="endLine" class="line"></div>
</template>

<style lang="scss" scoped>
$add-size: 20px;
.add-node {
  background: #fff;
  border-radius: 50%;
  border: #ccc 1px solid;
  width: $add-size;
  height: $add-size;
  line-height: $add-size;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  margin:0 auto;
  z-index: 1;
  transition: all 0.3s;
  &.canDropFalg {
    box-shadow: 0 0 30px #858585;
    transform: scale(1.5);
  }
}
</style>
