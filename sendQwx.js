// npm install form-data adm-zip -D // 脚本需要安装额外依赖
// node sendQwx.js // 执行脚本
const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')
const AdmZip = require('adm-zip')

// 发送文件不能超过20M
const BOT_KEY = 'xxxxxxxxxxx' // 机器人的key
const filePath = 'dist' // 需要发送的文件目录
const tagetFileName = 'xxx-xxxx生产包dist.zip' // 发送显示的文件名称

;(async function main() {
  const zip = toZip(filePath)
  const media_id = await uploadFileToWX(zip)
  await sendFile(media_id)
  // sendTextAndCallMember('xxx-xxxx生产包已经打包完成，请前往下载', ['xxxxxxxxxxx'])
  console.log('文件发送成功')
})()

function toZip(filePath) {
  const outputFile = `${filePath}.zip`
  const zip = new AdmZip()
  zip.addLocalFolder(`./${filePath}`, filePath)
  zip.writeZip(`./${outputFile}`)
  return outputFile
}
async function uploadFileToWX(filePath) {
  const file = fs.createReadStream(filePath)
  const form = new FormData()
  form.append('media', file, tagetFileName)
  const len = await new Promise((resolve, reject) => {
    return form.getLength((err, length) => (err ? reject(err) : resolve(length)))
  })

  const res = await axios({
    method: 'post',
    url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media?key=${BOT_KEY}&type=file`,
    data: form,
    maxBodyLength: 20 * 1024 * 1024, // 限制最大20M，不写默认为10M
    headers: {
      ...form.getHeaders(),
      'Content-Length': len,
    },
  })
  fs.unlink(filePath, () => {})
  if (res.data.errcode !== 0) return console.error('文件上传失败')
  return res.data.media_id
}
async function sendFile(media_id) {
  axios({
    method: 'post',
    url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${BOT_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'file',
      file: {
        media_id,
      },
    },
  })
}
async function sendTextAndCallMember(content, mentioned_mobile_list = []) {
  axios({
    method: 'post',
    url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${BOT_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'text',
      text: {
        content,
        mentioned_mobile_list,
      },

    },
  })
}
