import rp from 'request-promise-native'
import {CONVERTER} from './constant'
import crypto from 'crypto'

/**
 * 生成对森亿智库请求的签名
 * @param path 用于生成签名的url路径，不包含协议与域名
 */
const sign = function (path) {
  return crypto.createHash('sha256').update(encodeURI(path) + CONVERTER.SIGN, 'utf8').digest('hex')
}

/**
 * 用于进行http或者https请求，返回Promise对象
 * @param method 请求方法，支持get和post，不区分大小写
 * @param url 请求的完整url地址
 * @param data 请求的数据，仅用于post
 * @param qs 请求的查询对象，仅用于get
 * @param headers 请求头对象
 * @param json 是否将返回的json数据自动转为对象，默认为true
 */
const http = function (method, url, data = null, qs = null, headers = null, json = true) {
  let options = {
    uri: url,
    headers: headers,
    json: json
  }

  if (method.toLowerCase() === 'post') {
    options.body = data
  }

  if (method.toLowerCase() === 'get') {
    if (qs) {
      options.qs = qs
    }
  }

  return rp(options)
}

/**
 * 进行get请求，返回Promise对象
 * @param url 请求的完整url地址
 * @param qs 请求的查询对象
 * @param headers 请求头对象
 * @param json 是否将返回的json数据自动转为对象，默认为true
 */
export function get (url, qs = null, headers = null, json = true) {
  return http('GET', url, null, qs, headers, json)
}

/**
 * 进行post请求，返回Promise对象
 * @param url 请求的完整url地址
 * @param data 请求的数据
 * @param headers 请求头对象
 * @param json 是否将返回的json数据自动转为对象，默认为true
 */
export function post (url, data = null, headers = null, json = true) {
  return http('POST', url, data, null, headers, json)
}

/**
 * 请求森亿智库的数据，返回Promise对象
 * @param path 请求的路径，不含协议与主机名
 * @param qs 请求的查询对象，默认为包含时间戳
 * @returns {Promse}
 */
export function syGet (path, qs = {}, json = true) {
  let time = Math.floor(Date.now() / 1000)
  qs.ts = time
  let qsArray = []

  for (let i = 0, k = Object.keys(qs); i < k.length; i++) {
    if (k[i]) {
      qsArray.push(k[i] + '=' + encodeURIComponent(qs[k[i]]))
    }
  }
  let fullPath = path + '?' + qsArray.join('&')
  let url = CONVERTER.BASE_URL + fullPath
  return get(url, null, {'x-sign': sign(fullPath), 'x-key': CONVERTER.KEY}, json)
}
