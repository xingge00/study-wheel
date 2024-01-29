
<script setup>
import RenderList from './RenderList.vue'

const nodeList = [
  {
    id: '0',
    type: 'start',
  },
  {
    id: '1',
    type: 'if',
  },
  {
    id: '122',
    type: 'ifds',
  },
  {
    id: '2',
    type: 'switch',
    branch: [
      [
        {
          id: '2-1-1',
          type: 'if',
        },
        {
          id: '2-1-2',
          type: 'aaa',
        },
      ],
      [
        {
          id: '2-2-1',
          type: 'aaa',
        },
        {
          id: '2-2-2',
          type: 'if',
        },
      ],
      [
        // {
        //   id: '2-3-1',
        //   type: 'if',
        // },
        // {
        //   id: '2-3-2',
        //   type: 'aaa',
        // },
      ],
    ],
  },
  {
    id: '3',
    type: 'switch',
  },
  {
    id: '4',
    type: 'aaa',
  },
  {
    id: '999',
    type: 'end',
  },
]
</script>

<template>
  <div class="canvas-main">
    <RenderList v-model:node-list="nodeList" :start-line="false"></RenderList>
  </div>
</template>

<style lang="scss" scoped>
.canvas-main {
  width:100%;
  height: 100%;
  background-image: radial-gradient(circle,#e5e9e9 15%,#f8f9f9 10%);
  background-position: center center;
  background-size: 20px 20px;
}
</style>
