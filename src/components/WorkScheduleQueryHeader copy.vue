<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
       
        <div v-for="(index,item) in QueryConditionInfo" :key="item">
          <label>{{QueryConditionInfoConfig[item].name}}：</label>
          <div v-if="QueryConditionInfoConfig[item].type=='text'">

            <a-input
              v-model:value="QueryConditionInfo[item]"
              :placeholder="QueryConditionInfoConfig[item].name"
            />


          </div> 
          
          <div v-if="QueryConditionInfoConfig[item].type=='select'">
            <a-select
              ref="select"
              v-model:value="QueryConditionInfo[item]"
              style="width: 100%"
            >
             
             <a-select-option v-for="ioption in QueryConditionInfoConfig[item].optionValueArray" :key="ioption" :value="ioption">{{ioption}}</a-select-option>
              
            </a-select>
          </div> 


        </div>
       
         
  

      </div>
    </div>
 <div class="centerPad"></div>
    <div class="downPad">
      <div>&nbsp;
  <a-button type="primary" @click="CreateBtn"> <template #icon><plus-outlined  /></template>
        新增 </a-button>&nbsp;
      <a-button    style="background-color: #dd4b39; border-color: #dd4b39" type="primary"   @click="batchDeleteBtn">   <template #icon><delete-outlined /></template>批量删除</a-button>&nbsp;
      </div>
    
      <div>
<a-button type="primary"   @click="refreshBtn"> <template #icon><redo-outlined /></template>刷新</a-button>&nbsp;
      <a-button  
        type="primary"
        @click="ClearQueryBtn"
     
        ><template #icon><clear-outlined /></template>清空筛选</a-button
      >&nbsp;
      <a-button type="primary"   @click="SearchBtn">
        <template #icon><SearchOutlined /></template>
        搜索 </a-button
      >&nbsp;&nbsp;
      </div>
      
      
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";

import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined,CloudUploadOutlined} from "@ant-design/icons-vue";
import {dateFormat} from '../utility/commonFunc'
export default defineComponent({
  components: {
    SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,AppstoreAddOutlined,ToolOutlined,CloudUploadOutlined
  },
  props: { StateEntity:Object, },
  setup(props, context) {
    const state = reactive<any>(props.StateEntity);


const QueryConditionInfo=state.QueryConditionInfo;
const QueryConditionInfoConfig=state.QueryConditionInfoConfig;
    const SearchBtn = () => {
      
    
      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };
    
    const ClearQueryBtn = () => {
    
   

  for(let item in  state.QueryConditionInfo)
  {
if(state.QueryConditionInfoConfig[item].type=="text")
        {
            state.QueryConditionInfo[item]="";
        }
        if(state.QueryConditionInfoConfig[item].type=="select")
        {
            state.QueryConditionInfo[item]="未选择";
        }
  }
    

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



  const CreateBtn = () => {

 context.emit("CreateBtn");
    }

    const importExcel = () => {

 context.emit("importExcel");
    }


    return {
      //...toRefs(state),
      QueryConditionInfo,QueryConditionInfoConfig,
      SearchBtn,
    CreateBtn,
      ClearQueryBtn,
      exportExcel,batchDeleteBtn,refreshBtn,importExcel,configGridBtn,fileUploadBtn
    };
  },
});
</script>

<style  scoped>
#userListPad {
  min-height: 142px;
  box-sizing: border-box;
  border: 1px solid red;
  box-sizing: border-box;
  margin-bottom: 0px;

  overflow: auto;
}
.upPad {
  min-height: 93px;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  padding-top:5px;overflow: auto;
}
.upPad-up {
  border: 0px solid red;
   width: 100%;
flex-wrap:wrap;
  display: flex;
}
.upPad-up div {
  display: flex;
  align-items: center;
  border: 0px solid red;
  width: 360px;
  display: flex;
  justify-content: flex-start;
  line-height: 40px;
}
.upPad-up div label {
  width: 120px;
  border: 0px solid red;
  margin-left: 10px;
  white-space:nowrap;/* 不换行 */
overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
text-overflow:ellipsis;
}
.upPad-up div div {
   width: 240px;
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
.centerPad{
  height: 7px;
   border: 0px solid red;
   box-sizing: border-box;
   background-color: #e5e6e9;
}
.downPad {
  height: 40px;
  border: 0px solid red;
  display: flex;
  align-items: center;
  justify-content:space-between;
  min-width: 1000px;
}
</style>