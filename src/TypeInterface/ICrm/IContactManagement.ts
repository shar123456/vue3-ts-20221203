import {dateFormat} from '../../utility/commonFunc'

interface IContactInfo {
    id: string;
    contactCode:string; //联系人编号
   
   
    name:string;//姓名


     mobilePhone:string;//手机号
     phone:string;//电话
     fax:string;//传真
     email:string;//电邮
     emailNoDisturb:string;//邮件免打扰
     secondEmail:string;//第二电邮


     position:string;//职位
     dept:string;//部门
     assistant:string;//助理
     assistantPhone:string;//助理电话
     contactSource:string;//联系人来源
     clueCode:string; //线索编号
     contactState:string;//联系人状态
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

  interface IContactQueryInfo {
    contactCode: string;
    name: string;
    mobilePhone: string;
    
    contactSource:string;
}

const ContactColumns = [
  
  {  oldTitle: '联系人编号',title: '联系人编号',width:140, dataIndex: 'contactCode', isUse: true,configOrder: 1 ,resizable: true,ellipsis: true,}, 
    { oldTitle: '姓名', title: '姓名',width:140, dataIndex: 'name', isUse: true,configOrder: 2  ,resizable: true,ellipsis: true },
   

    {  oldTitle: '手机号',title: '手机号',width:120,  dataIndex: 'mobilePhone', isUse: true,configOrder: 3  ,resizable: true,ellipsis: true,},
    {  oldTitle: '电话',title: '电话',width:120,  dataIndex: 'phone', isUse: true,configOrder: 4 ,resizable: true,ellipsis: true,},
    {  oldTitle: '传真',title: '传真',width:120,  dataIndex: 'fax', isUse: true,configOrder: 5  ,resizable: true,ellipsis: true,},
    {  oldTitle: '电邮',title: '电邮',width:140,  dataIndex: 'email', isUse: true,configOrder: 6 ,resizable: true,ellipsis: true,},
    // {  oldTitle: '第二电邮',title: '第二电邮',width:130,  dataIndex: 'secondEmail', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮件免打扰',title: '邮件免打扰',width:100,  dataIndex: 'emailNoDisturb', isUse: true,configOrder: 7 ,resizable: true,ellipsis: true,},
    {  oldTitle: '联系人来源',title: '联系人来源',width:100,  dataIndex: 'contactSource', isUse: true,configOrder: 8 ,resizable: true,ellipsis: true,},
    {  oldTitle: '职位',title: '职位',width:100,  dataIndex: 'position', isUse: true,configOrder: 9,resizable: true,ellipsis: true,},
    {  oldTitle: '部门',title: '部门',width:80,  dataIndex: 'dept', isUse: true,configOrder: 10 ,resizable: true,ellipsis: true,},
    {  oldTitle: '助理',title: '助理',width:100,  dataIndex: 'assistant', isUse: true,configOrder: 11 ,resizable: true,ellipsis: true,},
    {  oldTitle: '助理电话',title: '助理电话',width:130,  dataIndex: 'assistantPhone', isUse: true,configOrder: 12 ,resizable: true,ellipsis: true,},

   
    {  oldTitle: '线索编号',title: '线索编号',width:120,  dataIndex: 'clueCode', isUse: true,configOrder: 13 ,resizable: true,ellipsis: true,},

    {  oldTitle: '联系人状态',title: '联系人状态',width:110,  dataIndex: 'contactState', isUse: true,configOrder: 14 ,resizable: true,ellipsis: true,},
  
 
    
 
    
    {  oldTitle: '地址',title: '地址',width:160,  dataIndex: 'address', isUse: true,configOrder: 15 ,resizable: true,ellipsis: true,},
    
    {  oldTitle: '省份',title: '省份',width:100,  dataIndex: 'province', isUse: true,configOrder: 16 ,resizable: true,ellipsis: true,},
    {  oldTitle: '城市',title: '城市',width:100,  dataIndex: 'city', isUse: true,configOrder: 17 ,resizable: true,ellipsis: true,},
    {  oldTitle: '邮政编码',title: '邮政编码',width:110,  dataIndex: 'postalCode', isUse: true,configOrder: 18 ,resizable: true,ellipsis: true,},
 
    {  oldTitle: '创建人',title: '创建人',width:100,  dataIndex: 'createrStr', isUse: true,configOrder: 19 ,resizable: true,ellipsis: true,},
    {  oldTitle: '创建时间',title: '创建时间',width:160,  dataIndex: 'createTimeStr', isUse: true,configOrder: 20 ,resizable: true,ellipsis: true,},
    {  oldTitle: '备注',title: '备注',width:160,  dataIndex: 'remark', isUse: true,configOrder: 21,resizable: true,ellipsis: true,},
    {  oldTitle: '操作',title: '操作',dataIndex: 'id', key: 'operation',width:123, slots: { customRender: 'action' } ,isUse: true,configOrder: 22,fixed: 'right', },

  ];
  



const ContactDatas=[
    {
        id:"TT2205280001",
       
        contactCode: "MD1586587",

        name: "D669985",
        mobilePhone: "济南通合制造",
        phone: "电子",
        fax: "暂无",
        email: 12,
      createTimeStr:"2022-06-23 12:36:52",
      key: "0001",
    }]
    class ContactEntity{
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


        EditData:IContactInfo={
          id: "",
          clueCode:"", //线索编号
          contactCode:"",  //线索所有者
          name:"",//姓名
      
          
          mobilePhone:"",//电话
           phone:"",//电话
           fax:"",//传真
           email:"",//电邮
           emailNoDisturb:"否",//邮件免打扰
           secondEmail:"",//第二电邮
           position:"",//网站
           dept:"",//网站
           assistant:"",//网站
           assistantPhone:"",//网站


           contactSource:"",//线索来源
           contactState:"启用",//线索状态
     
      
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
           
          contactCode: "",
          name: "",
        
          mobilePhone: "",
        
          contactSource:"未选择",
          }
          QueryConditionInfoConfig:any={
            contactCode:{
              name:"联系人编号",
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
            contactSource:{
              name:"联系人来源",
              type:"select",
              optionValueArray:["未选择","线索转化","手动","批量导入"]
            },
           
          }

         
         
        DataList:Array<IContactInfo>=[];
        
        ListColumns:any=[];
        ListGridColumns:any=[];
        selectedRowKeys:string[]= [];
        selectedRows:IContactInfo[]= [];
        ClueDatas:any=ContactDatas;
        ExportColumns:any=[];

      


      }


      const ExportColumns = [
        { name:"ContactCode",oldTitle: '联系人编号', currentTitle: '联系人编号', isUse: true,configOrder: 1 },
        { name:"Name",oldTitle: '姓名', currentTitle: '姓名', isUse: true,configOrder: 2 },
        { name:"MobilePhone",oldTitle: '手机号', currentTitle: '手机号', isUse: true,configOrder: 3 },
        {name:"Phone", oldTitle: '电话', currentTitle: '电话', isUse: true,configOrder: 4 },
        { name:"Email",oldTitle: '电邮', currentTitle: '电邮', isUse: true,configOrder: 5 },
        {name:"Position", oldTitle: '职位', currentTitle: '职位', isUse: true,configOrder: 6},
        { name:"Dept",oldTitle: '部门', currentTitle: '部门', isUse: true,configOrder: 8 },
        { name:"Assistant",oldTitle: '助理', currentTitle: '助理', isUse: true,configOrder: 9 },
        { name:"AssistantPhone",oldTitle: '助理电话', currentTitle: '助理电话', isUse: true,configOrder: 10 },
        { name:"Address",oldTitle: '地址', currentTitle: '地址', isUse: true,configOrder: 11 },
        { name:"Province",oldTitle: '省份', currentTitle: '省份', isUse: true,configOrder:12 },
        { name:"City",oldTitle: '城市', currentTitle: '城市', isUse: true,configOrder: 13 },
        { name:"PostalCode",oldTitle: '邮政编码', currentTitle: '邮政编码', isUse: true,configOrder: 14 },
        { name:"CreateTimeStr",oldTitle: '创建时间', currentTitle: '创建时间', isUse: false,configOrder: 15 },
    
      
      ];

   
   
    export {IContactInfo,ContactColumns,ContactEntity,ExportColumns}