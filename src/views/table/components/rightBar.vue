<script setup lang="jsx">
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
import MyTable from '@/package/table/index'
const emit = defineEmits(['reRender'])
console.log('RightBarRightBar')
const tableData = ref([
  {
    prop: 'field1',
    label: '字段1',
    width: '100',
  },
  {
    prop: 'field3',
    label: 'label',
    width: '100',
  },
  {
    prop: 'field2',
    label: 'field2',
    width: '100',
  },
  {
    prop: 'field2',
    label: 'field2',
    width: '100',
  },
])
const addItem = (parent = null) => {
  const newItem = {
    label: '字段label',
    prop: '字段prop',
    children: [],
  }
  console.log(parent, newItem)
  if (parent) {
    if (parent.children) {
      parent.children.push(newItem)
    } else {
      parent.children = [newItem]
    }
  } else {
    tableData.value.push(newItem)
  }
}
const tableColums = [
  {
    prop: 'label',
    label: 'label',
    minWidth: '80',
    render: ({ row }) => <el-input class="no-drag" vModel={row['label']}></el-input>,
  },
  {
    prop: 'prop',
    label: 'prop',
    minWidth: '80',
    render: ({ row }) => <el-input class="no-drag" vModel={row['prop']}></el-input>,
  },
  {
    prop: '操作',
    width: '85',
    labelRender: () =>
      <span>
        <el-button onClick={() => addItem()} size="small" circle icon={Plus}></el-button>
        <el-button onClick={() => addItem()} size="small" circle icon={Minus}></el-button>
      </span>,
    render: ({ row }) =>
      <span>
        <el-button onClick={() => addItem(row)} size="small" circle icon={Plus}></el-button>
        <el-button onClick={() => addItem()} size="small" circle icon={Minus}></el-button>
      </span>,
  },
]

const reRender = () => {
  console.log('点击了重新渲染')
  console.log(JSON.parse(JSON.stringify(tableData.value)))
  emit('reRender', JSON.parse(JSON.stringify(tableData.value)))
}
</script>

<template>
  <div class="right-bar">
    <el-button @click="reRender">
      重新渲染
    </el-button>
    <MyTable
      v-model:table-data="tableData"
      class="right-bar-table"
      :use-drag="true"
      :colums="tableColums"
      row-key="prop"
    ></MyTable>
  </div>
</template>

<style lang="scss" scoped>
.right-bar {
  padding: 12px;
  width: 500px;
  flex: none;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
:deep(.right-bar-table) {
  .el-table__body-wrapper {
    .cell {
      display: flex;
      align-items: center;
    }
  }
}
</style>
