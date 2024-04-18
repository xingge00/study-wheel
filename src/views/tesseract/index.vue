
<script setup>
import { onMounted, ref } from 'vue'
import { createWorker } from 'tesseract.js'

const text = ref('')
const img = ref('')
const recognize = async function (evt) {
  const worker = await createWorker('eng+chi_sim')
  const files = evt.target.files

  for (let i = 0; i < files.length; i++) {
    img.value = URL.createObjectURL(files[i])
    const ret = await worker.recognize(files[i])
    console.log('ret.data.text', ret.data.text)
    text.value = ret.data.text
  }

  await worker.terminate()
}

onMounted(() => {
  const elm = document.getElementById('uploader')
  elm.addEventListener('change', recognize)
})
</script>

<template>
  <div>
    <input id="uploader" type="file" multiple>
    <div>
      <img :src="img" alt="">
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
