
<script setup>
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import nodeConfig from './nodeConfig'

const props = defineProps({
  scale: { type: Number, default: 1 },
})
const position = ref({ x: 1, y: 1 })
const visible = ref(false)
let callBack
let instance

const close = () => {
  visible.value = false
  callBack = null
  instance = null
}

const show = (pos, cb, it) => {
  if (instance === it) return close()
  instance = it
  callBack = cb
  position.value = pos
  visible.value = true
}

const handleSelect = (node) => {
  callBack?.(node)
  close()
}

const nodeList = ref(nodeConfig.filter(i => !['start', 'end'].includes(i.type)))

defineExpose({
  show,
  close,
})
</script>

<template>
  <!-- v-show="visible" -->
  <div
    v-click-outside="close"
    class="add-node-dialog"
    :style="{
      '--var-dialog-left': `${position.x + 15}px`,
      '--var-dialog-top': `${position.y + 15}px`,
      '--var-dialog-size': visible ? '300px' : '0',
      '--var-position-scale': scale,
    }
    "
  >
    {{ scale }}
    <div class="select-node-wrapper">
      <component
        :is="node.component"
        v-for="node in nodeList"
        :key="node.type"
        :is-preview="true"
        @click="() => handleSelect(node)"
      ></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-node-dialog {
  transform: scale(var(--var-position-scale));
  transform-origin: 50% 50% 0px;
  position: absolute;
  width: var(--var-dialog-size);
  height: var(--var-dialog-size);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  left: var(--var-dialog-left);
  top: var(--var-dialog-top);
  z-index: 10;
  overflow: hidden;
  transition: all .2s ease;
  .select-node-wrapper {
    display: grid;
    padding: 10px;
    gap: 10px;
    grid-template-columns: repeat(3,calc(33.3% - 10px))
  }
}
</style>
