import axios from 'axios'
import apiList from './api-list'
import {Indicator, Toast} from 'mint-ui'
import NO_LOADING_LIST from '../constants/fetch-no-loading'
let api = {}

api.BaseUrl = process.env.BASE_URL

let isShowLoading = true

// 拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  isShowLoading = NO_LOADING_LIST.every(item => {
    return config.url.indexOf(item) === -1
  })
  if (isShowLoading) {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
  }
  console.log(`isShowLoading：${isShowLoading}`)
  config.headers['Authorization'] = localStorage.getItem('authorization') || ''
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(data => {
  if (isShowLoading) {
    Indicator.close()
  }
  if (data.data.time) {
    localStorage.setItem('TIME', data.data.time)
  }
  if (data.data.status.code !== 0) {
    Toast(data.data.status.msg)
  }
  return data.data
}, error => {
  if (isShowLoading) {
    Indicator.close()
  }
  return Promise.reject(error)
})

let post = (url, data = {}) => {
  return axios.post(url, data)
}
let get = (url, params = {}) => {
  return axios.get(url, {
    params
  })
}
let put = (url, data = {}) => {
  return axios.put(url, data)
}
let deleteFun = (url, data = {}) => {
  return axios(url, {
    method: 'DELETE',
    params: data
  })
}

for (let key in apiList) {
  if (apiList[key].method === 'POST') {
    api[key] = (data = {}) => {
      return post(apiList[key].url, data)
    }
  }
  if (apiList[key].method === 'GET') {
    api[key] = (params = {}) => {
      return get(apiList[key].url, params)
    }
  }
  if (apiList[key].method === 'PUT') {
    api[key] = (data = {}) => {
      return put(apiList[key].url, data)
    }
  }
  if (apiList[key].method === 'DELETE') {
    api[key] = (data = {}) => {
      return deleteFun(apiList[key].url, data)
    }
  }
}
export default api
