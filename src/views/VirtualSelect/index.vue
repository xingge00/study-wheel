<script setup>
// import { ElOption, ElSelect } from 'element-plus'
import { nextTick, ref, watch } from 'vue'

import VSelect from '@/package/v-select/index.vue'

const useV = ref(true)

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

// 更新时间时间计算
const normalChangeTime = ref(0)
const VChangeTime = ref(0)
watch(
  [() => singleList, () => multipleList],
  async (val) => {
    const time = new Date()

    await new Promise(resolve => setTimeout(() => resolve()))

    const lengthOfTime = new Date() - time
    if (useV.value) {
      VChangeTime.value = (VChangeTime.value + lengthOfTime) / ((VChangeTime.value !== 0) + 1)
    } else {
      normalChangeTime.value = (normalChangeTime.value + lengthOfTime) / ((normalChangeTime.value !== 0) + 1)
    }
  },
  { deep: true },
)

// 初始化时间计算
const normalInitTime = ref([0, 0])
const VInitTime = ref([0, 0])
const waitFlag = ref(false)
watch(
  () => useV.value,
  async (newVal, oldVal) => {
    const time1 = new Date()
    waitFlag.value = false
    await new Promise(resolve => setTimeout(() => resolve()))
    // 销毁完毕
    const time2 = new Date()
    if (newVal) {
      // 首次进入不计算正常模式销毁
      if (oldVal !== undefined) {
        normalInitTime.value[1] = time2 - time1 > 20 ? time2 - time1 : 0
      }
    } else {
      VInitTime.value[1] = time2 - time1
    }

    waitFlag.value = true

    await new Promise(resolve => setTimeout(() => resolve()))
    // 渲染完毕
    const time3 = new Date()
    if (newVal) {
      VInitTime.value[0] = time3 - time2
    } else {
      normalInitTime.value[0] = time3 - time2
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="container">
    <el-radio-group v-model="useV">
      <el-radio-button :label="true">
        单例模式
      </el-radio-button>
      <el-radio-button :label="false">
        正常模式
      </el-radio-button>
    </el-radio-group>&emsp;
    渲染下拉框数量<el-input-number v-model="renderCount" style="width:150px;" :max="500" />
    <el-button @click="changeCount">
      重选渲染
    </el-button>

    <div class="time-wrapper">
      <div class="title">
        单例模式
      </div>
      <div style="width:250px;">
        初始化时间:{{ VInitTime[0] }}ms
      </div>
      <div style="width:250px;">
        销毁时间:{{ VInitTime[1] }}ms
      </div>
      <div style="width:250px;">
        平均更新时间:{{ VChangeTime.toFixed(2) }}ms
      </div>
    </div>
    <div class="time-wrapper">
      <div class="title">
        正常模式
      </div>
      <div style="width:250px;">
        初始化时间:{{ normalInitTime[0] }}ms
      </div>
      <div style="width:250px;">
        销毁时间:{{ normalInitTime[1] }}ms
      </div>
      <div style="width:250px;">
        平均更新时间:{{ normalChangeTime.toFixed(2) }}ms
      </div>
    </div>
    <template v-if="useV && waitFlag">
      单选：
      <div class="flex-wrapper">
        <VSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]" :ops-data="opsData" />
      </div>
      多选：
      <div class="flex-wrapper">
        <VSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple :ops-data="opsData" />
      </div>
    </template>
    <template v-if="!useV && waitFlag">
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

<style scoped>
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
}
.time-wrapper .title {
  width: 100px;
  font-weight: bold;
}
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 35vh;
  overflow: auto;
}
</style>
