import {dateFormat} from '../../utility/commonFunc'

interface IProductInfo {
    id: string;
    productName: string;  
    productCode:string;
    vendorID:string;
    vendorName:string;
    productCategory:string;
    description:string;
    createTimeStr: string;


    unit: string;
     requidQty:Number;
     manufactory:string;
     unitPrice:Number;
     volume:string;
     volumeUnit:string;
     volumeSize:string;
     weight:string;
     weightUnit:string;
     grossWeight:string;
     netWeight:string;
   
    key: string;
    TmStamp:string[];
  }

  interface IProductQueryInfo {
    productName: string;
    productCode: string;
    productCategory: string;
   
}

const ProductColumns = [
  
  {  oldTitle: '产品名称',title: '产品名称',width:150, dataIndex: 'productName', isUse: true,configOrder: 1  ,resizable: true,ellipsis: true,}, 
    { oldTitle: '产品代码', title: '产品代码',width:180, dataIndex: 'productCode', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: '供应商编号',title: '供应商编号',width:150, dataIndex: 'vendorID', isUse: true,configOrder: 3  ,resizable: true,ellipsis: true},
   
    
    {  oldTitle: '供应商名',title: '供应商名',width:150,  dataIndex: 'vendorName', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '单位',title: '单位',width:50,  dataIndex: 'unit', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '需求数量',title: '需求数量',width:80,  dataIndex: 'requidQty', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '制造厂',title: '制造厂',width:100,  dataIndex: 'manufactory', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '单价',title: '单价',width:60,  dataIndex: 'unitPrice', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '体积',title: '体积',width:60,  dataIndex: 'volume', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '体积单位',title: '体积单位',width:80,  dataIndex: 'volumeUnit', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '体积尺寸',title: '体积尺寸',width:80,  dataIndex: 'volumeSize', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '重量',title: '重量',width:60,  dataIndex: 'weight', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '重量单位',title: '重量单位',width:80,  dataIndex: 'weightUnit', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '毛重',title: '毛重',width:60,  dataIndex: 'grossWeight', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '净重',title: '净重',width:60,  dataIndex: 'netWeight', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '产品类别',title: '产品类别',width:90, dataIndex: 'productCategory',slots: { customRender: 'productCategory' }, isUse: true,configOrder: 5  ,resizable: true,},
    
    {  oldTitle: '描述',title: '描述',width:80, dataIndex: 'description', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true},
    {  oldTitle: '创建时间',title: '创建时间',width:180, dataIndex: 'createTimeStr', isUse: true,configOrder: 7 ,resizable: true ,ellipsis: true,},
    
    {  oldTitle: '操作',title: '操作',dataIndex: 'examId', key: 'operation',width:90, slots: { customRender: 'action' } ,isUse: true,configOrder: 1,fixed: 'right', },

  ];
  



const ProductDatas=[
    {
        id:"TT2205280001",
        productName:"DSMZ-171-TH(ESD)",
      productCode: "MD1586587",

      vendorID: "D669985",
      vendorName: "济南通合制造",
      productCategory: "电子",
      description: "暂无",
     
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]



 










    class ProductEntity{
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


        EditData:IProductInfo={
          id: "",
          productName:  "",
          productCode:  "",
          vendorID:  "",
          vendorName:  "",
          productCategory:  "未选择",
          description: "",
  
          unit:"",
  
          requidQty: 0,
          
          manufactory:  "",
          unitPrice: 0,
          volume:  "",
          volumeUnit: "",
          volumeSize:  "",
          weight: "",

          weightUnit: "",
          grossWeight: "",
          netWeight: "",
         





  createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
  key:  "",
  TmStamp:[]
    }










        QueryConditionInfo:any={
           
            productName: "",
            productCode: "",
        
            productCategory: "未选择",
          
          }
          QueryConditionInfoConfig:any={
            productName:{
              name:"产品名称",
              type:"text"
            },
            productCode:{
              name:"产品代码",
              type:"text"
            },
            productCategory:{
              name:"产品类别",
              type:"select",
              optionValueArray:["未选择","光学","精密","电子","高端"]
            },
           
          }

         

        DataList:Array<IProductInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IProductInfo[]= [];
        ProductDatas:any=ProductDatas;


      


      }




   
   
    export {IProductInfo,ProductColumns,ProductEntity}