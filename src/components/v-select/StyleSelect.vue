<template>
  <div class="el-select" style="height: 32px;" @click="$emit('toggleMenu')">
    <div class="select-trigger el-tooltip__trigger el-tooltip__trigger">
      <div v-if="isMultiple" class="el-select__tags" style="width: 100%; max-width: 182px;">
        <span class="el-select-tags-wrapper has-prefix">
          <span v-for="item in selectedData" :key="item.key" class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
            <span class="el-tag__content">
              <span class="el-select__tags-text" style="max-width: 139px;">
                {{ item[$attrs['label-key']] }}
              </span>
            </span>
            <i class="el-icon el-tag__close" @click="$emit('deleteItem', item)">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" />
              </svg>
            </i>
          </span>
        </span>
      </div>
      <div class="el-input el-input--suffix">
        <div class="el-input__wrapper">
          <input class="el-input__inner" type="text" readonly="" autocomplete="off" tabindex="0" :value="isMultiple ? '' : selectedData[$attrs['label-key']]" :placeholder="showPlaceholder" style="height: 30px;"><!-- suffix slot -->
          <span class="el-input__suffix">
            <span class="el-input__suffix-inner">
              <i class="el-icon el-select__caret el-select__icon">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" />
                </svg>
              </i>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** 样式组件-下拉选择器 */
export default {
  name: 'StyleSelector',
  props: {
    selectedData: {
      default: '',
    },
  },
  emits: ['toggleMenu', 'deleteItem'],
  computed: {
    isMultiple() {
      return this.$attrs.multiple
    },
    showPlaceholder() {
      if (this.isMultiple) {
        if (this.selectedData.length)
          return ''
        else
          return this.$attrs.placeholder
      }
      else {
        if (this.selectedData)
          return ''
        else
          return this.$attrs.placeholder
      }
    },
  },

}
</script>

<style lang="scss" scoped>

</style>
