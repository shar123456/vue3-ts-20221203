interface  IMenuInfo {
    key: number;
    menuId: string;
    menuTitle: string;
    menuUrl: string;
    menuorder: number;
    menuLevel: number;
    hasSub: string;
      menuParentId: string;
      menuIcon:string;
      menuKey:string;
      menuAreaName?:string;

      
      children?: IMenuInfo[];
  }
  interface IMenuQueryInfo {
    menuId:string; 
    menuTitle:string; 
 
}
class MenuDataEntity{
    
    QueryConditionInfo:IMenuQueryInfo={
      menuId:"",
        menuTitle: ""
    
    }
    EditData:IMenuInfo={
      key: 0,
      menuId: "",
      menuTitle: "",
      menuUrl: "",
      menuorder:0,
      menuLevel: 1,
      hasSub: "false",
        menuParentId:"",
        menuIcon:"",
        menuKey:"",
        menuAreaName:""
}
    DataList:Array<IMenuInfo>=[];
    
    ListColumns:any=[];
    ListGridColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:IMenuInfo[]= [];
  }
export {MenuDataEntity,IMenuQueryInfo,IMenuInfo}

