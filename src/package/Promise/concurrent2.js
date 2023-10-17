const sleep = (sec, action) => new Promise((resolve) => {
  console.log(action)
  setTimeout(() => {
    console.log(`----${action}结束`)
    resolve()
  }, sec * 1000)
})

const concurrent = async (limit, items) => {
  const promises = []
  const pool = new Set()
  for (const item of items) {
    // 包装一层promise，确保有.then方法
    const fn = async item => await item()
    const promise = fn(item)

    pool.add(promise)
    promises.push(promises)

    const clear = () => pool.delete(promise)
    promise.then(clear, clear)
    if (pool.size >= limit) {
      await Promise.race(pool)
    }
  }
  return Promise.all(promises)
}

concurrent(2, [
  () => sleep(1, '吃饭'),
  () => sleep(2, '睡觉'),
  () => sleep(2, '唱'),
  () => sleep(3, '跳'),
  () => console.log('打篮球'),
  () => sleep(2, 'rap'),
])
