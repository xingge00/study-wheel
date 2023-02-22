
<script setup>
import curCode from 'curCode'
import { ref } from 'vue'
const shoaDialog = ref(false)
const openDialog = () => {
  shoaDialog.value = true
}
</script>

<template>
  <el-button @click="openDialog">
    打开弹窗
  </el-button>
  <el-dialog
    v-model="shoaDialog"
    title="Tips"
    width="70%"
  >
    <span>{{curCode}}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="shoaDialog = false">Cancel</el-button>
        <el-button type="primary" @click="shoaDialog = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
