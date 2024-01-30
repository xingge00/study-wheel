
<script setup>
import { computed } from 'vue'
import Start from './components/Start.vue'
import If from './components/If.vue'
import Switch from './components/Switch.vue'
import End from './components/End.vue'
import Other from './components/Other.vue'
import AddNodeBtn from './AddNodeBtn.vue'
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
})

const emits = defineEmits(['update:modelValue', 'addNode'])

const node = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})
</script>

<template>
  <Start v-if="node.type === 'start'" v-model="node"></Start>
  <If v-else-if="node.type === 'if'" v-model="node"></If>
  <Switch v-else-if="node.type === 'switch'" v-model="node"></Switch>
  <End v-else-if="node.type === 'end'" v-model="node"></End>
  <Other v-else v-model="node"></Other>

  <template v-if="node.type !== 'end'">
    <div class="line"></div>
    <AddNodeBtn @addNode="emits('addNode')"></AddNodeBtn>
  </template>
</template>

<style lang="scss" scoped>

</style>
