import { defineStore } from 'pinia'

export const useCommunicateStore = defineStore('communicate', {
  state() {
    return {
      serveCount: 0,
    }
  },
  actions: {
    changeServeCount(count) {
      this.serveCount = count
    },
    addServeCount(count) {
      this.serveCount = this.serveCount + count
    },

  },
})
