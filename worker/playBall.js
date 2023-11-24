// 当前链接到共享线程的端口列表
const portList = []

const ballList = []
// 监听连接
self.addEventListener('connect', (e) => {
  // 当前标签的端口
  const port = e.ports[0]
  portList.push(port)
  console.log('connect链接成功',e)

  port.onmessage = ({ data:msg }) => {
    /**
     * sendType类型为:[all,broadcast,close,clearWebsocket]
     *  all：给全部端口广播消息（包括自己
     *  broadcast：除自身端口外给其他端口广播消息
     *  close：关闭当前端口
     */
    switch (msg.sendType) {
      case 'updateCurBall':
        const idx = portList.findIndex(i => i== port)
        ballList[idx] = msg.data
        broadcast(port, true)
        break
      case 'close':
        removePort(port)
        broadcast(port, true)
        break
      default:
        
    }
  }

})

// 广播消息
function broadcast(curPort,includeSelf=false) {
  portList.forEach(item => {
    if(includeSelf || item !== curPort) {
      item.postMessage(ballList)
    }
  })
}

// 移除端口
function removePort(port) {
  const idx = portList.findIndex(i => i === port)
  if(idx === -1 ) return
  portList.splice(0,1)
  ballList.splice(0,1)
}
