import { isPlainObject, isDate } from './util'
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
  console.log(parmas, 1)
  console.log(Object.keys(parmas), 2)
  Object.keys(parmas).forEach(key => {
    let val = parmas[key]
    console.log(key, 'key')
    console.log(val, 'val')
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
    console.log(key, 'keykey')
    console.log(values, 'valuesvalues')
    values.forEach(val => {
      console.log(val, 'forEachVal')
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
        console.log(val, 'stringify')
      }
      console.log(`${encode(key)}=${encode(val)}`, '${encode(key)}=${encode(val)}')
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
