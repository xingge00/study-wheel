
<script setup>
import { onBeforeUnmount, onMounted, provide, ref } from 'vue'
import RenderList from './RenderList.vue'
import AddNodeDialog from './AddNodeDialog.vue'
import InfoPanel from './InfoPanel'
import CodePanel from './CodePanel'
import useCanvasDrag from './useCanvasDrag'
import { generateCode } from './function.js'
import { BaseNode, MIN_BRANCH_COUNT, getParentNode } from '@/views/canvas/components/nodeConfig.js'

const nodeList = ref([
  new BaseNode('start'),
  new BaseNode('feat'),
  new BaseNode('if', {
    branchList: [
      [new BaseNode('feat')],
    ],
  }),
  new BaseNode('switch', {
    branchList: [
      [new BaseNode('feat')],
      [new BaseNode('feat')],
      [new BaseNode('feat')],
    ],
  }),
  new BaseNode('end'),
])
window.__nodeList = nodeList

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
window.__activateNode = activateNode

onBeforeUnmount(() => {
  window.__activateNode = undefined
  window.__nodeList = undefined
})

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
  if (['start', 'end'].includes(source.type)) return

  const { parentNode, branchIdx, nodeList: branchNodeList, nodeIdx } = getParentNode(source)

  let branchInfo = null
  if (Array.isArray(source)) {
    // 剪切分支
    if (parentNode.branchList?.length <= MIN_BRANCH_COUNT) {
      throw new Error(`分支数量至少为${MIN_BRANCH_COUNT},剪切失败！`)
    }

    (parentNode.branchList || []).splice(branchIdx, 1)
    branchInfo = (parentNode.nodeInfo.branchInfoList).splice(branchIdx, 1)[0]
  } else {
    // 剪切节点
    branchNodeList.splice(nodeIdx, 1)
  }

  shearPlate.value = {
    type: 'shear',
    data: source,
    branchInfo,

  }
}
const toCtrlC = () => {
  // 没有选中节点,不进行复制
  const source = activateNode.value
  if (!source) return
  if (['start', 'end'].includes(source.type)) return

  const { branchIdx, parentNode } = getParentNode()

  shearPlate.value = {
    type: 'copy',
    data: source,
    branchInfo: branchIdx === null ? null : JSON.parse(JSON.stringify(parentNode.nodeInfo.branchInfoList[branchIdx] || {})),
  }
}

const toCtrlV = (e) => {
  // 剪切板没有内容,直接返回
  if (!shearPlate.value) return
  const { type, data, branchInfo } = shearPlate.value
  if (!data) return

  if (['end'].includes(activateNode.value.type)) return

  // 节点处理
  const doMap = {
    copyNode: () => {
      if (!activateNode.value || Array.isArray(activateNode.value)) return
      const { nodeList: branchNodeList, nodeIdx } = getParentNode()
      branchNodeList.splice(nodeIdx + 1, 0, data.copySelf())
    },
    shearNode: () => {
      if (!activateNode.value || Array.isArray(activateNode.value)) return
      const { nodeList: branchNodeList, nodeIdx } = getParentNode()
      branchNodeList.splice(nodeIdx + 1, 0, data)
      // 粘贴完剪切的数据 ,清空剪切板
      shearPlate.value = null
    },

    copyBranch: () => {
      // 选中switch节点,进行粘贴分支
      if (activateNode.value?.type !== 'switch') return

      // 目标位置添加分支
      const len = activateNode.value.branchList.push(data.map(node => node.copySelf()))
      // 父节点补充分支信息
      activateNode.value.nodeInfo.branchInfoList[len - 1] = branchInfo
    },
    shearBranch: () => {
      // 选中switch节点,进行粘贴分支
      if (activateNode.value?.type !== 'switch') return
      const len = activateNode.value.branchList.push(data)
      activateNode.value.nodeInfo.branchInfoList[len - 1] = branchInfo
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

const branchNameFlag = ref(true)
const branchName = () => {
  branchNameFlag.value = !branchNameFlag.value
}
provide('branchNameFlag', branchNameFlag)

const code = ref('')
const execute = () => {
  // console.log('BaseNode.executeList(nodeList.value, [])', BaseNode.executeList(nodeList.value, []))
  // const res = BaseNode.executeList(nodeList.value, [])
  // code.value = res.context.code
}

const codePanelRef = ref(null)
const generate = () => {
  const temp = generateCode(nodeList.value)
  console.log('generateCode', temp)
  code.value = temp
  codePanelRef.value.show()
}

const { handleMouseDown, handleMouseUp, positionDist, calcDist, onMouseWheel, scale } = useCanvasDrag()
</script>

<template>
  <div
    id="canvas-main"
    class="canvas-main"
    :style="{
      '--var-position-x': `${positionDist[0] + calcDist[0]}px`,
      '--var-position-y': `${positionDist[1] + calcDist[1]}px`,
      '--var-position-scale': scale,
    }"
    @click.capture="activateNode = null"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousewheel="onMouseWheel"
  >
    <div class="left-top-wrapper">
      <el-button @click="shortcutKey">
        快捷建：{{ shortcutKeyFlag ? '开启' : '关闭' }}
      </el-button>
      <el-button @click="branchName">
        显示分支名：{{ branchNameFlag ? '开启' : '关闭' }}
      </el-button>
      <el-button @click="execute">
        执行
      </el-button>
      <el-button @click="generate">
        生成代码
      </el-button>
    </div>
    <div class="canvas-node-container">
      <RenderList v-model="nodeList" :start-line="false"></RenderList>
    </div>
    <!-- <div style="display: inline-block;vertical-align: top;">
      shearPlate: {{ shearPlate }} <br />
      ParentNode: {{ getParentNode()?.parentNode || 'null' }} <br />
      activateNode: {{ activateNode }} <br />
      <pre>
      code<br />
      {{ code }}
    </pre>
    </div> -->
  </div>
  <!-- 添加节点弹窗 -->
  <AddNodeDialog
    ref="addNodeDialogRef"
  ></AddNodeDialog>
  <!-- 节点信息面板 -->
  <InfoPanel></InfoPanel>
  <CodePanel ref="codePanelRef">
    <pre>{{ code }}</pre>
  </CodePanel>
  <div
    v-if="shortcutKeyFlag"
    v-mousetrap="['mod+c', 'mod+v', 'mod+x']"
    @mod+c="() => toCtrlC()"
    @mod+x="() => toCtrlX()"
    @mod+v="toCtrlV"
  ></div>
</template>

<style lang="scss" scoped>
.canvas-main {
  font-size: 12px;
  width:100%;
  height: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background-image: radial-gradient(circle,#e5e9e9 15%,#f8f9f9 10%);
  background-position: center center;
  background-size: 20px 20px;
  position: relative; // 不要删除 用于获取相对画布定位
  overflow: hidden;
  .left-top-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .canvas-node-container {
    z-index: 1;
    display: inline-block;
    position: relative;
    top: var(--var-position-y);
    left: var(--var-position-x);
    transform: scale(var(--var-position-scale));
    transform-origin: 50% 50% 0px;
  }
}
</style>
