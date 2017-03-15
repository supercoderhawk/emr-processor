import rp from 'request-promise-native'
import {CONVERTER} from './constant'
import crypto from 'crypto'

const sign = function (path) {
  return crypto.createHash('sha256').update(encodeURI(path) + CONVERTER.SIGN, 'utf8').digest('hex')
}

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

export function get (url, qs = null, headers = null, json = true) {
  return http('GET', url, null, qs, headers, json)
}

export function post (url, data = null, headers = null, json = true) {
  return http('POST', url, data, null, headers, json)
}

export function syGet (path, qs = {}) {
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
  return get(url, null, {'x-sign': sign(fullPath), 'x-key': CONVERTER.KEY})
}
