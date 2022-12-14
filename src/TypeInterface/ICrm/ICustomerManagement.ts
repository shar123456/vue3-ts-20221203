import {dateFormat} from '../../utility/commonFunc'

interface ICustomerInfo {
    id: string;
    customerCode:string; //客户编号
    clueCode:string; //线索编号
    customername:string;//客户姓名
    stockCode:string;//股票代码
    
    industry:string;//行业
    annualIncome:Number;//年收入
   employeeQty:Number;//员工数量


    currency: string;//货币
     
     
     phone:string;//电话
     fax:string;//传真
     email:string;//电邮
     emailNoDisturb:string;//邮件免打扰
     secondEmail:string;//第二电邮

     sicCode: string;//SIC代码
     
     webSite:string;//网站



     customerSource:string;//客户来源
     customerState:string;//客户状态
     rate:string;//评级
     
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

  interface ICustomerQueryInfo {
    customerCode: string;
    customername: string;
    industry: string;
    
    phone:string;
}

const CustomerColumns = [
  
  {  oldTitle: '客户编号',title: '客户编号',width:150, dataIndex: 'customerCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '客户姓名', title: '客户姓名',width:180, dataIndex: 'customername', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: '股票代码',title: '股票代码',width:110, dataIndex: 'stockCode', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true},
   
    

    {  oldTitle: '员工数量',title: '员工数量',width:100,  dataIndex: 'employeeQty', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true,},
    {  oldTitle: '行业',title: '行业',width:120,  dataIndex: 'industry', isUse: true,configOrder: 7  ,resizable: true,ellipsis: true,},
    {  oldTitle: '年收入',title: '年收入',width:100,  dataIndex: 'annualIncome', isUse: true,configOrder: 8  ,resizable: true,ellipsis: true,},
    {  oldTitle: '货币',title: '货币',width:80,  dataIndex: 'currency', isUse: true,configOrder: 9 ,resizable: true,ellipsis: true,},



    {  oldTitle: '电话',title: '电话',width:130,  dataIndex: 'phone', isUse: true,configOrder: 11  ,resizable: true,ellipsis: true,},
    {  oldTitle: '传真',title: '传真',width:110,  dataIndex: 'fax', isUse: true,configOrder: 12  ,resizable: true,ellipsis: true,},
    {  oldTitle: '电邮',title: '电邮',width:150,  dataIndex: 'email', isUse: true,configOrder: 13 ,resizable: true,ellipsis: true,},
    {  oldTitle: '第二电邮',title: '第二电邮',width:150,  dataIndex: 'secondEmail', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮件免打扰',title: '邮件免打扰',width:120,  dataIndex: 'emailNoDisturb', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '网站',title: '网站',width:130,  dataIndex: 'webSite', isUse: true,configOrder: 16 ,resizable: true,ellipsis: true,},
    
   


    {  oldTitle: '客户来源',title: '客户来源',width:110,  dataIndex: 'customerSource', isUse: true,configOrder: 17 ,resizable: true,ellipsis: true,},
    {  oldTitle: '线索编号',title: '线索编号',width:110,  dataIndex: 'clueCode', isUse: true,configOrder: 17 ,resizable: true,ellipsis: true,},

    {  oldTitle: '客户状态',title: '客户状态',width:110,  dataIndex: 'customerState', isUse: true,configOrder: 18 ,resizable: true,ellipsis: true,},
  
    {  oldTitle: '评级',title: '评级',width:80,  dataIndex: 'rate', slots: { customRender: 'rate' },isUse: true,configOrder: 22 ,resizable: true,ellipsis: true,},
    
 
    
    {  oldTitle: '地址',title: '地址',width:160,  dataIndex: 'address', isUse: true,configOrder: 24 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '省份',title: '省份',width:110,  dataIndex: 'province', isUse: true,configOrder: 25 ,resizable: true,ellipsis: true,},
    {  oldTitle: '城市',title: '城市',width:110,  dataIndex: 'city', isUse: true,configOrder: 26 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮政编码',title: '邮政编码',width:110,  dataIndex: 'postalCode', isUse: true,configOrder: 27 ,resizable: true,ellipsis: true,},
 
    {  oldTitle: '创建人',title: '创建人',width:110,  dataIndex: 'createrStr', isUse: true,configOrder: 28 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:110,  dataIndex: 'createTimeStr', isUse: true,configOrder: 29 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:110,  dataIndex: 'remark', isUse: true,configOrder: 30,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder: 31,fixed: 'right', },

  ];
  



const CustomerDatas=[
    {
        id:"TT2205280001",
       
        customerCode: "MD1586587",

        customername: "D669985",
        stockCode: "济南通合制造",
        industry: "电子",
        currency: "暂无",
        employeeQty: 12,
        customerSource:"线索转换",
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class CustomerEntity{
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


        EditData:ICustomerInfo={
          id: "",
          clueCode:"", //线索编号
          customerCode:"",  //线索所有者
          customername:"",//姓名
      
          stockCode:"",//职位
          
          industry:"",//行业
          annualIncome:0,//年收入
         employeeQty:0,//员工数量
         sicCode:"",
      
          currency: "",//货币
           
         
           phone:"",//电话
           fax:"",//传真
           email:"",//电邮
           emailNoDisturb:"否",//邮件免打扰
           secondEmail:"",//第二电邮
           webSite:"",//网站

         



           customerSource:"",//线索来源
           customerState:"",//线索状态
           rate:"未选择",//评级
      
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
           
          customerCode: "",
          customername: "",
        
          industry: "",
        
          phone:"",
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
            industry:{
              name:"行业",
              type:"text"
            },
            phone:{
              name:"电话",
              type:"text"
            },
           
          }

         
         
        DataList:Array<ICustomerInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:ICustomerInfo[]= [];
        ClueDatas:any=CustomerDatas;
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

   
   
    export {ICustomerInfo,CustomerColumns,CustomerEntity,ExportColumns}