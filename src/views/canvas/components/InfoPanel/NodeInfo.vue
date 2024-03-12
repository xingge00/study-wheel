
<script setup>
import { computed, inject, ref, watch } from 'vue'
import Condition from './components/Condition.vue'
import { getParentNode } from '@/views/canvas/components/nodeConfig.js'

/**
 *
if.nodeInfo{
  nodeName:'if',//节点名称
  condition:'a>b',//条件表达式
  trueBranchIdx:1|2,
}
switch.nodeInfo{
  nodeName:'if',//节点名称
  branchInfoList:[
    {
    branchName:'branch1',//分支名称
    condition:'a>b',//条件表达式
    }
  ]
}
 */
const activateNode = inject('activateNode')

// 当前选中的是否分支(否则是节点)
const isActiveBranch = computed(() => Array.isArray(activateNode.value))

// 当前选中的节点或分支的父节点
const curActivateNode = ref(null)
const curActivateBranchIdx = ref(null)

watch(() => activateNode.value, (val) => {
  if (isActiveBranch.value) {
    const { parentNode, branchIdx } = getParentNode(activateNode.value)
    curActivateBranchIdx.value = branchIdx
    curActivateNode.value = parentNode
  } else {
    curActivateBranchIdx.value = null
    curActivateNode.value = activateNode.value
  }
},
{
  deep: true,
  immediate: true,
})

const nodeInfo = computed({
  get: () => curActivateNode.value?.nodeInfo || {},
  set: (val) => {
    curActivateNode.value.nodeInfo = val
  },
})

const formatNodeInfo = (node) => {
  const genFieldItem = (label, field, type, conf = {}) =>
    ({ label, field, type, ...conf })

  if (!node) return {}

  const genRenderAttrs = ({ base = [], other = [] }) => ({
    base: base.filter(i => i?.attrs?.length), // 没有属性时不显示
    other: other.filter(i => i?.attrs?.length), // 没有属性时不显示
  })
  switch (node.type) {
    case 'if':
      return genRenderAttrs({
        base: [
          {
            moduleName: '基本信息',
            attrs: [
              genFieldItem('节点名称', 'nodeName', 'input'),
              genFieldItem('判断条件', 'condition', 'input', { required: true }),
              genFieldItem('true分支索引', 'trueBranchIdx', 'radio', {
                options: [{ label: 1, value: 1 }, { label: 2, value: 2 }],
              }),

            ],
          },
          {
            moduleName: '分支信息',
            attrs: [
              genFieldItem('分支名称', '', 'input', {
                disabled: true,
                defaultValue: `分支${curActivateBranchIdx.value + 1}`,
              }),
              genFieldItem('置为true分支', 'trueBranchIdx', 'switch', {
                activeValue: curActivateBranchIdx.value === 0 ? 1 : 2,
                inactiveValue: curActivateBranchIdx.value === 0 ? 2 : 1,
              }),
            ].filter(i => isActiveBranch.value), // 选中分支时才显示
          },
          {
            moduleName: '输入参数',
            attrs: [],
          },
          {
            moduleName: '输出参数',
            attrs: [],
          },
        ],
        other: [],
      })

    case 'switch':
      return genRenderAttrs({
        base: [
          {
            moduleName: '基本信息',
            attrs: [
              genFieldItem('节点名称', 'nodeName', 'input'),
            ],
          },
          {
            moduleName: '分支信息',
            attrs: [
              genFieldItem('分支名称', `branchInfoList.${curActivateBranchIdx.value}.branchName`, 'input'),
              genFieldItem('判断条件', `branchInfoList.${curActivateBranchIdx.value}.condition`, 'input',
                { required: true }),
            ].filter(i => isActiveBranch.value), // 选中分支时才显示
          },
        ],
        other: [],
      })

    case 'feat':
      return genRenderAttrs({
        base: [
          {
            moduleName: '基本信息',
            attrs: [
              genFieldItem('节点名称', 'nodeName', 'input'),
            ],
          },

        ],
      })

    default:
      return { base: [], other: [] }
  }
}

const renderAttrs = computed(() => {
  const { base, other } = formatNodeInfo(curActivateNode.value)

  return [
    {
      label: '基础属性',
      modules: base,
    },
    {
      label: '其他属性',
      modules: other,
    },
  ]
})

const activeName = ref('基础属性')

const bindTargetField = computed({
  get() {
    return (fieldStr) => {
      const fieldArr = fieldStr?.split('.') || []
      return fieldArr.reduce((a, c) => (a?.[c] || undefined), fieldArr.length ? nodeInfo.value : undefined)
    }
  },
})

const isObject = val => typeof val === 'object' && val !== null
const onChange = (val, fieldStr) => {
  const fieldArr = fieldStr?.split('.') || []

  if (!fieldArr.length) return
  if (fieldArr.length === 1) {
    nodeInfo.value[fieldArr[0]] = val
  } else {
    const field = fieldArr.pop()
    try {
      let warnStr = 'nodeInfo'
      const obj = fieldArr.reduce((a, c) => {
        warnStr += `.${c}`
        if (!isObject(a[c])) {
          console.warn(`${warnStr}不是一个对象，已强制转化为对象`)
          a[c] = {}
        }
        return a[c]
      }, fieldArr.length ? nodeInfo.value : undefined)
      obj[field] = val
    } catch (error) {
      console.error(`nodeInfo数据异常，无法读取${fieldStr}字段`)
      console.error(error)
    }
  }
}

// 公用绑定
const commonBind = attr => ({
  disabled: attr?.disabled,
  modelValue: attr.field ? bindTargetField.value(attr.field) || attr.defaultValue : attr.defaultValue,
  onInput: val => onChange(val, attr.field),
  onChange: val => onChange(val, attr.field),
})
</script>

<template>
  <el-tabs v-model="activeName" :stretch="true">
    <el-tab-pane v-for="(tab) in renderAttrs" :key="tab.label" :label="tab.label" :name="tab.label">
      <el-form :model="nodeInfo" label-width="100px">
        {{ nodeInfo }}
        <div class="tab-pane-content">
          <div v-for="(module, idx2) in tab.modules" :key="idx2" class="module-content">
            <div class="module-name">
              {{ module.moduleName }}
            </div>
            <div v-for="(attr, idx3) in module.attrs" :key="idx3">
              <el-form-item :label="attr.label" :rules="attr.required && [{ required: true, message: '' }]">
                <el-input v-if="attr.type === 'input'" v-bind="commonBind(attr)"></el-input>
                <el-switch
                  v-else-if="attr.type === 'switch'"
                  :key="attr"
                  v-bind="commonBind(attr)"
                  :active-value="attr.activeValue"
                  :inactive-value="attr.inactiveValue"
                ></el-switch>
                <el-radio-group
                  v-else-if="attr.type === 'radio'" v-bind="commonBind(attr)"
                >
                  <el-radio-button
                    v-for="radio in attr.options"
                    :key="radio.value"
                    :label="radio.label"
                    :value="radio.value"
                  >
                  </el-radio-button>
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
        </div>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.tab-pane-content {
  padding: 0 8px;
  .module-content {
    padding: 8px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
    .module-name {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
}
</style>
