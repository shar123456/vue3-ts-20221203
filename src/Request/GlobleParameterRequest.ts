import instance from './request'

export function UpdateGlobleParameter(param:any):any {
    
  return instance({
      url: '/GlobleParameter/UpdateGlobleParameter',
      method: 'post',
      data:param,
      transformRequest: [function (data) {//加这个post发送数据到后台才能接收到数据，否则接收不到
          let ret = ''
          for (const it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
  })
}

export function GetGlobleParameter():any {
    
  return instance({
      url: '/GlobleParameter/SearcGlobleParameter',
      method: 'post',
      
  })
}