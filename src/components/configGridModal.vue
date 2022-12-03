<template>

    <div>
     
 <a-modal
    cancelText="关闭"
     okText="确认"
    wrapClassName="ExportExcel"
    v-model:visible="visibleConfigGrid"
    width="1000px"
    :title="titleConfigGrid"
     :ok-button-props="{ style:{display:''} }"
    @Cancel="onCancel"
      @ok="handleOk"
       :maskClosable="maskClosable"
      :confirm-loading="confirmLoading"
  >
    <a-spin :spinning="spinning" tip="Loading...">
<a-row style="border:0px solid red;background-color:#f7f7f7;">
   <a-col :span="2" class="configCol">序号</a-col>
   <a-col :span="6" class="configCol">列初始名</a-col>
    <a-col :span="7" class="configCol">列当前名</a-col>
    <a-col :span="3" class="configCol">显示开关</a-col>
    <a-col :span="3" class="configCol">列宽</a-col>
    <a-col :span="3" class="configCol">排列位置</a-col>
  </a-row>
<a-row  v-for="(item,index) in LColumns" :key="index">
 <a-col :span="2" style="text-align:center;border:1px solid #f0f0f0;">{{index}}</a-col>
    <a-col :span="6"><a-input  disabled="true" v-model:value="item.oldTitle" :placeholder="item.oldTitle" /></a-col>
        <a-col :span="7"><a-input  v-model:value="item.title" :placeholder="item.title" /></a-col>
    <a-col :span="3" style="text-align:center;border:1px solid #f0f0f0;"><a-switch checked-children="开" un-checked-children="关" v-model:checked="item.isUse" /></a-col>
    <a-col :span="3" style="text-align:center;border:0px solid #f0f0f0;"><a-input-number  v-model:value="item.width" :min="10" :max="2000" /></a-col>
    <a-col :span="3" style="text-align:center;border:0px solid #f0f0f0;"> <a-input-number  v-model:value="item.configOrder" :min="1" :max="100" /></a-col>
  </a-row>

    
    
  </a-spin>
  </a-modal>

    </div>
      
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { UserDataEntity,IUserInfo } from "../TypeInterface/IUserInterface";
import { message} from "ant-design-vue";
import {
SetLoginRecordGrid
 
} from "../Request/userRequest";

import { InboxOutlined } from '@ant-design/icons-vue';


interface Itest {
    colsForeignKeyId: string;
    
  }

export default defineComponent({
      props: { ListColumns:Object,
       visibleModelConfigGrid:Boolean,modalTitleConfigGrid: String,configType:String},
       components: {
    InboxOutlined,
  },
    setup (props,context) {
        const state = reactive({
            count: 0,
             spinning :false,
            confirmLoading:false,
            maskClosable:false
        })
          let visibleConfigGrid = ref<boolean>(props.visibleModelConfigGrid);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleConfigGrid);
           let LColumns=ref<any>(props.ListColumns);
        
 let configType = ref<string|undefined>(props.configType);
const handleOk = (e: MouseEvent) => {

   state.spinning = !state.spinning;
        state.confirmLoading = true;
 SetLoginRecordGrid({ListColumns:props.ListColumns,configType:configType.value}).then((res: any) => {

            if (res.isSuccess) {
                state.spinning = !state.spinning;
         state.confirmLoading = false;
            context.emit("refreshBtn");

            context.emit("CloseConfigGridMoadl");
            message.success("配置成功.");
            }else
            {
                state.spinning = !state.spinning;
         state.confirmLoading = false;
            }
          
         });
  };

 
 
    const onCancel = (e: MouseEvent) => {
   context.emit("CloseConfigGridMoadl");
    };
    watch(
      () => props.visibleModelConfigGrid,
      (newValue) => {
           
        
          
            visibleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.modalTitleConfigGrid,
      (newValue) => {
           
      
          
            titleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.ListColumns,
      (newValue) => {
           
      
          console.log("newValue",newValue);
            LColumns.value=newValue;
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,LColumns
     
   
        }
    }
})
</script>

<style  >
.modalEditRow {
  border: 0px solid red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
}
.modalEditCol {
  display: flex;
  width: 45%;
  align-items: center;
}
.modalEditCol label {
  width: 120px;
  text-align: left;
}
.modalEditCol div {
  flex-grow: 1;
}
.ExportExcel .ant-modal-title {
  font-size: 16px;
  color: #1890ff !important;
  font-weight: 400;
}
.configCol{
  border:2px solid #f0f0f0;height:40px;text-align:center;line-height:40px;color:black;
    font-size:14px
}
</style>