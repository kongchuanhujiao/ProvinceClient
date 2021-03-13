import Vue from 'vue'
import axios from 'axios'
import { LocalStorage, Notify } from 'quasar'

axios.defaults.headers.common.Authorization = 'Bearer ' + LocalStorage.getItem('token')

axios.interceptors.response.use(resp => {
  if (resp.status === 200 && resp.data.status === 0) {
    return resp
  } else {
    Notify.create({ message: '失败：' + resp.data.message, position: 'top-right' })
    Promise.reject(resp)
  }
}, err => {
  switch (err.response.status) {
    case 401:
      Notify.create({ message: '请重新登录', position: 'top-right' })
      break
    default:
      Notify.create({ message: '请求服务器失败，错误码：' + err.response.status, position: 'top-right' })
  }
  Promise.reject(err)
})

Vue.prototype.$axios = axios
