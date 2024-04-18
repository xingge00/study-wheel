<script setup>
import { nextTick, ref } from 'vue'
import VSelect2 from '../../package/v-select2/index.vue'
const option = [
  { label: '空串', value: '' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
]
const COUNT = 10
const value = ref('')

const showVir = ref(true)
const temp = ref(false)
const showNor = ref(false)

const genHandle = (activeRef, closeRef) => {
  return async () => {
    console.time('销毁')
    closeRef.value = false
    temp.value = true
    await nextTick()
    console.timeEnd('销毁')
    console.time('渲染')
    activeRef.value = true
    temp.value = false
    await nextTick()
    console.timeEnd('渲染')
  }
}

const handleVir = genHandle(showVir, showNor)
const handleNor = genHandle(showNor, showVir)
</script>

<template>
  <div>
    <div>
      <el-button @click="handleNor">
        测试{{ COUNT }}个普通下拉框
      </el-button>
      <el-button @click="handleVir">
        测试{{ COUNT }}个虚拟下拉框
      </el-button>
    </div>
    <div v-if="!temp && showNor">
      <el-select v-for="_ in COUNT" :key="_" v-model="value" multiple clearable filterable>
        <el-option v-for="i in option" :key="i.value" :value="i.value">
          {{ i.label }}
        </el-option>
      </el-select>
    </div>
    <div v-if="!temp && showVir">
      <VSelect2 v-for="_ in COUNT" :key="_" v-model="value" :option="option" multiple clearable filterable></VSelect2>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
