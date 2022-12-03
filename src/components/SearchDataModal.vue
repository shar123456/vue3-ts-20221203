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
  >


    
<a-table
    :columns="columns"
    :data-source="datas"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
   :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
  >



</a-table>





    
  
  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'

import { message} from "ant-design-vue";
import {
SetLoginRecordGrid
 
} from "../Request/userRequest";

import { InboxOutlined } from '@ant-design/icons-vue';




export default defineComponent({
      props: { ListColumns:Object,ListDatas:Object,
       visibleModelConfigGrid:Boolean,modalTitleConfigGrid: String,configType:String},
       components: {
    InboxOutlined,
  },
    setup (props,context) {
        const state = reactive({
            count: 0,
        })
          let visibleConfigGrid = ref<boolean>(props.visibleModelConfigGrid);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleConfigGrid);
         
        
 
let selectedRowKeys=ref<string[]>([])
let selectedRows=ref<any>([])


 let configType = ref<string|undefined>(props.configType);


 const columns =ref<any>(props.ListColumns);
  const datas =ref<any>(props.ListDatas);
const handleOk = (e: MouseEvent) => {
//

  console.log("selectedRowKeys.value",selectedRowKeys.value);
   console.log("selectedRows.value",selectedRows.value);

context.emit("addStepsFunc",selectedRows.value);
 
   
}
 
 
    /***勾选****************/
    const onSelectChange = (SelectedRowKeys: [], SelectedRows: []) => {
      console.log("selectedRows changed: ", selectedRows);
       console.log("selectedRowKeys changed: ", selectedRowKeys);
      selectedRowKeys.value = SelectedRowKeys;
      selectedRows.value  = SelectedRows;
    };
    /***勾选****************/









 
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
           
      
          selectedRowKeys.value=[]
            titleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.ListColumns,
      (newValue) => {
           
      
          console.log("newValue",newValue);
           
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,datas,
      columns,onSelectChange,selectedRowKeys
     
   
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