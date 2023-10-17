
<script setup lang="ts" name="MyInput">
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const bindValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})
</script>

<template>
  <div>
    {{ modelValue }}
    <el-input v-model="bindValue" class="input">
      input
    </el-input>
  </div>
</template>

<style lang="scss" scoped>
.input {

}
</style>
