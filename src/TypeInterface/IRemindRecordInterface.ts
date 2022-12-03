import {dateFormat} from '../utility/commonFunc'

interface IRemindRecordInfo {
    id: string;
    remindRecordNo: string;  
    topic:string;
    loginName:string;
    functionType:string;
    receiver:string;
    receiverEmail:string;
    sendContent:string;
    operateType:string;
    noticeType:string;
    startTimeStr:string;
   
    key: string;
    TmStamp:string[];
  }

  interface IRemindRecordQueryInfo {
    operateType: string;
    noticeType: string;
    loginName: string;
    functionType: string;
    RemindRecordNo:string;
}

const RemindRecordColumns = [
  {  oldTitle: '编号',title: '编号',width:130, dataIndex: 'remindRecordNo', isUse: true,configOrder: 1 }, 
    { oldTitle: '类型', title: '类型',width:80, dataIndex: 'functionType', isUse: true,configOrder: 2  },
    {  oldTitle: '主题',title: '主题',width:180, dataIndex: 'topic', isUse: true,configOrder: 3 },
   
    
    {  oldTitle: '发送内容',title: '发送内容',width:370, dataIndex: 'sendContent', isUse: true,configOrder: 4 },
    {  oldTitle: '通知类型',title: '通知类型',width:90, dataIndex: 'noticeType', isUse: true,configOrder: 5 },
    
    {  oldTitle: '操作账户',title: '操作账户',width:80, dataIndex: 'loginName', isUse: true,configOrder: 6},
    {  oldTitle: '接收人',title: '接收人',width:80, dataIndex: 'receiver', isUse: true,configOrder: 7 },
    {  oldTitle: '接收人Email',title: '接收人Email',width:150, dataIndex: 'receiverEmail', isUse: true,configOrder: 8 },



    {  oldTitle: '发送方式',title: '发送方式',width:80, dataIndex: 'operateType', slots: { customRender: 'operateType' },isUse: true,configOrder: 9 },
    {  oldTitle: '发送时间',title: '发送时间',width:140, dataIndex: 'startTimeStr', isUse: true,configOrder: 10 },
   
  
  ];
  
const RemindRecordDatas=[
    {
        id:"TT2205280001",
        remindRecordNo:"TT2205280001",
      functionType: "工作计划",

      topic: "视频会议",
      sendContent: "视频会议并准备会后食宿",
      noticeType: "邮件",
      loginName: "admin",
      receiver: "queen",
      receiverEmail: "1245902155@qq.com",
      operateType: "手动",
      startTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]



 










    class RemindRecordEntity{
        QueryConditionInfo:any={
           
            operateType: "未选择",
            noticeType: "未选择",
            loginName:  "",
            functionType: "未选择",
            RemindRecordNo: "",
          }
          QueryConditionInfoConfig:any={
            RemindRecordNo:{
              name:"编号",
              type:"text"
            },
            loginName:{
              name:"操作账户",
              type:"text"
            },
            operateType:{
              name:"发送方式",
              type:"select",
              optionValueArray:["未选择","手动","自动触发"]
            },
            functionType:{
              name:"类型",
              type:"select",
              optionValueArray:["未选择","工作计划","审批"]
            },
            noticeType:{
              name:"计划状态",
              type:"select",
              optionValueArray:["未选择","邮件","公众号","短信"]
            }
          }

         

        DataList:Array<IRemindRecordInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IRemindRecordInfo[]= [];
        RemindRecordDatas:any=RemindRecordDatas;


      


      }




    export {IRemindRecordInfo,RemindRecordColumns,RemindRecordEntity}