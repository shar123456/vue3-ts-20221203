<template>
  <MenuHeader @SearchBtn="SearchBtn" @refreshBtn="refreshBtn"
   @showCreateModal="showCreateModal"
  > </MenuHeader>

  <!-- 
  <a-table :columns="columns" :data-source="data"   :customRow="rowActionClick" >
<template #action>
        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
          "
          title="删除"
          ><delete-two-tone mark="delete"
        /></a>
      </template>




 <template #name="{ text: menuLevel }">
        <span>
          <a-tag :color="menuLevel === 1 ? 'blue' : 'red'">
            {{ menuLevel }}
          </a-tag>
        </span>
      </template>
 <template #name2="{ text: hasSub }">
        <span>
          <a-tag :color="hasSub ==true ? 'blue' : 'red'">
            {{ hasSub }}
          </a-tag>
        </span>
      </template>
    </a-table> -->

  <div id="DataList">
    <a-table
      v-if="showTable"
      bordered
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 1000, y: 'calc(100vh - 310px)' }"
      :customRow="rowActionClick"
      :defaultExpandAllRows="defaultExpandAllRows"
      :expandedRowKeys="expandedRowKeys"
      :defaultExpandedRowKeys="defaultExpandedRowKeys"
      :pagination="false"
    >
      <template #action="{record}">
        <a v-if="(record.hasSub=='是')"
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
          "
          title="添加"
           @click="AddMenuBth(record)"
          ><PlusOutlined mark="add"
        /></a>
        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            font-weight: 800;
            margin-left: 9px;
          "
          title="编辑"
          ><EditFilled mark="edit"
        /></a>
        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 20px;
            margin-left: 9px;
            font-weight: 800;
          "
          title="删除"
          ><delete-two-tone mark="delete"
        /></a>
      </template>

      <template #name3="{ record }">
        <span>
          <a-tag
            :color="
              record.menuLevel === 1
                ? 'blue'
                : record.menuLevel === 2
                ? 'green'
                : 'red'
            "
          >
            {{ record.menuId }}
          </a-tag>
        </span>
      </template>

      <template #name="{ text: menuLevel }">
        <span>
          <a-tag
            :color="
              menuLevel === 1 ? 'blue' : menuLevel === 2 ? 'green' : 'red'
            "
          >
            {{ menuLevel === 1 ? "一级" : menuLevel === 2 ? "二级" : "三级" }}
          </a-tag>
        </span>
      </template>
      <template #name2="{ text: hasSub }">
        <span>
          <!-- <a-tag :color="hasSub ==true ? 'blue' : 'red'">
            {{ hasSub }}
          </a-tag> -->
          {{ hasSub === "是" ? "是" : "否" }}
        </span>
      </template>

      <template #name4="{ text: MenuIcon }">
        <span>
          <!-- <a-tag :color="hasSub ==true ? 'blue' : 'red'">
            {{ hasSub }}
          </a-tag> -->
          <iconFont :IconStr="MenuIcon" />
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

  <MenuEditModal
    :visibleMenu="visibleMenu"
    :modalTitlesMenu="modalTitlesMenu"
    :MenuData="DataEntityState"
    @closeMenuMoadl="closeMenuMoadl"
    @UpdateMenuInfoBtn="UpdateMenuInfoBtn"
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

import MenuHeader from "../../components/MenuHeader.vue";
import { deepClone } from "../../utility/commonFunc";
import { message, Modal } from "ant-design-vue";
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
  SettingFilled,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { MenuDataEntity, IMenuInfo } from "../../TypeInterface/IMenuInterface";
import MenuEditModal from "../../components/MenuEditModal.vue";
import {
  GetMenuColumn,
  GetMenuDatas,
  DeleteMenuById,
  UpdateMenuDatas,
} from "../../Request/menuRequest";
import iconFont from "../../components/iconFont.vue";

const columns = [
 { title: '菜单Id', dataIndex: 'menuId',width:300, key: 'name',isUse: true,slots: { customRender: "name3" }},
  { title: "名称", name: "menuTitle", dataIndex: "menuTitle", key: "platform" ,isUse: true },
  { title: "Url", dataIndex: "menuUrl", width:300,key: "version" ,isUse: true},
  { title: "序号", dataIndex: "menuorder", key: "upgradeNum" ,isUse: true,width:70,},
  {
    title: "等级",
    dataIndex: "menuLevel",
    key: "creator",width:90,
    slots: { customRender: "name" },isUse: true
  },
  { title: "Icon", dataIndex: "menuIcon", key: "createdAt",isUse: true ,width:100, slots: { customRender: "name4" },},
  {
    title: "是否有子菜单",
    dataIndex: "hasSub",
    key: "createdAt1",width:117,
    slots: { customRender: "name2" },isUse: true
  },
  { title: "菜单父级Id", dataIndex: "menuParentId", key: "createdAt2",isUse: true },
  {
    title: "操作",
    width: 100,
    key: "operation",
    slots: { customRender: "action" },isUse: true
  },
];

const data: IMenuInfo[] = [
  {
    key: 1,
    menuId: "0001",
    menuTitle: "系统设置",
    menuUrl: "10.3.4.5654",
    menuorder: 1,
    menuLevel: 1,
    hasSub: "true",
    menuIcon: "menuIcon",
    menuParentId: "0",
    menuKey: "",
    children: [
      {
        key: 11,
        menuId: "2",
        menuTitle: "用户列表",
        menuUrl: "10.3.4.5654",
        menuorder: 1,
        menuLevel: 2,
        hasSub: "false",
        menuIcon: "menuIcon",
        menuParentId: "0001",
        menuKey: "",
      },
      {
        key: 12,
        menuId: "3",
        menuTitle: "登录记录",
        menuUrl: "10.3.4.5654",
        menuorder: 2,
        menuLevel: 2,
        hasSub: "false",
        menuIcon: "menuIcon",
        menuParentId: "0001",
        menuKey: "",
      },
      {
        key: 13,
        menuId: "4",
        menuTitle: "菜单列表",
        menuUrl: "10.3.4.5654",
        menuorder: 2,
        menuLevel: 2,
        hasSub: "false",
        menuIcon: "menuIcon",
        menuParentId: "0001",
        menuKey: "",
      },
    ],
  },
];

export default defineComponent({
  components: {
    MenuHeader,
    DeleteTwoTone,
    EditFilled,
    MenuEditModal,
    iconFont,
    PlusOutlined,
  },
  setup() {
    const DataEntityState = reactive(new MenuDataEntity());
    let visibleMenu = ref<boolean>(false);
    let modalTitlesMenu = ref<string>("");
    let defaultExpandAllRows = ref<boolean>(true);
    let expandedRowKeys = ref<number[] | undefined>(undefined);
    let defaultExpandedRowKeys = ref<number[] | undefined>(undefined);
    let showTable = ref<boolean>(true);

    /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
    let loading = ref<boolean>(false);
    const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetMenuDatas({
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
      GetMenuDatas({
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
      GetMenuDatas({
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
      let columnList = await GetMenuColumn({ pageName: "Menu" });

      columnList = columns;
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

      //获用户数据
      loading.value = true;
      let UserDatasList = await GetMenuDatas({
        current: 1,
        pageSize: pageSize.value,
        ...DataEntityState.QueryConditionInfo,
      });
      loading.value = false;

      console.log("amountMenuDatas", UserDatasList);
      if (UserDatasList.isSuccess) {
        DataEntityState.DataList = UserDatasList.datas;
        //DataEntityState.DataList=data;

        totalCount.value = UserDatasList.totalCount;
        current1.value = 1;

        showTable.value = true;
      }
    });
    /***数据初始化****************/

    /***rowActionClick****************/
    const rowActionClick = (record: any) => {
      console.log("record", record);
      return {
        onClick: (event: any) => {
          console.log(
            event.target.parentNode.parentNode.getAttribute("aria-label")
          );
          console.log(event.target.parentNode.getAttribute("data-icon"));
          console.log("menupageRecord", record);

          if (
            event.target.parentNode.getAttribute("data-icon") == "plus" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "plus"
          ) {
           //






        
          }

          if (
            event.target.parentNode.getAttribute("data-icon") == "edit" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "edit"
          ) {
            const Id = record.menuId;
            const menuLevel = record.menuLevel;
            if (menuLevel == 1) {
              const res: IMenuInfo[] = DataEntityState.DataList.filter(
                (i: IMenuInfo) => i.menuId == Id
              );
              DataEntityState.EditData.menuId = res[0].menuId;
              DataEntityState.EditData.menuTitle = res[0].menuTitle;
              DataEntityState.EditData.menuUrl = res[0].menuUrl;
              DataEntityState.EditData.menuorder = res[0].menuorder;
              DataEntityState.EditData.menuLevel = res[0].menuLevel;
              DataEntityState.EditData.hasSub = res[0].hasSub;
              DataEntityState.EditData.menuParentId = res[0].menuParentId;
              DataEntityState.EditData.menuIcon = res[0].menuIcon;
            } else {
              console.log(record.hasSub);
              DataEntityState.EditData.menuId = record.menuId;
              DataEntityState.EditData.menuTitle = record.menuTitle;
              DataEntityState.EditData.menuUrl = record.menuUrl;
              DataEntityState.EditData.menuorder = record.menuorder;
              DataEntityState.EditData.menuLevel = record.menuLevel;
              DataEntityState.EditData.hasSub = record.hasSub;
              DataEntityState.EditData.menuParentId = record.menuParentId;
              DataEntityState.EditData.menuIcon = record.menuIcon;
            }

            visibleMenu.value = true;
            modalTitlesMenu.value = "编辑【菜单信息】";
          }
          if (
            event.target.parentNode.getAttribute("data-icon") == "delete" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "delete"
          ) {
            const Id = record.menuId;

            Modal.confirm({
              title: "您确定要删除这条记录吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `菜单名称：${record.menuTitle}`,
              okText: "Yes",
              okType: "danger",
              cancelText: "No",
              onOk() {
                // const index = UserDataEntityState.UserDataList.findIndex(
                //     (i: IUserInfo) => i.sysUserId == Id);
                //     UserDataEntityState.UserDataList.splice(index, 1);

                loading.value = true;
                DeleteMenuById({ Id: Id }).then((res: any) => {
                  console.log("DeleteMenuById", res);
                  if (res.isSuccess) {
                    refreshMark.value = new Date().getTime().toString();
                    message.success("删除成功.");
                  } else {
                    refreshMark.value = new Date().getTime().toString();
                    message.error(res.msg);
                  }
                });
              },
              onCancel() {
                message.error("已取消.");
              },
            });
          }
        },
      };
    };
    /***rowActionClick****************/


const AddMenuBth=(record:any)=>{
 const Id = record.menuId;
            const menuLevel = record.menuLevel;
            if (menuLevel == 1) {
              if (record.hasSub == "是") {
                console.log(record.hasSub);
                DataEntityState.EditData.menuId = "";
                DataEntityState.EditData.menuTitle = "";
                DataEntityState.EditData.menuUrl = "/";
                DataEntityState.EditData.menuorder = 0;
                DataEntityState.EditData.menuLevel = 2;
                DataEntityState.EditData.hasSub = "否";
                DataEntityState.EditData.menuParentId = record.menuId;
                DataEntityState.EditData.menuIcon = "未选择";
                  visibleMenu.value = true;
            modalTitlesMenu.value = "添加【菜单信息】";
              } else {
                message.error("此菜单项,没配置为有子项,不符合新增规则.");
              }
                
            }

            if (menuLevel == 2) {
              if (record.hasSub == "是") {
                console.log(record.hasSub);
                DataEntityState.EditData.menuId = "";
                DataEntityState.EditData.menuTitle = "";
                DataEntityState.EditData.menuUrl = "/";
                DataEntityState.EditData.menuorder = 0;
                DataEntityState.EditData.menuLevel = 3;
                DataEntityState.EditData.hasSub = "否";
                DataEntityState.EditData.menuParentId = record.menuId;
                DataEntityState.EditData.menuIcon = "未选择";
                  visibleMenu.value = true;
            modalTitlesMenu.value = "添加【菜单信息】";
              } else {
                message.error("此菜单项,没配置为有子项,不符合新增规则.");
              }
            }

if (menuLevel == 3){
   message.error("当前不支持4级菜单.");
}





 
}




 const showCreateModal = () => {
       DataEntityState.EditData.menuId = "";
                DataEntityState.EditData.menuTitle = "";
                DataEntityState.EditData.menuUrl = "/";
                DataEntityState.EditData.menuorder = 0;
                DataEntityState.EditData.menuLevel = 1;
                DataEntityState.EditData.hasSub = "是";
                DataEntityState.EditData.menuParentId = "0000";
                DataEntityState.EditData.menuIcon = "未选择";
                  visibleMenu.value = true;
            modalTitlesMenu.value = "添加【菜单信息】";
    };


    const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetMenuDatas({
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
        showTable.value = true;
        console.log("1111111111111111111111UserDatasList1", UserDatasList1);

        //expandedRowKeys.value=[3];
      }
      //defaultExpandAllRows.value=true;
      DataEntityState.QueryConditionInfo = payload;
    };

    const UpdateConfigGrid = async () => {
      //获取表格列及处理表格列
      let columnList = await GetMenuColumn({ pageName: "Menu" });
 columnList = columns;
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

    const refreshBtn = async (payload: any) => {
      UpdateConfigGrid();

      loading.value = true;
      DataEntityState.QueryConditionInfo = {
        menuTitle: "",
        menuId: "",
      };
      GetMenuDatas({
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

    const closeMenuMoadl = () => {
      visibleMenu.value = false;
    };

    const UpdateMenuInfoBtn = (payload: any) => {
      console.log(payload);
 visibleMenu.value = false;
          refreshMark.value = new Date().getTime().toString();
      // UpdateMenuDatas(payload).then((res: any) => {
      //   console.log(res);
      //   if (res.isSuccessful) {
      //     visibleMenu.value = false;
      //     refreshMark.value = new Date().getTime().toString();
      //     message.success(res.message);
      //   } else {
      //     message.error("更新失败.");
      //   }
      // });
    };

    return {
      ...toRefs(DataEntityState),
      DataEntityState,
      pageSize,
      current1,
      totalCount,
      onShowSizeChange,
      loading,
      pageSizeOptions,

      SearchBtn,

      showTable,
      refreshBtn,

      visibleMenu,
      modalTitlesMenu,
      closeMenuMoadl,
      UpdateMenuInfoBtn,
      defaultExpandAllRows,
      expandedRowKeys,
      defaultExpandedRowKeys,
      data,
      columns,
      rowActionClick,
      AddMenuBth,showCreateModal
    };
  },
});
</script>


<style >
#DataList {
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