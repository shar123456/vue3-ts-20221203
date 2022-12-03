<template>
<a-spin :spinning="spinning" >
  <div class="mainSpFlowContent">
    <div style="padding: 5px">
      <a-row>
        <a-col :span="24" class="title">创建审批流程</a-col>
      </a-row>
      <a-row style="height: 23px"></a-row>
  <a-form
        ref="formRef"
        :model="EditData"
        :rules="rules"
        @finish="handleFinish"
        v-bind="layout"
      >
        <a-row type="flex" justify="center">
          <a-col class="col" :span="11">
            <a-form-item label="流程编号" name="flowNo">
              <a-input disabled="true" v-model:value="EditData.flowNo" placeholder="请输入流程编号" />
            </a-form-item>
          </a-col>
          <a-col class="col" :span="1"></a-col>
          <a-col class="col" :span="11">
            <a-form-item label="流程名称" name="flowName">
              <a-input :disabled="IsDisabled" v-model:value="EditData.flowName" placeholder="请输入标题" />
            </a-form-item>
          </a-col>
        </a-row>




 <a-row style="height: 1px"></a-row>
   



<a-row style="height: 1px"></a-row>
      <a-row type="flex" justify="center">
        <a-col class="col" :span="11">

 <a-form-item label="状态" name="useStatus">
              <a-select :disabled="IsDisabled" v-model:value="EditData.useStatus" style="width: 100%" placeholder="请选择状态">
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="启用">启用</a-select-option>
            <a-select-option value="禁用">禁用</a-select-option>
          </a-select>
            </a-form-item>
        </a-col>
        <a-col class="col" :span="1"></a-col>
        <a-col class="col" :span="11">

 <a-form-item label="审批成员" name="workScheduleStatus">
 <a-button
            @click="addPersonBtn"
           
            type="primary"
            block
          >
            <template #icon><PlusCircleTwoTone /></template>

            添加审批成员</a-button
          >
 
    </a-form-item>
        </a-col>
      </a-row>
 <a-row style="height: 1px"></a-row>



 <a-row style="height: 20px"></a-row>
      <a-row
        type="flex"
        justify="center"
        align="middle"
        style="
          border: 1px dotted #71a6e7;
          height: 180px;
          background-color: white;overflow: auto;
        "
      >
        <!-- <div v-if="steps == undefined || steps.length <= 0">
          <a-button
            @click="addPersonBtn"
            style="color: #639ee5; font-weight: 400; font-size: 16px"
            type="dashed"
            block
          >
            <template #icon><PlusCircleTwoTone /></template>

            添加审批成员</a-button
          >
        </div> -->
<div v-if="steps == undefined || steps.length <= 0">
<a-empty description="暂无审批成员预览信息"  /></div>
        <a-steps  :direction="direction"  
          v-if="!(steps == undefined || steps.length <= 0)"
          :current="current"
        >
          <a-step
            status="process"
            v-for="item in steps"
            :key="item.title"
            :title="item.title"
          >
            <template #description>
              <span style="color:darkgrey;">手机号：{{item.content}}.</span><br/>
                 <span style="color:darkgrey;">审批状态：{{"未审批"}}.</span><br/>
                    <span style="color:darkgrey;">审批时间：{{"暂无"}}.</span>
            </template>
            <!-- <template v-if="item.isLast" #icon
              ><PlusCircleTwoTone @click="addPersonBtn"
            /></template> -->
          </a-step>
        </a-steps>

        <!-- <a-steps :current="1">
    <a-step>
     
      <template #title>Finished</template>
      <template #description>
        <span>This is a description.</span>
      </template>
    </a-step>
    <a-step  title="In Progress" sub-title="Left 00:00:08" description="This is a description." >

 <template #icon><PlusCircleTwoTone /></template>
  </a-step>

    <a-step title="Waiting" description="This is a description." />
     <a-step title="Waiting" description="This is a description." />
      <a-step title="Waiting" description="This is a description." />
       <a-step title="Waiting" description="This is a description." />
  </a-steps> -->


 



      </a-row>











        <a-row style="height: 75px"></a-row>
        <a-row type="flex" justify="center">
          <a-col class="col" :span="24" style="text-align: center">
            <a-button v-show="IsShowSubmit" type="primary" html-type="submit">{{
              submitDesc
            }}</a-button
            >&nbsp;
             <a-button  style="background-color: #CAB872; border-color: #CAB872" type="primary"   v-show="IsShowContinueAdd" @click="continueAdd">继续创建</a-button>  
              <a-button danger  type="primary" @click="clearPersonBtn">清空</a-button
          >&nbsp;
            <a-button  @click="goBackBtn">返回流程列表</a-button></a-col
          >
        </a-row>
      </a-form>


     



   








     
    </div>
  </div>
</a-spin>

 <!-- <SearchDataModal
    :visibleModelConfigGrid="visibleSearchModal"
    :modalTitleConfigGrid="modalTitleSearchModal"
  
    configType="SysUser"
    @CloseConfigGridMoadl="CloseConfigSearchModal"
    :ListColumns="UserColumns"
  :ListDatas="UserDatas"
  @addStepsFunc="addStepsFunc"
  /> -->

<SearchDataModal2
    :visibleModelConfigGrid="visibleSearchModal"
    :modalTitleConfigGrid="modalTitleSearchModal"
  
    configType="SysUser"
     configName="审批人"
    @CloseConfigGridMoadl="CloseConfigSearchModal"
    :ListColumns="UserColumns"
  :ListDatas="UserDatas"
  @addStepsFunc="addStepsFunc"
  />

</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted, ref,
 
  watch,
  createVNode, } from "vue";


import SearchDataModal from "../../components/SearchDataModal.vue";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";






import { PlusCircleTwoTone } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { message, Modal } from "ant-design-vue";
import { deepClone } from "../../utility/commonFunc";
import {
  SearchUserColumns
} from "../../TypeInterface/ISearchDataModalInterface";
import {
  GetLoginRecordColumn,
  GetLoginRecordDatas,
  DeleteLoginRecordById,
  BatchDeleteLoginRecord,
} from "../../Request/userRequest";
import {
  EditTwoTone,
  DeleteTwoTone,
  ExclamationCircleOutlined,
  FormOutlined,
  CopyFilled,
  EditFilled,
  HighlightFilled,
  CopyOutlined,
  SettingOutlined,
  SettingFilled,
} from "@ant-design/icons-vue";


import {
  GetUsers
} from "../../Request/userRequest";

import {
ExaminationFlowEntity
} from "../../TypeInterface/IExaminationInterface";
import {
 AddExaminationFlow
} from "../../Request/ExaminationRequest";
export default defineComponent({
  components: { PlusCircleTwoTone,SearchDataModal2 },
  setup() {
    const state = reactive({
      count: 0,   IsDisabled:false,IsShowSubmit:true,
    IsShowContinueAdd:false, submitDesc: "提交流程",    spinning :false,
    });
    const route = useRoute();
    const router = useRouter();
 const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
    let DataEntityState = reactive(new ExaminationFlowEntity());
let visibleSearchModal = ref<boolean>(false);
    let modalTitleSearchModal = ref<string>("");

 const CloseConfigSearchModal = () => {
      visibleSearchModal.value = false;
         modalTitleSearchModal.value= "";
    };

   let direction = ref<string>("horizontal");

  let UserColumns = ref<any[]>([]);
  let UserDatas = ref<any[]>([]);

 UserColumns.value = SearchUserColumns;

// UserDatas.value = [...Array(100)].map((_, i) => ({
//   key: i,
//   name: `Edward King ${i}`,
//   gender: '男',
//   phone: `1598583065${i}`,
// }));

 const current = ref<number>(0);
    let steps = ref<any[]>([]);
let  addStepsFunc=(item:any)=>{
  CloseConfigSearchModal();
  console.log(steps.value?.findIndex(j=>j.id==item[0].sysUserId))
  if(steps.value?.findIndex(j=>j.id==item[0].sysUserId)!=-1)
  {
     message.error(`审批人:${item[0].name},已存在，禁止重复添加.`);
     return ;
  }
item.forEach((i:any)=>{
  
  
  steps.value.push({
    id:i.sysUserId,
    title:i.name,
    content:i.phone
  })
  if(steps.value.length>8){
direction.value="vertical"
  }
  else
  {
    direction.value="horizontal"
  }
})
}


   
    // (steps.value = [
    //   {
    //     title: "First",
    //     content: "First-content",
    //     isLast: false,
    //   },
    //   {
    //     title: "Second",
    //     content: "Second-content",
    //     isLast: false,
    //   },

    //   {
    //     title: "2",
    //     content: "Second-content",
    //     isLast: false,
    //   },
    //   {
    //     title: "添加",
    //     content: "",
    //     isLast: true,
    //   },
    // ]),
    //   (current.value = steps.value.length - 2);

    onMounted(async() => {
     

 let UserDatasList = await GetUsers();

 UserDatas.value.push(...UserDatasList);
 console.log(" UserDatas.value=", UserDatas.value);
    })

    let addPersonBtn = () => {
      visibleSearchModal.value = true;
         modalTitleSearchModal.value= "【信息搜索】";
    };
    let clearPersonBtn = () => {
      steps.value = [];
      current.value = 0;
    };

  const goBackBtn = () => {
      router.push({ path: "/Home/ExaminationFlowListPage", query: {} });
    };


    let validateUseStatus = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择状态");
      } 

        return Promise.resolve();
      }


   const rules = {
     
      flowName: [
        {
          required: true,
          message: "流程名称",
          trigger: "blur",
        },
        {
          min: 2,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
       useStatus: [
        {
          required: true,
          validator: validateUseStatus, 
        }
      
      ],
    };



 const handleFinish = async (values: any) => {
 console.log(values)
  state.spinning = !state.spinning;
 let pageType = route.query.pageType;
     console.log("pageType",pageType);
let userList:any=[];

steps.value.forEach((i:any)=>{

  userList.push(i.id)
})

if(userList.length<=0)
{
   message.error("尚未选择审批成员，禁止提交.");
}


  let params={
   flowName: values.flowName,
   useStatus: values.useStatus,
   ExaminationFlowDetails:userList
  }
       console.log(params);
          AddExaminationFlow(params).then((res: any) => {
                  if (res.isSuccess) {
                 state.spinning=false;
                    message.success(res.msg);
                      router.push({ path: "/Home/ExaminationFlowListPage", query: {} });
                  }
                  else
                  {
                    message.error(res.msg);
                     state.spinning=false;
                  }
                });
 


    };
















    return {
      ...toRefs(state),
   ...toRefs(DataEntityState),layout,
      current,
      steps,
      addPersonBtn,
      clearPersonBtn,direction,goBackBtn,rules,handleFinish,


visibleSearchModal ,
   modalTitleSearchModal,

CloseConfigSearchModal

,UserColumns,UserDatas,addStepsFunc









    };
  },
});
</script>

<style  >
.mainSpFlowContent {
  box-sizing: border-box;
  border: 1px solid rgba(204, 204, 204, 0.644);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
  height: calc(100vh - 92px);
  overflow: auto;
}
.mainSpFlowContent .title {
  text-align: center;
  line-break: 40px;
  font-size: 22px;
  font-weight: 600;
  color: rgba(51, 108, 161, 0.774);
}


.mainSpFlowContent .ant-steps-item-description {
    max-width: 200px!important;
}
</style>