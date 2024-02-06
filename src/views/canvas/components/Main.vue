
<script setup>
import { provide, ref } from 'vue'
import RenderList from './RenderList.vue'

import AddNodeDialog from './AddNodeDialog.vue'
import { BaseNode, generateNodeList } from '@/views/canvas/components/nodeConfig.js'

const temp = generateNodeList([
  { type: 'start' },
  { type: 'feat' },
  {
    type: 'switch',
    branchList: [
      [{ type: 'feat' }],
      [{ type: 'feat' }],
      [{ type: 'feat' }],
    ],
  },
  { type: 'end' },
])
// const temp = initNodeList([
//   new BaseNode('start'),
//   new BaseNode('feat'),
//   new BaseNode('switch', {
//     branchList: [
//       [new BaseNode('feat')],
//       [new BaseNode('feat')],
//       [new BaseNode('feat')],
//     ],
//   }),
//   new BaseNode('end'),
// ])
const nodeList = ref(temp)

console.log(nodeList.value)

// 添加节点弹窗
const addNodeDialogRef = ref(null)
provide('addNodeDialogRef', addNodeDialogRef)
// hover栈：用于记录当前鼠标悬停的节点
const hoverStack = ref([])
provide('hoverStack', hoverStack)
// 拖动配置
const dragConf = ref({
  banDropNodeList: [], // 不能被拖动放置的节点
  dragFlag: false, // 是否处于拖动状态
  customDragData: null, // 自定义拖动数据
})
provide('dragConf', dragConf)
// 选中节点
const activateNode = ref(null)
provide('activateNode', activateNode)

/**
 * 截切版数据
  {type: 'copy',data: null}
 */
const shearPlate = ref(null)
const toCtrlC = (type) => {
  // 没有选中节点,进行复制
  const source = activateNode.value
  if (!source) return
  shearPlate.value = {
    type,
    data: source,
  }
}

const toCtrlV = (e) => {
  // 剪切板没有内容,直接返回
  if (!shearPlate.value) return
  const { type, data } = shearPlate.value
  if (!data) return

  if (Array.isArray(data)) {
    // 复制分支
    // shearPlate.value
    return
  }

  const doMap = {
    copy: () => {
      nodeList.value.splice(1, 0, data.copySelf())
    },
    shear: () => {
      nodeList.value.splice(1, 0, data)
    },
  }

  doMap[type]()
}
const shortcutKeyFlag = ref(false)
const shortcutKey = () => {
  shortcutKeyFlag.value = !shortcutKeyFlag.value
}
</script>

<template>
  <div
    id="canvas-main"
    class="canvas-main"
    @click.capture="activateNode = null"
  >
    <el-button @click="shortcutKey">
      快捷建：{{ shortcutKeyFlag ? '开启' : '关闭' }}
    </el-button>
    <RenderList v-model="nodeList" :start-line="false"></RenderList>
    {{ shearPlate }}
    <!-- {{ activateNode?.branchList.parentNode === activateNode }} -->
    <!-- 1{{ hoverStack.map(i => i.toString()).length }} 2{{ dragConf.banDropNodeList }} 3{{ activateNode }} -->
    <AddNodeDialog
      ref="addNodeDialogRef"
    ></AddNodeDialog>
    <div
      v-if="shortcutKeyFlag"
      v-mousetrap="['mod+c', 'mod+v', 'mod+x']"
      @mod+c="() => toCtrlC('copy')"
      @mod+x="() => toCtrlC('shear')"
      @mod+v="toCtrlV"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.canvas-main {
  padding: 20px;
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
