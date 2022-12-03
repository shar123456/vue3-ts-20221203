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

<a-checkbox-group v-model:value="RoleValue" style="border:0px solid red;width:100%">
<a-tag color="" style="margin-bottom:5px">
    <template #icon>
      <linkedin-outlined />
    </template>
    PC端
  </a-tag>

   
   <a-row >
    <a-col :span="6" v-for="(item) in rolesPC" :key="item.key">
         <a-checkbox :value="item.sysRoleId" :disabled="item.useStatus=='禁用'">{{item.name}} </a-checkbox>
         </a-col>
   
  </a-row>
  
    <a-divider v-if="rolesWeChart!=undefined&&rolesWeChart.length>0" style="border-color: #7cb305" dashed />
    <a-tag v-if="rolesWeChart!=undefined&&rolesWeChart.length>0" color="" style="margin-bottom:5px">
    <template #icon>
      <linkedin-outlined />
    </template>
    WeChart端
  </a-tag>

   <a-row v-if="rolesWeChart!=undefined&&rolesWeChart.length>0">
     <a-col :span="6" v-for="(item) in rolesWeChart" :key="item.key">
         <a-checkbox :value="item.sysRoleId" :disabled="item.useStatus=='禁用'">{{item.name}} </a-checkbox>
         </a-col>
  </a-row>
 
  <a-divider  v-if="rolesApp!=undefined&&rolesApp.length>0" style="border-color: #7cb305" dashed />
  <a-tag  v-if="rolesApp!=undefined&&rolesApp.length>0" color="" style="margin-bottom:5px">
    <template #icon>
      <linkedin-outlined />
    </template>
    App端
  </a-tag>

  <a-row v-if="rolesApp!=undefined&&rolesApp.length>0">
    <a-col :span="6" v-for="(item) in rolesApp" :key="item.key">
         <a-checkbox :value="item.sysRoleId" :disabled="item.useStatus=='禁用'">{{item.name}} </a-checkbox>
         </a-col>
  </a-row>
   
  </a-checkbox-group>
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
        })
          let visibleConfigGrid = ref<boolean>(props.visibleSetting);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleSetting);
           let CurrentUser=ref<string|undefined>(props.CurrentUser);
        


              let RoleValue=ref<any[]>([]);

let rolesPC=ref<any[]>([]);
let rolesWeChart=ref<any[]>([]);
let rolesApp=ref<any[]>([]);
const handleOk = (e: MouseEvent) => {
  if(RoleValue.value==undefined||RoleValue.value.length<1)
  {
    message.success("请勾选要配置的角色.");
    return false;
  }
      SetRole({roleIds:RoleValue.value,userId:CurrentUser.value}).then((res: any) => {
   console.log(res)
            if (res.isSuccess) {
                  message.success("配置成功.");
          context.emit("CloseSetingMoadl");
            }
         });

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
 RoleValue.value=[];
 GetRoleById({Id:newValue}).then((res: any) => {
   console.log(res)
            if (res.isSuccess) {
             
           rolesPC.value=res.datas.rolePC;
            rolesWeChart.value=res.datas.roleWeChat;
             rolesApp.value=res.datas.roleApp;
              RoleValue.value=res.datas.selectedRoleIds;
            }
         });







      
          console.log("CurrentUsernewValue",newValue);
           
            // RoleValue.value=['1','12'];
            // rolesPC.value=[{
            //     sysRoleId:"1",
            //     name:"管理员",
            //     useStatus:"启用",
            //     roleType:"PC",
            //     createTimeStr:"",
            //     key:"0",
              
            // },{
            //     sysRoleId:"12",
            //     name:"管理员111",
            //     useStatus:"启用",
            //     roleType:"PC",
            //     createTimeStr:"",
            //     key:"0",
                 
            // },{
            //     sysRoleId:"13",
            //     name:"管理员WeCart",
            //     useStatus:"禁用",
            //     roleType:"WeCart",
            //     createTimeStr:"",
            //     key:"1",
                
            // },{
            //     sysRoleId:"15",
            //     name:"管理员App",
            //     useStatus:"启用",
            //     roleType:"App",
            //     createTimeStr:"",
            //     key:"2",
                 
            // },{
            //     sysRoleId:"15",
            //     name:"管理员App",
            //     useStatus:"启用",
            //     roleType:"App",
            //     createTimeStr:"",
            //     key:"2",
                
            // }];
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,RoleValue,rolesPC,rolesWeChart,rolesApp
     
   
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