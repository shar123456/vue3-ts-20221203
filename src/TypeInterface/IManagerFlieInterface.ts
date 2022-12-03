interface IManagerFileInfo {
    fileId: string;
    name: string;
    fileType:string;
    downLoadNum:number;
    upLoadTimeStr: string;
    key: string;
  }
  interface IManagerFileQueryInfo {
   
    name:string; 
    fileId: string ;
    fileType: string ;
}


class ManagerFileDataEntity{
    
    QueryConditionInfo:IManagerFileQueryInfo={
    
        name: "",
      fileId: "",
      fileType: "未选择",
    }
    
    DataList:Array<IManagerFileInfo>=[];
    
    ListColumns:any=[];
    ListGridColumns:any=[];
    selectedRowKeys:string[]= [];
    selectedRows:IManagerFileInfo[]= [];
  }



  const ManagerFileColumns = [
    { oldTitle: '文件Id',title: '文件Id',width:100, dataIndex: 'fileId', isUse: true,configOrder: 1 },
    { oldTitle: '文件名',title: '文件名',width:100, dataIndex: 'name', isUse: true,configOrder: 2 },
    { oldTitle: '文件类型',title: '文件类型',width:100, dataIndex: 'fileType', isUse: true,configOrder: 3,slots: { customRender: 'fileType' } },
    { oldTitle: '下载次数',title: '下载次数',width:100, dataIndex: 'downLoadNum', isUse: true,configOrder: 4 },
    {oldTitle: '上传时间', title: '上传时间',width:100, dataIndex: 'upLoadTimeStr', isUse: true,configOrder: 5 },
    { oldTitle: '操作',title: '操作', width:60, slots: { customRender: 'action' },isUse: true,configOrder: 6  },
  ];
  


export {ManagerFileDataEntity,IManagerFileInfo,ManagerFileColumns}
