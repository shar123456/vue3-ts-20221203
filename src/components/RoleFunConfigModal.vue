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

 <a-row>
    <a-col  style="border:0px solid red"  :span="6" v-for="(item,index) in treeEntitys" :key="index">

 <a-tree
    checkable
    :tree-data="item.treeData"
    v-model:expandedKeys="item.expandedKeys"
    v-model:selectedKeys="item.selectedKeys"
    v-model:checkedKeys="item.checkedKeys"
  >

  </a-tree>

    </a-col>
   
  </a-row>

 </a-spin>
  </a-modal>
  
    </div>
   
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { IRoleInfo } from "../TypeInterface/IRoleInterface";
import { message} from "ant-design-vue";
import {
GetMenuById,SetRoleMenu
 
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
const treeData1: any[] = [
  {
    title: '系统设置',
    key: '0-0',
    children: [
      {
        title: '用户列表',
        key: '0-0-0',
        disabled: false,
       
      },
      {
        title: '角色列表',
        key: '0-0-1',
    }
    ,
      {
        title: '菜单列表',
        key: '0-0-2',
    }
     ,
      {
        title: '登录记录',
        key: '0-0-3',
    }
     ,
      {
        title: '文件管理',
        key: '0-0-4',
    }],
      
    
  }
];
const treeData2: any[] = [
  {
    title: '系统设置1',
    key: '0-1',
    children: [
      {
        title: '用户列表1',
        key: '0-1-0',
        disabled: false,
       
      },
      {
        title: '角色列表1',
        key: '0-1-1',
    }
    ,
      {
        title: '菜单列表1',
        key: '0-1-2',
    }
     ,
      {
        title: '登录记录1',
        key: '0-1-3',
    }
     ,
      {
        title: '文件管理1',
        key: '0-1-4',
    }],
      
    
  }
];
export default defineComponent({
      props: { CurrentUser:String,
       visibleRoleFunConfig:Boolean,modalTitleRoleFunConfig: String},
       components: {
    InboxOutlined, TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  },
    setup (props,context) {
        const state = reactive({
            count: 0, spinning :false,
            confirmLoading:false,
            maskClosable:false
        })

      
          let visibleConfigGrid = ref<boolean>(props.visibleRoleFunConfig);
          let titleConfigGrid = ref<string|undefined>(props.modalTitleRoleFunConfig);
           let CurrentUser=ref<string|undefined>(props.CurrentUser);
        

   let treeEntitys =ref<any[]>();




    const expandedKeys = ref<string[]>(['0-0', '0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    // watch(expandedKeys, () => {
    //   console.log('expandedKeys', expandedKeys);
    // });
    // watch(selectedKeys, () => {
    //   console.log('selectedKeys', selectedKeys);
    // });
    // watch(checkedKeys, () => {
    //   console.log('checkedKeys', checkedKeys);
    // });
      let MenuIdValue=ref<any>([]);
const handleOk = (e: MouseEvent) => {
    state.spinning = !state.spinning;
     state.confirmLoading = true;
   treeEntitys.value?.forEach((item)=>{
           console.log("checkedKeys",item.checkedKeys)
           if(item.checkedKeys!=undefined||item.checkedKeys.length>0)
           {
MenuIdValue.value.push(...item.checkedKeys);
           }
                //console.log(item.selectedKeys)
   })


 if(MenuIdValue.value==undefined||MenuIdValue.value.length<1)
  {
     state.spinning = false;
        state.confirmLoading = false;
    message.success("请勾选要配置的权限.");
    return false;
  }



console.log("MenuIdValue",MenuIdValue.value)


   SetRoleMenu({MenuIds:MenuIdValue.value,roleId:CurrentUser.value}).then((res: any) => {
   console.log(res)
            if (res.isSuccess) {
                  message.success("配置成功.");
                  state.spinning = false;
                     state.confirmLoading = false
          context.emit("CloseSetingMoadl");
            }
               state.confirmLoading = false
         });


  };

 


 onMounted(()=>{
     let ss1={
    treeData:treeData1,
     expandedKeys:['0-0'],
      selectedKeys:['0-0-0', '0-0-1'],
       checkedKeys:['0-0-0', '0-0-1']}

let ss2=
    {treeData:treeData2,
     expandedKeys:['0-1'],
      selectedKeys:['0-1-0', '0-1-1'],
       checkedKeys:['0-1-0', '0-1-1']}
let ss3=
    {treeData:treeData2,
     expandedKeys:['0-1'],
      selectedKeys:['0-1-0', '0-1-1'],
       checkedKeys:['0-1-0', '0-1-1']}
       let ss4=
    {treeData:treeData2,
     expandedKeys:['0-1'],
      selectedKeys:['0-1-0', '0-1-1'],
       checkedKeys:['0-1-0', '0-1-1']}
       let ss5=
    {treeData:treeData2,
     expandedKeys:['0-1'],
      selectedKeys:['0-1-0', '0-1-1'],
       checkedKeys:['0-1-0', '0-1-1']}
//treeEntitys.value=[ss1,ss2,ss3,ss4,ss5]
 })
  state.spinning = false;
    const onCancel = (e: MouseEvent) => {
   context.emit("CloseSetingMoadl");
    };
    watch(
      () => props.visibleRoleFunConfig,
      (newValue) => {
           
        
           console.log("nvisibleSettingewValue",newValue);
            visibleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.modalTitleRoleFunConfig,
      (newValue) => {
           
    
          
            titleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.CurrentUser,
      (newValue) => {
           
 CurrentUser.value=newValue;
  console.log("CurrentUserRoleFunConfig", CurrentUser.value);
  treeEntitys.value=[];
treeEntitys.value?.forEach((item)=>{
          
           if(item.checkedKeys!=undefined||item.checkedKeys.length>0)
           {
item.checkedKeys=[];
           }
                //console.log(item.selectedKeys)
   })
 GetMenuById({Id:newValue}).then((res: any) => {
   console.log(res)
            if (res.isSuccess) {
             console.log(res)
             treeEntitys.value=res.datas
          //
            }
         });




      
        
           
           
      }
    );
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk,treeEntitys,
      expandedKeys,
      selectedKeys,
      checkedKeys
     
   
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