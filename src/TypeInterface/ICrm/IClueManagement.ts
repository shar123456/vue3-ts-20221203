import {dateFormat} from '../../utility/commonFunc'

interface IClueInfo {
    id: string;
    clueCode:string; //线索编号
    clueOwner: string;  //线索所有者
    name:string;//姓名

    position:string;//职位
    company:string;//公司
    industry:string;//行业
    annualIncome:Number;//年收入
   employeeQty:Number;//员工数量


    currency: string;//货币
     
     mobilePhone:string;//手机号
     phone:string;//电话
     fax:string;//传真
     email:string;//电邮
     emailNoDisturb:boolean;//邮件免打扰
     SecondEmail:string;//第二电邮
     webSite:string;//网站
     clueSource:string;//线索来源
     clueState:string;//线索状态
     rate:string;//评级
     clueAuditState:string;//线索审核状态
address:string;//地址
province:string;//省份
city:string;//城市
postalCode:string;//邮政编码
remark:string;//备注
createrStr: string;//创建人
     createTimeStr: string;
    key: string;
    TmStamp:string[];
  }

  interface IClueQueryInfo {
    clueCode: string;
    name: string;
    mobilePhone: string;
    
    rate:string;
}

const ClueColumns = [
  
  {  oldTitle: '线索编号',title: '线索编号',width:150, dataIndex: 'clueCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '线索所有者', title: '线索所有者',width:180, dataIndex: 'clueOwner', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: '姓名',title: '姓名',width:150, dataIndex: 'name', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true},
   
    
    {  oldTitle: '职位',title: '职位',width:150,  dataIndex: 'position', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '公司',title: '公司',width:50,  dataIndex: 'company', isUse: true,configOrder: 5 ,resizable: true,ellipsis: true,},
    {  oldTitle: '员工数量',title: '员工数量',width:60,  dataIndex: 'employeeQty', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true,},
    {  oldTitle: '行业',title: '行业',width:80,  dataIndex: 'industry', isUse: true,configOrder: 7  ,resizable: true,ellipsis: true,},
    {  oldTitle: '年收入',title: '年收入',width:100,  dataIndex: 'annualIncome', isUse: true,configOrder: 8  ,resizable: true,ellipsis: true,},
    {  oldTitle: '货币',title: '货币',width:60,  dataIndex: 'currency', isUse: true,configOrder: 9 ,resizable: true,ellipsis: true,},
    {  oldTitle: '手机号',title: '手机号',width:80,  dataIndex: 'mobilePhone', isUse: true,configOrder: 10  ,resizable: true,ellipsis: true,},
    {  oldTitle: '电话',title: '电话',width:80,  dataIndex: 'phone', isUse: true,configOrder: 11  ,resizable: true,ellipsis: true,},
    {  oldTitle: '传真',title: '传真',width:60,  dataIndex: 'fax', isUse: true,configOrder: 12  ,resizable: true,ellipsis: true,},
    {  oldTitle: '电邮',title: '电邮',width:80,  dataIndex: 'email', isUse: true,configOrder: 13 ,resizable: true,ellipsis: true,},
    {  oldTitle: '第二电邮',title: '第二电邮',width:60,  dataIndex: 'SecondEmail', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮件免打扰',title: '邮件免打扰',width:60,  dataIndex: 'emailNoDisturb', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '网站',title: '网站',width:60,  dataIndex: 'webSite', isUse: true,configOrder: 16 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '线索来源',title: '线索来源',width:60,  dataIndex: 'clueSource', isUse: true,configOrder: 17 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '线索状态',title: '线索状态',width:60,  dataIndex: 'clueState', isUse: true,configOrder: 18 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '评级',title: '评级',width:60,  dataIndex: 'rate', slots: { customRender: 'rate' },isUse: true,configOrder: 19 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '线索审核状态',title: '线索审核状态',width:60,  dataIndex: 'clueAuditState', isUse: true,configOrder: 20 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '地址',title: '地址',width:60,  dataIndex: 'address', isUse: true,configOrder: 21 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '省份',title: '省份',width:60,  dataIndex: 'province', isUse: true,configOrder: 22 ,resizable: true,ellipsis: true,},
    {  oldTitle: '城市',title: '城市',width:60,  dataIndex: 'city', isUse: true,configOrder: 23 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮政编码',title: '邮政编码',width:60,  dataIndex: 'postalCode', isUse: true,configOrder: 24 ,resizable: true,ellipsis: true,},
 ,
    {  oldTitle: '创建人',title: '创建人',width:60,  dataIndex: 'createrStr', isUse: true,configOrder: 25 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:60,  dataIndex: 'createTimeStr', isUse: true,configOrder: 26 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:60,  dataIndex: 'remark', isUse: true,configOrder: 27 ,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder: 28,fixed: 'right', },

  ];
  



const ClueDatas=[
    {
        id:"TT2205280001",
       
        clueCode: "MD1586587",

        clueOwner: "D669985",
        name: "济南通合制造",
        position: "电子",
        company: "暂无",
        employeeQty: 12,
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class ClueEntity{
        BtnConfigInfo:any={
          RefreshBtn:true,
          ClearQueryBtn:true,
          SearchBtn:true,
          ConfigExport:true,
          ExportExcel:true,
          ConfigGridBtn:true,
          CreateBtn:true,
          BatchDeleteBtn:true,


        }


        EditData:IClueInfo={
          id: "",
          clueCode:"", //线索编号
          clueOwner:"",  //线索所有者
          name:"",//姓名
      
          position:"",//职位
          company:"",//公司
          industry:"",//行业
          annualIncome:0,//年收入
         employeeQty:0,//员工数量
      
      
          currency: "",//货币
           
           mobilePhone:"",//手机号
           phone:"",//电话
           fax:"",//传真
           email:"",//电邮
           emailNoDisturb:false,//邮件免打扰
           SecondEmail:"",//第二电邮
           webSite:"",//网站
           clueSource:"",//线索来源
           clueState:"",//线索状态
           rate:"未选择",//评级
           clueAuditState:"",//线索审核状态
      address:"",//地址
      province:"",//省份
      city:"",//城市
      postalCode:"",//邮政编码
      remark:"",//备注
      createrStr: "",//创建人
         


  createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
  key:  "",
  TmStamp:[]
    }








    

        QueryConditionInfo:any={
           
          clueCode: "",
          name: "",
        
          mobilePhone: "",
        
          rate: "未选择",
          }
          QueryConditionInfoConfig:any={
            clueCode:{
              name:"线索编号",
              type:"text"
            },
            
            name:{
              name:"姓名",
              type:"text"
            },
            mobilePhone:{
              name:"手机号",
              type:"text"
            },
            rate:{
              name:"评级",
              type:"select",
              optionValueArray:["未选择","Level1","Level2","Level3","Level4"]
            },
           
          }

         
         
        DataList:Array<IClueInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IClueInfo[]= [];
        ClueDatas:any=ClueDatas;
        ExportColumns:any=[];

      


      }


      const ExportColumns = [
        { name:"ProductName",oldTitle: '产品名称', currentTitle: '产品名称', isUse: true,configOrder: 1 },
        { name:"ProductCode",oldTitle: '产品代码', currentTitle: '产品代码', isUse: true,configOrder: 2 },
        { name:"VendorID",oldTitle: '供应商编号', currentTitle: '供应商编号', isUse: true,configOrder: 3 },
        {name:"VendorName", oldTitle: '供应商名', currentTitle: '供应商名', isUse: true,configOrder: 4 },
        { name:"UnitPrice",oldTitle: '单价', currentTitle: '单价', isUse: true,configOrder: 5 },
        {name:"Volume", oldTitle: '体积', currentTitle: '体积', isUse: true,configOrder: 6},
        { name:"VolumeSize",oldTitle: '体积单位', currentTitle: '体积单位', isUse: true,configOrder: 8 },
        { name:"Weight",oldTitle: '重量', currentTitle: '重量', isUse: true,configOrder: 9 },
        { name:"WeightUnit",oldTitle: '重量单位', currentTitle: '重量单位', isUse: true,configOrder: 10 },
        { name:"GrossWeight",oldTitle: '毛重', currentTitle: '毛重', isUse: true,configOrder: 11 },
        { name:"NetWeight",oldTitle: '净重', currentTitle: '净重', isUse: true,configOrder:12 },
        { name:"ProductCategory",oldTitle: '产品类别', currentTitle: '产品类别', isUse: true,configOrder: 13 },
        { name:"Description",oldTitle: '描述', currentTitle: '描述', isUse: true,configOrder: 14 },
        { name:"CreateTimeStr",oldTitle: '创建时间', currentTitle: '创建时间', isUse: false,configOrder: 15 },
    
      
      ];

   
   
    export {IClueInfo,ClueColumns,ClueEntity,ExportColumns}