<script setup>
import { ElOption, ElSelect } from 'element-plus'
import { ref } from 'vue'

import VSelect from './components/v-select/index.vue'

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

const multipleList = ref(new Array(200).fill([0]))
const singleList = ref(new Array(200).fill(0))
</script>

<template>
  <div>
    <el-button @click="handle">
      是否使用单例模式
    </el-button>
    {{ useV }}
    <template v-if="useV">
      <div class="flex">
        单选：
        <VSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]" :ops-data="opsData" />
      </div>
      <div class="flex">
        多选：
        <VSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple :ops-data="opsData" />
      </div>
    </template>
    <template v-else>
      <div class="flex">
        单选：
        <ElSelect v-for="(item, idx) in singleList" :key="idx" v-model="singleList[idx]">
          <ElOption
            v-for="op in opsData"
            :key="op.id"
            :label="op.id"
            :value="op.label"
          />
        </ElSelect>
      </div>
      <div class="flex">
        多选：
        <ElSelect v-for="(item, idx) in multipleList" :key="idx" v-model="multipleList[idx]" multiple>
          <ElOption
            v-for="op in opsData"
            :key="op.id"
            :label="op.id"
            :value="op.label"
          />
        </ElSelect>
      </div>
    </template>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
