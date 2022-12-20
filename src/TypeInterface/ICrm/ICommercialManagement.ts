import {dateFormat} from '../../utility/commonFunc'

interface ICommercialInfo {
    id: string;
    customerCode:string; //客户编号
    customername:string;//客户姓名
    commercialName:string;//商机名称
    commercialCode:string;
    commercialType:string;//商机类型
    commercialSource:string;//商机来源
    contactName: string;//联系人

    prospectionIncome:Number;//预期收入
   
    currency: string;//货币
     amount:Number;//金额
     commercialState:string;//商机状态
     probability: string;//概率
     commercialStage: string;//阶段 
     clueCode:string; //线索编号
    createrStr: string;//创建人
    createTimeStr: string;
remark:string;//备注   
    key: string;
    TmStamp:string[];
  }

  interface ICommercialQueryInfo {
    customerCode: string;
    customername: string;
    commercialSource: string;
    
    commercialName:string;
}

const CommercialColumns = [
  
  {  oldTitle: '客户编号',title: '客户编号',width:130, dataIndex: 'customerCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '客户名称', title: '客户名称',width:180, dataIndex: 'customername', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
  
     {  oldTitle: '商机编号',title: '商机编号',width:130, dataIndex: 'commercialCode', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true},
     {  oldTitle: '商机名称',title: '商机名称',width:110, dataIndex: 'commercialName', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true},
     {  oldTitle: '商机类型',title: '商机类型',width:110,  dataIndex: 'commercialType', isUse: true,configOrder: 4 ,resizable: true,ellipsis: true,},

    {  oldTitle: '商机来源',title: '商机来源',width:100,  dataIndex: 'commercialSource', isUse: true,configOrder: 5 ,resizable: true,ellipsis: true,},
    {  oldTitle: '联系人',title: '联系人',width:120,  dataIndex: 'contactName', isUse: true,configOrder: 6  ,resizable: true,ellipsis: true,},
    {  oldTitle: '预期收入',title: '预期收入',width:100,  dataIndex: 'prospectionIncome', isUse: true,configOrder: 7  ,resizable: true,ellipsis: true,},
    {  oldTitle: '货币',title: '货币',width:80,  dataIndex: 'currency', isUse: true,configOrder: 8 ,resizable: true,ellipsis: true,},



    {  oldTitle: '金额',title: '金额',width:130,  dataIndex: 'amount', isUse: true,configOrder: 9  ,resizable: true,ellipsis: true,},
    {  oldTitle: '商机状态',title: '商机状态',width:110,  dataIndex: 'commercialState', isUse: true,configOrder: 10  ,resizable: true,ellipsis: true,},
    {  oldTitle: '概率',title: '概率',width:150,  dataIndex: 'probability', isUse: true,configOrder: 11 ,resizable: true,ellipsis: true,},
    {  oldTitle: '阶段',title: '阶段',width:150,  dataIndex: 'commercialStage', isUse: true,configOrder: 12 ,resizable: true,ellipsis: true,},

    {  oldTitle: '线索编号',title: '线索编号',width:130,  dataIndex: 'clueCode', isUse: true,configOrder: 13 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建人',title: '创建人',width:110,  dataIndex: 'createrStr', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:110,  dataIndex: 'createTimeStr', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:110,  dataIndex: 'remark', isUse: true,configOrder: 16,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder: 17,fixed: 'right', },

  ];
  



const CommercialDatas=[
    {
        id:"TT2205280001",
       
        customerCode: "MD1586587",

        customername: "D669985",
        commercialName: "济南通合制造",
        commercialType: "电子",
        currency: "暂无",
        amount: 12,
        commercialSource:"线索转换",
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class CommercialEntity{
        BtnConfigInfo:any={
          RefreshBtn:true,
          ClearQueryBtn:true,
          SearchBtn:true,
          ConfigExport:true,
          ExportExcel:true,
          ConfigGridBtn:true,
          CreateBtn:true,
          BatchDeleteBtn:true,

          ClueShiftBtn:false,
          ImportExcel:true,
        }


        EditData:ICommercialInfo={
          id: "",
          clueCode:"", //线索编号
          customerCode:"",  //客户编号
          customername:"",//客户名称
          commercialCode:"",
          commercialName:"",//商机名称
          
          commercialType:"未选择",//商机类型
          prospectionIncome:0,//预期收入
          amount:0,//金额
         commercialSource:"",//商机来源
      
          currency: "人民币",//货币
           
         
          contactName:"",//联系人
          commercialState:"启用",//商机状态
          probability:"",//概率
          commercialStage:"未选择",//商机阶段
        
      remark:"",//备注
      createrStr: "",//创建人
         


  createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
  key:  "",
  TmStamp:[]
    }

        QueryConditionInfo:any={
           
          customerCode: "",
          customername: "",
        
          commercialSource: "未选择",
        
          commercialName:"",
          }
          QueryConditionInfoConfig:any={
            customerCode:{
              name:"客户编号",
              type:"text"
            },
            
            customername:{
              name:"客户姓名",
              type:"text"
            },
            commercialSource:{
              name:"商机来源",
              type:"select",
              optionValueArray:["未选择","手动","导入","线索转换","其他"]
            },
            commercialName:{
              name:"商机名称",
              type:"text"
            },
           
          }

         
         
        DataList:Array<ICommercialInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:ICommercialInfo[]= [];
        CommercialDatas:any=CommercialDatas;
        ExportColumns:any=[];

      


      }


      const ExportColumns = [
        { name:"CustomerCode",oldTitle: '客户编号', currentTitle: '客户编号', isUse: true,configOrder: 1 },
        { name:"Customername",oldTitle: '客户名称', currentTitle: '客户名称', isUse: true,configOrder: 2 },
      
        { name:"CommercialCode",oldTitle: '商机编号', currentTitle: '商机编号', isUse: true,configOrder: 3 },
        { name:"CommercialName",oldTitle: '商机名称', currentTitle: '商机名称', isUse: true,configOrder: 4},
        {name:"CommercialType", oldTitle: '商机类型', currentTitle: '商机类型', isUse: true,configOrder: 5 },
       
        {name:"ContactName", oldTitle: '联系人', currentTitle: '联系人', isUse: true,configOrder: 6},
        { name:"ProspectionIncome",oldTitle: '预期收入', currentTitle: '预期收入', isUse: true,configOrder:7 },
        { name:"Currency",oldTitle: '货币', currentTitle: '货币', isUse: true,configOrder:8 },
        { name:"Amount",oldTitle: '金额', currentTitle: '金额', isUse: true,configOrder: 9 },
        { name:"Probability",oldTitle: '概率', currentTitle: '概率', isUse: true,configOrder: 10 },
        { name:"CommercialStage",oldTitle: '阶段', currentTitle: '阶段', isUse: true,configOrder:11 },
     
        { name:"Remark",oldTitle: '备注', currentTitle: '备注', isUse: true,configOrder: 12 },
        { name:"CreateTimeStr",oldTitle: '创建时间', currentTitle: '创建时间', isUse: true,configOrder: 13 },
    
      
      ];

   
   
    export {ICommercialInfo,CommercialColumns,CommercialEntity,ExportColumns}