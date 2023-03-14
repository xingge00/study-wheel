const defineReactive = (obj, key, val, cb, instance) => {
  const deps = []
  const notiflyArr = []

  let timer = null
  Object.defineProperty(obj, key, {
    get() {
      if (!instance.isMounted && !deps.includes(cb)) deps.push(cb)
      return val
    },
    set(newVal) {
      val = newVal
      // notifly
      notifly()
    },
  })

  // 通知watcher更新视图
  function notifly() {
    deps.forEach((cb) => {
      if (!notiflyArr.includes(cb)) notiflyArr.push(cb)
    })
    mount()
  }

  function mount() {
    // 同步渲染
    // notiflyArr.forEach(cb => cb.call(instance))

    // 模拟异步渲染
    if (timer) return
    timer = setTimeout(() => {
      notiflyArr.forEach(cb => cb.call(instance))
      timer = null
    }, 0)
  }
}

const initDataFn = (value, cb, instance) => {
  Object.keys(value).forEach(key =>
    defineReactive(value, key, value[key], cb, instance),
  )
}

class Vue {
  isMounted = false
  _data = undefined
  _render = undefined
  constructor(options) {
    this._data = typeof options.data === 'function' ? options.data() : options.data
    this._render = options.render
    initDataFn(this._data, this._render, this)
  }
}

async function main() {
  const vm = new Vue({
    data() {
      return {
        msg: '123',
        bbb: 'dsds',
      }
    },
    render() {
      console.log('当前视图', this._data.msg)
      return `${this._data.msg}`
    },
  })

  // 初始化
  vm._render()
  vm.isMounted = true

  // 第一次操作
  await sleep(1000)
  vm._data.msg = 'bbb'
  vm._data.msg = '565'
  vm._data.msg = 'hello'

  // 第二次操作
  await sleep(1000)
  vm._data.msg = 'aaa'
  vm._data.msg = '565'
  vm._data.msg = 'world'
}
main()

async function sleep(time) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
