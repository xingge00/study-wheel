
<script lang="jsx">
/**
 * @example
  const searchOption = [
    { key: 'name', label: '姓名', type: 'input', defaultValue: 'xxx'},
    { key: 'sex', label: '性别', type: 'select', options: [{ label: '男', value: '1' }, { label: '女', value: '2' }]},
    { key: 'testCustom', label: '自定义', type: 'custom', component: CustomComponent}
  ]
  <SearchBar :searchOption="searchOption"></SearchBar>
 */
import { ref, useSlots } from 'vue'
export default {
  name: 'SearchBar',
  props: {
    searchOption: {
      type: Array,
      required: true,
      default: () => {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
    useSearch: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['handleSearch'],
  setup(props, { emit }) {
    const slots = useSlots()

    // 表单数据
    const formData = ref({})
    // 重置表单数据
    const handleReset = () => {
      const temp = {}
      props.searchOption.forEach(({ key, defaultValue }) => {
        temp[key] = defaultValue || ''
      })
      formData.value = temp
    }
    handleReset()

    // 触发搜索
    const handleSearch = () => {
      emit('handleSearch', formData.value)
    }

    // 根据类型渲染组件
    const componentsMap = {
      select: (itemProps, key) => {
        const { options, ...others } = itemProps
        return (
          <el-select v-model={formData.value[key]} placeholder="请选择" {...others}>
            {options.map((option) => {
              return (
                <el-option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                ></el-option>
              )
            })}
          </el-select>
        )
      },
      input: (itemProps, key) => {
        return <el-input v-model={formData.value[key]} placeholder="请输入" {...itemProps}></el-input>
      },
      custom: (itemProps, key) => {
        const { component: CustomComponent, ...others } = itemProps
        return <CustomComponent v-model={formData.value[key]} {...others}></CustomComponent>
      },

    }

    return () =>
      <div class="search-bar">
        {slots.title?.() || props.title ? <div class="title">{props.title}</div> : null}
        <div class="search-bar-inner">
          <el-form inline={true} model={formData.value} class="demo-form-inline">
            {props.searchOption.map((searchItem) => {
              const { key, label, type, ...others } = searchItem
              return (
                <el-form-item label={label} key={key} prop={key} >
                  {componentsMap[type] && componentsMap[type](others, key)}
                </el-form-item>
              )
            })}
            <el-form-item class="btn-group">
              {props.useSearch && <el-button onClick={handleSearch}>查&nbsp;询</el-button>}
            </el-form-item>
          </el-form>
        </div>
      </div>
  },

}
</script>

<style lang="scss" scoped>
/* 横向搜索栏样式 */
.search-bar {
  display: flex;
  padding: 16px;
  padding-bottom: 0;
  margin: 16px;
  margin-bottom: 0;
  background-color: #fff;
  border-radius: 4px;

  .el-form-item {
    margin-bottom: 16px;
  }
}
</style>
