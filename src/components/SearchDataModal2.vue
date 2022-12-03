<template>
    <div>
 <a-modal
    cancelText="关闭"
     okText="确认"
    wrapClassName="ExportExcel"
    v-model:visible="visibleConfigGrid"
    width="1000px"
    :title="titleConfigGrid"
     :ok-button-props="{ style:{display:'none'} }"
       :cancel-button-props="{ style:{display:'none'} }"
    @Cancel="onCancel"
      @ok="handleOk"
  >


    
<a-table
    :columns="columns"
    :data-source="datas"
    :pagination="{ pageSize: 10 }"
    :scroll="{ y: 260 }"

  >
 <template #action="{ text: action }">
        <a  @click="selectRecord(action)"
          style="
            color: rgba(18, 96, 214, 0.733);
            font-size: 17px;
            font-weight: 700;
          "
         
          title="选择"
          ><PlusSquareFilled mark="delete"
        />&nbsp;设为{{configName}}</a>
      </template>


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

import { PlusSquareFilled } from '@ant-design/icons-vue';




export default defineComponent({
      props: { ListColumns:Object,ListDatas:Object,
       visibleModelConfigGrid:Boolean,modalTitleConfigGrid: String,configType:String,configName:String},
       components: {
    PlusSquareFilled
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
 let configName = ref<string|undefined>(props.configName);

 const columns =ref<any>(props.ListColumns);
  const datas =ref<any>(props.ListDatas);
const handleOk = (e: MouseEvent) => {
//

  console.log("selectedRowKeys.value222",selectedRowKeys.value);
   console.log("selectedRows.value3333",selectedRows.value);

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

 


const selectRecord=(item:any)=>{
    selectedRows.value=[];
      
      if(configType.value=="flow")
      {
let Datas=  props.ListDatas?.filter((i:any)=>i.flowId==item);
      if(Datas&&Datas.length>0)
      {
selectedRows.value.push({
    ...Datas[0]
})
      }

      }
 if(configType.value=="SysUser")
      {
        let Datas=  props.ListDatas?.filter((i:any)=>i.sysUserId==item);
      if(Datas&&Datas.length>0)
      {
selectedRows.value.push({
    ...Datas[0]
})
      }

      }

        console.log("addStepsFunc",selectedRows.value);
      context.emit("addStepsFunc",selectedRows.value);
}




 
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
      columns,onSelectChange,selectedRowKeys,selectRecord,configName
     
   
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