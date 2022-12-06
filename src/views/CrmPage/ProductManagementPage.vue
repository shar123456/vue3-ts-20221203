<template>
   <Common-Query-Header-CRM
    @SearchBtn="SearchBtn"
    @refreshBtn="refreshBtn"  
    :StateEntity="NewDataEntityState"
  >
  </Common-Query-Header-CRM>

  <div id="ProductManaDataList">
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
  ProductEntity,ProductColumns
} from "../../TypeInterface/ICrm/IProductManagement";
import CommonQueryHeaderCRM from "../../components/CommonQueryHeaderCRM.vue";
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
    DeleteFilled,SearchOutlined,CommonQueryHeaderCRM,CloseOutlined,EditOutlined,BellOutlined

  },
  setup() {
    const state = reactive({
      count: 0,
    });
  const router=useRouter();
    const DataEntityState = reactive(new ProductEntity());
 
    let  NewDataEntityState=new ProductEntity();
    
    
    /***分页****************/
    const pageSize = ref(10);
    const current1 = ref(1);
    const totalCount = ref(0);
    let refreshMark = ref<string>("");
    const pageSizeOptions = ref<string[]>(["5", "10", "20", "30", "40", "50"]);
  /***分页****************/

/***数据初始化****************/
let loading = ref<boolean>(false);
onMounted(async () => {
      //获取表格列及处理表格列
      let columnList = await GetLoginRecordColumn({ pageName: "ProductManagement" });
      console.log("ProductManagementColumn1",columnList)
if(columnList==undefined||columnList.length==0)
{
  columnList=deepClone(ProductColumns)
}
      console.log("ProductManagementColumn2",columnList)

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




/*
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
      */
      //测试
      for(var s=0;s<11;s++)
      {
        DataEntityState.DataList.push(DataEntityState.ProductDatas[0]);
      }
       
         totalCount.value = DataEntityState.DataList.length;
       current1.value = 1;

    });
    /***数据初始化****************/



















/********************************************* */
const SearchBtn = async (payload: any) => {
     
    };

   

    const ClearQueryBtn = (payload: any) => {
      console.log("ClearQueryBtn");
    };
 const CreateBtn = (payload: any) => {
      router.push({ path: "/Home/CreateWorkSchedule", query: {pageType:"add"} });
    };

    

   
    const refreshBtn = async (payload: any) => {
   

     
  }







    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      DataEntityState,
      NewDataEntityState,SearchBtn,refreshBtn,ClearQueryBtn,
    
      pageSize,
      current1,
      totalCount,      
      loading,
      pageSizeOptions,
      handleResizeColumn: (w:any, col:any) => {
        col.width = w;
      },





    };
  },
});
</script>

<style >
#ProductManaDataList {
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

#ProductManaDataList .ant-table-thead > tr > th,
#ProductManaDataList .ant-table-tbody > tr > td {
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