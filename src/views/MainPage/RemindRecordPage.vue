<template>
   <Common-Query-Header
    @SearchBtn="SearchBtn"
@CreateBtn="CreateBtn"
   
    @refreshBtn="refreshBtn"
  :StateEntity="NewRemindRecordEntity"
  >
  </Common-Query-Header>

  <div id="RemindRecordDataList">
    <a-table
      bordered
      :rowClassName="(index:number) => (index % 2 == 1 ? 'table-striped' : null)"
      id="yy"
      :loading="loading"
      :columns="ListGridColumns"
      :data-source="DataList"
      :scroll="{ x: 1000,  }"
      :customRow="rowActionClick"
     
      :pagination="false"
    >
    
      <template #operateType="{ text: operateType }">
        <span>
          <a-tag :color="operateType === '手动' ? 'blue' :'#AECF4B' ">
            {{ operateType }}
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
  RemindRecordEntity,RemindRecordColumns
} from "../../TypeInterface/IRemindRecordInterface";
import CommonQueryHeader from "../../components/CommonQueryHeader.vue";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
} from "../../Request/userRequest";



import {
  GetRemindRecordDatas
}
 from "../../Request/RemindRecordRequest";

import { deepClone } from "../../utility/commonFunc";
import{useRouter} from 'vue-router'
export default defineComponent({
  components: {

    DeleteFilled,SearchOutlined,CommonQueryHeader,CloseOutlined,EditOutlined,BellOutlined

  },
  setup() {
    const state = reactive({
      count: 0,
    });
  const router=useRouter();

     const DataEntityState = reactive(new RemindRecordEntity());
  
      let  NewRemindRecordEntity=new RemindRecordEntity();
   
   /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
    let loading = ref<boolean>(false);
    const onShowSizeChange = (current: number, pageSize: number) => {
      loading.value = true;
      GetRemindRecordDatas({
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
      GetRemindRecordDatas({
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
      GetRemindRecordDatas({
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
      let columnList = await GetLoginRecordColumn({ pageName: "RemindRecord" });
      console.log("amountLoginRecordcolumnList",columnList)
if(columnList==undefined||columnList.length==0)
{
  columnList=deepClone(RemindRecordColumns)
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

      //获用户数据
      loading.value = true;
      let UserDatasList = await GetRemindRecordDatas({
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
    //     DataEntityState.DataList = DataEntityState.RemindRecordDatas;
    //      totalCount.value = DataEntityState.RemindRecordDatas.length;
    //    current1.value = 1;

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












/********************************************* */
 const SearchBtn = async (payload: any) => {
      loading.value = true;

      let UserDatasList1 = await GetRemindRecordDatas({
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

    

   
    const refreshBtn = async (payload: any) => {
   

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





      GetRemindRecordDatas({
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
NewRemindRecordEntity,
      rowActionClick,
      onSelectChange,

      pageSize,
      current1,
      totalCount,
      onShowSizeChange,
      handleTableChange,
      
      loading,
      pageSizeOptions,

DetailBth,EditBth,CreateBtn,




SearchBtn,
     
      ClearQueryBtn,
     
      
      refreshBtn,
    
      

    };
  },
});
</script>

<style >
#RemindRecordDataList {
  /* height: calc(100vh - 240px); */
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

#RemindRecordDataList .ant-table-thead > tr > th,
#RemindRecordDataList .ant-table-tbody > tr > td {
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