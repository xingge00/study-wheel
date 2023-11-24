import { usePlayBall } from '@/store'

const playBall = usePlayBall()
const workerUrl = `${import.meta.env.VITE_APP_BASE_URL}/worker/playBall.js`

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
  updateCurBall(ball) {
    this.postMessage({
      sendType: 'updateCurBall',
      data: JSON.stringify(ball),
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
    const temp = data.map(i => ({
      id: Symbol('ball'),
      ...JSON.parse(i),
    }))
    console.log('temp', temp)
    playBall.setBallList(temp)
  },
}

export default sharedWorker
