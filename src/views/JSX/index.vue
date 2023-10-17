
<script setup lang="jsx">
import { ref, shallowRef } from 'vue'
import MyInput from './components/MyInput.vue'
import SearchBar from './components/searchBar.vue'

const searchOption = ref([
  {
    key: 'name',
    label: '姓名',
    type: 'input',
    disabled: false,
  },
  {
    key: 'sex',
    label: '性别',
    type: 'select',
    defaultValue: '2',
    options: [
      {
        label: '男',
        value: '1',
      },
      {
        label: '女',
        value: '2',
      },
    ],
  },
  {
    key: 'testCustom',
    label: '自定义',
    type: 'custom',
    component: shallowRef(MyInput),
  },

])

const handleSearch = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="wrapper">
    <SearchBar :search-option="searchOption" @handleSearch="handleSearch">
    </SearchBar>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {

}
</style>
