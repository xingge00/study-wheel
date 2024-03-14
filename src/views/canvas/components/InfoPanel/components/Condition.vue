<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  attr: {
    type: Object,
    default: () => ({}),
  },
})
const emits = defineEmits(['change'])

const bindIndex = ref(props.modelValue.findIndex(i => i.type))
const activeValue = props.attr.curActivateBranchIdx
const inactiveValue = (props.attr.curActivateBranchIdx + 1) % 2

const onChange = (val) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.modelValue[activeValue].type = val === activeValue
  // eslint-disable-next-line vue/no-mutating-props
  props.modelValue[inactiveValue].type = !(val === activeValue)

  emits('change', props.modelValue)
}
</script>

<template>
  <div>
    <el-switch
      v-model="bindIndex"
      :disabled="disabled"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      @change="onChange"
    ></el-switch>
  </div>
</template>

<style lang="scss" scoped>

</style>
