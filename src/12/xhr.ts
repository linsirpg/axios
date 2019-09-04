import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  console.log(config)
  const { data = null, url, method = 'get', headers } = config
  console.log(headers)
  const request = new XMLHttpRequest()
  request.open(method, url, true)
  // headers 必定存在content-type 这个设置。应为我们header没有设置的时候默认传了个空的对象
  Object.keys(headers).forEach(function(name) {
    // 如果不存在data的话，
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.onreadystatechange = function() {}

  request.send(data)
}
