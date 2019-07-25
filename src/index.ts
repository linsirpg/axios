import xhr from './xhr'

import { AxiosRequestConfig } from './types'

// import { transformRequest } from './helpers/data'

import { bulidURL } from './helpers/url'

// import xhr from './xhr'

// function axios(config: AxiosRequestConfig) {
//   processConfig(config)
//   xhr(config)
// }

// function processConfig(config: AxiosRequestConfig): void {
//   config.url = transformUrl(config)
//   config.data = transformRequestData(config)
// }

// function transformUrl(config: AxiosRequestConfig): string {
//   const { url, params } = config
//   return bulidURL(url, params)
// }

// function transformRequestData(config: AxiosRequestConfig): any {
//   transformRequest(config.data)
// }
// export default axios

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  console.log(config)
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}
export default axios
