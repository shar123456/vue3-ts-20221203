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
   
    key: string;
    TmStamp:string[];
  }

  interface IProductQueryInfo {
    productName: string;
    productCode: string;
    productCategory: string;
   
}

const ProductColumns = [
  {  oldTitle: '产品名称',title: '产品名称',width:130, dataIndex: 'productName', isUse: true,configOrder: 1  ,resizable: true,ellipsis: true,}, 
    { oldTitle: '产品代码', title: '产品代码',width:80, dataIndex: 'productCode', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: '供应商编号',title: '供应商编号',width:210, dataIndex: 'vendorID', isUse: true,configOrder: 3  ,resizable: true,ellipsis: true},
   
    
    {  oldTitle: '供应商名',title: '供应商名',width:470,  dataIndex: 'vendorName', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '产品类别',title: '产品类别',width:90, dataIndex: 'productCategory', isUse: true,configOrder: 5  ,resizable: true,},
    
    {  oldTitle: '描述',title: '描述',width:80, dataIndex: 'description', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true},
    {  oldTitle: '创建时间',title: '创建时间',width:100, dataIndex: 'createTimeStr', isUse: true,configOrder: 7 ,resizable: true ,ellipsis: true,},
    
   
   
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