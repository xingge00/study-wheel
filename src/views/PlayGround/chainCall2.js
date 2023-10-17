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

class Query {
  constructor(arr) {
    this.arr = arr
  }

  where(cb) {
    this.arr = this.arr.filter(cb)
    return this
  }

  sortBy(field) {
    this.arr = [...this.arr].sort((a, b) => a[field] - b[field])
    return this
  }

  groupBy(field) {
    this.arr = this.arr.reduce((arr, cur) => {
      const idx = arr.findIndex(i => i[field] === cur[field])
      if (idx === -1) {
        arr.push({
          [field]: cur[field],
          list: [cur],
        })
      } else {
        arr[idx].list.push(cur)
      }
      return arr
    }, [])
    return this
  }

  execute() {
    return this.arr
  }
}

const result = new Query(list)
  .where(item => item.age > 18)
  .sortBy('id')
  .groupBy('name')
  .execute()

console.log(result)
