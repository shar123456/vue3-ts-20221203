interface IDataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }
   interface IUserInfo {
    name: string;
   sysUserId: string;
    pwd: string;
    key: string;
    nickName: string;
    userDesc: string;
    phone: string;
    address: string;
    useStatus: string;
    email: string;
    level: string;
    createTimeStr: string;
   gender: string;
   pcLoginStatus: string;
   weChatLoginStatus: string;
   appLoginStatus: string;


  


  }
    interface IUserQueryInfo {
   
      sysUserId: string;
      name: string; 
      gender: string;
      useStatus: string;
      address: string;
      phone: string;
      email: string;
      level: string;
  
    
  }

  class UserDataEntity{
    
    QueryConditionInfo:IUserQueryInfo={
      sysUserId: "",
      name: "",
      gender: "未选择",
      useStatus:"未选择",
      address: "",
      phone: "",
      email: "",
      level: "未选择",
    

    }
    
    UserDataList:Array<IUserInfo>=[];
    
    EditData:IUserInfo={
        key: "",
        name: "",
        sysUserId: "",
        pwd: "",
        nickName: "",
    
        userDesc: "",
        phone: "",
        address:"",
        useStatus:"",
        email: "",
        level:"",
        createTimeStr: "",
        gender:"",
        pcLoginStatus: "",
        weChatLoginStatus: "",
        appLoginStatus: "",
  }
    UserListColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:IUserInfo[]= [];

    UserExportColumns:any=[];
   
    
  }
  const UserExportColumns = [
    { name:"Name",oldTitle: '用户名', currentTitle: '用户名', isUse: false,configOrder: 1 },
    { name:"Pwd",oldTitle: '密码', currentTitle: '密码', isUse: false,configOrder: 2 },
    { name:"Gender",oldTitle: '性别', currentTitle: '性别', isUse: false,configOrder: 3 },
    {name:"UseStatus", oldTitle: '状态', currentTitle: '状态', isUse: false,configOrder: 4 },
    { name:"Phone",oldTitle: '手机号', currentTitle: '手机号', isUse: false,configOrder: 5 },
    {name:"Email", oldTitle: 'Email', currentTitle: 'Email', isUse: false,configOrder: 6},
    { name:"Address",oldTitle: '地址', currentTitle: '地址', isUse: false,configOrder: 7 },
    { name:"CreateTimeStr",oldTitle: '创建时间', currentTitle: '创建时间', isUse: false,configOrder: 8 },
  
  ];
export {UserDataEntity,IUserInfo,UserExportColumns}
