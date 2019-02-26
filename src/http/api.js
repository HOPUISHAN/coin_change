/* 
    接口配调用文件
*/
import fly from './config'
import qs from 'qs'

import config from '../config'

const host = config.host
const appKey = config.appKey
const appid = config.appid

/**
 * 接口模版====post
 *
 * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// export const test = params => {
//     return fly.post(`${host}/xx/xx`, qs.stringify(params))
// };

//通用的get请求
export const get = (params) => {
    return fly.get(`${params.url}`, qs.stringify(params.data))
}

//通用post请求
export const post = (params) =>{
    return fly.post(`${params.url}`, qs.stringify(params.data))
}

//封装登录请求，根据后台接受方式选择是否加qs.stringify
export const login = params => {
    return fly.post('/login', params)
}