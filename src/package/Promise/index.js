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

async function test() {
  // const all1 = await Promise.all([p0, p1, p2, p3])
// const all2 = await MyPromise.all([p0, p1, p2, p3])
// console.log(all1, all2)

  const race1 = await Promise.race([p0, p1, p2, p3])
  const race2 = await MyPromise.race([p0, p1, p2, p3])
  console.log(race1, race2)
}
test()

export { p0, p1, p2, p3, MyPromise }
