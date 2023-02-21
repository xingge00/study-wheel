<script setup>
import { computed, ref, watch } from 'vue'

import TestSelect from './components/testSelect.vue'

/** 1：单例模式 2：封装组件 3：正常模式 */
const useType = ref(1)

const opsData = [
  { id: 0, label: '0000' },
  { id: 1, label: 'aaaa' },
  { id: 2, label: 'bbbb' },
  { id: 3, label: 'cccc' },
]

// 生成下拉框数量
const multipleList = ref([])
const singleList = ref([])
const generateCount = ref(150)
const renderCount = ref(150)
const changeCount = () => {
  generateCount.value = renderCount.value
}
watch(
  () => generateCount.value,
  (val) => {
    multipleList.value = new Array(val).fill([0])
    singleList.value = new Array(val).fill(0)
  },
  { immediate: true },
)

// 时间收集[初始化时间,销毁时间,更新时间]
const normalInitTime = ref([0, 0, 0])
const componentInitTime = ref([0, 0, 0])
const VInitTime = ref([0, 0, 0])

// 更新时间时间计算
watch(
  [() => singleList, () => multipleList],
  async (val) => {
    const time = new Date()

    await new Promise(resolve => setTimeout(() => resolve()))

    const lengthOfTime = new Date() - time
    if (useType.value === 1) {
      VInitTime.value[2] = (VInitTime.value[2] + lengthOfTime) / ((VInitTime.value[2] !== 0) + 1)
    }
    else if (useType.value === 2) {
      componentInitTime.value[2] = (componentInitTime.value[2] + lengthOfTime) / ((componentInitTime.value[2] !== 0) + 1)
    }
    else if (useType.value === 3) {
      normalInitTime.value[2] = (normalInitTime.value[2] + lengthOfTime) / ((normalInitTime.value[2] !== 0) + 1)
    }
  },
  { deep: true },
)

// 初始化时间计算
const waitFlag = ref(false)
watch(
  () => useType.value,
  async (newVal, oldVal) => {
    const time1 = new Date()
    waitFlag.value = false
    await new Promise(resolve => setTimeout(() => resolve()))
    // 销毁完毕
    const time2 = new Date()
    if (oldVal === 1) {
      VInitTime.value[1] = time2 - time1
    }
    else if (oldVal === 2) {
      componentInitTime.value[1] = time2 - time1
    }
    else if (oldVal === 3) {
      normalInitTime.value[1] = time2 - time1 > 20 ? time2 - time1 : 0
    }

    waitFlag.value = true

    await new Promise(resolve => setTimeout(() => resolve()))
    // 渲染完毕
    const time3 = new Date()
    if (newVal === 1) {
      VInitTime.value[0] = time3 - time2
    }
    else if (newVal === 2) {
      componentInitTime.value[0] = time3 - time2
    }
    else if (newVal === 3) {
      normalInitTime.value[0] = time3 - time2
    }
  },
  { immediate: true },
)

// 展示时间信息
const renderTimeList = computed(() => {
  return [
    { type: 1, title: '单例模式', initTime: VInitTime.value },
    { type: 2, title: '组件封装', initTime: componentInitTime.value },
    { type: 3, title: '正常模式', initTime: normalInitTime.value },
  ]
})
console.log(renderTimeList)
</script>

<template>
  <div class="container">
    <el-radio-group v-model="useType">
      <el-radio-button :label="1">
        单例模式
      </el-radio-button>
      <el-radio-button :label="2">
        组件封装
      </el-radio-button>
      <el-radio-button :label="3">
        正常模式
      </el-radio-button>
    </el-radio-group>&emsp;
    渲染下拉框数量<el-input-number v-model="renderCount" style="width:150px;" :max="500" />
    <el-button @click="changeCount">
      重选渲染
    </el-button>

    <div v-for="item in renderTimeList" :key="item.type" class="time-wrapper">
      <div class="title">
        {{ item.title }}
      </div>
      <div style="width:250px;">
        初始化时间:{{ item.initTime[0] }}ms
      </div>
      <div style="width:250px;">
        销毁时间:{{ item.initTime[1] }}ms
      </div>
      <div style="width:250px;">
        平均更新时间:{{ item.initTime[2].toFixed(2) }}ms
      </div>
    </div>
    <template v-if="[1, 2].includes(useType) && waitFlag">
      单选：
      <div class="flex-wrapper">
        <TestSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]" :use-v="useType === 1" :ops-data="opsData" />
      </div>
      多选：
      <div class="flex-wrapper">
        <TestSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple :use-v="useType === 1" :ops-data="opsData" />
      </div>
    </template>
    <template v-if="useType === 3 && waitFlag">
      单选：
      <div class="flex-wrapper">
        <ElSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]">
          <ElOption
            v-for="op in opsData"
            :key="op.id"
            :label="op.label"
            :value="op.id"
          />
        </ElSelect>
      </div>
      多选：
      <div class="flex-wrapper">
        <ElSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple>
          <ElOption
            v-for="op in opsData"
            :key="op.id"
            :label="op.label"
            :value="op.id"
          />
        </ElSelect>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 16px;
}
.time-wrapper {
  display: flex;
  padding: 16px 0;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 0 16px;
  height: 60px;
  align-items: center;
  .title {
    width: 100px;
    font-weight: bold;
  }
}
.flex-wrapper {
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  height: 30vh;
  overflow: auto;
}
</style>
