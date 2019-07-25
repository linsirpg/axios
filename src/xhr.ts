import { AxiosRequestConfig } from './types'

// export default function xhr(config: AxiosRequestConfig): void {
//   console.log(config, 'config')

//   const { data = null, url, method = 'get' } = config

//   const request = new XMLHttpRequest()

//   request.open(method.toUpperCase(), url, true)

//   request.send(data)
// }

export default function xhr(config: AxiosRequestConfig): void {
  console.log(config, 122)
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method, url, true) //.open(方法, 接口地址, 是否异步)
  request.send()
}
