import { ref } from 'vue'

export const useName = () => {
  const getRandomName = () => {
    console.log('getRandomName')
    return `${Math.random()}`
  }
  const name = ref(getRandomName())
  const setName = (val) => {
    name.value = val
  }
  return [name, setName]
}
