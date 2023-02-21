import { ref } from "vue"
// 当前链接到共享线程的端口列表
const portList = []

// 缓存serveCount模拟调用后端初始化
const serveCount = ref(0)
const updateServeCount = (data)=> {
  if(!data) return
  if(data?.dataType === 'updateServeCount') {
    serveCount.value = data.content
  }
}

// 模拟websocket给客户端推送更新信息serveCount+1的消息
const mockWebsocket = (() => {
  return setInterval(()=>{
    serveCount.value = serveCount.value + 1
    broadcast({dataType:'addServeCount',content: 1}, true)
  },2000)
})()

// 监听连接
self.addEventListener('connect', (e) => {
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
        broadcast(msg,true)
        break
      case 'broadcast':
        updateServeCount(msg.data)
        broadcast(msg.data)
        break
      case 'close':
        removePort(port)
        break
      case 'clearWebsocket':
        clearInterval(mockWebsocket)
        break
      default:
        
    }
  }

  // 模拟初始化serveCount
  port.postMessage({dataType:'updateServeCount',content:serveCount.value})
  

  // 广播消息
  function broadcast(data,includeSelf=false) {
    portList.forEach(item => {
      if(includeSelf || item !== port) {
        item.postMessage(data)
      }
    })
  }

  // 移除端口
  function removePort(port) {
    const idx = portList.findIndex(i => i === port)
    if(idx === -1 ) return
    portList.splice(0,1)
  }
})

