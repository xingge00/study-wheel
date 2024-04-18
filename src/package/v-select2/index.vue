<script setup>
import { computed, nextTick, ref, useAttrs } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'
const props = defineProps({
  modelValue: { type: [String, Array], default: '' },
  placeholder: { type: String, default: '请选择' },
  option: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue'])
const useFormatAttr = (booleanList = []) => {
  const attr = useAttrs()
  const result = { ...attr }
  booleanList.forEach((field) => {
    if (typeof result[field] === 'boolean' || result[field] === undefined) return
    result[field] = true
  })
  return result
}
const attr = useFormatAttr(['multiple', 'clearable', 'filterable'])
console.log('attr', attr)

const bindValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    console.log('更新了', val)
    emit('update:modelValue', val)
  },
})

const selectRef = ref(null)

const isActive = ref(false)
const clickOutside = () => {
  isActive.value = false
}
const handleClick = async () => {
  isActive.value = true
  await nextTick()

  selectRef.value.visible = true
}

const hiddenPlaceholder = computed(() => {
  if (attr.multiple) return props.modelValue && props.modelValue.length > 0
  return props.modelValue || props.modelValue === 0
})
const showValue = computed(() => {
  const getLabel = val => props.option.find(j => j['value'] === val)?.['label']

  if (attr.multiple) {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.map(i => i === '' ? '' : getLabel(i))
    } else {
      return props.modelValue ? [getLabel(props.modelValue)] : []
    }
  }
  return getLabel(props.modelValue)
})

const toDelete = (idx) => {
  if (attr.multiple) {
    bindValue.value.splice(idx, 1)
  } else {
    bindValue.value = ''
  }
}
const toClear = () => {
  bindValue.value = attr.multiple ? [] : undefined
}
</script>

<template>
  <div v-click-outside="clickOutside" class="v-select2-wrapper" :style="{ '--var-padding': attr.multiple ? '0px 11px 0px 6px' : '1px 11px' }">
    <div v-show="!isActive" class="v-select2-wrapper_inner" :class="{ 'is-active': isActive }" @click="handleClick">
      <span v-if="!hiddenPlaceholder" class="placeholder">{{ placeholder }}</span>
      <div v-else class="show-value">
        <span v-if="attr.multiple" class="el-tag-wrapper">
          <el-tag v-for="(i, idx) in showValue" :key="`${i}-${idx}`" type="info" closable @close="() => toDelete(idx)">{{ i }}</el-tag>
        </span>
        <span v-else>{{ showValue }}</span>
        <div class="mock-input" />
      </div>
      <el-icon class="select-icon">
        <CircleClose class="item-hover" @click="toClear" />
        <ArrowDown class="not-item-hover" />
      </el-icon>
    </div>
    <el-select v-if="isActive" v-bind="attr" ref="selectRef" v-model="bindValue" :teleported="false">
      <el-option v-for="i in option" :key="i.value" :value="i.value">
        {{ i.label }}
      </el-option>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.v-select2-wrapper {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  .v-select2-wrapper_inner {
    position: relative;
    display: inline-block;
    padding: var(--var-padding);
    width: 214px;
    min-height: 32px;
    line-height: 32px;
    vertical-align: top;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
    &:hover {
      box-shadow: 0 0 0 1px #c0c4cc inset;
    }
    &.is-active {
      box-shadow: 0 0 0 1px #409eff inset !important;
    }
    .placeholder {
      color: #b0abb2;
    }
    .show-value {
      display: inline-flex;
      flex-wrap: wrap;
      font-size: 13px;
      color:#606266;
      .el-tag-wrapper {
        max-width: calc(100% - 20px);
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        padding-bottom: 3px;
        .el-tag {
          margin: 2px 6px 2px 0;
        }
      }
      .mock-input {
        width:21px;
        height: 28px;
        flex-grow: 1;
        max-width: calc(100% - 20px);
        &:hover {
          cursor: text;
        }
      }
    }
    .select-icon {
      color: #a8abb2;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%)

    }
  }
  .item-hover { font-size: 0; }
  .not-item-hover { font-size: inherit; }
  &:hover {
    .item-hover { font-size: inherit; }
    .not-item-hover { font-size: 0; }
  }
}
</style>
