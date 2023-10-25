<script>
import { computed, defineComponent, h, nextTick, ref } from 'vue'
import Column from './Column.vue'
import { useDragTable } from './useDragTable'
/** v-for遍历的table组件，可以使用render编写h函数 */
export default defineComponent({
  components: {
    Column,
  },

  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    colums: {
      type: Array,
      default: () => [],
    },
    useDrag: {
      // 是否启用拖动排序
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:tableData', 'sortChange'],
  setup(props, { expose, emit }) {
    const newTableData = computed({
      get: () => props.tableData,
      set: val => emit('update:tableData', val),
    })

    // 拖动排序
    const tableRef = ref(null)
    props.useDrag
        && useDragTable(tableRef, async ({ oldIndex, newIndex }) => {
          const temp = newTableData.value
          const targetRow = temp.splice(oldIndex, 1)[0]
          temp.splice(newIndex, 0, targetRow)
          newTableData.value = []
          await nextTick()
          newTableData.value = temp
          emit('sortChange')
        })

    expose({
      getSelectionRows: () => tableRef.value.getSelectionRows(),
      clearSelection: () => tableRef.value.clearSelection(),
      getRef: () => tableRef.value,
    })
    return {
      tableRef,
      newTableData,
    }
  },
})
</script>

<template>
  <el-table
    ref="tableRef"
    border
    :data="newTableData"
    style="width: 100%"
    highlight-current-row
    class="cell-no-padding render-table"
    v-bind="$attrs"
  >
    <Column :colums="colums"></Column>
  </el-table>
</template>

<style lang="scss" scoped>

</style>
