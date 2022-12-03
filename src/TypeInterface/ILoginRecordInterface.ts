
import {dateFormat} from '../utility/commonFunc'

interface ILoginRecordInfo {
    loginRecordId: string;
    name: string;
    loginType:string;
    loginNum:number;
    ipAddress:string;
    userPcName:string;
    loginLastTimeStr: string;
    loginEndTimeStr: string;
    key: string;
  }
  interface ILoginRecordQueryInfo {
   
    name:string; 
    loginStartTime: string ;
    loginEndTime: string ;
}


class LoginRecordDataEntity{
    
    QueryConditionInfo:ILoginRecordQueryInfo={
    
      name: "",
      loginStartTime:dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),-11),
      loginEndTime:dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
    }
    
    DataList:Array<ILoginRecordInfo>=[];
    
    ListColumns:any=[];
    ListGridColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:ILoginRecordInfo[]= [];
  }



  const LoginRecordColumns = [
    { oldTitle: '用户名',title: '用户名',width:100, dataIndex: 'name', isUse: true,configOrder: 1 },
    { oldTitle: '终端设备类型',title: '终端设备类型',width:100, dataIndex: 'loginType', isUse: true,configOrder: 2 ,slots: { customRender: 'loginType' }},
    { oldTitle: '登录次数',title: '登录次数',width:100, dataIndex: 'loginNum', isUse: true,configOrder: 3 },
    { oldTitle: 'IpAddress',title: 'IpAddress',width:100, dataIndex: 'ipAddress', isUse: true,configOrder: 4 },
    { oldTitle: 'UserPcName',title: 'UserPcName',width:100, dataIndex: 'userPcName', isUse: true,configOrder: 5 },
    { oldTitle: '上次登录时间',title: '上次登录时间',width:100, dataIndex: 'loginLastTimeStr', isUse: true,configOrder: 6 },
    { oldTitle: '最后一次登录时间',title: '最后一次登录时间',width:100, dataIndex: 'loginEndTimeStr', isUse: true,configOrder: 7 },
    
    { oldTitle: '操作',title: '操作', key: 'operation',width:60, slots: { customRender: 'action' },isUse: true,configOrder: 8  },
  ];
  


export {LoginRecordDataEntity,ILoginRecordInfo,LoginRecordColumns}



