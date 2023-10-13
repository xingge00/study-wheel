import Sortable from 'sortablejs'
import { onMounted, onUnmounted } from 'vue'
function useDragTable(tableRef, onEnd) {
  let sortable = null
  const init = () => {
    if (!tableRef?.value?.$el) return
    /** 绑定拖动 */
    const el = tableRef.value.$el.querySelector('.el-table__body tbody')
    if (!el) return
    sortable = new Sortable(el, {
      handle: '.el-table__row .el-table__cell', // 可拖动元素
      filter: '.el-table__row .cell > .no-drag', // 带有样式.no-drag的元素不允许拖拽
      preventOnFilter: false, // filter的元素不禁用事件
      sort: true,
      animation: 300,
      forceFallback: false, // 忽略 HTML5拖拽行为，强制回调进行
      onEnd,
    })
  }
  const destroy = () => {
    if (sortable) {
      sortable?.destroy()
      sortable = null
    }
  }
  onMounted(() => {
    init()
  })
  onUnmounted(() => {
    destroy()
  })
}

export default useDragTable
export { useDragTable }
