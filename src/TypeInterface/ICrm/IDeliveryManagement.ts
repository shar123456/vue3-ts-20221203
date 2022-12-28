import {dateFormat} from '../../utility/commonFunc'
import dayjs, { Dayjs } from 'dayjs';   
interface IDeliveryInfo {
    id: string;
    deliveryCode:string; //交货单
    deliveryItem:string; //交货单行项
    deliveryOfErp:string; //ERP交货单
    deliveryItemOfErp:string;//ERP交货单行项
    salesOrder:string;//销售单
    salesItem:string;//销售单行项
    salesOrderOfErp:string;//ERP销售单
    salesItemOfErp:string;//ERP销售单行项
    actualDelivereQty: Number;//实际交货数量 
    baseUnit:string;//基本计量单位
    actualDeliDateStr:any;//实际交货日期
    deliverySource:string;
    deliveryState:string;
    remark:string;//备注
    createrStr: string;//创建人
    createTimeStr: string;
    key: string;
    TmStamp:string[];
  }

  interface IDeliveryQueryInfo {
    deliveryCode: string;
    deliveryItem: string;
    salesOrder: string;   
    salesItem:string;
}

const DeliveryColumns = [
  
  {  oldTitle: '交货单',title: '交货单',width:130, dataIndex: 'deliveryCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '交货单行项', title: '交货单行项',width:170, dataIndex: 'deliveryItem', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
    {  oldTitle: 'ERP交货单',title: 'ERP交货单',width:90,  dataIndex: 'deliveryOfErp', isUse: true,configOrder: 3 ,resizable: true,ellipsis: true,},
    {  oldTitle: 'ERP交货单行项',title: 'ERP交货单行项',width:120,  dataIndex: 'deliveryItemOfErp', isUse: true,configOrder: 4  ,resizable: true,ellipsis: true,},
    {  oldTitle: '销售单',title: '销售单',width:100,  dataIndex: 'salesOrder', isUse: true,configOrder: 5,resizable: true,ellipsis: true,},
    {  oldTitle: '销售单行项',title: '销售单行项',width:100,  dataIndex: 'salesItem', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true,},
    {  oldTitle: 'ERP销售单',title: 'ERP销售单',width:100,  dataIndex: 'salesOrderOfErp', isUse: true,configOrder: 7 ,resizable: true,ellipsis: true,},
    {  oldTitle: 'ERP销售单行项',title: 'ERP销售单行项',width:120,  dataIndex: 'salesItemOfErp', isUse: true,configOrder: 8 ,resizable: true,ellipsis: true,},
    {  oldTitle: '实际交货数量',title: '实际交货数量',width:120,  dataIndex: 'actualDelivereQty', isUse: true,configOrder: 9  ,resizable: true,ellipsis: true,},
    {  oldTitle: '基本计量单位',title: '基本计量单位',width:150,  dataIndex: 'baseUnit', isUse: true,configOrder: 10 ,resizable: true,ellipsis: true,},
    {  oldTitle: '实际交货日期',title: '实际交货日期',width:150,  dataIndex: 'actualDeliDateStr', isUse: true,configOrder: 11 ,resizable: true,ellipsis: true,},
    {  oldTitle: '交货单来源',title: '交货单来源',width:100,  dataIndex: 'deliverySource', isUse: true,configOrder: 12 ,resizable: true,ellipsis: true,},
    {  oldTitle: '交货单状态',title: '交货单状态',width:80,  dataIndex: 'deliveryState', isUse: true,configOrder: 13,resizable: true,ellipsis: true,},
    {  oldTitle: '创建人',title: '创建人',width:110,  dataIndex: 'createrStr', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:110,  dataIndex: 'createTimeStr', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:170,  dataIndex: 'remark', isUse: true,configOrder:16,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder:17,fixed: 'right', },

  ];
  



const DeliveryDatas=[
    {
        id:"TT2205280001",
       
        deliveryCode: "MD1586587",

        deliveryItem: "D669985",
        deliveryOfErp: "济南通合制造",
        deliveryItemOfErp: "电子",
        salesOrder: "暂无",
        salesItem: "暂无",
        deliverySource:"手动",
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class DeliveryEntity{
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


        EditData:IDeliveryInfo={
          id: "",
          deliveryCode: "",
          deliveryItem: "",
          deliveryOfErp: "",
          deliveryItemOfErp: "",
          salesOrder: "",
          salesItem: "",
          salesOrderOfErp: "",
          salesItemOfErp: "",
          actualDelivereQty: 0,
          baseUnit: "",
          actualDeliDateStr: dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss"),   
      deliverySource:"",//线索来源
      deliveryState:"启用",//线索状态

      remark:"",//备注
      createrStr: "",//创建人       
  createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
  key:  "",
  TmStamp:[]
    }








  
        QueryConditionInfo:any={
           
          deliveryCode: "",
          deliveryItem: "",
        
          salesOrder: "",
        
          salesItem:"",
          }
          QueryConditionInfoConfig:any={
            deliveryCode:{
              name:"交货单",
              type:"text"
            },
            
            deliveryItem:{
              name:"交货单行项",
              type:"text"
            },
            salesOrder:{
              name:"销售单",
              type:"text"
            },
            salesItem:{
              name:"销售单行项",
              type:"text"
            },
           
          }

         
         
        DataList:Array<IDeliveryInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IDeliveryInfo[]= [];
        ClueDatas:any=DeliveryDatas;
        ExportColumns:any=[];

      


      }


      const ExportColumns = [ 

        { name:"DeliveryCode",oldTitle: '交货单', currentTitle: '交货单', isUse: true,configOrder: 1 },
        { name:"DeliveryItem",oldTitle: '交货单行项', currentTitle: '交货单行项', isUse: true,configOrder: 2 },
        { name:"DeliveryOfErp",oldTitle: 'ERP交货单', currentTitle: 'ERP交货单', isUse: true,configOrder: 3 },
        {name:"DeliveryItemOfErp", oldTitle: 'ERP交货单行项', currentTitle: 'ERP交货单行项', isUse: true,configOrder: 4 },
        { name:"SalesOrder",oldTitle: '销售单', currentTitle: '销售单', isUse: true,configOrder: 5 },
        {name:"SalesItem", oldTitle: '销售单行项', currentTitle: '销售单行项', isUse: true,configOrder: 6},
        { name:"SalesOrderOfErp",oldTitle: 'ERP销售单', currentTitle: 'ERP销售单', isUse: true,configOrder: 7},
        { name:"SalesItemOfErp",oldTitle: 'ERP销售单行项', currentTitle: 'ERP销售单行项', isUse: true,configOrder: 8 },
        { name:"ActualDelivereQty",oldTitle: '实际交货数量', currentTitle: '实际交货数量', isUse: true,configOrder: 9 },
        { name:"BaseUnit",oldTitle: '基本计量单位', currentTitle: '基本计量单位', isUse: true,configOrder: 10},
        { name:"actualDeliDateStr",oldTitle: '实际交货日期', currentTitle: '实际交货日期', isUse: true,configOrder:11 },
        { name:"Remark",oldTitle: '备注', currentTitle: '备注', isUse: true,configOrder: 12 },
        { name:"CreateTimeStr",oldTitle: '创建时间', currentTitle: '创建时间', isUse: true,configOrder: 13 },

        
      ];

   
   
    export {IDeliveryInfo,DeliveryColumns,DeliveryEntity,ExportColumns}