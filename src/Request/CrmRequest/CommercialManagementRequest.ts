import instance from '../../Request/request'

export function GetCommercialManagementDatas(param:any):any {
    
    return instance({
        url: '/CommercialManagement/SearchCommercialByQuery',
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


  export function AddCommercial(param:any):any {
    
    return instance({
        url: '/CommercialManagement/AddCommercial',
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

export function UpdateCommercial(param:any):any {
    
  return instance({
      url: '/CommercialManagement/UpdateCommercial',
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

export function GetCommercialById(param:any):any {
    
  return instance({
      url: '/CommercialManagement/GetById',
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
export function DeleteById(param:any):any {
    
  return instance({
      url: '/CommercialManagement/DeleteById',
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
export function BatchDelete(param:any):any {
    
  return instance({
      url: '/CommercialManagement/BatchDelete',
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

export function BatchExport(param:any):any {
    
  return instance({
      url: '/CommercialManagement/BatchExport',
      method: 'post',
      data:param,
    
      responseType: 'blob',
      transformRequest: [function (data) {//加这个post发送数据到后台才能接收到数据，否则接收不到
          let ret = ''
          for (const it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
  })
}


export function CopyDataById(param:any):any {
    
  return instance({
      url: '/CommercialManagement/CopyDataById',
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
export function CancelClueShift(param:any):any {
    
  return instance({
      url: '/CommercialManagement/CancelClueShift',
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