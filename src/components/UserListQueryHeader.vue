<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
        <div>
          <label>用户Id：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.sysUserId"
              placeholder="用户Id" 
            />
          </div>
        </div>
        <div>
          <label>用户名：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.name"
              placeholder="用户名"
            />
          </div>
        </div>
        <div>
          <label>手机号：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.phone"
              placeholder="手机号"
            />
          </div>
        </div>
        <div>
          <label>E-mail：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.email"
              placeholder="E-mail"
            />
          </div>
        </div>
      </div>

      <div class="upPad-down">
        <div>
          <label>性别：</label>
          <div>
            <a-select
              ref="select"
              v-model:value="QueryConditionInfo.gender"
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="男">男</a-select-option>

              <a-select-option value="女">女</a-select-option>
            </a-select>
          </div>
        </div>
        <div>
          <label>状态：</label>
          <div>
            <a-select
              ref="select"
              v-model:value="QueryConditionInfo.useStatus"
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="启用">启用</a-select-option>

              <a-select-option value="禁用">禁用</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </div>
    <div class="downPad">
      <a-button type="primary" @click="showCreateModal"> <template #icon><plus-outlined  /></template>
        新增 </a-button>&nbsp;
         <a-button type="primary" @click="configExport"> <template #icon><LayoutOutlined /></template>导出配置</a-button>&nbsp;
      <a-button type="primary" @click="exportExcel"> <template #icon><download-outlined /></template>导出</a-button>&nbsp;
        <a-button type="primary" @click="importExcel"> <template #icon><cloud-upload-outlined /></template>导入</a-button>&nbsp;
      <a-button danger type="primary" @click="batchDeleteBtn">   <template #icon><delete-outlined /></template>批量删除</a-button>&nbsp;
      <a-button type="primary" @click="refreshBtn"> <template #icon><redo-outlined /></template>刷新</a-button>&nbsp;
      <a-button
        type="primary"
        @click="ClearQueryBtn"
        style="background-color: goldenrod; border-color: goldenrod"
        ><template #icon><clear-outlined /></template>清空筛选条件</a-button
      >&nbsp;
      <a-button type="primary" @click="SearchBtn">
        <template #icon><SearchOutlined /></template>
        搜索 </a-button
      >&nbsp;&nbsp;
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";
import { UserDataEntity } from "../TypeInterface/IUserInterface";
import { LayoutOutlined,ProfileOutlined,SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,DownloadOutlined,CloudUploadOutlined} from "@ant-design/icons-vue";
import * as XLSX from "xlsx";
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,
    ClearOutlined,AppstoreAddOutlined,DownloadOutlined,CloudUploadOutlined,ProfileOutlined,LayoutOutlined
  },
  props: { UserData: UserDataEntity },
  setup(props, context) {
    const state = reactive(new UserDataEntity());
    const SearchBtn = () => {
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    const showCreateModal = () => {
      context.emit("showCreateModal");
    };
    const ClearQueryBtn = () => {
      state.QueryConditionInfo.sysUserId = "";
      state.QueryConditionInfo.name = "";
      state.QueryConditionInfo.phone = "";

      state.QueryConditionInfo.email = "";
      state.QueryConditionInfo.useStatus = "未选择";
      state.QueryConditionInfo.gender = "未选择";
    };

const batchDeleteBtn = () => {
      context.emit("batchDelete");
    };
    const refreshBtn = () => {
      ClearQueryBtn();
      context.emit("refreshBtn");
    };

    
    const exportExcel = () => {

 context.emit("exportExcel");


      /*
      console.log(props.UserData)
      const ImportItem:any[]=[];
           props.UserData?.UserDataList.forEach((item,index)=>{
                // console.log(index); console.log(item);
                if(props.UserData&&props.UserData.selectedRowKeys.indexOf((index+1).toString())>-1)
                {
                    ImportItem.push(item);
                }
           })
  console.log(ImportItem)
      //const fileName = "ee.xlsx";
      // console.log(XLSX);
      // console.log(FileSaver);

      // const wb=XLSX.utils.table_to_book(document.getElementById('yy'));
      // const wbout=XLSX.write(wb,{bookType:'xlsx',bookSST:true,type:'array'})
      // FileSaver.saveAs(new Blob([wbout],{type:'application/octet-stream'}),fileName)
      // return wb;

      const wb = XLSX.utils.book_new();

      const ws = XLSX.utils.json_to_sheet(ImportItem);

      XLSX.utils.book_append_sheet(wb, ws, "UserList");
      XLSX.writeFile(wb, "UserList" + ".xlsx");

      */
    };



  
    const importExcel = () => {

 context.emit("importExcel");
    }
 const configExport = () => {

 context.emit("configExport");
    }





    return {
      ...toRefs(state),
      SearchBtn,
      showCreateModal,
      ClearQueryBtn,
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configExport
    };
  },
});
</script>

<style  scoped>
#userListPad {
  height: 130px;
  box-sizing: border-box;
  border: 0px solid red;
  box-sizing: border-box;
  margin-bottom: 0px;

  overflow: auto;
}
.upPad {
  height: 88px;
  border: 0px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  padding-top:5px
}
.upPad-up {
  border: 0px solid red;
  height: 50%;

  display: flex;
}
.upPad-up div {
  display: flex;
  align-items: center;

  width: 23%;
  display: flex;
  justify-content: flex-start;
}
.upPad-up div label {
  width: 20%;
  border: 0px solid red;
  margin-left: 10px;
}
.upPad-up div div {
  width: 80%;
  border: 0px solid red;
}
.upPad-down {
  border: 0px solid red;
  height: 50%;
  display: flex;
  width: 100%;
}
.upPad-down div {
  display: flex;
  align-items: center;

  width: 23%;
  display: flex;
  justify-content: flex-start;
}
.upPad-down div label {
  border: 0px solid red;
  width: 20%;
  margin-left: 10px;
}
.upPad-down div div {
  border: 0px solid red;
  width: 80%;
}

.downPad {
  height: 40px;
  border: 0px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 1000px;
}
</style>