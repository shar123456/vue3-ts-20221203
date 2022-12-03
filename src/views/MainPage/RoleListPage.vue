<template>
  <RoleListQueryHeader
    @SearchBtn="SearchBtn"
    @showConfigGrid="showConfigGrid"
    @batchDelete="batchDelete"
    @refreshBtn="refreshBtn"
    @showCreateModal="showCreateModal" 
    
  >
  </RoleListQueryHeader>
<div id="RoleDataList">
    <a-table
      bordered
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 1000, y: 'calc(100vh - 310px)' }"
      :customRow="rowActionClick"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :pagination="false"
    >
      <template #action>
       <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
          "
          title="编辑"
          ><EditFilled mark="edit"
        /></a>
      
        <delete-two-tone
          style="
            color: red;
            font-size: 20px;
            font-weight: 800;
            margin-left: 9px;
            cursor: pointer;
          "
        />
       

        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
            margin-left: 9px;
          "
          title="复制"
          ><CopyFilled mark="copy"
        /></a>

        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
            margin-left: 9px;
             cursor: pointer;
          "
          title="设置"
          ><SettingFilled mark="set"
        /></a>

 <setting-two-tone
          style="
            color: red;
            font-size: 20px;
            font-weight: 800;
            margin-left: 9px;
            cursor: pointer;display:none
          "
        />


      </template>

      <template #roleType="{ text: roleType }">
        <span>
          <a-tag :color="roleType === '' ? 'green' : 'green'">
            {{ roleType }}
          </a-tag>
        </span>
      </template>
 <template #useStatus="{ text: useStatus }">
        <span>
          <a-tag :color="useStatus === '启用' ? 'blue' : 'red'">
            {{ useStatus }}
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
    :ListColumns="ListColumns"
    configType="Role"
    @CloseConfigGridMoadl="CloseConfigGridMoadl"
    @refreshBtn="refreshBtn"
  />

<RoleEditModal
    :visibleRoleEdit="visibleRoleEdit"
    :modalTitleRoleEdit="modalTitleRoleEdit"
    :UserData="DataEntityState"
    @closeRoleEditMoadl="closeRoleEditMoadl"
    @UpdateRoleInfoBtn="UpdateRoleInfoBtn"
    @CreateRoleInfoBtn="CreateRoleInfoBtn"
  />
  <RoleFunConfigModal
    :visibleRoleFunConfig="visibleRoleFunConfig"
    :modalTitleRoleFunConfig="modalTitleRoleFunConfig"
    :CurrentUser="CurrentUser"
    @CloseSetingMoadl="CloseRoleFunConfigMoadl"
   
  />

</template>

<script lang="ts">
import { reactive, toRefs, defineComponent ,ref,watch,onMounted,createVNode} from "vue";
import RoleListQueryHeader from "../../components/RoleListQueryHeader.vue";

import { RoleDataEntity,IRoleInfo,RoleColumns } from "../../TypeInterface/IRoleInterface";
import { deepClone } from "../../utility/commonFunc";
import { message, Modal } from "ant-design-vue";
import configGridModal from "../../components/configGridModal.vue";
import RoleEditModal from "../../components/RoleEditModal.vue";
import RoleFunConfigModal from "../../components/RoleFunConfigModal.vue";
import {
  GetLoginRecordColumn,
 
} from "../../Request/userRequest";

import {
 GetRoleDatas,DeleteRoleById,BatchDeleteRole,UpdateRoleDatas,AddRoleDatas,CopyRoleDataById
} from "../../Request/RoleRequest";
import {
  EditTwoTone,
  DeleteTwoTone,
  ExclamationCircleOutlined,

  FormOutlined,
  CopyFilled,
  EditFilled,
  HighlightFilled,
  CopyOutlined,
  SettingOutlined,
  SettingFilled,SettingTwoTone
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    RoleListQueryHeader,ExclamationCircleOutlined,DeleteTwoTone,
    configGridModal,
     EditTwoTone,
 
    FormOutlined,
    CopyFilled,
    EditFilled,
    HighlightFilled,
    CopyOutlined,
    SettingOutlined,
    SettingFilled,RoleEditModal,RoleFunConfigModal,SettingTwoTone
  },
  setup() {
    const state = reactive({
      count: 0,
    });

 const DataEntityState = reactive(new RoleDataEntity());
   let visibleModelConfigGrid = ref<boolean>(false);
    let modalTitleConfigGrid = ref<string>("");


let visibleRoleEdit = ref<boolean>(false);
    let modalTitleRoleEdit = ref<string>("");

const closeRoleEditMoadl = () => {
      visibleRoleEdit.value = false;
    };

    let CurrentUser = ref<string>("");
let visibleRoleFunConfig = ref<boolean>(false);
    let modalTitleRoleFunConfig = ref<string>("");

 const CloseRoleFunConfigMoadl = () => {
      visibleRoleFunConfig.value = false;
         CurrentUser.value= "";
    };








    const showCreateModal = () => {
      visibleRoleEdit.value = true;
      modalTitleRoleEdit.value = "新增【角色信息】";
      DataEntityState.EditData.sysRoleId = "";
      DataEntityState.EditData.name = "";

      DataEntityState.EditData.roleType = "未选择";
      DataEntityState.EditData.useStatus = "未选择";

      
    };
const CreateRoleInfoBtn = (payload: any) => {
      console.log(payload);

      AddRoleDatas(payload).then((res: any) => {
        console.log(res);
        if (res.isSuccessful) {
          visibleRoleEdit.value = false;
          refreshMark.value = new Date().getTime().toString();
          message.success(res.message);
        } else {
          message.error("添加失败.");
        }
      });
    };
 const UpdateRoleInfoBtn = (payload: any) => {
      console.log(payload);

      UpdateRoleDatas(payload).then((res: any) => {
        console.log(res);
        if (res.isSuccessful) {
          visibleRoleEdit.value = false;
          refreshMark.value = new Date().getTime().toString();
          message.success(res.message);
        } else {
          message.error("更新失败.");
        }
      });
    };

/***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
    let loading = ref<boolean>(false);
    const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetRoleDatas({
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
      GetRoleDatas({
        current: current1.value,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      }).then((res: any) => {
        console.log("222222222",res);
        loading.value = false;
        if (res.isSuccess) {
          DataEntityState.DataList = res.datas;
        }
      });
    });
    watch(refreshMark, () => {
      loading.value = true;
      GetRoleDatas({
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
      let columnList = await GetLoginRecordColumn({ pageName: "Role" });
   
      console.log("amountLoginRecordcolumnList",columnList)
       console.log("amountRoleColumnsList",RoleColumns)
      
if(columnList==undefined||columnList.length==0)
{
  columnList=deepClone(RoleColumns);
}
      console.log("amountLoginRecordcolumnList11111",columnList)

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
console.log("DataEntityState.ListColumns",DataEntityState.ListColumns)
      //获用户数据
      loading.value = true;
      let UserDatasList = await GetRoleDatas({
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
        onClick: async(event: any) => {
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
           
  const Id = record.sysRoleId;
loading.value = true;
            CopyRoleDataById({ Id: Id }).then((res: any) => {
              console.log(res);
              if (res.isSuccessful) {
                refreshMark.value = new Date().getTime().toString();
                // DataEntityState.selectedRowKeys = [];
                // DataEntityState.selectedRows = [];
                message.success("复制成功.");
                loading.value = false;
              }
              else
              {
                 loading.value = false;
              }
            });

          }

          if (
            event.target.parentNode.getAttribute("data-icon") == "edit" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "edit"
          ) {
            const Id = record.sysRoleId;
            const res: IRoleInfo[] = DataEntityState.DataList.filter(
              (i: IRoleInfo) => i.sysRoleId == Id
            );
            console.log(res[0]);
            DataEntityState.EditData.sysRoleId = res[0].sysRoleId;
            DataEntityState.EditData.name = res[0].name;
            DataEntityState.EditData.roleType = res[0].roleType;
            DataEntityState.EditData.useStatus = res[0].useStatus;
            
            visibleRoleEdit.value = true;
            modalTitleRoleEdit.value = "编辑【角色信息】";
          }
          if (
            event.target.parentNode.getAttribute("data-icon") == "delete" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "delete"
          ) {
            const Id = record.sysRoleId;

            Modal.confirm({
              title: "您确定要删除这条记录吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `角色名：${record.name}`,
              okText: "Yes",
              okType: "danger",
              cancelText: "No",
              onOk() {
                // const index = UserDataEntityState.UserDataList.findIndex(
                //     (i: IUserInfo) => i.sysUserId == Id);
                //     UserDataEntityState.UserDataList.splice(index, 1);

                loading.value = true;
                DeleteRoleById({ Id: Id }).then((res: any) => {
                    console.log(res)
                  if (res.isSuccess) {
                    refreshMark.value = new Date().getTime().toString();
                    message.success("删除成功.");
                  }else
                  {
   refreshMark.value = new Date().getTime().toString();
                    message.success(`${res.msg}`);
                  }
                });
              },
              onCancel() {
                message.error("已取消.");
              },
            });
          }

if (
            event.target.parentNode.getAttribute("data-icon") == "setting" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "setting"
          ) {
            const Id = record.sysRoleId;
          CurrentUser.value= record.sysRoleId;
           visibleRoleFunConfig.value = true;
           console.log( visibleRoleFunConfig.value )
      modalTitleRoleFunConfig.value = "【配置角色功能权限】";
          }


        },
      };
    };
    /***rowActionClick****************/











 // --------------
    const UpdateConfigGrid = async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "Role" });
      console.log("GetLoginRecordColumn", columnList);
      console.log("amount", columnList);
      if (columnList == undefined||columnList.length==0) {
        columnList = deepClone(RoleColumns);
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
const CloseConfigGridMoadl = () => {
      visibleModelConfigGrid.value = false;
    };
    const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetRoleDatas({
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

    const showConfigGrid = () => {
      visibleModelConfigGrid.value = true;
      modalTitleConfigGrid.value = "配置【列表显示】";
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
          BatchDeleteRole({ keys: keys }).then((res: any) => {
            if (res.isSuccess) {
              refreshMark.value = new Date().getTime().toString();
              DataEntityState.selectedRowKeys = [];
              DataEntityState.selectedRows = [];
              message.success("删除成功.");
            }else
                  {
   refreshMark.value = new Date().getTime().toString();
                    message.success(`${res.msg}`);
                  }
          });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };

    const refreshBtn = (payload: any) => {
      UpdateConfigGrid();

      loading.value = true;
      DataEntityState.QueryConditionInfo = {
        name: "",

        useStatus: "未选择",
        roleType: "未选择",
      };
      GetRoleDatas({
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
    
    // --------------



 

    
    return {
      ...toRefs(state),
DataEntityState,
...toRefs(DataEntityState),
rowActionClick,
      onSelectChange,

      pageSize,
      current1,
      totalCount,
      onShowSizeChange,
      handleTableChange,
      
      loading,
      pageSizeOptions,


 visibleModelConfigGrid,
      modalTitleConfigGrid,
      CloseConfigGridMoadl,

     

      SearchBtn,
      showConfigGrid,
      batchDelete,
      refreshBtn,
   
visibleRoleEdit,
modalTitleRoleEdit,
closeRoleEditMoadl,
UpdateRoleInfoBtn,
CreateRoleInfoBtn,
 showCreateModal



 ,visibleRoleFunConfig,
      modalTitleRoleFunConfig,CloseRoleFunConfigMoadl,CurrentUser
    };
  },
});
</script>

<style >
#RoleDataList {
  height: calc(100vh - 245px);
  border: 0px solid red;
  box-sizing: border-box;
}
.userPagination {
  border: 0px solid red;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#RoleDataList .ant-table-thead > tr > th,
#RoleDataList .ant-table-tbody > tr > td {
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