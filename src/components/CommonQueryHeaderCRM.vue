<template>

  <a-collapse v-model:activeKey="activeKey" style="border:0">
    <a-collapse-panel key="1" header="" style="border:0">

      <div class="userListPad_Crm">
        <div class="upPad_Crm">
          <div class="upPad-up_Crm">

            <a-row>
              <a-col style="border:0px solid red;margin-left:5px;line-height:40px;"
                v-for="(index, item) in QueryConditionInfo" :key="item" class="col" :xs="{ span: 23 }" :lg="{ span: 5 }">
                <a-row>
                  <a-col span="7" style="border:0px solid red;width: 100%;display:flex;align-items: center;">
                    <label>{{ QueryConditionInfoConfig[item].name }}：</label></a-col>
                  <a-col v-if="QueryConditionInfoConfig[item].type == 'text'" span="17">
                    <div>

                      <a-input v-model:value="QueryConditionInfo[item]"
                        :placeholder="QueryConditionInfoConfig[item].name" />


                    </div>
                  </a-col>
                  <a-col v-if="QueryConditionInfoConfig[item].type == 'select'" span="17">
                    <div style="border:0px solid red">
                      <a-select ref="select" v-model:value="QueryConditionInfo[item]" style="width: 100%;">

                        <a-select-option v-for="ioption in QueryConditionInfoConfig[item].optionValueArray"
                          :key="ioption" :value="ioption">{{ ioption }}</a-select-option>

                      </a-select>
                    </div>
                  </a-col>
                </a-row>

              </a-col>
            </a-row>




          </div>
        </div>
        <div class="centerPad_Crm"></div>
        <div class="downPad_Crm">

          <a-row>
            <a-col style="border:0px solid red;line-height:0px;" class="col" :xs="{ span: 23 }" :lg="{ span: 10 }">
              <div>&nbsp;

              </div>
            </a-col>
            <a-col style="line-height:40px;" class="col" :xs="{ span: 23 }" :lg="{ span: 14 }">
              <div
                style="border:0px solid red;display:flex;width:100%;justify-content:flex-end;align-items: center;flex-wrap: wrap;">
               
               
               
               
               
               
                <a-button type="primary" :style="stateBtn.ConfigExport"  @click="configExport"> <template #icon><LayoutOutlined /></template>导出配置</a-button>&nbsp;
         <a-button type="primary" :style="stateBtn.ExportExcel" @click="exportExcel"> <template #icon><download-outlined /></template>导出</a-button>&nbsp;
       <a-button  type="primary" :style="stateBtn.ConfigGridBtn" @click="configGridBtn">   <template #icon><ToolOutlined /></template>配置列表</a-button>&nbsp;
               
       <a-button type="primary" :style="stateBtn.CreateBtn" @click="CreateBtn"> <template #icon><plus-outlined  /></template>
        新增 </a-button>&nbsp;
      <a-button :style="stateBtn.BatchDeleteBtn"     style="background-color: #dd4b39; border-color: #dd4b39" type="primary"   @click="batchDeleteBtn">   <template #icon><delete-outlined /></template>批量删除</a-button>&nbsp;
               
               
                <a-button type="primary" :style="stateBtn.RefreshBtn" @click="refreshBtn"> <template #icon>
                    <redo-outlined />
                  </template>刷新</a-button>&nbsp;
                <a-button type="primary" :style="stateBtn.ClearQueryBtn" @click="ClearQueryBtn"><template #icon>
                    <clear-outlined />
                  </template>清空筛选</a-button>&nbsp;
                <a-button type="primary" :style="stateBtn.SearchBtn" @click="SearchBtn">
                  <template #icon>
                    <SearchOutlined />
                  </template>
                  搜索
                </a-button>&nbsp;
              </div>
            </a-col>


          </a-row>
















        </div>
      </div>

    </a-collapse-panel>

  </a-collapse>






</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, ref, onMounted } from "vue";

import { SearchOutlined, PlusOutlined, DeleteOutlined, BarChartOutlined, RedoOutlined, ClearOutlined, AppstoreAddOutlined, ToolOutlined, CloudUploadOutlined } from "@ant-design/icons-vue";
import { dateFormat } from '../utility/commonFunc'
export default defineComponent({
  components: {
    SearchOutlined, PlusOutlined, DeleteOutlined, BarChartOutlined, RedoOutlined, ClearOutlined, AppstoreAddOutlined, ToolOutlined, CloudUploadOutlined
  },
  props: { StateEntity: Object, },
  setup(props, context) {

    const activeKey = ref(['1']);

    
    const stateBtn = reactive<any>({
RefreshBtn:{display:'none'},
ClearQueryBtn:{display:'none'},
SearchBtn:{display:'none'},
ConfigExport:{display:'none'},
ExportExcel:{display:'none'},
ConfigGridBtn:{display:'none'},
CreateBtn:{display:'none'},
BatchDeleteBtn:{display:'none'}

    });




    const state = reactive<any>(props.StateEntity);


    const QueryConditionInfo = state.QueryConditionInfo;
    const QueryConditionInfoConfig = state.QueryConditionInfoConfig;


    onMounted(()=>{
  if(state.BtnConfigInfo!=undefined)
  {
    for (const key in state.BtnConfigInfo) {
      if(state.BtnConfigInfo[key]==true)
      {
        stateBtn[key]={display:'block'}
      }else
      {
        {display:'none'}
      }
    }
  }
});





    const SearchBtn = () => {


      context.emit("SearchBtn", { ...state.QueryConditionInfo });
    };

    const ClearQueryBtn = () => {



      for (let item in state.QueryConditionInfo) {
        if (state.QueryConditionInfoConfig[item].type == "text") {
          state.QueryConditionInfo[item] = "";
        }
        if (state.QueryConditionInfoConfig[item].type == "select") {
          state.QueryConditionInfo[item] = "未选择";
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
      context.emit("RefreshBtn");
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



   

 const configExport = () => {

 context.emit("configExport");
    }









    return {
      activeKey,
      //...toRefs(state),
      QueryConditionInfo, QueryConditionInfoConfig,
      SearchBtn,
      CreateBtn,
      ClearQueryBtn,
      exportExcel, batchDeleteBtn, refreshBtn, importExcel, configGridBtn, fileUploadBtn,configExport,
      stateBtn
    };
  },
});
</script>

<style  scoped>
</style>