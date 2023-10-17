const useFetch = (doFn) => {
  const isLoading = ref(false)
  const result = ref(null)
  const execute = (params) => {
    isLoading.value = true
    doFn(params).then((res) => {
      res && (result.value = res)
      return res
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      isLoading.value = false
    })
  }
  return {
    isLoading,
    result,
    execute,
  }
}

const mockBuyApi = (params) => {
  console.log('请求参数', params)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}

export { useFetch, mockBuyApi }
