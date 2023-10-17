
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import SortableJs from 'sortablejs'
import nanoid from '@/utils/nanoid'
const genrateItem = (parentItem = null) => {
  const item = {
    parentId: parentItem?.id || null,
    id: nanoid(10),
    name: nanoid(5),
    value: '',
  }
  return item
}
const getData = () => {
  const data = [genrateItem(), genrateItem(), genrateItem()]
  data.forEach((item) => {
    data.push(genrateItem(item))
    data.push(genrateItem(item))
  })
  return data
}
const originData = ref(getData())
const listToTree = (list) => {
  const res = []
  list.forEach(i => i.children = [])
  list.forEach((item, _, arr) => {
    if (item.parentId === null) {
      res.push(item)
    } else {
      const parentItem = arr.find(i => i.id === item.parentId)
      parentItem.children.push(item)
    }
  })

  // 递归添加prop前缀
  function recursion(arr, str) {
    arr.forEach((i, idx) => {
      i.prop = str + idx
      if (i.children.length > 0) {
        recursion(i.children, `${i.prop}.children.`)
      }
    })
  }
  recursion(res, 'renderData.')
  return res
}

const fieldTables = ref({
  rules: {
    value: [
      { required: true, message: '必填', trigger: 'blur' },
    ],
  },
  renderData: [],
})
watch(() => originData.value,
  (val) => {
    fieldTables.value.renderData = listToTree(val)
  },
  {
    immediate: true,
  },
)

/** 初始化拖拽表格 */
const init = () => {
  let drapItem = null
  let targetItem = null
  let targetEl = null
  let sameLayerList = null
  const el = document.querySelector('.el-table__body-wrapper tbody')
  return new SortableJs(el, {
    forceFallback: true, // 忽略 HTML5拖拽行为，强制回调进行
    fallbackClass: 'sortable-fallback', // 当使用forceFallback的时候，被复制的dom的css类名

    handle: '.el-table__cell:first-child',

    draggable: '.el-table__row', // 允许拖拽的项目类名

    onStart(customEvent) {
      const itemEl = customEvent.item
      console.log(itemEl.className)
      const drapId = itemEl.querySelector('span[sortable-id]').getAttribute('sortable-id')

      drapItem = originData.value.find(i => `${i.id}` === `${drapId}`)
      sameLayerList = originData.value.filter(i => i.parentId === drapItem.parentId)
      console.log(sameLayerList)
    },
    onMove(customEvent) {
      // TODO: 防抖
      targetEl = customEvent.related
      return false // 移动过程中不进行交换
    },

    onEnd(customEvent) {
      if (!targetEl) return // 没有拖动到指定位置

      window.targetEl = targetEl
      console.log(targetEl)
      // const targetId = targetEl.querySelector('span[sortable-id]').getAttribute('sortable-id')

      // targetItem = originData.value.find(i => `${i.id}` === `${targetId}`)

      // function isCurItemChild(drapItem, targetItem, originData) {
      //   if (!targetItem) return false
      //   if (targetItem.parentId === drapItem.id) return true
      //   return targetItem ? isCurItemChild(drapItem, originData.find(i => i.id === targetItem.parentId), originData) : false
      // }

      // // 判断是否是子结点
      // if (isCurItemChild(drapItem, targetItem, originData.value)) {
      //   console.warn('不能放置到子节点下')
      //   return
      // }

      // drapItem.parentId = targetItem.id
      // originData.value = [...originData.value]
    },
  })
}
let sortable = null
onMounted(() => {
  sortable = init()
})
onUnmounted(() => {
  sortable.destroy()
})

const form = ref(null)
const onSubmit = async () => {
  await form.value.validate()
}
const addItem = (row) => {
  originData.value = [...originData.value, genrateItem(row)]
}
</script>

<template>
  <el-form
    ref="form"
    :rules="fieldTables.rules"
    :model="fieldTables"
  >
    <el-table
      :data="fieldTables.renderData"
      row-key="id"
      default-expand-all
    >
      <el-table-column
        type="index"
        label=""
        width="44"
      >
        <template #default="scope">
          <span :sortable-id="scope.row.id">
            <el-icon :data-id="scope.id"><IEpOperation /></el-icon>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="参数名称"
        width="500"
      >
        <template #default="scope">
          <span>
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="value"
        label="参数值"
        width="300"
      >
        <template #header>
          <span><span style="color:red">*</span>参数值</span>
        </template>
        <template #default="scope">
          <el-form-item

            :prop="`${scope.row.prop}.value`"
            :rules="fieldTables.rules.value"
          >
            <el-input v-model="scope.row.value" :maxlength="30" placeholder="请输入参数值" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="200px"
      >
        <template #default="scope">
          <span>
            {{ scope.row.id }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="操作"
        width="70"
      >
        <template #default="scope">
          <el-button @click="addItem(scope.row)">
            <el-icon><IEpPlus /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
  <div>
    <el-button type="primary" @click="onSubmit">
      提交
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-table){
  .el-table__cell{
    padding: 4px 0;
    .el-table__placeholder {
      display: none;
    }
    .el-table__expand-icon {
      position: absolute;
      margin-left: -20px;
      margin-top: 5px;

    }
  }
  th.el-table__cell {
    padding: 8px;
  }
}
.el-form-item {
  margin-bottom: 0;
}
</style>
