import { isObject, isDate } from './util'

//处理特殊字符
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function bulidURL(url: string, parmas?: any) {
  console.log(url, parmas, 'buildURL')
  if (!parmas) {
    return url
  }
  const parts: string[] = []
  console.log(parmas)
  console.log(Object.keys(parmas))
  Object.keys(parmas).forEach(key => {
    let val = parmas[key]
    if (val === null || typeof val === 'undefined') {
      return //跳过这次循环
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  console.log(parts)
  let serializedParams = parts.join('&')
  console.log(serializedParams)
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
