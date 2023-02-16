import { nanoid } from 'nanoid'

export default function (length) {
  let id = nanoid(length).trim()
  // 确保字符串为以英文开头，只包含英文和数字
  while (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(id)) {
    id = nanoid(length).trim()
  }
  return id
}
