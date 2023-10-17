
export const jieliu = (cb, time) => {
  let timer = null

  return function (...arg) {
    const that = this
    if (timer) return
    timer = setTimeout(() => {
      cb.apply(that, arg)
      timer = null
    }, time)
  }
}

export const fangdou = (cb, time) => {
  let timer = null

  return function (...arg) {
    const that = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cb.apply(that, arg)
      timer = null
    }, time)
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function (cb, initValue) {
  let acc = initValue === undefined ? this[0] : initValue
  for (let i = initValue === undefined ? 1 : 0; i < this.length; i++) {
    acc = cb(acc, this[i])
  }
  return acc
}

// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function (caller, params = []) {
  caller = caller !== undefined && caller != null ? Object(caller) : window
  caller[this] = this
  const result = caller[this](...params)
  delete caller[this]
  return result
}

// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (caller, ...params) {
  caller = caller !== undefined && caller != null ? Object(caller) : window
  caller[this] = this
  const result = caller[this](...params)
  delete caller[this]
  return result
}

// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (caller, ...params) {
  const that = this
  return function (...others) {
    caller = caller !== undefined && caller != null ? Object(caller) : window
    caller[that] = that
    const result = caller[that](...params, ...others)
    delete caller[that]
    return result
  }
}

// 两数之和
function twoNumAdd(arr, target) {
  const map = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const needNum = target - arr[i]
    if (map[needNum]) {
      result.push([needNum, arr[i]])
    } else {
      map[arr[i]] = true
    }
  }
  return result
}
function threeNumAdd(arr, target) {
  const result = []
  for (let i = 0; i < arr.length - 2; i++) {
    const realTarget = target - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      const res = twoNumAdd(arr.slice(j), realTarget)
      if (res.length) {
        res.forEach((item) => {
          let temp = [arr[i], ...item]
          temp.sort((a, b) => b - a)
          temp = temp.join(',')
          !result.includes(temp) && result.push(temp)
        })
      }
    }
  }
  return result
}

function twoNumAdd2(arr, target) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const needNum = target - arr[i]
    if (map[needNum]) return [needNum, arr[i]]
    else map[arr[i]] = true
  }
}

function versionSort(arr) {
  return arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let n = 0
    while (n <= Math.min(arr1.length, arr2.length)) {
      const num1 = Number(arr1[n])
      const num2 = Number(arr2[n])
      if (num1 === num2) {
        n += 1
      } else {
        return num2 - num1
      }
    }
    return -1
  })
}

function findDiff(str) {
  const len = str.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const char = str[i]
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (const [key, value] of map) {
    if (value === 1) return key
  }
}

function stringGroup(str) {
  let result = [str[0]]
  for (let i = 1; i < str.length; i++) {
    const char = str[i]
    result = insertChar(result, char)
  }
  function insertChar(curArr = [], char = 'a') {
    return curArr.reduce((acc, cur) => {
      for (let i = 0; i < cur.length + 1; i++) {
        const resStr = cur.substring(0, i) + char + cur.substring(i)
        acc.push(resStr)
      }
      return acc
    }, [])
  }
  return result
}
/**
 * listToTree
 * [
  { id: 1, title: "child1", parentId: 0 },
  { id: 2, title: "child2", parentId: 0 },
  { id: 3, title: "child1_1", parentId: 1 },
  { id: 4, title: "child1_2", parentId: 1 },
  { id: 5, title: "child2_1", parentId: 2 }
]
 */
function listToTree(arr) {
  const pNodeList = []
  arr.forEach((node) => {
    const pIdx = arr.findIndex(i => i.id === node.parentId)
    if (pIdx !== -1) {
      if (arr[pIdx].children) arr[pIdx].children.push(node)
      else arr[pIdx].children = [node]
    }
    else pNodeList.push(node)
  })
  return pNodeList
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
// 深度优先遍历
function traverseD(root, result = []) {
  result.push(root.val)
  if (root.left) traverseD(root.left, result)
  if (root.right) traverseD(root.right, result)
  return result
}
function traverseD2(root, result = []) {
  const todoList = [root]
  while (todoList.length > 0) {
    const curNode = todoList.shift()
    result.push(curNode.val)
    if (curNode.right) todoList.unshift(curNode.right)
    if (curNode.left) todoList.unshift(curNode.left)
  }
  return result
}

// 广度优先遍历
function traverseB(root, result = []) {
  const todoList = [root]
  while (todoList.length > 0) {
    const curNode = todoList.shift()
    result.push(curNode.val)
    if (curNode.left) todoList.push(curNode.left)
    if (curNode.right) todoList.push(curNode.right)
  }
  return result
}

function isErCha(list) {
  const root = list[0]
  const rightStartIdx = list.findIndex(i => i > root)

  for (let i = rightStartIdx; i < list.length; i++) {
    if (list[i] < root) return false
  }

  let left = true
  if (rightStartIdx > 1) {
    left = isErCha(list.slice(1, rightStartIdx + 1))
  }

  let right = false
  if (rightStartIdx < list.length) {
    right = isErCha(list.slice(rightStartIdx))
  }

  return left && right
}

// 1 1 2 3
function fib(n) {
  if (n <= 2) return 1
  const cache = [1, 1]
  for (let i = 2; i < n; i++) {
    cache[i] = cache[i - 2] + cache[i - 1]
  }
  return cache[cache.length - 1]
}

function maxSlidingWindow(nums, k) {
  const result = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    const max = Math.max(nums[i], nums[i + 1], nums[i + 2])
    result.push(max)
  }
  return result
}

function test() {
  const findThePrefixCommonArray = function (A, B) {
    const res = A[0] === B[0] ? [1] : [0]
    const mapA = {}
    const mapB = {}
    for (let i = 1; i < A.length; i++) {
      let sum = 0
      if (A[i] === B[i]) sum++
      else {
        if (mapB[A[i]]) sum++
        if (mapA[B[i]]) sum++
      }
      mapA[A[i]] = true
      mapB[B[i]] = true
      res[i] = res[i - 1] + sum
    }
    return res
  }

  console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]))
}

function main() {
  // const c1 = new TreeNode(1, new TreeNode(3), new TreeNode(4))
  // const c2 = new TreeNode(2, new TreeNode(5))
  // const params = new TreeNode(0, c1, c2)
  // const result = []
  // const result2 = []
  // traverseD(params, result)
  // traverseD2(params, result2)
  // console.log(JSON.stringify(result))
  // console.log(JSON.stringify(result2))
  test(1994)
  // const result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
  // console.log(JSON.stringify(result))
}
console.time()
main()
console.timeEnd()
