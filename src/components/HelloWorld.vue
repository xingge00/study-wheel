<script setup>
import { ref } from 'vue'
import { useName } from './customHooks/useName'

defineProps({
  msg: String,
})

const count = ref(0)
const [name, setName] = useName()
console.log('setup')
const toChangeNanme = () => {
  setName(count)
}
</script>
<!-- <script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      datamsg: 'ssss',
      testDivShow: true,
    }
  },
  beforeCreate() {
    // console.log('msg', this.msg)
    // console.log('datamsg', this.datamsg)
  },
  beforeUpdate() {
    // console.log('beforeUpdate')
  },
  renderTracked({ key, target, type }) {
    console.log('renderTracked', { key, target, type })
  },
  methods: {
    toDelete() {
      // const testDiv = document.querySelector('#test')
      // testDiv.parentNode.removeChild(testDiv)
      this.testDivShow = false
    },
  },
}
</script> -->

<template>
  <div>
    222
  </div>
  <div>
    <el-button @click="toChangeNanme">
      changeName
    </el-button>
    <el-button @click="toDelete">
      删除
    </el-button>
  </div>
  name：{{ name }}
</template>

<style scoped>

</style>
