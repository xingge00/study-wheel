import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      msg: 'hello world',
    }
  },
  actions: {
    cahngeMsg(msg) {
      this.msg = msg
    },

  },
})
