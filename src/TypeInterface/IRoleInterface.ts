interface IRoleInfo {
    sysRoleId: string;
    name: string;
    roleType:string;
    useStatus:string;
    createTimeStr: string;
    key: string;
  }
  interface IRoleInfoQueryInfo {
   
    name:string; 
    useStatus: string ;
    roleType: string ;
}


class RoleDataEntity{
    
    QueryConditionInfo:IRoleInfoQueryInfo={
    
        name: "",
        useStatus: "未选择",
      roleType: "未选择",
    }
    EditData:IRoleInfo={
      key: "",
      name: "",
      sysRoleId: "",
      roleType: "",
      useStatus: "",
      createTimeStr: "",
    
  
     
}
    DataList:Array<IRoleInfo>=[];
    
    ListColumns:any=[];
    ListGridColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:IRoleInfo[]= [];
  }



  const RoleColumns = [
    {oldTitle: '角色Id', title: '角色Id',width:100, dataIndex: 'sysRoleId', isUse: false,configOrder: 1 },
    { oldTitle: '角色名',title: '角色名',width:100, dataIndex: 'name', isUse: true,configOrder: 2 },
    { oldTitle: '角色类型',title: '角色类型',width:100, dataIndex: 'roleType', isUse: true,configOrder: 3,slots: { customRender: 'roleType' } },
    {oldTitle: '状态', title: '状态',width:100, dataIndex: 'useStatus', isUse: true,configOrder: 4 ,slots: { customRender: 'useStatus' } },
    {oldTitle: '创建时间', title: '创建时间',width:100, dataIndex: 'createTimeStr', isUse: true,configOrder: 5 },
    { oldTitle: '操作',title: '操作', width:60, slots: { customRender: 'action' },isUse: true,configOrder: 6  },
  ];
  


export {RoleDataEntity,IRoleInfo,RoleColumns}
