<script setup>
import { ElOption, ElSelect } from 'element-plus'
import { ref } from 'vue'

import VSelect from '@/package/v-select/index.vue'

const useV = ref(true)
const handle = () => {
  useV.value = !useV.value
}
const opsData = [
  { id: 0, label: '0000' },
  { id: 1, label: 'aaaa' },
  { id: 2, label: 'bbbb' },
  { id: 3, label: 'cccc' },
]

// 生成下拉框数量
const generateCount = 150
const multipleList = ref(new Array(generateCount).fill([0]))
const singleList = ref(new Array(generateCount).fill(0))
</script>

<template>
  <div>
    <el-button @click="handle">
      是否使用单例模式
    </el-button>
    {{ useV }}<br>
    <template v-if="useV">
      单选：
      <div class="flex-wrapper">
        <VSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]" :ops-data="opsData" />
      </div>
      多选：
      <div class="flex-wrapper">
        <VSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple :ops-data="opsData" />
      </div>
    </template>
    <template v-else>
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
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 40vh;
  overflow: auto;
}
</style>
