<template>
  <ManagerFileQueryHeader
    @SearchBtn="SearchBtn"
    @showConfigGrid="showConfigGrid"
    @batchDelete="batchDelete"
    @refreshBtn="refreshBtn"
    @fileUploadBtn="fileUploadBtn"
  >
  </ManagerFileQueryHeader>

  <div id="DataList">
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
          title="删除"
          ><delete-two-tone mark="delete"
        /></a>
        <a
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 23px;
            font-weight: 800;
            margin-left: 9px;
          "
          title="下载"
          ><CloudFilled mark="download"
        /></a>
      </template>

      <template #fileType="{ text: fileType }">
        <span>
          <a-tag :color="fileType === '' ? 'blue' : 'blue'">
            {{ fileType }}
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

  <upLoadFileModal
    :visibleFileUpload="visibleFileUpload"
    :modalFileUploadTitles="modalFileUploadTitles"
    :UserData="DataEntityState"
    @closeFileUploadModal="closeFileUploadModal"
  />

  <configGridModal
    :visibleModelConfigGrid="visibleModelConfigGrid"
    :modalTitleConfigGrid="modalTitleConfigGrid"
    :ListColumns="DataEntityState.ListColumns"
    configType="ManagerFile"
    @CloseConfigGridMoadl="CloseConfigGridMoadl"
    @refreshBtn="refreshBtn"
  />
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  defineComponent,
  ref,
  watch,
  onMounted,
  createVNode,
} from "vue";
import ManagerFileQueryHeader from "../../components/ManagerFileQueryHeader.vue";
import UpLoadFileModal from "../../components/UpLoadFileModal.vue";
import {
  ManagerFileDataEntity,
  IManagerFileInfo,
  ManagerFileColumns,
} from "../../TypeInterface/IManagerFlieInterface";
import { deepClone } from "../../utility/commonFunc";
import { message, Modal } from "ant-design-vue";
import configGridModal from "../../components/configGridModal.vue";
import axios from "axios";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
} from "../../Request/userRequest";

import {
  GetFileDatas,
  ExportFile,
  DeleteFileById,
  BatchDeleteFile,
} from "../../Request/FileRequest";
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
  CloudDownloadOutlined,
  CloudFilled,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ManagerFileQueryHeader,
    UpLoadFileModal,
    ExclamationCircleOutlined,
    DeleteTwoTone,
    CloudDownloadOutlined,
    CloudFilled,
    configGridModal,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    const DataEntityState = reactive(new ManagerFileDataEntity());
    let visibleFileUpload = ref<boolean>(false);
    let modalFileUploadTitles = ref<string>("");

    /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
    let loading = ref<boolean>(false);
    const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetFileDatas({
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
      GetFileDatas({
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
      GetFileDatas({
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
      let columnList = await GetLoginRecordColumn({ pageName: "ManagerFile" });
      console.log("amountLoginRecordcolumnList", columnList);
      if (columnList == undefined || columnList.length == 0) {
        columnList = deepClone(ManagerFileColumns);
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
      let UserDatasList = await GetFileDatas({
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
        onClick: async (event: any) => {
          console.log(
            event.target.parentNode.parentNode.getAttribute("aria-label")
          );
          console.log(event.target.parentNode.getAttribute("data-icon"));
          console.log("id", record);

          if (
            event.target.parentNode.getAttribute("data-icon") == "cloud" ||
            event.target.parentNode.parentNode.getAttribute("aria-label") ==
              "cloud"
          ) {
            //  var res=  await ExportFile({"FileName":"test1","FileExtension":"xlsx"});
            const FileName = record.name;
            const FileExtension = record.fileType;
                   const FileId = record.fileId;
            var res = await axios({
              method: "get",
              params: { FileName: FileName, FileExtension: FileExtension,Id:FileId },
              responseType: "blob",

              transformRequest: [
                function (data) {
                  //加这个post发送数据到后台才能接收到数据，否则接收不到
                  let ret = "";
                  for (const it in data) {
                    ret +=
                      encodeURIComponent(it) +
                      "=" +
                      encodeURIComponent(data[it]) +
                      "&";
                  }
                  return ret;
                },
              ],
              url: "http://120.40.187.174:8702/Api/ManagerFile/DownLoadFile",
            });

            console.log(res);
            let typeContent = "";
            switch (FileExtension) {
              case "xls":
                typeContent = "application/vnd.ms-excel";
                break;
              case "xlsx":
                typeContent =
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                break;
              case "docx":
                typeContent =
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                break;
              case "txt":
                typeContent = "text/plain";
                break;
            }
            const blob = new Blob([res.data], { type: typeContent });
            const f = "统计.xlsx";
            // const contentDisposition =
            //   res.headers['content-disposition'] ||
            //   res.headers['Content-Disposition']
            // const fileName =
            //   (contentDisposition && contentDisposition.split(';')[1]).split('=')[1] || f || '';

            const fileName = `${FileName}.${FileExtension}`;
            const elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
             refreshMark.value = new Date().getTime().toString();
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
            const Id = record.fileId;

            Modal.confirm({
              title: "您确定要删除这条记录吗?",
              icon: createVNode(ExclamationCircleOutlined),
              content: `文件名：${record.name}`,
              okText: "Yes",
              okType: "danger",
              cancelText: "No",
              onOk() {
                // const index = UserDataEntityState.UserDataList.findIndex(
                //     (i: IUserInfo) => i.sysUserId == Id);
                //     UserDataEntityState.UserDataList.splice(index, 1);

                loading.value = true;
                DeleteFileById({ Id: Id }).then((res: any) => {
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
        },
      };
    };
    /***rowActionClick****************/

    //------------------------------

    const closeFileUploadModal = () => {
      visibleFileUpload.value = false;
      refreshMark.value = new Date().getTime().toString();
    };

    //------------------------------

    let visibleModelConfigGrid = ref<boolean>(false);
    let modalTitleConfigGrid = ref<string>("");
    const CloseConfigGridMoadl = () => {
      visibleModelConfigGrid.value = false;
    };
    // --------------
    const UpdateConfigGrid = async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "ManagerFile" });
      console.log("GetLoginRecordColumn", columnList);
      console.log("amount", columnList);
      if (columnList == undefined||columnList.length==0) {
        columnList = deepClone(ManagerFileColumns);
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

    const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetFileDatas({
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
          BatchDeleteFile({ keys: keys }).then((res: any) => {
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

    const refreshBtn = (payload: any) => {
      UpdateConfigGrid();

      loading.value = true;
      DataEntityState.QueryConditionInfo = {
        name: "",

        fileId: "",
        fileType: "未选择",
      };
      GetFileDatas({
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
    const fileUploadBtn = (payload: any) => {
      visibleFileUpload.value = true;
      console.log("【文件上传】", visibleFileUpload.value);
      modalFileUploadTitles.value = "【文件上传】";
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

      visibleFileUpload,
      modalFileUploadTitles,
      closeFileUploadModal,

      SearchBtn,
      showConfigGrid,
      batchDelete,
      refreshBtn,
      fileUploadBtn,
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