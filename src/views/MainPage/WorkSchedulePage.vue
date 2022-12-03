<template>
   <Work-Schedule-Query-Header
    @SearchBtn="SearchBtn"
@CreateBtn="CreateBtn"
    @batchDelete="batchDelete"
    @refreshBtn="refreshBtn"
       @showConfigGrid="showConfigGrid"
         @exportExcel="exportExcel"
             @configExport="showConfigExport"
  :StateEntity="NewWorkScheduleEntity"
  >
  </Work-Schedule-Query-Header>

  <div id="DataList">
    <a-table
      bordered
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 1000, y: 'calc(100vh - 320px)' }"
      :customRow="rowActionClick"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :pagination="false"
    >
     <template #useStatus="{ text: useStatus }">
        <span>
          <a-tag :color="useStatus === '启用' ? 'blue' : 'red'">
            {{ useStatus }}
          </a-tag>
        </span>
      </template>



 <template #workScheduleStatus="{ text: workScheduleStatus }">
        <span>
          <a-tag v-if="workScheduleStatus === '即将开始'"  color='#C1CE28'>
            {{ workScheduleStatus }}
          </a-tag>
           <a-tag v-else-if="workScheduleStatus === '已完成'"  color='green'>
            {{ workScheduleStatus }}
          </a-tag>
            <a-tag v-else-if="workScheduleStatus === '已过期'"  color='#dd4b39'>
            {{ workScheduleStatus }}
          </a-tag>
          <a-tag v-else-if="workScheduleStatus === '未开始'"  color='#A3A98D'>
            {{ workScheduleStatus }}
          </a-tag>
           <a-tag v-else  color='pink'>
            {{ workScheduleStatus }}
          </a-tag>
        </span>
      </template>

      <template #action="{ text: action }">
       <a  @click="RemindBth(action)"
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
         
          title="提醒"
          ><BellOutlined   mark="remind"
        />&nbsp;提醒</a>
       <a  @click="DetailBth(action)"
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
         
          title="查看"
          ><SearchOutlined  mark="delete"
        />&nbsp;查看</a>
         <a  @click="EditBth(action)"
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
        />&nbsp;编辑</a>
        <a  @click="DeleteBth(action)"
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:#dd4b39 ;
            border-radius: 4px;
          "
         
          title="删除"
          ><CloseOutlined  mark="delete"
        />&nbsp;删除</a>
     
      </template>

      <template #loginType="{ text: loginType }">
        <span>
          <a-tag :color="loginType === '微信小程序' ? 'blue' : 'red'">
            {{ loginType }}
          </a-tag>
        </span>
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
    configType="WorkSchedule"
    @CloseConfigGridMoadl="CloseConfigGridMoadl"
    @refreshBtn="refreshBtn"
  />

    <configExportModal
    :visibleModelConfigGrid="visibleConfigExport"
    :modalTitleConfigGrid="modalTitleConfigExport"
    :ListColumns="DataEntityState.ExportColumns"
    configType="WorkSchedule"
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
  ExclamationCircleOutlined,SearchOutlined,CloseOutlined,BellOutlined
  
} from "@ant-design/icons-vue";
import {
  WorkScheduleEntity,WorkScheduleColumns,ExportColumns
} from "../../TypeInterface/IWorkScheduleInterface";
import WorkScheduleQueryHeader from "../../components/WorkScheduleQueryHeader.vue";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
    GetExpColumnsConfig,
} from "../../Request/userRequest";



import {
  GetWorkScheduleDatas,DeleteById,BatchDelete,EmailRemind,BatchExport
}
 from "../../Request/WorkScheduleRequest";

import { deepClone } from "../../utility/commonFunc";
import{useRouter} from 'vue-router'
import configGridModal from "../../components/configGridModal.vue";
import configExportModal from "../../components/configExportModal.vue";
export default defineComponent({
  components: {
configGridModal,configExportModal,
    DeleteFilled,SearchOutlined,WorkScheduleQueryHeader,CloseOutlined,EditOutlined,BellOutlined

  },
  setup() {
    const state = reactive({
      count: 0,
    });
  const router=useRouter();
    const DataEntityState = reactive(new WorkScheduleEntity());
 
    let  NewWorkScheduleEntity=new WorkScheduleEntity();
  

/***配置列表 start************** */
let visibleModelConfigGrid = ref<boolean>(false);
    let modalTitleConfigGrid = ref<string>("");
  
  const showConfigGrid = () => {
      visibleModelConfigGrid.value = true;
      modalTitleConfigGrid.value = "配置【列表显示】";
    };

    const CloseConfigGridMoadl = () => {
      visibleModelConfigGrid.value = false;
    };

 const UpdateConfigGrid = async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "WorkSchedule" });
    
      if(columnList==undefined)
{
  columnList=deepClone(WorkScheduleColumns)
}

      DataEntityState.ListColumns = deepClone(columnList);

      var len = columnList.length - 1;
      //start from the top
      for (var j = len; j >= 0; j--) {
        console.log(j + "=" + columnList[j]);
        if (columnList[j]["isUse"] == false) {
          columnList.splice(j, 1);
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



/***配置列表 end************** */


/***导出 start************** */

  const exportExcel = () => {
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
         const fileName ="工作计划-"+new Date().getTime();
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

    const showConfigExport = () => {

      console.log(1111)
      visibleConfigExport.value = true;
      modalTitleConfigExport.value = "配置【导出信息】";
    };

    const CloseConfigExportMoadl = async () => {
      visibleConfigExport.value = false;

      let ExportColumnsList = await GetExpColumnsConfig({
        pageName: "WorkSchedule",
      });

  

      if (ExportColumnsList != undefined && ExportColumnsList.length > 0) {
        DataEntityState.ExportColumns = ExportColumnsList;
      } else {
        DataEntityState.ExportColumns = ExportColumns;
      }
    };

/***导出配置 end************** */














   
   /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
    let loading = ref<boolean>(false);
    const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetWorkScheduleDatas({
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
      GetWorkScheduleDatas({
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
      GetWorkScheduleDatas({
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
    onMounted(async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "WorkSchedule" });
    
if(columnList==undefined||columnList.length==0)
{
  columnList=deepClone(WorkScheduleColumns)
}
     

      DataEntityState.ListColumns = deepClone(columnList);

      var len = columnList.length - 1;
      //start from the top
      for (var j = len; j >= 0; j--) {
        console.log(j + "=" + columnList[j]);
        if (columnList[j]["isUse"] == false) {
          columnList.splice(j, 1);
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
        pageName: "WorkSchedule",
      });

      console.log("ExportColumnsList", ExportColumnsList);

      if (ExportColumnsList != undefined && ExportColumnsList.length > 0) {
        DataEntityState.ExportColumns = ExportColumnsList;
      } else {
        DataEntityState.ExportColumns = ExportColumns;
      }







      //获用户数据
      loading.value = true;
      let UserDatasList = await GetWorkScheduleDatas({
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
      //  DataEntityState.DataList = DataEntityState.WorkScheduleDatas;
      //   totalCount.value = DataEntityState.WorkScheduleDatas.length;
      //   current1.value = 1;

    });
    /***数据初始化****************/

    /***排序****************/
    const handleTableChange = (pag: any, filters: any, sorter: any) => {
      console.log({
        results: pag!.pageSize!,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };
    /***排序****************/
    /***勾选****************/
    const onSelectChange = (selectedRowKeys: [], selectedRows: []) => { 
      DataEntityState.selectedRowKeys = selectedRowKeys;
      DataEntityState.selectedRows = selectedRows;
    };
    /***勾选****************/

    /***rowActionClick****************/
    const rowActionClick = (record: any) => {
      return {
        onClick: (event: any) => {
          console.log(
            event.target.parentNode.parentNode.getAttribute("aria-label")
          );
          console.log(event.target.parentNode.getAttribute("data-icon"));
          console.log("id", record);

          if (
            event.target.parentNode.getAttribute("data-icon") == "copy" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "copy"
          ) {
            const Id = record.sysUserId;
          }

          if (
            event.target.parentNode.getAttribute("data-icon") == "edit" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "edit"
          ) {
            const Id = record.sysUserId;
          }
          if (
            event.target.parentNode.getAttribute("data-icon") == "delete" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "delete"
          ) {
            const Id = record.loginRecordId;

            
          }
        },
      };
    };
    /***rowActionClick****************/

const DetailBth=(item:any)=>{

  router.push({path: '/Home/WorkScheduleDetail', query: {Id: item}});
}
const EditBth=(item:any)=>{
   router.push({ path: "/Home/CreateWorkSchedule", query: {pageType:"edit",id: item} });
  
}
const DeleteBth=(item:any)=>{

  Modal.confirm({
              title: "您确定要删除这条记录吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `计划编号：${item}`,
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
}



const RemindBth=(item:any)=>{

  Modal.confirm({
              title: "您确定要执行提醒功能吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `邮件提醒`,
              okText: "Yes",
              okType: "danger",
              cancelText: "No",
              onOk() {
                // const index = UserDataEntityState.UserDataList.findIndex(
                //     (i: IUserInfo) => i.sysUserId == Id);
                //     UserDataEntityState.UserDataList.splice(index, 1);

                loading.value = true;
                EmailRemind({ Id: item }).then((res: any) => {
                  if (res.isSuccess) {
                    // refreshMark.value = new Date().getTime().toString();
                    message.success("提醒成功.");
                  }
                  else
                  {
                     message.error(res.msg);
                  }
                  loading.value = false;
                });
              },
              onCancel() {
                message.error("已取消.");
              },
            });
}








/********************************************* */
 const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetWorkScheduleDatas({
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
      router.push({ path: "/Home/CreateWorkSchedule", query: {pageType:"add"} });
    };

    

    const batchDelete = (payload: any) => {
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

    const refreshBtn = async (payload: any) => {
   
 UpdateConfigGrid();
      loading.value = true;
    //   DataEntityState.QueryConditionInfo = {
    //     workScheduleNo: "",
    //     workScheduleName: "",
    //     workScheduleType: "未选择",
    //       workScheduleStatus: "未选择",
    //   };

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





      GetWorkScheduleDatas({
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
  /********************************************* */

    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      DataEntityState,
NewWorkScheduleEntity,
      rowActionClick,
      onSelectChange,

      pageSize,
      current1,
      totalCount,
      onShowSizeChange,
      handleTableChange,
      
      loading,
      pageSizeOptions,
DeleteBth,
DetailBth,EditBth,CreateBtn,RemindBth,




SearchBtn,
     
      ClearQueryBtn,
     
      batchDelete,
      refreshBtn,
    visibleModelConfigGrid,
      modalTitleConfigGrid,
      CloseConfigGridMoadl,
      showConfigGrid,
      exportExcel,

visibleConfigExport,
      modalTitleConfigExport,
      showConfigExport,
      CloseConfigExportMoadl,




    };
  },
});
</script>

<style >
#DataList {
max-height: calc(100vh - 240px);
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

#DataList .ant-table-thead > tr > th,
#DataList .ant-table-tbody > tr > td {
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