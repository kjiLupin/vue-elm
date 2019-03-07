import axios from 'axios'

// 请求成功
const isOK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then(res => {
      const { errno, data } = res.data
      if (errno === isOK) {
        return data
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}
