import request from '@/utils/request'

export const login = (data) => request({
    url:'/user/login',
    method: 'post',
    data
})

export const register = (data) => request({
    url:'/user/register',
    method: 'post',
    data
})

export const sendCode = data => request({
    url:'/user/sendCode',
    method: 'post',
    data
})

export const Pin = () => request({
    url:'/pin'
})