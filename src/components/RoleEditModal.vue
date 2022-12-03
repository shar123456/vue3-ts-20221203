<template>
    <div>
 <a-modal
    cancelText="取消"
    okText="确定"
    wrapClassName="UserList"
    v-model:visible="visible"
    width="1000px"
    :title="modalTitle"
    @Cancel="onCancel"
      @ok="handleOk"
        :maskClosable="maskClosable"
      :confirm-loading="confirmLoading"
      
  >
   <a-spin :spinning="spinning" tip="Loading...">
    <div class="modalEditRow">
      <div class="modalEditCol">
        <label>角色Id：</label>
        <div><a-input v-model:value="EditData.sysRoleId" placeholder="角色Id"
        disabled="true" /></div>
      </div>
      <div class="modalEditCol">
        <label>角色名：</label>
        <div>
          <a-input v-model:value="EditData.name" placeholder="角色名" />
        </div>
      </div>
    </div>
   

    <div class="modalEditRow">
      <div class="modalEditCol">
        <label>状态</label>
        <div>
          <a-select
            ref="select"
            v-model:value="EditData.useStatus"
            style="width: 150px"
          >
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="启用">启用</a-select-option>

            <a-select-option value="禁用">禁用</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="modalEditCol">
        <label>类型：</label>
        <div>
          <a-select
            ref="select"
            v-model:value="EditData.roleType"
            style="width: 150px"
          >
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="PC">PC</a-select-option>

            <a-select-option value="WeChat">WeChat</a-select-option>
             <a-select-option value="App">App</a-select-option>
          </a-select>
        </div>
      </div>
    </div> 
    </a-spin>
  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { RoleDataEntity,IRoleInfo } from "../TypeInterface/IRoleInterface";
export default defineComponent({
      props: { UserData: RoleDataEntity,
       visibleRoleEdit:Boolean,modalTitleRoleEdit: String,},
    setup (props,context) {
        const state = reactive({
            count: 0, spinning :false,
            confirmLoading:false,
            maskClosable:false
        })
          let visible = ref<boolean>(props.visibleRoleEdit);
          let modalTitle = ref<string|undefined>(props.modalTitleRoleEdit);
           const EditData:IRoleInfo=props.UserData?.EditData as IRoleInfo;
          

 const handleOk = (e: MouseEvent) => {
      console.log(e);
          state.spinning = !state.spinning;
        state.confirmLoading = true;
      if(modalTitle.value=="新增【角色信息】")
      {
    context.emit("CreateRoleInfoBtn",{ ...EditData });
      }else
      {
    context.emit("UpdateRoleInfoBtn",{ ...EditData });
      }
    //
    
    onMounted(()=>{
      console.log("onMounted");

    })
     console.log("111onMounted");
  
    };
    const onCancel = (e: MouseEvent) => {
      //console.log(e);
   context.emit("closeRoleEditMoadl");
    
    
    };
    watch(
      () => props.visibleRoleEdit,
      (newValue) => {
             console.log("111onMo22222unted");
         console.log(newValue)
             state.spinning =false;
        state.confirmLoading = false;
            visible.value=newValue;
      }
    );
     watch(
      () => props.modalTitleRoleEdit,
      (newValue) => {
           
         console.log(newValue)
          
            modalTitle.value=newValue;
      }
    );
        return {
            ...toRefs(state),visible,modalTitle,handleOk,EditData,onCancel
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
.UserList .ant-modal-title {
  font-size: 16px;
  color: #1890ff !important;
  font-weight: 400;
}
</style>