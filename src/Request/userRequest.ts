import instance from './request'

export function GetUserColumn(param:any):any {
    return instance({
        url: '/SysAccount/GetColumnsConfig',
        method: 'get',
        params:param
    })
}
//http://172.16.170.33:8055/api/SysAccount/api/SysAccount/GetUsers
export function GetUsers():any {
    
    return instance({
        url: '/SysAccount/GetUsers',
        method: 'get',
        //data:param,
       
    })
}
export function GetUserDatas(param:any):any {
    
    return instance({
        url: '/SysAccount/SearchUsersByQuery',
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

export function UpdateUserDatas(param:any):any {
    
    return instance({
        url: '/SysAccount/UpdateUser_v1',
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



export function AddUserDatas(param:any):any {
    
    return instance({
        url: '/SysAccount/AddUser_v1',
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


export function DeleteUserById(param:any):any {
    
    return instance({
        url: '/SysAccount/DeleteUser',
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

export function CopyUserDataById(param:any):any {
    
    return instance({
        url: '/SysAccount/CopyUserDataById',
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


export function ReSetUserPwd(param:any):any {
    
  return instance({
      url: '/SysAccount/ReSetUserPwd',
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



export function BatchDeleteUser(param:any):any {
    
    return instance({
        url: '/SysAccount/BatchDeleteUser',
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

export function importData(param:any):any {
    
  return instance({
      url: '/SysAccount/UpLoadFile',
      method: 'post',
      data:param,
    
      headers: {
        "Content-Type": "multipart/form-data",

      


      },
      
  })
}


export function BatchExportUser(param:any):any {
    
  return instance({
      url: '/SysAccount/BatchExportUser',
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







export function GetUserDemo():any {
    return instance({
        url: '/SysAccount/GetUsers',
        method: 'get',
     
    })
}



export function GetLoginRecordDatas(param:any):any {
    
  return instance({
      url: '/LoginRecord/SearchLoginRecordByQuery',
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
export function DeleteLoginRecordById(param:any):any {
    
  return instance({
      url: '/LoginRecord/DeleteLoginRecord',
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
export function GetLoginRecordColumn(param:any):any {
  return instance({
      url: '/LoginRecord/GetColumnsConfig',
      method: 'get',
      params:param
  })
}




export function BatchDeleteLoginRecord(param:any):any {
    
  return instance({
      url: '/LoginRecord/BatchDeleteLoginRecord',
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


export function SetLoginRecordGrid(param:any):any {
    console.log("------",param)
    const{ListColumns,configType}=param;
  return instance({
      url: '/LoginRecord/SetLoginRecordGrid'+`?configType=${configType}`,
      
      method: 'post',
      data:ListColumns,
      
  })
}



export function GetExpColumnsConfig(param:any):any {
  return instance({
      url: '/SysAccount/GetExpColumnsConfig',
      method: 'get',
      params:param
  })
}


export function SetExpColumnsConfig(param:any):any {
  console.log("------",param)
  const{ListColumns,configType}=param;
return instance({
    url: '/SysAccount/SetExpColumnsConfig'+`?configType=${configType}`,
    
    method: 'post',
    data:ListColumns,
    
})
}

export function getUserByName(param:any):any {
    
  return instance({
      url: '/SysAccount/GetUserByName',
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




