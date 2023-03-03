
<template>
  <div class="virtual-select" @click.stop="">
    <StyleSelect
      v-bind="selfAttrs"
      :selected-data="selectedData"
      :is-object-value="isObjectValue"
      @toggleMenu="toggleMenu"
      @deleteItem="deleteItem"
    />
    <div :id="renderId" class="common-select" />
  </div>
</template>

<script>
import StyleSelect from './StyleSelect.vue'
import { getCommonSelect, unBind } from './core.js'
import nanoid from '@/utils/nanoid'
export default {
  name: 'VSelector',
  components: {
    StyleSelect,
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      default: '',
    },
    isObjectValue: { // select框绑定的值是对象 还是值
      type: Boolean,
      default: false,
    },
    opsData: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      renderId: nanoid(10),
      CommonSelect: null,
    }
  },
  computed: {
    selfAttrs() {
      let isMultiple = false
      const { multiple, ...other } = this.$attrs
      if ((typeof multiple === 'string') || multiple === true) {
        isMultiple = true
      }
      return {
        'label-key': 'label',
        'value-key': 'id',
        'multiple': isMultiple,
        ...other,
      }
    },
    selectedData() {
      const valueKey = this.selfAttrs['value-key']
      if (this.selfAttrs.multiple) {
        return this.modelValue.map((item) => {
          return this.opsData.find(i => i[valueKey] === this.getOpsKey(item))
        })
      }
      else {
        return this.opsData.find(i => i[valueKey] === this.getOpsKey(this.modelValue))
      }
    },
  },
  mounted() {
    this.CommonSelect = getCommonSelect(this.renderId)
  },
  beforeUnmount() {
    unBind(this.renderId)
  },
  methods: {
    toggleMenu() {
      this.CommonSelect.toggleMenu({
        renderId: this.renderId,
        curInstance: this,
        attrs: this.selfAttrs,

        curValue: this.modelValue,
        isObjectValue: this.isObjectValue,
        opsData: this.opsData,
      })
    },
    // 不要删除，给CommonSelect调用
    updateValue(val) {
      this.$emit('update:modelValue', val)
    },
    deleteItem(item) {
      const idx = this.modelValue.findIndex((i) => {
        let id = i
        if (this.isObjectValue) {
          id = i[this.selfAttrs['value-key']]
        }
        return id === item[this.selfAttrs['value-key']]
      })
      const res = [...this.modelValue]
      res.splice(idx, 1)
      this.$emit('update:modelValue', res)
    },
    getOpsKey(item) {
      if (this.isObjectValue)
        return item[this.selfAttrs['value-key']]
      else
        return item
    },
  },
}
</script>

<style lang="scss" scoped>
.virtual-select {
  position: relative;
  .common-select {
    :deep(.el-select) {
      position:absolute;
      left:0;
      top:0;
      z-index:-1;
      :deep(.el-input) {
        opacity:1;
      }
    }
  }
}
</style>
