/* eslint-disable @typescript-eslint/no-explicit-any */


import instance from './request'
import {Ilogin,IFormRegisterState} from '../TypeInterface/loginInterface'



export function login(res:Ilogin ):any {
    //console.log("ogin",res)
    return instance({
        url: '/Authentication/Login',
        method: 'post',
        
        data:res,
        transformRequest: [function (data) {//加这个post发送数据到后台才能接收到数据，否则接收不到
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
    })
}



export function loginGet(res:Ilogin ):any {
    return instance({
        url: '/login',
        method: 'get',
        params:res
    })
}

export function register(res:IFormRegisterState ):any {
    return instance({
        url: '/Authentication/Register',
        method: 'post',
        
        data:res,
        transformRequest: [function (data) {//加这个post发送数据到后台才能接收到数据，否则接收不到
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
    })
}


export function getCode():any {
    return instance({
        url: '/Authentication/GetCode',
        method: 'get',
      
    })
}





export function getCode1():any {
    return instance({
        url: '/GetCode',
        method: 'post',
        data:{}
    })
}

// export function getGoodsByType_Mock(type = "sales", page = 1) {
//     return request({
//         //url: '/getGoodsByType?' + `type=${type}` + `&page=${page}`,
//         url: '/getGoodsByType',
//         method: 'get',
//         params: { type: type, page: page }
//     })
// }

// export function getGoods_Mock() {
//     return request({
//         url: '/getGoods',
//         method: 'get',
//         params: {}
//     })
// }

// export function login_Mock() {
//     let LoginData = { email: "admin@lmonkey.com", password: "admin123456" };
//     return HttpRequest({
//         url: '/login',
//         method: 'POST',
//         data: LoginData
//     })
// }