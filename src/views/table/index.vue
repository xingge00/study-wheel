
<script setup lang="jsx">
import { ref } from 'vue'
import MyTable from '@/package/table/index'
const tableData = ref([
  { 'field1': 'field1', 'field2': 'field2', 'field1-1': 'field1-1的数据' },
  { 'field1': 'aafield1', 'field2': 'aaafield2', 'field1-1': 'aafield1-1的数据' },
  { 'field1': 'bbfield1', 'field2': 'bbfield2', 'field1-1': 'bbfield1-1的数据' },

])

const tableColums = [
  {
    label: '序号',
    type: 'index',
    width: '55',
    align: 'center',
  },
  {
    require: true,
    prop: 'field1',
    label: '字段1',
    children: [
      {
        prop: 'field1-1',
        label: '字段1-1',
        width: '100',
      },
      {
        prop: 'field1-2',
        label: '字段1-2',
        width: '100',
        children: [
          {
            prop: 'field1-1',
            label: '字段1-1',
            width: '100',
          },
          {
            prop: 'field1-2',
            label: '字段1-2',
            width: '100',
          },
        ],
      },
    ],
  },
  {
    prop: 'field2',
    label: '字段2编辑',
    width: '250',
    render: ({ row }) => <el-input class="no-drag" vModel={row['field2']}></el-input>,
  },
  {
    prop: 'field2',
    labelRender: () => <el-tag size="small">字段2展示</el-tag>,
    width: '300',
  },
  {
    prop: 'field3',
    label: '备注',
    minWidth: '100',
  },
]
</script>

<template>
  <MyTable
    v-model:table-data="tableData"
    :use-drag="true"
    :colums="tableColums"
  ></MyTable>
</template>

<style lang="scss" scoped>

</style>
