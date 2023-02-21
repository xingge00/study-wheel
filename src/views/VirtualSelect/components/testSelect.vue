
<script setup>
import { computed, useAttrs } from 'vue'
import VSelect from '@/package/v-select/index.vue'
const props = defineProps({
  useV: { type: Boolean, default: true },
  modelValue: {},
  opsData: { type: Array, default: () => [] },
})
const emits = defineEmits(['update:modelValue'])

const attrs = useAttrs()

const bindValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val)
  },
})
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <VSelect v-if="props.useV" v-bind="attrs" v-model="bindValue" :ops-data="props.opsData" />
  <ElSelect v-else v-bind="attrs" v-model="bindValue">
    <ElOption
      v-for="op in opsData"
      :key="op.id"
      :label="op.label"
      :value="op.id"
    />
  </ElSelect>
</template>

<style scoped>

</style>
