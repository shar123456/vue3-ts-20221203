<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
         <div>
          <label>菜单Id：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.menuId"
              placeholder="菜单Id："
            />
          </div>     
        </div>

        <div>
          <label>名称：</label>
          <div>
            <a-input
              v-model:value="QueryConditionInfo.menuTitle"
              placeholder="名称："
            />
          </div>     
        </div>

 

      </div>
    </div>
    <div class="downPad">
     <a-button type="primary" @click="showCreateModal"> <template #icon><plus-outlined  /></template>
        新增 </a-button>&nbsp;
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
import { MenuDataEntity } from "../TypeInterface/IMenuInterface";
import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined} from "@ant-design/icons-vue";
import {dateFormat} from '../utility/commonFunc'
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined
  },
  props: {  },
  setup(props, context) {
    const state = reactive(new MenuDataEntity());
    const SearchBtn = () => {
      
    
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    
    const ClearQueryBtn = () => {
    
      state.QueryConditionInfo.menuTitle = "";
      state.QueryConditionInfo.menuId = "";
     
    };

const batchDeleteBtn = () => {
      context.emit("batchDelete");
    };


const configGridBtn = () => {
      context.emit("showConfigGrid");
    };


 const showCreateModal = () => {
      context.emit("showCreateModal");
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
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configGridBtn,showCreateModal
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