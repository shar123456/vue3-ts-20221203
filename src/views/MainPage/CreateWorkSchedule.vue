<template>
<a-spin :spinning="spinning" :delay="delayTime">
  <div class="mainWSContent">
    <div style="padding: 5px">
      <a-row>
        <a-col :span="24" class="title">{{ title }}</a-col>
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
          <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="计划编号" name="workScheduleNo">
              <a-input disabled="true" v-model:value="EditData.workScheduleNo" placeholder="请输入计划编号" />
            </a-form-item>
          </a-col>
          <a-col class="col"  :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="标题" name="workScheduleName">
              <a-input :disabled="IsDisabled" v-model:value="EditData.workScheduleName" placeholder="请输入标题" />
            </a-form-item>
          </a-col>
        </a-row>




 <a-row style="height: 0px"></a-row>
      <a-row type="flex" justify="center">
        <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">

 <a-form-item label="类型" name="workScheduleType">
              <a-select :disabled="IsDisabled" v-model:value="EditData.workScheduleType" style="width: 100%" placeholder="请选择类型">
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="公事">公事</a-select-option>
            <a-select-option value="私事">私事</a-select-option>
          </a-select>
            </a-form-item>
        </a-col>
        <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
        <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">

 <a-form-item label="计划状态" name="workScheduleStatus">

 <a-select :disabled="IsDisabled"  v-model:value="EditData.workScheduleStatus" style="width: 100%" placeholder="请选择计划状态">
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="未开始">未开始</a-select-option>
            <a-select-option value="已取消">已取消</a-select-option>
            <a-select-option value="已完成">已完成</a-select-option>
            <a-select-option value="已过期">已过期</a-select-option>
            <a-select-option value="即将开始">即将开始</a-select-option>
          </a-select>
    </a-form-item>
        </a-col>
      </a-row>
 <a-row style="height: 0px"></a-row>

      <a-row type="flex" justify="center">
          <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="状态" name="useStatus">
               <a-select :disabled="IsDisabled" v-model:value="EditData.useStatus" style="width: 100%" placeholder="请选择状态">
            <a-select-option value="未选择">未选择</a-select-option>
            <a-select-option value="启用">启用</a-select-option>
            <a-select-option value="禁用">禁用</a-select-option>
          </a-select>
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col"  :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="发布人" name="initiator">
              <!-- <a-input v-model:value="EditData.initiator" placeholder="请输入发布人" /> -->

<a-input-search :disabled="IsDisabled"
      v-model:value="EditData.initiator"
      placeholder="请输入发布人"
      enter-button
      @search="onSearch"
    />





            </a-form-item>
          </a-col>
        </a-row>




 <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="开始时间" name="startTimeStr">
               <a-date-picker :disabled="IsDisabled" style="width: 100%"  format="YYYY-MM-DD HH:mm:ss"  v-model:value="EditData.startTimeStr"
        />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="通知类型" name="noticeTypeArray">
            <a-checkbox-group :disabled="IsDisabled" style="width: 100%" v-model:value="EditData.noticeTypeArray">
            <a-checkbox
              value="邮件"
              style="
                color: rgba(0, 0, 0, 0.5);
                font-size: 16px;
                font-weight: 600;
              "
              >邮件</a-checkbox
            >

            <a-checkbox
              value="公众号推送"
              style="
                color: rgba(0, 0, 0, 0.5);
                font-size: 16px;
                font-weight: 600;
              "
              >公众号推送</a-checkbox
            >
          </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="工作内容" name="workScheduleDesc">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.workScheduleDesc" placeholder="请输入工作内容" :rows="4"
        />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="备注" name="remarkDesc">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.remarkDesc" placeholder="请输入备注" :rows="4" />
            </a-form-item>
          </a-col>
        </a-row>


        <a-row style="height: 65px"></a-row>
        <a-row type="flex" justify="center">
          <a-col class="col" :span="24" style="text-align: center">
            <a-button v-show="IsShowSubmit" type="primary" html-type="submit" >{{
              submitDesc
            }}</a-button
            >&nbsp;
             <a-button  style="background-color: #CAB872; border-color: #CAB872" type="primary"   v-show="IsShowContinueAdd" @click="continueAdd">继续创建</a-button>  &nbsp;
            <a-button  @click="goBackBtn">返回计划列表</a-button></a-col
          >
        </a-row>
      </a-form>
    </div>
  </div>
  </a-spin>


  <SearchDataModal2
    :visibleModelConfigGrid="visibleSearchModal"
    :modalTitleConfigGrid="modalTitleSearchModal"
  
    configType="SysUser"
    configName="发布人"
    @CloseConfigGridMoadl="CloseConfigSearchModal"
    :ListColumns="UserColumns"
  :ListDatas="UserDatas"
  @addStepsFunc="addStepsFunc"
  />

</template>

<script lang="ts">
import { message, Modal } from "ant-design-vue";
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import {
  WorkScheduleEntity,
  IWorkScheduleInfo,
} from "../../TypeInterface/IWorkScheduleInterface";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import {
  GetUsers
} from "../../Request/userRequest";
import {
  SearchUserColumns
} from "../../TypeInterface/ISearchDataModalInterface";
import { useRouter, useRoute } from "vue-router";
import {
  AddWorkSchedule,GetWorkScheduleById,UpdateWorkSchedule
}
 from "../../Request/WorkScheduleRequest";
 import {dateFormat} from '../../utility/commonFunc'
 import { useStore } from "vuex";
export default defineComponent({
    components: { SearchDataModal2 },
  setup() {
    const state = reactive({
      count: 0,
      title: "新建工作计划",
      submitDesc: "提交计划",
       spinning :false,
   delayTime :0,
   IsDisabled:false,
   IsShowSubmit:true,
    IsShowContinueAdd:false,
    });

let visibleSearchModal = ref<boolean>(false);
    let modalTitleSearchModal = ref<string>("");

 const CloseConfigSearchModal = () => {
      visibleSearchModal.value = false;
         modalTitleSearchModal.value= "";
    };
  let UserColumns = ref<any[]>([]);
  let UserDatas = ref<any[]>([]);

 UserColumns.value = SearchUserColumns;







           const store = useStore();
    let DataEntityState = reactive(new WorkScheduleEntity());
   
  const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
    const route = useRoute();
    const router = useRouter();

    const formState = reactive({
      workScheduleName: "",
      workScheduleNo: "",
    });
    const goBackBtn = () => {
      router.push({ path: "/Home/WorkSchedulePage", query: {} });
    };

    onMounted(async() => {

 let UserDatasList = await GetUsers();

 UserDatas.value.push(...UserDatasList);








      let pageType = route.query.pageType;
      let Id = route.query.id;
      if ((pageType != undefined && pageType == "add")||pageType==undefined) {
        state.title = "新建工作计划";
        state.submitDesc = "提交计划";
          DataEntityState.EditData.initiator= store.state.USERNAME;
      }
      if (pageType != undefined && pageType == "edit") {
        state.title = "编辑工作计划";
        state.submitDesc = "更新计划";
        
    GetWorkScheduleById({ Id: Id }).then((res: any) => {
                  if (res.isSuccess) {
                   
                 DataEntityState.EditData=res.datas;
                  }
                  else
                  {
                      message.error(res.msg);
                  }
                });

      }

      console.log("Id", Id);




     
    });
  let validateWorkScheduleType = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择类型");
      } 

        return Promise.resolve();
      }
let validateUseStatus = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择状态");
      } 

        return Promise.resolve();
      }




        let validateWorkScheduleStatus = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择计划状态");
      } 

        return Promise.resolve();
      }
    const rules = {
     
      workScheduleName: [
        {
          required: true,
          message: "请输入标题",
          trigger: "blur",
        },
        {
          min: 2,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ], workScheduleType: [
        {
          required: true,
          validator: validateWorkScheduleType, 
        }
      ],
      workScheduleStatus: [
        {
          required: true,
          validator: validateWorkScheduleStatus, 
        }
      ],
       useStatus: [
        {
          required: true,
          validator: validateUseStatus, 
        }
      ],
       initiator: [
        {
          required: true,
          message: "请输入发布人",
          trigger: "blur",
        },
        {
          min: 2,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
    };
  
    const continueAdd=()=>{
       state.IsDisabled=false;
        state.IsShowSubmit=true;
    state.IsShowContinueAdd=false;
    DataEntityState.EditData.id="";
     DataEntityState.EditData.workScheduleNo= "";
     DataEntityState.EditData.workScheduleName= "";
     DataEntityState.EditData.workScheduleType="公事";
     DataEntityState.EditData.workScheduleStatus= "未开始";
     //DataEntityState.EditData.initiator= "";
     DataEntityState.EditData.workScheduleDesc="";
     DataEntityState.EditData.startTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.noticeType="";
     DataEntityState.EditData.noticeTypeArray=[];
     DataEntityState.EditData.remarkDesc="",
     DataEntityState.EditData.useStatus="启用",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
    }

    const handleFinish = async (values: any) => {
 console.log(values)
  state.spinning = !state.spinning;
 let pageType = route.query.pageType;
     console.log("pageType",pageType);
    values.startTimeStr=  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0);
      if ((pageType != undefined && pageType == "add")||pageType==undefined) {
    
 AddWorkSchedule(values).then((res: any) => {
        console.log(res);
        if (res.isSuccess) {
        
          message.success(res.msg);


 

 //router.push({ path: "/Home/WorkSchedulePage", query: {} });
  state.IsDisabled=true;
 state.IsShowSubmit=false;
    state.IsShowContinueAdd=true;

        } else {
          message.error("添加失败.");
        }
         state.spinning = !state.spinning;
      });
     
   
     
     }
      if (pageType != undefined && pageType == "edit") {
        //UpdateorkSchedule



      DataEntityState.EditData.startTimeStr=  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(DataEntityState.EditData.startTimeStr),0);
UpdateWorkSchedule(DataEntityState.EditData).then((res: any) => {
        console.log(res);
        if (res.isSuccess) {
        
          message.success(res.msg);


      DataEntityState.EditData.id="";
     DataEntityState.EditData.workScheduleNo= "";
     DataEntityState.EditData.workScheduleName= "";
     DataEntityState.EditData.workScheduleType="未选择";
     DataEntityState.EditData.workScheduleStatus= "未选择";
     DataEntityState.EditData.initiator= "";
     DataEntityState.EditData.workScheduleDesc="";
     DataEntityState.EditData.startTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.noticeType="";
     DataEntityState.EditData.noticeTypeArray=[];
     DataEntityState.EditData.remarkDesc="",
     DataEntityState.EditData.useStatus="未选择",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];

  router.push({ path: "/Home/WorkSchedulePage", query: {} });



        } else {
          message.error(res.msg);
        }
         state.spinning = !state.spinning;
      });
      }


 


    };
 const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
       visibleSearchModal.value = true;
         modalTitleSearchModal.value= "【信息搜索】";
      // console.log('or use this.value', value.value);
    };
    let  addStepsFunc=(item:any)=>{
  CloseConfigSearchModal();
  
item.forEach((i:any)=>{
  console.log('or use this.value', i);
   DataEntityState.EditData.initiator= i.name;
  
})
}

    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      goBackBtn,
      rules,
      handleFinish,layout,continueAdd,
      visibleSearchModal ,
   modalTitleSearchModal,

CloseConfigSearchModal

,UserColumns,UserDatas,onSearch,addStepsFunc
    };
  },
});
</script>

<style  scoped>
.mainWSContent {
  box-sizing: border-box;
  border: 1px solid rgba(204, 204, 204, 0.644);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
  height: calc(100vh - 92px);
  overflow: auto;
}

.mainWSContent .col {
  line-height: 30px;
}
.mainWSContent .col span {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 16px;
}

.mainWSContent .title {
  text-align: center;
  line-break: 40px;
  font-size: 22px;
  font-weight: 600;
  color: rgba(51, 108, 161, 0.774);
}

.mainWSContent .addRedStar:after {
  content: "*";
  color: red;
  font-size: 18px;
}
</style>