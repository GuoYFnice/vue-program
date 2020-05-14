import axios from 'axios'
import config from '../config/index'

const service = axios.create({
    baseURL: config.baseURL, // api的base_url
    timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置

        return config
    },
    error => {
        //  这里处理一些请求出错的情况
        // 可以统一弹出错误
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 这里处理一些response 正常返回时的逻辑
        // 可以判断token，查看是否登陆过期
        return res
    },
    error => {
        // 这里处理一些response 出错时的逻辑
        // 捕获错误信息然后进行错误提示
        return Promise.reject(error)
    }
)

export default service