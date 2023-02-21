
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
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

const href = window.location.href
const iframe1 = ref('')
const iframe2 = ref('')
const openNewTab = () => {
  window.open(window.location.href)
}

const msgCount = ref(50)
const setMsgCount = () => {
  sharedWoeker.setServeCount(msgCount.value)
}
const closeWebsocket = () => {
  sharedWoeker.closeWebsocket()
}
const openWebsocket = () => {
  sharedWoeker.openWebsocket()
}
const closeWorker = () => {
  sharedWoeker.close()
}
</script>

<template>
  <div class="wrapper">
    消息数量:<el-badge :value="serveCount" :max="9999"></el-badge>
    &emsp;
    <!-- 消息数量：{{ serveCount }} -->
    <el-button @click="() => iframe1 = href">
      iframe1启用
    </el-button>
    <el-button @click="() => iframe2 = href">
      iframe2启用
    </el-button>
    <el-button @click="openNewTab">
      打开新的标签页
    </el-button>
    <el-divider />
    <el-button @click="setMsgCount">
      设置消息数量为
    </el-button>
    <el-input v-model.number="msgCount" style="width:100px;" placeholder="设置消息数量"></el-input>
    <el-divider />
    mock自增的websocket<br>
    <el-button @click="closeWebsocket">
      关闭
    </el-button>
    <el-button @click="openWebsocket">
      开启
    </el-button>
    <el-divider />
    当前页面Worker端口
    <el-button @click="closeWorker">
      关闭
    </el-button>
    <el-divider />
    <div class="iframe-wrapper">
      <iframe :src="iframe1"></iframe>
      <iframe :src="iframe2"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
  .iframe-wrapper {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    iframe {
      width: 49%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
