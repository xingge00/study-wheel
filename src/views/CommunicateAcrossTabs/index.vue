
<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommunicateStore } from '@/store'
import { sharedWoeker } from '@/package/communicateAcrossTabs'

const communicate = useCommunicateStore()
const { serveCount } = storeToRefs(communicate)

onMounted(() => {
  sharedWoeker.Init()
})
onBeforeUnmount(() => {
  sharedWoeker.close()
})
const sendMsg = () => {
  communicate.changeServeCount(10)
}
const closeWorker = () => {
  sharedWoeker.close()
}
</script>

<template>
  <el-button @click="sendMsg">
    发送一条消息
  </el-button>
  <el-button @click="closeWorker">
    关闭当前sharedWorker
  </el-button>
  链接服务数量：{{ serveCount }}
</template>

<style scoped>

</style>
