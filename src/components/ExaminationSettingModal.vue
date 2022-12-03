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
    @Cancel="onCancel"
      @ok="handleOk"
  >
 <a-row>
    <a-col :span="12">
     <a-button @click="agreeBtn" type="primary"  >
              通过
           </a-button
            >&nbsp;
             <a-button @click="rejectBtn"  style="background-color: #dd4b39; border-color: #dd4b39" type="primary"  >驳回</a-button> 
    </a-col>
    <a-col :span="12"></a-col>

  

 
  </a-row>
      <a-row style="height: 8px"></a-row>
   <a-row>
    <a-col :span="24">
      备注： <a-textarea   v-model:value="remark"   placeholder="请输入备注" :rows="4" /></a-col>

  

 
  </a-row>
    
  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { IRoleInfo } from "../TypeInterface/IRoleInterface";
import { message} from "ant-design-vue";
import {
GetRoleById,SetRole
 
} from "../Request/RoleRequest";
import { SetExaminationResult } from "../Request/ExaminationRequest";
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons-vue';
import { InboxOutlined } from '@ant-design/icons-vue';


interface Itest {
    colsForeignKeyId: string;
    
  }

export default defineComponent({
      props: { CurrentUser:String,
       visibleSetting:Boolean,modalTitleSetting: String},
       components: {
    InboxOutlined, TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  },
    setup (props,context) {
        const state = reactive({
            count: 0,
            remark:""
        })
          let visibleConfigGrid = ref<boolean>(props.visibleSetting);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleSetting);
           let CurrentUser=ref<string|undefined>(props.CurrentUser);
        

const agreeBtn=()=>{

     let params={remark: state.remark,result:"agree",examId:CurrentUser.value}
      SetExaminationResult(params).then((res: any) => {
            if (res.isSuccess) {
                    message.success("审批成功.");
            context.emit("CloseSetingMoadl");
            state.remark="";
           
            }
            else
            {
                message.error(res.msg);
            }
         });
}

const rejectBtn=()=>{
   let params={remark: state.remark,result:"reject",examId:CurrentUser.value}
      SetExaminationResult(params).then((res: any) => {
            if (res.isSuccess) {
                    message.success("审批成功.");
            context.emit("CloseSetingMoadl");
            state.remark="";
           
            }
            else
            {
                message.error(res.msg);
            }
         });
}






              let RoleValue=ref<any[]>([]);

let rolesPC=ref<any[]>([]);
let rolesWeChart=ref<any[]>([]);
let rolesApp=ref<any[]>([]);
const handleOk = (e: MouseEvent) => {
  

console.log(RoleValue.value)
  };

 
 
    const onCancel = (e: MouseEvent) => {
   context.emit("CloseSetingMoadl");
    };
    watch(
      () => props.visibleSetting,
      (newValue) => {
           
        
           console.log("nvisibleSettingewValue",newValue);
            visibleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.modalTitleSetting,
      (newValue) => {
           
      
          
            titleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.CurrentUser,
      (newValue) => {
           
 CurrentUser.value=newValue;
 







      
          console.log("CurrentUsernewValue",newValue);
           
          
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,
     agreeBtn,rejectBtn
   
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