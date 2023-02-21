// 当前链接到共享线程的端口列表
const portList = []

// 缓存serveCount模拟调用后端初始化
let serveCount = 0
const updateServeCount = (data)=> {
  if(!data) return
  if(data?.eventType === 'updateServeCount') {
    serveCount = data.content
  }
}

// 模拟websocket给客户端推送更新信息serveCount+1的消息
const interval = () => {
  return setInterval(()=>{
    serveCount = serveCount + 1
    broadcast({eventType:'addServeCount',content: 1}, null, true)
  },2000)
}
let mockWebsocket

// 监听连接
self.addEventListener('connect', (e) => {
  if(portList.length===0){
    mockWebsocket = interval()
  }
  // 当前标签的端口
  const port = e.ports[0]
  portList.push(port)
  console.log('connect链接成功',e)

  port.onmessage = ({ data:msg }) => {
    /**
     * sendType类型为:[all,broadcast,close]
     *  all：给全部端口广播消息（包括自己
     *  broadcast：除自身端口外给其他端口广播消息
     *  close：关闭当前端口
     */
    switch (msg.sendType) {
      case 'all':
        updateServeCount(msg.data)
        broadcast(msg.data, port, true)
        break
      case 'broadcast':
        updateServeCount(msg.data)
        broadcast(msg.data, port)
        break
      case 'close':
        removePort(port)
        break
      case 'clearWebsocket':
        clearInterval(mockWebsocket)
        break
      case 'openWebsocket':
        clearInterval(mockWebsocket)
        mockWebsocket = interval()
        break
      default:
        
    }
  }

  // 模拟初始化serveCount
  port.postMessage({eventType:'updateServeCount',content: serveCount})
})

// 广播消息
function broadcast(data,curPort,includeSelf=false) {
  portList.forEach(item => {
    if(includeSelf || item !== curPort) {
      item.postMessage(data)
    }
  })
}

// 移除端口
function removePort(port) {
  const idx = portList.findIndex(i => i === port)
  if(idx === -1 ) return
  portList.splice(0,1)
  if(portList.length === 0) {
    // 端口清空则重置
    serveCount = 0
    clearInterval(mockWebsocket)
  }
}
