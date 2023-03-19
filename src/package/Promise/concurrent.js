/**
 * 异步任务最大并发数
 */

// 最大重新执行次数
const MAX_TIME = 2
// 最多并发数
const MAX_TASK_COUNT = 4
// 当前并发数
let runningCount = 0
// 任务队列
const queue = []
// 异常任务
const errTasks = []
// 剩余任务数
let taskCount = 0

const endLog = () => {
  if (errTasks.length) console.error(`异常任务${errTasks.join()}`)
  console.timeEnd()
}

// 执行任务
const runTask = () => {
  if (queue.length === 0) {
    if (taskCount === 0) endLog()
    return
  }
  if (runningCount >= MAX_TASK_COUNT) {
    return
  }

  runningCount++
  const curTask = queue.shift()
  let curTime = 1

  const doingTask = () => {
    curTask().then((res) => {
      console.log(`${res}已完成`)
      runningCount--
      taskCount--
      runTask()
    }).catch((name) => {
      if (curTime++ < MAX_TIME) {
        console.error(`${name}正常重新执行`)
        doingTask()
      } else {
        runningCount--
        taskCount--
        errTasks.push(name)
        runTask()
      }
    })
  }
  doingTask()
  runTask()
}

// 统一收集异步任务
const addTask = (task) => {
  taskCount++
  queue.push(task)
  setTimeout(() => {
    runTask()
  }, 0)
}

// let errFlag = 0

const generatePromise = (time, name) => {
  return () => new Promise((resolve, reject) => {
    console.log(`${name}正在执行...`)
    setTimeout(() => {
      resolve(name)

      // 模拟报错
      // errFlag = (errFlag + 1) % 2
      // if (errFlag) reject(name)
      // else resolve(name)
    }, time)
  })
}

console.time()
addTask(generatePromise(1000, 'task1'))
addTask(generatePromise(1000, 'task2'))
addTask(generatePromise(1000, 'task3'))
addTask(generatePromise(1000, 'task4'))
addTask(generatePromise(1000, 'task5'))
addTask(generatePromise(1000, 'task6'))
addTask(generatePromise(1000, 'task7'))
addTask(generatePromise(1000, 'task8'))
addTask(generatePromise(1000, 'task9'))
