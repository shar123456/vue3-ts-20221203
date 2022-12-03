<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
       
        <div>
          <label>角色名：</label>
          <div>
            <!-- <a-input
              v-model:value="QueryConditionInfo.name"
              placeholder="角色名"
            /> -->

 <a-auto-complete
    v-model:value="QueryConditionInfo.name"
    style="width: 200px"
    placeholder="角色名"
    @search="handleSearch"
  >
    <template #dataSource>
      <a-select-option v-for="email in result" :key="email">
        {{ email }}
      </a-select-option>
    </template>
  </a-auto-complete>





          </div>     
        </div>

 <div>
          <label>角色类型：</label>
         <div>
            <a-select
              ref="select"
              v-model:value="QueryConditionInfo.roleType"
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="PC">PC</a-select-option>

              <a-select-option value="WeChat">WeChat</a-select-option>
               <a-select-option value="App">App</a-select-option>
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
       <a-button  type="primary"   @click="configGridBtn">   <template #icon><ToolOutlined /></template>配置列表</a-button>&nbsp;
       <a-button type="primary" @click="showCreateModal"> <template #icon><plus-outlined  /></template>
        新增 </a-button>&nbsp;
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
import { reactive, toRefs, defineComponent,ref } from "vue";
import { RoleDataEntity } from "../TypeInterface/IRoleInterface";
import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined} from "@ant-design/icons-vue";
import {dateFormat} from '../utility/commonFunc'

import {
 getRoleByName
} from "../Request/RoleRequest";
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined
  },
  props: {  },
  setup(props, context) {
    const state = reactive(new RoleDataEntity());



const value = ref('');
    const result = ref<string[]>([]);
    const handleSearch = (val: string) => {
      let res: string[];
      // if (!val || val.indexOf('@') >= 0) {
      //   res = [];
      // } else {
      //   res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${val}@${domain}`);
      // }


 getRoleByName({ Name: val }).then((res1: any) => {
                 
                  if (res1.isSuccess) {
                  result.value = res1.datas;
                  }
                

    })
    }







    const SearchBtn = () => {
      
    
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    
    const ClearQueryBtn = () => {
    
      state.QueryConditionInfo.name = "";
     
      state.QueryConditionInfo.useStatus = "未选择";
      state.QueryConditionInfo.roleType = "未选择";
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
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configGridBtn,showCreateModal,value,
      result,
      handleSearch,
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