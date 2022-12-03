<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
       
        <div>
          <label>文件Id：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.fileId"
              placeholder="文件Id"
            />
          </div>     
        </div>

 <div>
          <label>文件名：</label>
          <div>
             <a-input v-model:value="QueryConditionInfo.name" placeholder="文件名" />
          </div>     
        </div>

<div>
         <label>文件类型：</label>
          <div>
            <a-select
              ref="select"
              v-model:value="QueryConditionInfo.fileType"
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="docx">docx</a-select-option>

              <a-select-option value="xlsx">xlsx</a-select-option>
               <a-select-option value="txt">txt</a-select-option>
            </a-select>
          </div> 
        </div>

  

      </div>
    </div>
    <div class="downPad">
       <a-button  type="primary"   @click="configGridBtn">   <template #icon><ToolOutlined /></template>配置列表</a-button>&nbsp;
         <a-button  type="primary"   @click="fileUploadBtn">   <template #icon><CloudUploadOutlined /></template>文件上传</a-button>&nbsp;
      <a-button danger type="primary"   @click="batchDeleteBtn">   <template #icon><delete-outlined /></template>批量删除</a-button>&nbsp;
      <a-button type="primary"   @click="refreshBtn"> <template #icon><redo-outlined /></template>刷新</a-button>&nbsp;
      <a-button  
        type="primary"
        @click="ClearQueryBtn"
        style="background-color: goldenrod; border-color: goldenrod"
        ><template #icon><clear-outlined /></template>清空筛选条件</a-button
      >&nbsp;
      <a-button type="primary"   @click="SearchBtn">
        <template #icon><SearchOutlined /></template>
        搜索 </a-button
      >&nbsp;&nbsp;
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";
import { ManagerFileDataEntity } from "../TypeInterface/IManagerFlieInterface";
import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined,CloudUploadOutlined} from "@ant-design/icons-vue";
import {dateFormat} from '../utility/commonFunc'
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined,CloudUploadOutlined
  },
  props: {  },
  setup(props, context) {
    const state = reactive(new ManagerFileDataEntity());
    const SearchBtn = () => {
      
    
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    
    const ClearQueryBtn = () => {
    
      state.QueryConditionInfo.name = "";
     
      state.QueryConditionInfo.fileId = "";
      state.QueryConditionInfo.fileType = "未选择";
    };

const batchDeleteBtn = () => {
      context.emit("batchDelete");
    };
const fileUploadBtn = () => {
      context.emit("fileUploadBtn");
    };


const configGridBtn = () => {
      context.emit("showConfigGrid");
    };





    const refreshBtn = () => {
      ClearQueryBtn();
      context.emit("refreshBtn");
    };

    
    const exportExcel = () => {

 context.emit("exportExcel");

    };



  
    const importExcel = () => {

 context.emit("importExcel");
    }


    return {
      ...toRefs(state),
      SearchBtn,
    
      ClearQueryBtn,
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configGridBtn,fileUploadBtn
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
 
  border: 0px solid red;
  margin-left: 10px;
}
.upPad-up div div {
  width: 60%;
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