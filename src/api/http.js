import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox, Loading} from 'element-ui'
import router from '../router'

const instance = axios.create({
  baseURL: String(process.env.API_HOST),
  timeout: 2000,
  withCredentials: true,
  transformRequest: [function (data) {
    let _data = qs.stringify(data)
    return _data
  }]
})

// 拦截器loading白名单
const whiteList = [
  '/demo01/api'
]

let needLoadingRequestCount = 0
let fullLoading
const showLoading = () => {
  // 发出第一个请求的时候loading状态打开,后来的请求不在重复打开
  if(needLoadingRequestCount === 0) {
    fullLoading = Loading.service({
      background: 'transparent'
    })
  }
  needLoadingRequestCount++
}
const tryHideLoading = () => {
  if(needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if(needLoadingRequestCount === 0) {
    fullLoading.close()
  }
}

instance.interceptors.request.use(
  config=> {
    if(localStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = localStorage.getItem('token')
    }
    let find = false
    whiteList.map((item)=> {
      if(config.url === item) find=true
    })
    if(!find) {
      showLoading()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  res=> {
    if(res.data.code === 403) {
      Message({
        message: '登录信息失效，请重新登录',
        type: 'error'
      })
      fullLoading.close()
      localStorage.setItem('token', '')
      router.push({path: '/'})
      return Promise.reject(res)
    } else if (res.data.code === 500) {
      MessageBox.alert(res.data.msg, '', {}).then(function () {})
      console.log(res.data.msg)
    }
    tryHideLoading()
    return res
  },
  error => {
    fullLoading.close()
    console.log(error)
  }
)
export default instance
