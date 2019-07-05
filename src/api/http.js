import axios from 'axios'
import Qs from 'qs'

// 主地址
// axios.defaults.baseURL = '/smartelder'
// axios.defaults.timeout = 15000
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [function (data) {
  data = Qs.stringify(data)
  return data
}]

// // 拦截器loading白名单
// const whiteList = [
//   '/api/intelligent/show/queryIntelligent'
// ]

// // 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// // 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// // 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
// let needLoadingRequestCount = 0
// let fullLoading
// export const showLoading = () => {
//   if (needLoadingRequestCount === 0) {
//     fullLoading = Loading.service({
//       lock: true,
//       text: '拼命加载中...',
//       spinner: 'el-icon-loading',
//       background: 'rgba(0, 0, 0, 0.7)'
//     })
//   }
//   needLoadingRequestCount++
// }

// export const tryHideLoading = () => {
//   if (needLoadingRequestCount <= 0) return
//   needLoadingRequestCount--
//   if (needLoadingRequestCount === 0) {
//     fullLoading.close()
//   }
// }

axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = sessionStorage.getItem('token')
    }
    // if (whiteList.indexOf(config.url) < 0) {
    //   showLoading()
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http request 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
  }
)

export default axios
