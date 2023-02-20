<template>
  <!-- :model-value="modelValue" -->
  <Teleport v-if="isMounted" :to="`#${renderId}`">
    <ElSelect
      ref="CommonSelect"
      v-bind="attrs"
      :key="renderId"
      v-model="modelValue"
      class="common-select"
      @change="change"
      @blur="blur"
    >
      <ElOption
        v-for="item in opsData"
        :key="item.id"
        :label="item[attrs['label-key']]"
        :value="isObjectValue ? item : item[attrs['value-key']]"
      />
    </ElSelect>
  </Teleport>
</template>

<script>
// import { ElOption, ElSelect } from 'element-plus'
export default {
  name: 'CommonSelect',
  components: { ElOption, ElSelect },
  data() {
    return {
      visible: false, // 当前下拉框显隐状态
      renderId: '', // 传送到的目标元素id
      modelValue: '',
      isObjectValue: false, // 绑定的值类型是否为对象
      opsData: [],

      curInstance: null, // 当前绑定在使用公用组件的实例
      attrs: {},
      el: null,
      isMounted: false,
    }
  },
  watch: {
    renderId(val) {
      if (val) {
        this.isMounted = true
      }
    },
  },
  beforeUnmount() {
    console.log('公用组件销毁了 ')
  },
  methods: {
    change(val) {
      this.curInstance.updateValue(val)
    },
    blur() {
      this.visible = this.$refs.CommonSelect.visible
    },

    async toggleMenu({ renderId, curInstance, attrs, curValue, isObjectValue, opsData }) {
      // 重复点击做处理
      if (this.renderId === renderId) {
        if (this.visible) {
          this.visible = false
          return
        }
      }

      this.attrs = attrs
      this.isObjectValue = isObjectValue
      this.modelValue = curValue
      this.opsData = opsData
      this.renderId = renderId
      this.curInstance = curInstance

      await this.$nextTick()
      this.$refs.CommonSelect.toggleMenu()
    },
  },
}
</script>

<style lang="scss">

</style>
