<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
       
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
          <label>最近登录开始时间：</label>
          <div>
             <a-date-picker v-model:value="QueryConditionInfo.loginStartTime" format="YYYY-MM-DD" placeholder="最近登录开始时间" />
          </div>     
        </div>

<div>
          <label>最近登录结束时间：</label>
          <div>
             <a-date-picker v-model:value="QueryConditionInfo.loginEndTime" format="YYYY-MM-DD" placeholder="最近登录结束时间" />
          </div>     
        </div>

  

      </div>
    </div>
    <div class="downPad">
       <a-button  type="primary" @click="configGridBtn">   <template #icon><ToolOutlined /></template>配置列表</a-button>&nbsp;
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
import { LoginRecordDataEntity } from "../TypeInterface/ILoginRecordInterface";
import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined} from "@ant-design/icons-vue";
import {dateFormat} from '../utility/commonFunc'
 import dayjs, { Dayjs } from 'dayjs';
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined
  },
  props: {  },
  setup(props, context) {
    const state = reactive(new LoginRecordDataEntity());
    const SearchBtn = () => {
      let loginStartTimeTemp:any=state.QueryConditionInfo.loginStartTime;
       let loginEndTimeTemp:any=state.QueryConditionInfo.loginEndTime;
      if(state.QueryConditionInfo.loginStartTime!=dayjs())
      {

state.QueryConditionInfo.loginStartTime=dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(loginStartTimeTemp),0),"YYYY-MM-DD");
    state.QueryConditionInfo.loginEndTime=dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(loginEndTimeTemp),0)),"YYYY-MM-DD";
      }
    
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    
    const ClearQueryBtn = () => {
    
      state.QueryConditionInfo.name = "";
     
      state.QueryConditionInfo.loginEndTime = dayjs();
      state.QueryConditionInfo.loginStartTime = dayjs();
    };

const batchDeleteBtn = () => {
      context.emit("batchDelete");
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
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configGridBtn
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