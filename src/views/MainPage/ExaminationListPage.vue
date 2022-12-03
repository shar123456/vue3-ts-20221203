<template>
  <Common-Query-Header
    @SearchBtn="SearchBtn"
    @CreateBtn="CreateBtn"
    @batchDelete="batchDelete"
    @refreshBtn="refreshBtn"
    :StateEntity="NewExaminationEntity"
  >
  </Common-Query-Header>
  <div id="DataList">
    <a-table
      bordered
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 200, y: 'calc(100vh - 310px)' }"
      :customRow="rowActionClick"
      :pagination="false"
    >
      <template #examStatus="{ text: examStatus }">
        <span>
          <a-tag v-if="examStatus === '进行中'" color="#C1CE28">
            {{ examStatus }}
          </a-tag>
          <a-tag v-else-if="examStatus === '已完成'" color="green">
            {{ examStatus }}
          </a-tag>
          <a-tag v-else-if="examStatus === '已过期'" color="#dd4b39">
            {{ examStatus }}
          </a-tag>
          <a-tag v-else-if="examStatus === '未开始'" color="#A3A98D">
            {{ examStatus }}
          </a-tag>
          <a-tag v-else color="pink">
            {{ examStatus }}
          </a-tag>
        </span>
      </template>

      <template #examResult="{ text: examResult }">
        <span>
          <a-tag v-if="examResult === '通过'" color="green">
            {{ examResult }}
          </a-tag>
          <a-tag v-else-if="examResult === '驳回'" color="#dd4b39">
            {{ examResult }}
          </a-tag>
          <a-tag v-else-if="examResult === '未审批'" color="#A3A98D">
            {{ examResult }}
          </a-tag>
          <a-tag v-else color="pink">
            {{ examResult }}
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
      <template #action="{ record }">
        <a
          @click="DetailBth(record.examTaskId)"
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #dedede;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 7px;
            padding-right: 7px;
            background-color: #3c8dbc;
            border-radius: 4px;
          "
          title="查看"
          ><SearchOutlined mark="delete" />&nbsp;查看</a
        >

        <a
          v-if="!(record.examResult == '通过' || record.examResult == '驳回')"
          @click="ExaminationBth(record.examId)"
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #dedede;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 7px;
            padding-right: 7px;
            background-color: #3c8dbc;
            border-radius: 4px;
          "
          title="审批"
          ><AuditOutlined mark="delete" />&nbsp;审批</a
        >
        <a
          v-else
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #dedede;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 7px;
            padding-right: 7px;
            background-color: #c3c3cd;
            border-radius: 4px;
          "
          disabled="disabled"
          title="审批"
          ><AuditOutlined mark="delete" />&nbsp;审批</a
        >
        <a
          v-if="record.examResult == '通过' || record.examResult == '驳回'"
          @click="ExaminationCancelBth(record.examId)"
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #dedede;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 7px;
            padding-right: 7px;
            background-color: #dd4b39;
            border-radius: 4px;
          "
          title="撤销"
          ><SyncOutlined mark="delete" />&nbsp;撤销</a
        >
        <a
          v-else
       
          style="
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #dedede;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 7px;
            padding-right: 7px;
            background-color: #c3c3cd;
            border-radius: 4px;
          "
          disabled="disabled"
          title="撤销"
          ><SyncOutlined mark="delete" />&nbsp;撤销</a
        >
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

  <ExaminationSettingModal
    :visibleSetting="visibleSetting"
    :modalTitleSetting="modalTitleSetting"
    :CurrentUser="CurrentUser"
    @CloseSetingMoadl="CloseSetingMoadl"
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
  DeleteFilled,
  ExclamationCircleOutlined,
  SearchOutlined,
  CloseOutlined,
  SyncOutlined,
  AuditOutlined,
} from "@ant-design/icons-vue";
import {
  ExaminationEntity,
  ExaminationColumns,
} from "../../TypeInterface/IExaminationInterface";

import CommonQueryHeader from "../../components/CommonQueryHeader.vue";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
} from "../../Request/userRequest";
import ExaminationSettingModal from "../../components/ExaminationSettingModal.vue";
import { deepClone } from "../../utility/commonFunc";
import { useRouter } from "vue-router";

import {
  GetExaminationDatas,
  SetExaminationResult,
} from "../../Request/ExaminationRequest";

export default defineComponent({
  components: {
    DeleteFilled,
    SearchOutlined,
    CommonQueryHeader,
    CloseOutlined,
    SyncOutlined,
    AuditOutlined,
    ExaminationSettingModal,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const router = useRouter();
    const DataEntityState = reactive(new ExaminationEntity());

    let NewExaminationEntity = new ExaminationEntity();

    let CurrentUser = ref<string>("");

    let visibleSetting = ref<boolean>(false);
    let modalTitleSetting = ref<string>("");

    const CloseSetingMoadl = () => {
      visibleSetting.value = false;
      modalTitleSetting.value = "";
      refreshMark.value = new Date().getTime().toString();
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
      GetExaminationDatas({
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
      GetExaminationDatas({
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
      GetExaminationDatas({
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
      let columnList = await GetLoginRecordColumn({ pageName: "Examination" });
      console.log("amountLoginRecordcolumnList", columnList);
      if (columnList == undefined || columnList.length == 0) {
        columnList = deepClone(ExaminationColumns);
      }
      console.log("amountLoginRecordcolumnList11111", columnList);

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
        if (DataEntityState.ListGridColumns[i].title == "操作") {
          DataEntityState.ListGridColumns[i].fixed = "right";
          DataEntityState.ListGridColumns[i].width = 220;
          //DataEntityState.ListGridColumns[i].dataIndex = "action";
        }

        if (DataEntityState.ListGridColumns[i]["slots"] == null) {
          delete DataEntityState.ListGridColumns[i]["slots"];
        }
      }

      for (var z in DataEntityState.ListColumns) {
        if (DataEntityState.ListColumns[z].title == "操作") {
          DataEntityState.ListColumns[z].fixed = "right";
          DataEntityState.ListColumns[z].width = 220;
          //DataEntityState.ListColumns[z].dataIndex = "action";
        }

        if (DataEntityState.ListColumns[z]["slots"] == null) {
          delete DataEntityState.ListColumns[z]["slots"];
        }
      }

      //获用户数据
      loading.value = true;
      let UserDatasList = await GetExaminationDatas({
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
      //  DataEntityState.DataList = DataEntityState.ExaminationDatas;
      // totalCount.value = DataEntityState.ExaminationDatas.length;
      // current1.value = 1;
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

    const DetailBth = (item: any) => {
      router.push({ path: "/Home/ExaminationTaskDetail", query: { Id: item,Type:"Examination" } });
    };

    const DeleteBth = (item: any) => {
      Modal.confirm({
        title: "您确定要删除这条记录吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: `用户名：${item}`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          // const index = UserDataEntityState.UserDataList.findIndex(
          //     (i: IUserInfo) => i.sysUserId == Id);
          //     UserDataEntityState.UserDataList.splice(index, 1);

          loading.value = true;
          // DeleteUserById({ UserId: Id }).then((res: any) => {
          //   if (res.isSuccess) {
          //     refreshMark.value = new Date().getTime().toString();
          //     message.success("删除成功.");
          //   }
          // });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };

    const ExaminationBth = (action: any) => {
      visibleSetting.value = true;
      modalTitleSetting.value = "审批对话框";
      CurrentUser.value = action;
    };

    const ExaminationCancelBth = (action: any) => {
      Modal.confirm({
        title: "您确定要执行撤销操作吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: `撤销审批项`,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        okButtonProps: {},
        onOk() {
          let params = { remark: "", result: "cancel", examId: action };
          SetExaminationResult(params).then((res: any) => {
            if (res.isSuccess) {
              message.success("撤销成功.");

              refreshMark.value = new Date().getTime().toString();
            } else {
              message.error(res.msg);
              refreshMark.value = new Date().getTime().toString();
            }
          });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };

    /********************************************* */
    const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetExaminationDatas({
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
      router.push({
        path: "/Home/CreateExaminationPage",
        query: { pageType: "add" },
      });
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
          BatchDeleteLoginRecord({ keys: keys }).then((res: any) => {
            if (res.isSuccess) {
              refreshMark.value = new Date().getTime().toString();
              DataEntityState.selectedRowKeys = [];
              DataEntityState.selectedRows = [];
              message.success("删除成功.");
            }
          });
        },
        onCancel() {
          message.error("已取消.");
        },
      });
    };

    const refreshBtn = async (payload: any) => {
      loading.value = true;
      DataEntityState.QueryConditionInfo = {
        examTaskNo: "",

        examName: "",
        useStatus: "未选择",
        initiator: "",
        flowNo: "",
        noticeType: "未选择",
        examStatus: "未选择",
        emergencyLevel: "未选择",
      };
      GetExaminationDatas({
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
      NewExaminationEntity,
      DataEntityState,

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
      DetailBth,
      CreateBtn,

      SearchBtn,

      ClearQueryBtn,

      batchDelete,
      refreshBtn,
      visibleSetting,
      modalTitleSetting,
      CloseSetingMoadl,
      CurrentUser,
      ExaminationBth,
      ExaminationCancelBth,
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