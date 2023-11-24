import { defineStore } from 'pinia'

const getBall = (pos, size, isChild = true) => ({
  id: Symbol('ball'),
  isChild,
  pos,
  size,
})

// // 球的真实坐标
// const ballList = ref([
//   getBall([window.innerWidth / 2, window.innerHeight / 2], 100),
//   getBall([500, 400], 100),
// ])

export const usePlayBall = defineStore('playBall', {
  state() {
    return {
      ballList: [
        getBall([window.innerWidth / 2, window.innerHeight / 2], 100),
        getBall([500, 400], 100),
      ],
    }
  },
  actions: {
    setBallList(val) {
      this.ballList = val
    },

  },
})
