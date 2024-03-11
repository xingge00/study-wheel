
<script setup>
import { computed, inject, ref } from 'vue'
import Condition from './components/Condition.vue'
import { getParentNode } from '@/views/canvas/components/nodeConfig.js'

/**
 *
if.nodeInfo{
  nodeName:'if',//节点名称
  condition:'a>b',//条件表达式
  firstBrachTrue:true,
}
 */
const activateNode = inject('activateNode')

// 当前选中的是否分支(否则是节点)
const isActiveBranch = computed(() => Array.isArray(activateNode.value))

const curActivateNode = computed(() => {
  if (isActiveBranch.value) {
    const { parentNode, branchIdx } = getParentNode(activateNode.value[0])
    console.log('parentNode', parentNode)
    return parentNode
  } else {
    return activateNode.value
  }
})
const nodeInfo = computed({
  get: () => curActivateNode.value?.nodeInfo || {},
  set: (val) => {
    curActivateNode.value.nodeInfo = val
  },
})

const formatNodeInfo = (node) => {
  const genFieldItem = (label, field, type, conf = {
    options: [{ label: '是', value: true }, { label: '否', value: false }],
  }) => ({ label, field, type, conf })

  const { type } = node
  switch (type) {
    case 'if':
      return {
        base: [
          {
            moduleName: '基本信息',
            attrs: [
              genFieldItem('节点名称', 'nodeName', 'input'),
              genFieldItem('判断条件', 'condition', 'input'),
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
              }),
            ].filter(i => isActiveBranch.value), // 选中分支时才显示
          },
          {
            moduleName: '输入参数',
            attrs: [
              // { label: '节点名称', type: 'input', disabled: true, value: 'if' },
            ],
          },
          {
            moduleName: '输出参数',
            attrs: [
              // { label: '节点名称', type: 'input', disabled: true, value: 'if' },
            ],
          },
        ].filter(i => i?.attrs?.length), // 没有属性时不显示
        other: [
          { moduleName: '', attrs: [{ label: '', type: 'input' }] },
        ].filter(i => i?.attrs?.length), // 没有属性时不显示
      }

    default:
      return { base: [], other: [] }
  }
}

const renderAttrs = computed(() => {
  const { base, other } = formatNodeInfo(curActivateNode.value)
  console.log(base, other)
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
</script>

<template>
  <el-tabs v-model="activeName" :stretch="true">
    <el-tab-pane v-for="(tab) in renderAttrs" :key="tab.label" :label="tab.label" :name="tab.label">
      <el-form :model="nodeInfo">
        {{ nodeInfo }}
        <div class="tab-pane-content">
          <div v-for="(module, idx2) in tab.modules" :key="idx2" class="module-content">
            <div class="module-name">
              {{ module.moduleName }}
            </div>
            <div v-for="(attr, idx3) in module.attrs" :key="idx3">
              <el-form-item :label="attr.label" :rules="attr.required && [{ required: true, message: '' }]">
                <el-input
                  v-if="attr.type === 'input'"
                  :disabled="attr.conf.disabled"
                  :model-value="bindTargetField(attr.field)"
                  @input="(val) => onChange(val, attr.field)"
                ></el-input>

                <el-radio-group
                  v-if="attr.type === 'radio'"
                  :disabled="attr.conf.disabled"
                  :model-value="bindTargetField(attr.field)"
                  @change="(val) => onChange(val, attr.field)"
                >
                  <el-radio-button
                    v-for="radio in attr.conf.options"
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
    border-bottom: 1px solid #eee;
    .module-name {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
}
</style>
