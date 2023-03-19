import { useCommunicateStore } from '@/store'
const communicate = useCommunicateStore()
const workerUrl = `${import.meta.env.VITE_APP_BASE_URL}/worker/sharedWorker.js`
console.log(workerUrl)

let sw
const sharedWorker = {
  Init() {
    if (!window.SharedWorker) {
      console.error('当前浏览器不支持SharedWorker')
      return
    }
    // sharedWorker.js放在public目录下
    sw = new SharedWorker(workerUrl)
    // 启动线程端口
    sw.port.start()
    // 线程监听消息
    sw.port.addEventListener('message', this.messageHandle)
  },
  close() {
    if (!sw) return
    this.postMessage({ sendType: 'close' })
    sw.port.removeEventListener('message', this.messageHandle)
    sw.port.close()
    sw = undefined
  },
  getSharedWorker() {
    return sw
  },
  closeWebsocket() {
    this.postMessage({ sendType: 'clearWebsocket' })
  },
  openWebsocket() {
    this.postMessage({ sendType: 'openWebsocket' })
  },
  setServeCount(val) {
    this.postMessage({
      sendType: 'all',
      data: {
        eventType: 'updateServeCount',
        content: val,
      },
    })
  },
  /**
   * @param {sendType,data} data
   *  {
   *    sendType: 'broadcast',// [broadcast,all,close]
   *    data: {
   *      eventType:'updateServeCount',//对应messageHandle里的类型处理
   *      content:'xx'
   *    }
   *  }
   * @returns
   */
  postMessage(data) {
    if (!sw) return
    sw.port.postMessage(data)
  },
  messageHandle({ data }) {
    switch (data.eventType) {
      case 'updateServeCount':
        communicate.changeServeCount(data.content)
        break
      case 'addServeCount':
        communicate.addServeCount(data.content)
        break

      default:
        console.error('共享线程接到消息匹配不到类型!', data)
        break
    }
  },
}

export default sharedWorker
