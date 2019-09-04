import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  // config.data = JSON.stringify(config.data)
  config.url = transformUrl(config)
  config.data = transformRequest(config.data)
  config.headers = transformHeaders(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config

  return bulidURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig) {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}
export default axios
