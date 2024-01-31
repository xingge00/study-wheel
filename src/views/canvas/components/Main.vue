
<script setup>
import { provide, ref } from 'vue'
import RenderList from './RenderList.vue'
import AddNodeDialog from './AddNodeDialog.vue'
import { BaseNode } from '@/views/canvas/components/nodeConfig.js'
// const nodeList = ref([
//   {
//     id: '0',
//     type: 'start',
//   },
//   {
//     id: '1',
//     type: 'if',
//   },
//   {
//     id: '2',
//     type: 'switch',
//     branchList: [
//       [
//         {
//           id: '2-1-2',
//           type: 'aaa',
//         },

//       ],
//       [
//         {
//           id: '2-2-1',
//           type: 'aaa',
//         },
//       ],
//       [],
//     ],
//   },
//   // {
//   //   id: '3',
//   //   type: 'switch',
//   //   branchList: [],
//   // },
//   {
//     id: '4',
//     type: 'aaa',
//   },
//   {
//     id: '999',
//     type: 'end',
//   },
// ])

const nodeList = ref([
  new BaseNode('start'),
  new BaseNode('feat'),
  new BaseNode('if'),
  new BaseNode('switch'),
  new BaseNode('end'),
])

console.log(nodeList.value)

const addNodeDialogRef = ref(null)
provide('addNodeDialogRef', addNodeDialogRef)
</script>

<template>
  <div id="canvas-main" class="canvas-main">
    <RenderList v-model="nodeList" :start-line="false"></RenderList>
    <AddNodeDialog ref="addNodeDialogRef"></AddNodeDialog>
  </div>
</template>

<style lang="scss" scoped>
.canvas-main {
  padding: 20px 0;
  box-sizing: border-box;
  width:100%;
  height: 100%;
  background-image: radial-gradient(circle,#e5e9e9 15%,#f8f9f9 10%);
  background-position: center center;
  background-size: 20px 20px;
  position: relative; // 不要删除 用于获取相对画布定位
  overflow: auto;
}
</style>
