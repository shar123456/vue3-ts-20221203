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
               
               
               
               
               
                 <a-button type="primary" style="margin-left: 4px;margin-top: 4px;" :style="stateBtn.CreateBtn" @click="CreateBtn"> <template #icon><plus-outlined  /></template>
        新增 </a-button>
        <a-button type="primary" style="margin-left: 4px;margin-top: 4px;background-color: #9F68E6; border-color: #9F68E6" :style="stateBtn.ClueShiftBtn" @click="ClueShiftBtn"> <template #icon><interaction-outlined  /></template>
        线索批量转换 </a-button>

                <a-button type="primary" style="margin-left: 4px;margin-top: 4px;" :style="stateBtn.ConfigExport"  @click="configExport"> <template #icon><LayoutOutlined /></template>导出配置</a-button>
         <a-button type="primary" style="margin-left: 4px;margin-top: 4px;" :style="stateBtn.ExportExcel" @click="exportExcel"> <template #icon><download-outlined /></template>导出</a-button>
         <a-button type="primary" @click="importExcel" :style="stateBtn.ImportExcel"  style="margin-left: 4px;margin-top: 4px;"> <template #icon><cloud-upload-outlined /></template>导入</a-button>
       <a-button  type="primary" style="margin-left: 4px;margin-top: 4px;"  :style="stateBtn.ConfigGridBtn" @click="configGridBtn">   <template #icon><ToolOutlined /></template>配置列表</a-button>
               
     
      <a-button :style="stateBtn.BatchDeleteBtn"     style="margin-left: 4px;margin-top: 4px;background-color: #dd4b39; border-color: #dd4b39" type="primary"   @click="batchDeleteBtn">   <template #icon><delete-outlined /></template>批量删除</a-button>
               
               
                <a-button type="primary" style="margin-left: 4px;margin-top: 4px;" :style="stateBtn.RefreshBtn" @click="refreshBtn"> <template #icon>
                    <redo-outlined />
                  </template>刷新</a-button>
                <a-button type="primary"     style="margin-left: 4px;margin-top: 4px;background-color: goldenrod; border-color: goldenrod" :style="stateBtn.ClearQueryBtn" @click="ClearQueryBtn"><template #icon>
                    <clear-outlined />
                  </template>清空筛选</a-button>
                <a-button type="primary" style="margin-left: 4px;margin-top: 4px;margin-right: 4px;" :style="stateBtn.SearchBtn" @click="SearchBtn">
                  <template #icon>
                    <SearchOutlined />
                  </template>
                  搜索
                </a-button>
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

import { LayoutOutlined,ProfileOutlined,SearchOutlined,PlusOutlined, 
  DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined,
  AppstoreAddOutlined,DownloadOutlined,CloudUploadOutlined,InteractionOutlined} from "@ant-design/icons-vue";
import { dateFormat } from '../utility/commonFunc'
export default defineComponent({
  components: {
        SearchOutlined,PlusOutlined,DeleteOutlined,BarChartOutlined,RedoOutlined,
    ClearOutlined,AppstoreAddOutlined,DownloadOutlined,CloudUploadOutlined,ProfileOutlined,LayoutOutlined,InteractionOutlined
    
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
BatchDeleteBtn:{display:'none'},
ClueShiftBtn:{display:'none'},

ImportExcel:{display:'none'}


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
      context.emit("BatchDelete");
    };
    const fileUploadBtn = () => {
      context.emit("fileUploadBtn");
    };


    const configGridBtn = () => {
      context.emit("ShowConfigGrid");
    };





    const refreshBtn = () => {
      ClearQueryBtn();
      context.emit("RefreshBtn");
    };


    const exportExcel = () => {

      context.emit("ExportExcel");

    };



    const CreateBtn = () => {

      context.emit("CreateBtn");
    }

    const importExcel = () => {

      context.emit("ImportExcel");
    }



   

 const configExport = () => {

 context.emit("ConfigExport");
    }




    const ClueShiftBtn = () => {

context.emit("ShowClueShiftBtn");
   }







    return {
      activeKey,
      //...toRefs(state),
      QueryConditionInfo, QueryConditionInfoConfig,
      SearchBtn,
      CreateBtn,
      ClearQueryBtn,
      exportExcel, batchDeleteBtn, refreshBtn, importExcel, configGridBtn, fileUploadBtn,configExport,ClueShiftBtn,
      stateBtn
    };
  },
});
</script>

<style  scoped>
</style>