<template>
   <Common-Query-Header-CRM
    @SearchBtn="SearchBtn"
    @RefreshBtn="RefreshBtn"  
    @ClearQueryBtn="ClearQueryBtn"  
    @CreateBtn="CreateBtn"
 @BatchDelete="BatchDeleteBtn"
  @ExportExcel="ExportExcelBtn"
      @ConfigExport="ShowConfigExportBtn"
       @ShowConfigGrid="ShowConfigGridBtn"
       


    
    :StateEntity="NewDataEntityState"
  >
  </Common-Query-Header-CRM>

  <div id="ContactManaDataList">
    <a-table
      bordered
      @resizeColumn="handleResizeColumn"
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 1000, y:500 }"
      :customRow="rowActionClick"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :pagination="false"
    >
    
     

      <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'contactSource'">
        <span>
          <a-tag
           
          :color="(record.contactSource=='手动'||record.contactSource=='导入') ? 'geekblue' :'green' ">
          
            {{ record.contactSource}}
          </a-tag>
        </span>
      </template>
      <template v-if="column.dataIndex === 'contactState'">
        <span>
          <a-tag
           
          :color="record.contactState=='启用' ? 'geekblue' :'volcano' ">
          
            {{ record.contactState}}
          </a-tag>
        </span>
      </template>
     

      <template v-if="column.dataIndex === 'clueCode'">
        <span>
          <a-tag
           
          :color="record.clueCode!='' ? 'green' :'#b0b0b0' ">
          
            {{ record.clueCode}}
          </a-tag>
        </span>
      </template>




    </template>






    <template #action="{ record }">

      <a  @click="CancelContactShift(record)" v-if="record.contactSource === '线索转换'"

style="
  
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border:1px solid #dedede;
   padding-top:1px;
     padding-bottom:3px;
   padding-left:7px;
     padding-right:7px;
     background-color:#ce6189;
  border-radius: 4px;
"

title="撤销"
><UndoOutlined   mark="delete"
/>&nbsp;</a>




<a  @click="EditBth(record.id)"
  style="
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border:1px solid #dedede;
     padding-top:1px;
       padding-bottom:3px;
     padding-left:7px;
       padding-right:7px;
     background-color:#3c8dbc;
    border-radius: 4px;
  "
 
  title="编辑"
  ><EditOutlined  mark="delete"
/>&nbsp;</a>

<a  @click="CopyBtn(record.id)"
  style="
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border:1px solid #dedede;
     padding-top:1px;
       padding-bottom:3px;
     padding-left:7px;
       padding-right:7px;
     background-color:#3c8dbc;
    border-radius: 4px;
  "
 
  title="复制"
  ><CopyFilled  mark="delete"
/>&nbsp;</a>





<a  @click="DeleteBth(record.id,record.contactCode)"
 v-if="record.contactSource != '线索转换'"
  style="
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border:1px solid #dedede;
     padding-top:1px;
       padding-bottom:3px;
     padding-left:7px;
       padding-right:3px;
    background-color:#dd4b39 ;
    border-radius: 4px;
  "
 
  title="删除"
  ><CloseOutlined  mark="delete"
/>&nbsp;</a>

  





</template>






    </a-table>

    <div class="userPagination">
      <a-pagination
        show-size-changer
        show-quick-jumper
        v-model:current="current1"
        v-model:pageSize="pageSize"
        :total="totalCount"
        :show-total="(totalCount:number) => `共计 ${totalCount} 条记录`"
        @showSizeChange="onShowSizeChange"
        :page-size-options="pageSizeOptions"
      >
        <template #buildOptionText="props">
          <span>{{ props.value }}条/页</span>
        </template>
      </a-pagination>
    </div>
  </div>
<configGridModal
    :visibleModelConfigGrid="visibleModelConfigGrid"
    :modalTitleConfigGrid="modalTitleConfigGrid"
    :ListColumns="DataEntityState.ListColumns"
    configType="ContactManagement"
    @CloseConfigGridMoadl="CloseConfigGridMoadl"
    @refreshBtn="RefreshBtn"
  />
    <configExportModal
    :visibleModelConfigGrid="visibleConfigExport"
    :modalTitleConfigGrid="modalTitleConfigExport"
    :ListColumns="DataEntityState.ExportColumns"
    configType="ContactManagement"
    @CloseConfigGridMoadl="CloseConfigExportMoadl"
  />




  
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  watch,
  createVNode,
} from "vue";
import { message, Modal } from "ant-design-vue";
import {
  
  DeleteFilled,EditOutlined,
  ExclamationCircleOutlined,SearchOutlined,CloseOutlined,BellOutlined,CopyFilled,InteractionOutlined,UndoOutlined
  
} from "@ant-design/icons-vue";
import {
  ContactEntity,ContactColumns,ExportColumns
} from "../../TypeInterface/ICrm/IContactManagement";
import CommonQueryHeaderCRM from "../../components/CommonQueryHeaderCRM.vue";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
    GetExpColumnsConfig,
} from "../../Request/userRequest";



import {
  GetContactManagementDatas,AddContact,UpdateContact,DeleteById,BatchDelete,BatchExport,CopyDataById,
  CancelClueShift
}
 from "../../Request/CrmRequest/ContactManagementRequest";

import { deepClone } from "../../utility/commonFunc";
import{useRouter} from 'vue-router'
import configGridModal from "../../components/configGridModal.vue";
import configExportModal from "../../components/configExportModal.vue";

import ClueShiftModal from "../../components/ClueShiftModal.vue";


export default defineComponent({
  components: {
configGridModal,configExportModal,ClueShiftModal,
    DeleteFilled,SearchOutlined,CommonQueryHeaderCRM,CloseOutlined,EditOutlined,
    BellOutlined,CopyFilled,InteractionOutlined,UndoOutlined

  },
  setup() {
    const state = reactive({
      count: 0,
    });
  const router=useRouter();
    const DataEntityState = reactive(new ContactEntity());
 
    let  NewDataEntityState=new ContactEntity();
    
    






  



    /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);


      const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetContactManagementDatas({
        current: current,
        pageSize: pageSize,
        ...DataEntityState.QueryConditionInfo,
      }).then((res: any) => {
        console.log(res);
        loading.value = false;
        if (res.isSuccess) {
          DataEntityState.DataList = res.datas;
        }
      });
    };
    watch(pageSize, () => {
      //console.log("pageSize", pageSize.value);
    });
    watch(current1, () => {
      loading.value = true;
      GetContactManagementDatas({
        current: current1.value,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      }).then((res: any) => {
        //console.log(res);
        loading.value = false;
        if (res.isSuccess) {
          DataEntityState.DataList = res.datas;
        }
      });
    });
    watch(refreshMark, () => {
      loading.value = true;
      GetContactManagementDatas({
        current: current1.value,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      }).then((res: any) => {
        loading.value = false;
        if (res.isSuccess) {
          console.log(res.datas);
          DataEntityState.DataList = res.datas;
          totalCount.value = res.totalCount;
        }
      });
    });


 





  /***分页****************/

/***数据初始化****************/
let loading = ref<boolean>(false);
onMounted(async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "ContactManagement" });
      //console.log("ProductManagementColumn1",columnList)
if(columnList==undefined||columnList.length==0)
{
  columnList=deepClone(ContactColumns)
}
     // console.log("ProductManagementColumn2",columnList)

      DataEntityState.ListColumns = deepClone(columnList);

      var len = columnList.length - 1;
      //start from the top
      for (var j = len; j >= 0; j--) {
        console.log(j + "=" + columnList[j]);
        if (columnList[j]["isUse"] == false) {
          columnList.splice(j, 1);
        }
        if (columnList[j].title == "操作") {
          columnList[j].fixed = "right";
          // columnList[j].width = 190;
          // columnList[j].dataIndex = "action";
        }
      }
      DataEntityState.ListGridColumns = columnList;






      for (var i in DataEntityState.ListGridColumns) {
        if (DataEntityState.ListGridColumns[i]["slots"] == null) {
          delete DataEntityState.ListGridColumns[i]["slots"];
        }
      }
      for (var z in DataEntityState.ListColumns) {
        if (DataEntityState.ListColumns[z]["slots"] == null) {
          delete DataEntityState.ListColumns[z]["slots"];
        }
      }


      
let ExportColumnsList = await GetExpColumnsConfig({
        pageName: "ContactManagement",
      });

     // console.log("ExportColumnsList", ExportColumnsList);

      if (ExportColumnsList != undefined && ExportColumnsList.length > 0) {
        DataEntityState.ExportColumns = ExportColumnsList;
      } else {
        DataEntityState.ExportColumns = ExportColumns;
      }







      //获用户数据
      loading.value = true;
      let UserDatasList = await GetContactManagementDatas({
        current: 1,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      });
      loading.value = false;

      console.log("amount", UserDatasList);
      if (UserDatasList.isSuccess) {
        DataEntityState.DataList = UserDatasList.datas;
        totalCount.value = UserDatasList.totalCount;
        current1.value = 1;
      }
      
      //测试
      // for(var s=0;s<11;s++)
      // {
      //   DataEntityState.DataList.push(DataEntityState.ClueDatas[0]);
      // }
      //  console.log(DataEntityState.DataList);
      //    totalCount.value = DataEntityState.DataList.length;
      //  current1.value = 1;

    });
    /***数据初始化****************/





/***勾选****************/
    const onSelectChange = (selectedRowKeys: [], selectedRows: []) => { 
      DataEntityState.selectedRowKeys = selectedRowKeys;
      DataEntityState.selectedRows = selectedRows;
    };
    /***勾选****************/













/***功能按钮****************************************** */
const SearchBtn = async (payload: any) => {
   DataEntityState.selectedRowKeys = [];
              DataEntityState.selectedRows = [];
      loading.value = true;

      let UserDatasList1 = await GetContactManagementDatas({
        current: 1,
        pageSize: pageSize.value,
        ...payload,
      });
      //console.log("UserDatasList1",UserDatasList1)
      loading.value = false;
      if (UserDatasList1.isSuccess) {
        DataEntityState.DataList = UserDatasList1.datas;
        totalCount.value = UserDatasList1.totalCount;
        current1.value = 1;
      }
      DataEntityState.QueryConditionInfo = payload;
    };

   

    const ClearQueryBtn = (payload: any) => {
      console.log("ClearQueryBtn");
    };
 const CreateBtn = (payload: any) => {
      router.push({ path: "/Home/CreateContactPage", query: {pageType:"add"} });
    };

    

   //暂时不用
    const RefreshBtnTemp = async (payload: any) => {
   
   loading.value = true;
for(let item in  DataEntityState.QueryConditionInfo)
{
if(DataEntityState.QueryConditionInfoConfig[item].type=="text")
     {
         DataEntityState.QueryConditionInfo[item]="";
     }
     if(DataEntityState.QueryConditionInfoConfig[item].type=="select")
     {
         DataEntityState.QueryConditionInfo[item]="未选择";
     }
}

GetContactManagementDatas({
     current: current1.value,
     pageSize: pageSize.value,
     ...DataEntityState.QueryConditionInfo,
   }).then((res: any) => {
     loading.value = false;
     if (res.isSuccess) {
       console.log(res.datas);
       DataEntityState.DataList = res.datas;
       totalCount.value = res.totalCount;
     }
   });
 };

/***功能按钮****************************************** */



const DeleteBth = (item: any,productCode:any) => {

Modal.confirm({
              title: "您确定要删除这条记录吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `联系人编号：${productCode}`,
              okText: "Yes",
              okType: "danger",
              cancelText: "No",
              onOk() {
                // const index = UserDataEntityState.UserDataList.findIndex(
                //     (i: IUserInfo) => i.sysUserId == Id);
                //     UserDataEntityState.UserDataList.splice(index, 1);

                loading.value = true;
                DeleteById({ Id: item }).then((res: any) => {
                  if (res.isSuccess) {
                    refreshMark.value = new Date().getTime().toString();
                    message.success("删除成功.");
                  }
                });
              },
              onCancel() {
                message.error("已取消.");
              },
            });

   };

   

const CopyBtn = (item: any) => {
 CopyDataById({ Id: item }).then((res: any) => {
              //console.log(res);
              if (res.isSuccess) {
                refreshMark.value = new Date().getTime().toString();
                DataEntityState.selectedRowKeys = [];
                DataEntityState.selectedRows = [];
                message.success(res.msg);
              }else{
                 message.success("error");
              }
            });
}

const EditBth = (item: any) => {
console.log("EditBth",item)
router.push({ path: "/Home/CreateContactPage", query: {pageType:"edit",id: item} });

};

const CancelContactShift = (item: any) => {

  Modal.confirm({
        title: "您确定要执行线索转换撤销操作吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: `联系人姓名：${item.name} `,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        okButtonProps: {
          
        },
        onOk() {
         
          CancelClueShift(item).then((res: any) => {
            if (res.isSuccess) {
              refreshMark.value = new Date().getTime().toString();
             
              message.success("线索转换撤销成功.");
            }
            else
            {
              message.error(res.msg);
            }
          });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
};






 const BatchDeleteBtn = (payload: any) => {
      let keys: string[] = [];
      for (let i in DataEntityState.selectedRowKeys) {
        keys[i] = DataEntityState.selectedRowKeys[i];
      }
      let isDesibleOkBtn = false;
      if (keys.length == 0) {
        isDesibleOkBtn = true;
      }

      Modal.confirm({
        title: "您确定要执行批量删除操作吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: `共计：${keys.length} 条记录`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        okButtonProps: {
          disabled: isDesibleOkBtn,
        },
        onOk() {
          BatchDelete({ keys: keys }).then((res: any) => {
            if (res.isSuccess) {
              refreshMark.value = new Date().getTime().toString();
              DataEntityState.selectedRowKeys = [];
              DataEntityState.selectedRows = [];
              message.success("批量删除成功.");
            }
          });
         
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };



/***导出 start************** */

  const ExportExcelBtn = () => {
      let keys: string[] = [];
      for (let i in DataEntityState.selectedRowKeys) {
        keys[i] = DataEntityState.selectedRowKeys[i];
      }
      let isDesibleOkBtn = false;
      if (keys.length == 0) {
        isDesibleOkBtn = true;
      }

      Modal.confirm({
        title: "您确定要执行批量导出操作吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: `共计：${keys.length} 条记录`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        okButtonProps: {
          disabled: isDesibleOkBtn,
        },
        onOk() {
          //console.log(ids);
          BatchExport({ keys: keys }).then((res: any) => {
            // if (res.isSuccess) {
            //   refreshMark.value = new Date().getTime().toString();
            //   UserDataEntityState.selectedRowKeys = [];
            //   UserDataEntityState.selectedRows = [];
            //   message.success("导出成功.");
            console.log(res);
            console.log(typeof res);

            var ress = [
              //示例数组
              {
                name: "bob",
                age: "13",
                career: "student",
              },
              {
                name: "clare",
                age: "20",
                career: "engineer",
              },
            ];
            var dataType = "\uFEFF"; //解决乱码问题
            dataType += ["" + "姓名", "年龄", "职业"].join(","); //添加表格的头
            dataType += "\n";

            ress.forEach(function (item) {
              //遍历数组，用字符串拼接
              dataType += ["" + item.name, item.age, item.career].join(",");
              dataType += "\n";
            });

            // let blob1 = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
            //    let url = window.URL.createObjectURL(blob1);
            //    window.location.href = url;

            //注释：有没有引入mock生成的数据文件,文件里引用了mockjs,mock会对返回的数据做处理,导致文件下载 乱码 文件损坏 打开undefind等
           // console.log("headers", res.headers);
            const blob = new Blob([res.data], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const f = "统计.xlsx";
            // const contentDisposition =
            //   res.headers["content-disposition"] ||
            //   res.headers["Content-Disposition"];
            //   console.log("contentDisposition",contentDisposition)
            //const fileName =(contentDisposition && contentDisposition.split(";")[1]).split("=")[1] ||f ||"";
         const fileName ="联系人-"+new Date().getTime();
            //const fileName = '统计.xlsx';
            const elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);

            // }
          });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };



/***导出 end************** */


/***导出配置 start************** */

let visibleConfigExport = ref<boolean>(false);
    let modalTitleConfigExport = ref<string>("");

    const ShowConfigExportBtn = () => {

      //console.log(1111)
      visibleConfigExport.value = true;
      modalTitleConfigExport.value = "配置【导出信息】";
    };

    const CloseConfigExportMoadl = async () => {
      visibleConfigExport.value = false;

      let ExportColumnsList = await GetExpColumnsConfig({
        pageName: "ContactManagement",
      });

  

      if (ExportColumnsList != undefined && ExportColumnsList.length > 0) {
        DataEntityState.ExportColumns = ExportColumnsList;
      } else {
        DataEntityState.ExportColumns = ExportColumns;
      }
    };

/***导出配置 end************** */





/***配置列表 start************** */
let visibleModelConfigGrid = ref<boolean>(false);
    let modalTitleConfigGrid = ref<string>("");
  
  const ShowConfigGridBtn = () => {
      visibleModelConfigGrid.value = true;
      modalTitleConfigGrid.value = "配置【列表显示】";
    };

    const CloseConfigGridMoadl = () => {
      visibleModelConfigGrid.value = false;
    };

 const UpdateConfigGrid = async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "ContactManagement" });
    
      if(columnList==undefined||columnList.length<=0)
{
  columnList=deepClone(ContactColumns)
}

      DataEntityState.ListColumns = deepClone(columnList);

      var len = columnList.length - 1;
      //start from the top
      for (var j = len; j >= 0; j--) {
        console.log(j + "=" + columnList[j]);
        if (columnList[j]["isUse"] == false) {
          columnList.splice(j, 1);
        }
        if (columnList[j].title == "操作") {
          columnList[j].fixed = "right";
          // columnList[j].width = 190;
          // columnList[j].dataIndex = "action";
        }
      }

      DataEntityState.ListGridColumns = columnList;

      for (var i in DataEntityState.ListGridColumns) {
        if (DataEntityState.ListGridColumns[i]["slots"] == null) {
          delete DataEntityState.ListGridColumns[i]["slots"];
        }
      }

      for (var z in DataEntityState.ListColumns) {
        if (DataEntityState.ListColumns[z]["slots"] == null) {
          delete DataEntityState.ListColumns[z]["slots"];
        }
      }
    };


const RefreshBtn = async (payload: any) => {
   
 UpdateConfigGrid();
      loading.value = true;
    //   DataEntityState.QueryConditionInfo = {
    //     workScheduleNo: "",
    //     workScheduleName: "",
    //     workScheduleType: "未选择",
    //       workScheduleStatus: "未选择",
    //   };
 DataEntityState.selectedRowKeys = [];
              DataEntityState.selectedRows = [];
 for(let item in  DataEntityState.QueryConditionInfo)
  {
if(DataEntityState.QueryConditionInfoConfig[item].type=="text")
        {
            DataEntityState.QueryConditionInfo[item]="";
        }
        if(DataEntityState.QueryConditionInfoConfig[item].type=="select")
        {
            DataEntityState.QueryConditionInfo[item]="未选择";
        }
  }





      GetContactManagementDatas({
        current: current1.value,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      }).then((res: any) => {
        loading.value = false;
        if (res.isSuccess) {
          console.log(res.datas);
          DataEntityState.DataList = res.datas;
          totalCount.value = res.totalCount;
        }
      });
    };
/***配置列表 end************** */






    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      DataEntityState,
      NewDataEntityState,SearchBtn,RefreshBtn,ClearQueryBtn,
    
      pageSize,
      current1,
      totalCount,      
      loading,
      pageSizeOptions,
      onShowSizeChange,
onSelectChange,
      DeleteBth,
      BatchDeleteBtn,
      EditBth,ExportExcelBtn,CopyBtn,ShowConfigExportBtn,CloseConfigExportMoadl,visibleConfigExport,modalTitleConfigExport,visibleModelConfigGrid,modalTitleConfigGrid,ShowConfigGridBtn,CloseConfigGridMoadl,

      CreateBtn,CancelContactShift,

      handleResizeColumn: (w:any, col:any) => {
        col.width = w;
      },





    };
  },
});
</script>

<style >
#ContactManaDataList {
   /* height: calc(100vh - 206x);  */
  border: 0px solid red;
  box-sizing: border-box;
   overflow: auto;
   
}
.userPagination {
  border: 0px solid red;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#ContactManaDataList .ant-table-thead > tr > th,
#ContactManaDataList .ant-table-tbody > tr > td {
  padding: 9px 9px;
}
.table-striped td {
}
.TableMyHeaderRow {
  background-color: red;
}

.ant-table-tbody .ant-table-row:nth-child(odd) {
  /* background-color: red;; */
}
.ant-table-tbody .ant-table-row:nth-child(even) {
  background-color: #fafafa;
}

.ant-table-thead > tr > th {
  padding-left: px;
  font-size: 14px;
  color: black;
  background: rgba(143, 178, 207, 0.405) !important;
}
</style>