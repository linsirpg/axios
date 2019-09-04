import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizedName: any) {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any) {
  //判断headers里面是已经设置了content-type
  //如果有设置的话，统一请求头为 Content-Type 首字母大写格式
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    // headers 默认是一个{}
    //如果data是一个对象，平且没有设置content-type头部信息的话，默认设置头部信息 Content-Type = application/json;charset=utf-8
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}
