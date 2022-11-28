import axios from "axios";

const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

// axios的请求拦截器
request.interceptors.request.use(
    config => {
    console.log(config)
    return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        const { data } = response
        return data
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default request

