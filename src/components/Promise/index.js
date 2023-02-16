class MyPromise {
  static async all(arr) {
    let index = 0
    const resArr = []
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) return reject(new Error('需要传入数组'))
      if (arr.length === 0) return resolve([])
      for (const idx in arr) {
        const cur = arr[idx]
        if (!(cur instanceof Promise)) {
          resArr[idx] = cur
          if (++index === arr.length) resolve(resArr)
          continue
        }
        cur.then((res) => {
          resArr[idx] = res
          if (++index === arr.length) resolve(resArr)
        }).catch((err) => {
          reject(err)
        })
      }
    })
  }

  static race(arr) {
    if (!Array.isArray(arr)) return undefined

    return new Promise((resolve, reject) => {
      for (const idx in arr) {
        let cur = arr[idx]
        if (!(cur instanceof Promise)) {
          cur = Promise.resolve(cur)
        }
        cur.then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      }
    })
  }
}
const p0 = new Promise((resolve) => {
  resolve('resolve')
})

const p1 = 1

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve')
  }, 1000)
})

const p3 = new Promise((resolve, reject) => {
  reject('reject')
})
// const p3 = 1

export { p0, p1, p2, p3, MyPromise }
