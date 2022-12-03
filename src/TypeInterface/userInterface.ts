   interface IDataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }
   interface IUserInfo {
    key: string;
    seq: number;
    Id: string;
    Name: string;
    nickName: string;
    password: string;
    sex: string;
    IsUse: string;
    address: string;
    phone: string;
    email: string;
    level: string;
    desc: string;
  }
    interface IUserQueryInfo {
   
    Id: string;
    Name: string; 
    sex: string;
    IsUse: string;
    address: string;
    phone: string;
    email: string;
    level: string;
    
  }

  class UserDataEntity{
    
    QueryConditionInfo:IUserQueryInfo={
      Id: "",
      Name: "",
      sex: "未选择",
      IsUse:"未选择",
      address: "",
      phone: "",
      email: "",
      level: "",
    }
    
    UserDataList:Array<IUserInfo>=[];
    
    EditData:IUserInfo={
    key: "",
    seq: 0,
    Id: "",
    Name: "",
    nickName: "",
    
    password: "",
    sex: "未选择",
    IsUse: "未选择",
    address: "",
    phone:"",
    email: "",
    level: "",
    desc: "",
    
  }
    UserListColumns=[];
    selectedRowKeys:string[]= [];
  }
export {UserDataEntity,IUserInfo}
