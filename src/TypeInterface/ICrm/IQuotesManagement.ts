import {dateFormat} from '../../utility/commonFunc'
import dayjs, { Dayjs } from 'dayjs';
interface IQuotesInfo {
    id: string;
    quoteCode:string; //报价单编号
    quoteItem:string; //报价单行项号
    productCode:string;//产品名称
    customerCode:string;//客户名称
    
    quantity:Number;//数量
    unitPrice:Number;//单价
    listPrice:Number;//价格表价格
    total:Number;//总金额
    

    currency: string;//货币
    quoteOwner:string;//报价单所有者
    quoteSubject:string;//报价单描述
    quoteDealName:string;//报价单交易描述
    validitySdateStr: any;//有效开始日期

     validityEdateStr: any;//有效截止日期

     contactID: string;//联系人ID
     
     carrier:string;//售达方
     shipping:string;//送达方  
     quoteSource:string;//报价单来源
     quoteState:string;//报价单状态   
     billAddress:string;//账单地址
     billProvince:string;//账单省份
     billCity:string;//账单城市
     billPostalCode:string;//账单邮编

     shipAddress:string;//收货地址
     shipProvince:string;//收货省份
     shipCity:string;//收货城市
     shipPostalCode:string;//收货邮编
remark:string;//备注
createrStr: string;//创建人
     createTimeStr: string;
    key: string;
    TmStamp:string[];
  }

  interface IQuotesQueryInfo {
    quoteCode: string;
    quoteItem: string;
    productCode: string;
    
    customerCode:string;
}

const QuotesColumns = [
  
  {  oldTitle: '报价单',title: '报价单',width:130, dataIndex: 'quoteCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '报价单行项', title: '报价单行项',width:100, dataIndex: 'quoteItem', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: '产品编号',title: '产品编号',width:140,  dataIndex: 'productCode', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true,},
    {  oldTitle: '客户编号',title: '客户编号',width:140,  dataIndex: 'customerCode', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '数量',title: '数量',width:100,  dataIndex: 'quantity', isUse: true,configOrder: 5 ,resizable: true,ellipsis: true,},
    {  oldTitle: '单价',title: '单价',width:100,  dataIndex: 'unitPrice', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true,},
    {  oldTitle: '标价',title: '标价',width:100,  dataIndex: 'listPrice', isUse: true,configOrder: 7 ,resizable: true,ellipsis: true,},
    {  oldTitle: '总金额',title: '总金额',width:120,  dataIndex: 'total', isUse: true,configOrder: 8 ,resizable: true,ellipsis: true,},
    {  oldTitle: '货币',title: '货币',width:100,  dataIndex: 'currency', isUse: true,configOrder: 9  ,resizable: true,ellipsis: true,},
    {  oldTitle: '报价单来源',title: '报价单来源',width:100,  dataIndex: 'quoteSource', isUse: true,configOrder: 10 ,resizable: true,ellipsis: true,},
    {  oldTitle: '报价单所有者',title: '报价单所有者',width:130,  dataIndex: 'quoteOwner', isUse: true,configOrder: 11 ,resizable: true,ellipsis: true,},
    {  oldTitle: '报价单描述',title: '报价单描述',width:160,  dataIndex: 'quoteSubject', isUse: true,configOrder: 12 ,resizable: true,ellipsis: true,},
    {  oldTitle: '报价单交易描述',title: '报价单交易描述',width:160,  dataIndex: 'quoteDealName', isUse: true,configOrder: 13 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '有效开始日期',title: '有效开始日期',width:130,  dataIndex: 'validitySdateStr', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '有效截止日期',title: '有效截止日期',width:130, dataIndex: 'validityEdateStr', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true},
    {  oldTitle: '联系人ID',title: '联系人ID',width:130,  dataIndex: 'contactID', isUse: true,configOrder: 16 ,resizable: true,ellipsis: true,},

    {  oldTitle: '售达方',title: '售达方',width:120,  dataIndex: 'carrier', isUse: true,configOrder: 17,resizable: true,ellipsis: true,},

    {  oldTitle: '送达方',title: '送达方',width:120,  dataIndex: 'shipping', isUse: true,configOrder: 18 ,resizable: true,ellipsis: true,},
    
  
    {  oldTitle: '报价单状态',title: '报价单状态',width:100,  dataIndex: 'quoteState', isUse: true,configOrder: 20 ,resizable: true,ellipsis: true,},

    {  oldTitle: '账单地址',title: '账单地址',width:160,  dataIndex: 'billAddress', isUse: true,configOrder: 21 ,resizable: true,ellipsis: true,},
    {  oldTitle: '账单省份',title: '账单省份',width:110,  dataIndex: 'billProvince', isUse: true,configOrder: 22 ,resizable: true,ellipsis: true,},
    {  oldTitle: '账单城市',title: '账单城市',width:110,  dataIndex: 'billCity', isUse: true,configOrder: 23 ,resizable: true,ellipsis: true,},
    {  oldTitle: '账单邮编',title: '账单邮编',width:110,  dataIndex: 'billPostalCode', isUse: true,configOrder: 24 ,resizable: true,ellipsis: true,},

    {  oldTitle: '收货地址',title: '收货地址',width:160,  dataIndex: 'shipAddress', isUse: true,configOrder: 25 ,resizable: true,ellipsis: true,},
    {  oldTitle: '收货省份',title: '收货省份',width:110,  dataIndex: 'shipProvince', isUse: true,configOrder: 21 ,resizable: true,ellipsis: true,},
    {  oldTitle: '收货城市',title: '收货城市',width:110,  dataIndex: 'shipCity', isUse: true,configOrder: 26 ,resizable: true,ellipsis: true,},
    {  oldTitle: '收货邮编',title: '收货邮编',width:110,  dataIndex: 'shipPostalCode', isUse: true,configOrder: 27 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建人',title: '创建人',width:110,  dataIndex: 'createrStr', isUse: true,configOrder: 28 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:110,  dataIndex: 'createTimeStr', isUse: true,configOrder: 29 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:170,  dataIndex: 'remark', isUse: true,configOrder:30,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder:31,fixed: 'right', },

  ];
  



const QuotesDatas=[
    {
        id:"TT2205280001",
       
        customerCode: "MD1586587",

        customername: "D669985",
        quoteCode: "济南通合制造",
        quoteItem: "电子",
       
        quoteSource:"手动",
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class QuotesEntity{
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


        EditData:IQuotesInfo={
          id: "",
          quoteCode:"",
    quoteItem:"",
    productCode:"",
    customerCode:"",
    
    quantity:0,
    unitPrice:0,
    listPrice:0,
    total:0,
    

    currency: "人民币",
    quoteOwner:"",
    quoteSubject:"",
    quoteDealName:"",
    validitySdateStr: dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss"),

     validityEdateStr: dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss"),

     contactID:"",
     
     carrier:"",
     shipping:"",
     quoteSource:"",
     quoteState:"启用",
     billAddress:"",
     billProvince:"",
     billCity:"",
     billPostalCode:"",

     shipAddress:"",
     shipProvince:"",
     shipCity:"",
     shipPostalCode:"",
      remark:"",//备注
      createrStr: "",//创建人
         


  createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
  key:  "",
  TmStamp:[]
    }








    
   
        QueryConditionInfo:any={
           
          quoteCode: "",
          quoteItem: "",
        
          productCode: "",
        
          customerCode:"",
          }
          QueryConditionInfoConfig:any={
            quoteCode:{
              name:"报价单",
              type:"text"
            },
            
            quoteItem:{
              name:"报价单行项",
              type:"text"
            },
            productCode:{
              name:"产品编号",
              type:"text"
            },
            customerCode:{
              name:"客户编号",
              type:"text"
            },
           
          }

         
         
        DataList:Array<IQuotesInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IQuotesInfo[]= [];
        QuotesDatas:any=QuotesDatas;
        ExportColumns:any=[];

      


      }
    

      const ExportColumns = [
    
        { name:"QuoteCode",oldTitle: '报价单', currentTitle: '报价单', isUse: true,configOrder: 1 },
        { name:"QuoteItem",oldTitle: '报价单行项', currentTitle: '报价单行项', isUse: true,configOrder: 2 },
        { name:"ProductCode",oldTitle: '产品编号', currentTitle: '产品编号', isUse: true,configOrder: 3 },
        {name:"CustomerCode", oldTitle: '客户编号', currentTitle: '客户编号', isUse: true,configOrder: 4 },
        { name:"Quantity",oldTitle: '数量', currentTitle: '数量', isUse: true,configOrder: 5 },
        {name:"UnitPrice", oldTitle: '单价', currentTitle: '单价', isUse: true,configOrder: 6},
        { name:"ListPrice",oldTitle: '标价', currentTitle: '标价', isUse: true,configOrder: 7},
        { name:"Total",oldTitle: '总金额', currentTitle: '总金额', isUse: true,configOrder: 8 },
        { name:"Currency",oldTitle: '货币', currentTitle: '货币', isUse: true,configOrder: 9 },
        { name:"QuoteOwner",oldTitle: '报价单所有者', currentTitle: '报价单所有者', isUse: true,configOrder: 10},
        { name:"QuoteSubject",oldTitle: '报价单描述', currentTitle: '报价单描述', isUse: true,configOrder:11 },
        { name:"QuoteDealName",oldTitle: '报价单交易描述', currentTitle: '报价单交易描述', isUse: true,configOrder: 12 },
     
       
     
        { name:"ValiditySdateStr",oldTitle: '有效开始日期', currentTitle: '有效开始日期', isUse: true,configOrder: 13 },
        { name:"ValidityEdateStr",oldTitle: '有效截止日期', currentTitle: '有效截止日期', isUse: true,configOrder: 14 },
    
        { name:"ContactID",oldTitle: '联系人ID', currentTitle: '联系人ID', isUse: true,configOrder: 15 },
        { name:"Carrier",oldTitle: '售达方', currentTitle: '售达方', isUse: true,configOrder: 16 },
        { name:"Shipping",oldTitle: '送达方', currentTitle: '送达方', isUse: true,configOrder: 17 },

        { name:"BillAddress",oldTitle: '账单地址', currentTitle: '账单地址', isUse: true,configOrder: 18 },
        { name:"BillProvince",oldTitle: '账单省份', currentTitle: '账单省份', isUse: true,configOrder: 19 },
        { name:"BillCity",oldTitle: '账单城市', currentTitle: '账单城市', isUse: true,configOrder: 20 },
        { name:"BillPostalCode",oldTitle: '账单邮编', currentTitle: '账单邮编', isUse: true,configOrder: 21 },
        { name:"ShipAddress",oldTitle: '收货地址', currentTitle: '收货地址', isUse: true,configOrder: 22 },
        { name:"ShipProvince",oldTitle: '收货省份', currentTitle: '收货省份', isUse: true,configOrder: 23 },


        { name:"ShipCity",oldTitle: '收货城市', currentTitle: '收货城市', isUse: true,configOrder: 24 },

        { name:"ShipPostalCode",oldTitle: '收货邮编', currentTitle: '收货邮编', isUse: true,configOrder: 25 },
        { name:"CreaterStr",oldTitle: '创建人', currentTitle: '创建人', isUse: true,configOrder: 26 },
        { name:"Remark",oldTitle: '备注', currentTitle: '备注', isUse: true,configOrder: 27 },
      ];

   

   
   
    export {IQuotesInfo,QuotesColumns,QuotesEntity,ExportColumns}