
<script setup>
import Start from './components/Start.vue'
import If from './components/If.vue'
import Switch from './components/Switch.vue'
import End from './components/End.vue'
import Other from './components/Other.vue'
const props = defineProps({
  node: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <Start v-if="node.type === 'start'" node="node"></Start>
  <If v-else-if="node.type === 'if'" :node="node"></If>
  <Switch v-else-if="node.type === 'switch'" :node="node"></Switch>
  <End v-else-if="node.type === 'end'" :node="node"></End>
  <Other v-else :node="node"></Other>
</template>

<style lang="scss" scoped>

</style>
