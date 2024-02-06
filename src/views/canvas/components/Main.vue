
<script setup>
import { provide, ref, toRaw } from 'vue'
import RenderList from './RenderList.vue'

import AddNodeDialog from './AddNodeDialog.vue'
import { BaseNode, MIN_BRANCH_COUNT, getParentNode } from '@/views/canvas/components/nodeConfig.js'

const nodeList = ref([
  new BaseNode('start'),
  new BaseNode('feat'),
  new BaseNode('switch', {
    branchList: [
      [new BaseNode('feat')],
      [new BaseNode('feat')],
      [new BaseNode('feat')],
    ],
  }),
  new BaseNode('end'),
])

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
// 剪切
const toCtrlX = () => {
  // 没有选中节点,进行剪切
  const source = activateNode.value
  if (!source) return

  const { parentNode, branchIdx, nodeList: branchNodeList, nodeIdx } = getParentNode(nodeList.value, activateNode.value, null)
  if (Array.isArray(source)) {
    // 剪切分支
    if (parentNode.branchList?.length <= MIN_BRANCH_COUNT) {
      throw new Error(`分支数量至少为${MIN_BRANCH_COUNT},剪切失败！`)
    }

    (parentNode.branchList || []).splice(branchIdx, 1)
  } else {
    // 剪切节点
    branchNodeList.splice(nodeIdx, 1)
  }
  shearPlate.value = {
    type: 'shear',
    data: source,
  }
}
const toCtrlC = () => {
  // 没有选中节点,不进行复制
  const source = activateNode.value
  if (!source) return
  shearPlate.value = {
    type: 'copy',
    data: source,
  }
}

const toCtrlV = (e) => {
  // 剪切板没有内容,直接返回
  if (!shearPlate.value) return
  const { type, data } = shearPlate.value
  if (!data) return

  // 节点处理
  const doMap = {
    copyNode: () => {
      if (!activateNode.value || Array.isArray(activateNode.value)) return
      const { nodeList: branchNodeList, nodeIdx } = getParentNode(nodeList.value, activateNode.value, null)
      console.log({ branchNodeList, nodeIdx })
      branchNodeList.splice(nodeIdx + 1, 0, data.copySelf())
    },
    shearNode: () => {
      if (!activateNode.value || Array.isArray(activateNode.value)) return
      const { nodeList: branchNodeList, nodeIdx } = getParentNode(nodeList.value, activateNode.value, null)
      branchNodeList.splice(nodeIdx + 1, 0, data)
      // 粘贴完剪切的数据 ,清空剪切板
      shearPlate.value = null
    },

    copyBranch: () => {
      // 选中switch节点,进行粘贴分支
      if (activateNode.value?.type !== 'switch') return
      activateNode.value.branchList.push(data.map(node => node.copySelf()))
    },
    shearBranch: () => {
      // 选中switch节点,进行粘贴分支
      if (activateNode.value?.type !== 'switch') return
      activateNode.value.branchList.push(data)
      // 粘贴完剪切的数据 ,清空剪切板
      shearPlate.value = null
    },
  }

  const doType = type + (Array.isArray(data) ? 'Branch' : 'Node')

  doMap[doType]()
}
const shortcutKeyFlag = ref(true)
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

    {{ getParentNode(nodeList, activateNode, null) }}
    <!-- 1{{ hoverStack.map(i => i.toString()).length }} 2{{ dragConf.banDropNodeList }} 3{{ activateNode }} -->
    <AddNodeDialog
      ref="addNodeDialogRef"
    ></AddNodeDialog>
    <div
      v-if="shortcutKeyFlag"
      v-mousetrap="['mod+c', 'mod+v', 'mod+x']"
      @mod+c="() => toCtrlC()"
      @mod+x="() => toCtrlX()"
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
