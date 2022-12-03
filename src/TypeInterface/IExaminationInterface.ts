import {dateFormat} from '../utility/commonFunc'
  
interface IExaminationInfo {
  examResult:string;
  examUser:string;
  examUserId:string;
  examUserNo:string;
  examResultRemark:string;
  examUserEmail:string;
  examTaskId: string;
  examTaskNo: string;
  examResultTimeStr:string;

  examId: string;
  examNo: string;
  examName: string;
  examType: string;
  examStatus: string;
  emergencyLevel: string;
  startTimeStr: string;
  endTimeStr: string;
  flowNo: string;
  initiator: string;
  noticeType:string;
  noticeTypeArray?:string[];
   fileIds?:string []
   taskDesc:string;
   remarkDesc:string;
  
  useStatus:string;
  createTimeStr: string;
  key: string;
  TmStamp:string[];
}

const ExaminationColumns = [
  { oldTitle: '审批编号', title: '审批编号',width:135, dataIndex: 'examNo', isUse: true,configOrder: 1  },
  { oldTitle: '任务编号', title: '任务编号',width:120, dataIndex: 'examTaskNo', isUse: false,configOrder: 2  },
  {  oldTitle: '审批类型',title: '审批类型',width:100, dataIndex: 'examType', isUse: true,configOrder: 3 },
  {  oldTitle: '审批标题',title: '审批标题',width:180, dataIndex: 'examName', isUse: true,configOrder: 4 },

  {  oldTitle: '紧急程度',title: '紧急程度',width:100, dataIndex: 'emergencyLevel', isUse: true,configOrder: 5 },

  {  oldTitle: '审批状态',title: '审批状态',width:100, dataIndex: 'examStatus',slots: { customRender: 'examStatus' }, isUse: false,configOrder: 6 },
  {  oldTitle: '发起人',title: '发起人',width:100, dataIndex: 'initiator', isUse: true,configOrder: 7},
  {  oldTitle: '审批人',title: '审批人',width:100, dataIndex: 'examUser', isUse: true,configOrder: 8 },
  {  oldTitle: '审批结果',title: '审批结果',width:100, dataIndex: 'examResult', slots: { customRender: 'examResult' },isUse: true,configOrder: 9 },
  {  oldTitle: '审批时间',title: '审批时间',width:150, dataIndex: 'examResultTimeStr', isUse: true,configOrder: 10 },
  {  oldTitle: '开始时间',title: '开始时间',width:150, dataIndex: 'startTimeStr', isUse: true,configOrder: 11 },
  {  oldTitle: '结束时间',title: '结束时间',width:150, dataIndex: 'endTimeStr', isUse: true,configOrder: 12 },
  {  oldTitle: '操作',title: '操作',dataIndex: 'examId', key: 'operation',width:40, slots: { customRender: 'action' } ,isUse: true,configOrder: 13 },
];


const ExaminationDatas=[
  {
    examId:"SPT2206120001",
    examNo: "SPT2206120001",
    examResult:"未审批",
    examUser:"admin",
    examUserId:"1111111",
    examUserNo:"111111111",
    examResultRemark:"暂无",
    examTaskId:"SP2205280001",
    examTaskNo: "SP2205280001",
    examResultTimeStr:"",
    examName: "系统用户登录权限审批",
    examType: "权限",
    examStatus: "进行中",
    emergencyLevel: "中",
    flowNo: "LC2205283369",
    initiator: "queen",
    stratTimeStr: "2022-05-28",
    endTimeStr: "2022-05-29",
    useStatus:"启用",
    createTimeStr:"2022-05-28",
    key: "0001",
  },
  {
    examId:"SPT2206120002",
    examNo: "SPT2206120002",
    examResult:"未审批",
    examUser:"admin",
    examUserId:"1111111",
    examUserNo:"111111111",
    examResultRemark:"暂无",
    examTaskId:"SP2205280002",
    examTaskNo: "SP2205280002",
    examResultTimeStr:"",
    examName: "请假审批",
    examType: "事假",
    examStatus: "进行中",
    emergencyLevel: "中",
    flowNo: "LC2205283369",
    initiator: "queen",
    stratTimeStr: "2022-05-28",
    endTimeStr: "2022-05-29",
    useStatus:"启用",
    createTimeStr:"2022-05-28",
    key: "0002",
  },
    ]


    class ExaminationEntity{
      QueryConditionInfo:any={
        examNo: "",
       
        examName: "",
          useStatus: "未选择",
          examResult: "未选择",
          initiator: "",
          examUser: "",
    
    
        }
     
        QueryConditionInfoConfig:any={
          examNo:{
            name:"审批编号",
            type:"text"
          },
         
          examName:{
            name:"审批标题",
            type:"text"
          },
          initiator:{
            name:"发起人",
            type:"text"
          },
          examUser:{
            name:"审批人",
            type:"text"
          },
        
          useStatus:{
            name:"状态",
            type:"select",
            optionValueArray:["未选择","启用","禁用"]
          },
          examResult:{
            name:"审批结果",
            type:"select",
            optionValueArray:["未选择","未审批","通过","驳回"]
          }
          
         
        }
    
        
    
      DataList:Array<IExaminationInfo>=[];
      
      ListColumns:any=[];
      ListGridColumns:any=[];
      selectedRowKeys:string[]= [];
      selectedRows:IExaminationInfo[]= [];
      ExaminationDatas:any=ExaminationDatas;
    }
    











interface IExaminationTaskInfo {
    examTaskId: string;
    examTaskNo: string;
    examName: string;
    examType: string;
    examStatus: string;
    emergencyLevel: string;
    noticeType:string;
    noticeTypeArray?:string[];
    useStatus:string;



    startTimeStr: string;
    endTimeStr: string;
    createTimeStr: string;


    flowNo: string;
    flowId?: string;
    initiator: string;
  
   
     fileIds?:string [];
     fileNames?:string [];
     taskDesc:string;
     remarkDesc:string;
    
   

    key: string;
    TmStamp:string[];
  }

  interface IExaminationTaskQueryInfo {
   
    examTaskNo:string; 
    examName: string ;
    useStatus: string ;
    noticeType:string;
    examStatus: string;
    emergencyLevel: string;
    flowNo: string;
    initiator: string;
}

const ExaminationTaskColumns = [
  { oldTitle: '任务编号', title: '任务编号',width:130, dataIndex: 'examTaskNo', isUse: true,configOrder: 1  },
  {  oldTitle: '审批标题',title: '审批标题',width:220, dataIndex: 'examName', isUse: true,configOrder: 2 },
  {  oldTitle: '审批类型',title: '审批类型',width:100, dataIndex: 'examType', isUse: true,configOrder: 3 },
  {  oldTitle: '紧急程度',title: '紧急程度',width:100, dataIndex: 'emergencyLevel', isUse: true,configOrder: 4 },
  {  oldTitle: '审批状态',title: '审批状态',width:100, dataIndex: 'examStatus',slots: { customRender: 'examStatus' }, isUse: true,configOrder: 4 },
  {  oldTitle: '状态',title: '状态',width:80, dataIndex: 'useStatus', slots: { customRender: 'useStatus' },isUse: true,configOrder: 5 },
  {  oldTitle: '流程编号',title: '流程编号',width:125, dataIndex: 'flowNo', isUse: true,configOrder: 6 },
  {  oldTitle: '发起人',title: '发起人',width:100, dataIndex: 'initiator', isUse: true,configOrder: 7},
  {  oldTitle: '通知类型',title: '通知类型',width:130, dataIndex: 'noticeType', isUse: true,configOrder: 8 },
  {  oldTitle: '创建时间',title: '创建时间',width:150, dataIndex: 'createTimeStr', isUse: true,configOrder: 9 },
  {  oldTitle: '开始时间',title: '开始时间',width:150, dataIndex: 'startTimeStr', isUse: true,configOrder: 10 },
  {  oldTitle: '结束时间',title: '结束时间',width:150, dataIndex: 'endTimeStr', isUse: true,configOrder: 11 },
  {  oldTitle: '操作',title: '操作',dataIndex: 'examTaskId', key: 'operation',width:190, slots: { customRender: 'actions' } ,isUse: true,configOrder: 12 },
];



const ExaminationTaskDatas=[
  {
    examTaskId:"SP2205280001",
    examTaskNo: "SP2205280001",
    examName: "系统用户登录权限审批",
    examType: "权限",
    examStatus: "进行中",
    emergencyLevel: "中",
    flowNo: "LC2205283369",
    initiator: "admin",
    noticeType: "邮件",
    stratTimeStr: "2022-05-28",
    endTimeStr: "2022-05-29",






    useStatus:"启用",
    createTimeStr:"2022-05-28",
    key: "0001",
  },
  {
    examTaskId:"SP2205280002",
    examTaskNo: "SP2205280002",
    examName: "Queen用户微信登录授权",
    examType: "权限",
    examStatus: "已取消",
    emergencyLevel: "中",
    flowNo: "LC2205283388",
    initiator: "Queen",
    noticeType: "公众号推送",
    stratTimeStr: "2022-05-28",
    endTimeStr: "2022-05-31",






    useStatus:"草稿",
    createTimeStr:"2022-05-28",
    key: "0002",
  },
    ]



class ExaminationTaskEntity{
  QueryConditionInfo:any={
    examTaskNo: "",
    examName: "",
      useStatus: "未选择",

      noticeType: "未选择",
      examStatus: "未选择",
      emergencyLevel: "未选择",
    
      initiator: "",



    }
 
    QueryConditionInfoConfig:any={
      examTaskNo:{
        name:"任务编号",
        type:"text"
      },
      examName:{
        name:"审批标题",
        type:"text"
      },
      initiator:{
        name:"发起人",
        type:"text"
      },
      
    
      useStatus:{
        name:"状态",
        type:"select",
        optionValueArray:["未选择","启用","禁用"]
      },
      noticeType:{
        name:"通知类型",
        type:"select",
        optionValueArray:["未选择","邮件","公众号推送"]
      }
      ,
      examStatus:{
        name:"审批状态",
        type:"select",
        optionValueArray:["未选择","未开始","进行中","已完成","已取消"]
      }
      ,
      emergencyLevel:{
        name:"紧急程度",
        type:"select",
        optionValueArray:["未选择","低","中","高"]
      }
    }

    EditData:IExaminationTaskInfo={
      examTaskId: "",
      examTaskNo: "",
      examName:  "",
      examType:  "基本审批",
      emergencyLevel:"中",
      examStatus:  "",
      flowNo:  "",
      initiator:  "",
      fileIds:[],
      taskDesc:  "",
      remarkDesc:  "",
      noticeType:  "邮件",
      noticeTypeArray:["邮件"],
      startTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
      endTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),1),
useStatus: "启用",
createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
key:  "",
TmStamp:[]
}


  DataList:Array<IExaminationTaskInfo>=[];
  
  ListColumns:any=[];
  ListGridColumns:any=[];
  selectedRowKeys:string[]= [];
  selectedRows:IExaminationTaskInfo[]= [];
  ExaminationTaskDatas:any=ExaminationTaskDatas;
}






interface IExaminationFlowInfo {
  flowId: string;
  flowNo: string;
  flowName: string;
  useStatus:string;
  createTimeStr: string;
  key: string;
  TmStamp:string[];
}


  interface IExaminationFlowQueryInfo {
   
    flowName:string; 
    flowNo: string ;
    useStatus: string ;
}



  const ExaminationFlowColumns = [
    { oldTitle: '流程编号', title: '流程编号',width:110, dataIndex: 'flowNo', isUse: true,configOrder: 1  },
    {  oldTitle: '流程名称',title: '流程名称',width:280, dataIndex: 'flowName', isUse: true,configOrder: 2 },
    {  oldTitle: '状态',title: '状态',width:80, dataIndex: 'useStatus', slots: { customRender: 'useStatus' },isUse: true,configOrder: 3 },
    {  oldTitle: '创建时间',title: '创建时间',width:100, dataIndex: 'createTimeStr', isUse: true,configOrder: 4 },
    
    {  oldTitle: '操作',title: '操作',dataIndex: 'flowId', key: 'operation',width:90, slots: { customRender: 'action' } ,isUse: true,configOrder: 5 },
  ];
  const ExaminationFlowDatas=[
{
  flowId:"0001",
  flowNo: "LC2205283388",
  flowName: "用户权限审批流程",
  useStatus:"启用",
  createTimeStr:"2022-05-28",
  key: "0001",
},{
  flowId:"0002",
  flowNo: "LC2205283399",
  flowName: "请假审批流程",
  useStatus:"禁用",
  createTimeStr:"2022-05-29",
  key: "0002",
}

  ]
  class ExaminationFlowEntity{
    QueryConditionInfo:any={
        flowNo: "",
        flowName: "",
        useStatus: "未选择",
      }
   
      QueryConditionInfoConfig:any={
        flowNo:{
          name:"流程编号",
          type:"text"
        },
        flowName:{
          name:"流程名称",
          type:"text"
        },
       
        useStatus:{
          name:"状态",
          type:"select",
          optionValueArray:["未选择","启用","禁用"]
        }
      }

     
      EditData:IExaminationFlowInfo={
        flowId: "",
        flowNo:  "",
        flowName:  "",
        useStatus:  "启用",
        createTimeStr:  "",

   


key:  "",
TmStamp:[]
  }









    DataList:Array<IExaminationFlowInfo>=[];
    
    ListColumns:any=[];
    ListGridColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:IExaminationFlowInfo[]= [];
    ExaminationFlowDatas:any=ExaminationFlowDatas;
  }



  export {IExaminationFlowInfo,ExaminationFlowColumns,ExaminationFlowEntity,
    IExaminationTaskInfo,ExaminationTaskColumns,ExaminationTaskEntity,
    ExaminationEntity,IExaminationInfo,ExaminationColumns
  
  }