import instance from './request'



export function UpdateRoleDatas(param:any):any {
    
  return instance({
      url: '/Role/UpdateRole',
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



export function AddRoleDatas(param:any):any {
  
  return instance({
      url: '/Role/AddRole',
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




export function CopyRoleDataById(param:any):any {
    
  return instance({
      url: '/Role/CopyRoleDataById',
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



export function GetRoleById(param:any):any {
    
  return instance({
      url: '/Role/GetRole',
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

export function GetMenuById(param:any):any {
    
  return instance({
      url: '/Menu/GetMenuById',
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





export function GetRoleDatas(param:any):any {
    
    return instance({
        url: '/Role/SearchRoleByQuery',
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
  export function DeleteRoleById(param:any):any {
    
    return instance({
        url: '/Role/DeleteRole',
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



  export function getRoleByName(param:any):any {
    
    return instance({
        url: '/Role/GetRoleByName',
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


  


  
export function BatchDeleteRole(param:any):any {
    
  return instance({
      url: '/Role/BatchDeleteRole',
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


export function SetRole(param:any):any {
    
  return instance({
      url: '/SysAccount/SetRole',
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


export function SetRoleMenu(param:any):any {
    
  return instance({
      url: '/Role/SetRoleMenu',
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


