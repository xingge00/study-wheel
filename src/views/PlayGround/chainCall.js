const list = [
  { name: 'a', age: 19, id: 1 },
  { name: 'b', age: 2, id: 20 },
  { name: 'b', age: 217, id: 25 },
  { name: 'b', age: 25, id: 26 },
  { name: 'b', age: 22, id: 22 },
  { name: 'b', age: 21, id: 21 },
  { name: 'c', age: 3, id: 3 },
  { name: 'd', age: 16, id: 4 },
  { name: 'd', age: 42, id: 5 },
]

function query(arr) {
  function where(cb) {
    return query(arr.filter(cb))
  }
  function sortBy(field) {
    const temp = [...arr]
    temp.sort((a, b) => a[field] - b[field])
    return query(temp)
  }
  function groupBy(field) {
    const res = []
    arr.forEach((item) => {
      const key = item[field]
      const idx = res.findIndex(i => i[field] === key)
      if (idx === -1) {
        const obj = {
          [field]: key,
          list: [item],
        }
        res.push(obj)
      } else {
        res[idx].list.push(item)
      }
    })
    return query(res)
  }
  function execute() {
    return arr
  }
  return {
    where,
    sortBy,
    groupBy,
    execute,
  }
}
const result = query(list)
  .where(item => item.age > 18)
  .sortBy('id')
  .groupBy('name')
  .execute()

console.log(result)
