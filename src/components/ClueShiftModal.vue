<template>
    <div  id="ClueShiftModalT">
 <a-modal
    cancelText="关闭"
     okText="确认"
    
    wrapClassName="ClueShiftModal"
    v-model:visible="visibleConfigGrid"
    class="ClueShiftConfig"
    :title="titleConfigGrid"
    :ok-button-props="{ disabled: okButtonDisabled }"
    @Cancel="onCancel"
      @ok="handleOk"
      :maskClosable="maskClosable"
      :confirm-loading="confirmLoading"
  >
 <a-spin :spinning="spinning" tip="Loading...">
<a-row style="border:0px solid red;background-color:#f7f7f7;">
  <a-col :span="7" class="configCol"> 转换类型： </a-col>
  <a-col :span="17" class="configCol">
  
    <a-checkbox-group style="width: 100%" v-model:value="noticeTypeArray">
    <a-checkbox
            value="客户"
            :disabled="IsCustomerDisabled"
            style="
              color: rgba(0, 0, 0, 0.5);
              font-size: 16px;
              font-weight: 600;
            "
            >客户</a-checkbox
          >

          <a-checkbox
            value="联系人"
            :disabled="IsContactDisabled"
            style="
              color: rgba(0, 0, 0, 0.5);
              font-size: 16px;
              font-weight: 600;
            "
            >联系人</a-checkbox
          >
          <a-checkbox
            value="商机"
            :disabled="IsBuinessDisabled"
            style="
              color: rgba(0, 0, 0, 0.5);
              font-size: 16px;
              font-weight: 600;
            "
            >商机</a-checkbox
          >
        </a-checkbox-group>




</a-col>
    
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
SetClueShift,BatchSetClueShift
 
} from "../Request/CrmRequest/ClueManagementRequest";

import { InboxOutlined } from '@ant-design/icons-vue';
import { string } from 'vue-types';



export default defineComponent({
      props: { Data:Object,SelectkeysData:Object,
       visibleModelConfigGrid:Boolean,modalTitleConfigGrid: String,configType:String},
       components: {
    InboxOutlined,
  },
    setup (props,context) {

      let noticeTypeArray=ref<any>([]);

      noticeTypeArray.value=["","",""]
        const state = reactive({
            count: 0,spinning :false,
            confirmLoading:false,
            maskClosable:false,
            IsCustomerDisabled:false,

          
            IsContactDisabled:false,
            IsBuinessDisabled:false,
            okButtonDisabled:true
            
        })
          let visibleConfigGrid = ref<boolean>(props.visibleModelConfigGrid);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleConfigGrid);
           let LData=ref<any>(props.Data);
            let LSelectkeysData=ref<any>(props.SelectkeysData);

           
       
 let configType = ref<string|undefined>(props.configType);
const handleOk = (e: MouseEvent) => {

if(noticeTypeArray.value.length<=0||(noticeTypeArray.value&&noticeTypeArray.value.length==3&&noticeTypeArray.value[0]==""&&noticeTypeArray.value[1]==""&&noticeTypeArray.value[2]==""))
{
   message.success("请勾选需要转换的类型.");
   return;
}

if(LSelectkeysData.value.length>0)
{
  BatchSetClueShift({ keys: LSelectkeysData.value ,ListCnoticeTypeArrayolumns:noticeTypeArray.value,}).then((res: any) => {
            if (res.isSuccess) {
              state.confirmLoading = false;
            state.spinning== false;

            context.emit("CloseConfigGridMoadl");
            message.success("线索批量转换成功.");
            }
            state.confirmLoading = false;
            state.spinning== false;
          });
}
else{
  if(LData.value.clueAuditState=="未审核")
{
  message.warn(`线索 ${LData.value.clueCode}，尚未审核`);
   return;
}
if(LData.value.clueAuditState=="驳回")
{
  message.warn(`线索 ${LData.value.clueCode}，已被驳回，禁止转换`);
   return;
}
state.spinning = true;
state.confirmLoading = true;
      console.log(noticeTypeArray.value)
 console.log(LData.value.clueCode)

           SetClueShift({ListCnoticeTypeArrayolumns:noticeTypeArray.value,ClueCode:LData.value.clueCode}).then((res: any) => {
            console.log(res)
            if (res.isSuccess) {
              
          state.confirmLoading = false;
            state.spinning== false;

            context.emit("CloseConfigGridMoadl");
            message.success("转换成功.");
            
            }
            state.confirmLoading = false;
            state.spinning== false;
         });     

}





   
  };

 
 
    const onCancel = (e: MouseEvent) => {
   context.emit("CloseConfigGridMoadl");
    };
    watch(
      () => props.visibleModelConfigGrid,
      (newValue) => {
           
        state.spinning = false;
        state.confirmLoading = false;
          
            visibleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.modalTitleConfigGrid,
      (newValue) => {
           
       
          state.spinning = false;
        state.confirmLoading = false;
            titleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.Data,
      (newValue) => {
           state.spinning = false;
        state.confirmLoading = false;
      
          console.log("newValue",newValue);  LData.value=newValue;
          if(LData.value!=undefined&&!(props?.modalTitleConfigGrid?.indexOf("批量")&&props?.modalTitleConfigGrid?.indexOf("批量")>0))
          {
            console.log("LData.value.contactShiftMark",LData.value.contactShiftMark); 
            let customer="";
            if(LData.value.customerShiftMark==true)
            {
              state.IsCustomerDisabled=true;
              customer="客户";
            }
            let contact="";
            if(LData.value.contactShiftMark==true)
            {
              contact="联系人";
              state.IsContactDisabled=true;
            }
            let business="";
            if(LData.value.businessShiftMark==true)
            {
              business="商机";
              state.IsBuinessDisabled=true;
            }

            noticeTypeArray.value=[customer,contact,business]
             if(business!=""&&contact!=""&&customer!="")
             {
              state.okButtonDisabled=true;
             }
             else
             {
              state.okButtonDisabled=false;
             }
          }
          else
          {
            state.IsCustomerDisabled=false;
            state.IsContactDisabled=false;
            state.IsBuinessDisabled=false;
            noticeTypeArray.value=["","",""]
            state.okButtonDisabled=false;
          }
      }
    );
    watch(
      () => props.SelectkeysData,
      (newValue) => {
           
        state.spinning = false;
        state.confirmLoading = false;
          
        LSelectkeysData.value=newValue;
        console.log("SelectkeysData",LSelectkeysData.value)
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,LData,
            noticeTypeArray
   
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
.ClueShiftModal .ant-modal-title {
  font-size: 16px;
  color: #1890ff !important;
  font-weight: 400;
}
.configCol{
  border:2px solid #f0f0f0;height:40px;text-align:center;line-height:40px;color:black;
    font-size:14px
}
.ClueShiftConfig {
    overflow: auto;max-width: 500px!important;width: 500px!important;
}
</style>