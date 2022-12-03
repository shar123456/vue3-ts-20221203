<template>
<a-spin :spinning="spinning" >
  <div class="mainSpContent">
    <div style="padding: 5px">
      <a-row>
        <a-col :span="24" class="title">{{title}}</a-col>
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
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="任务编号" name="examNo">
              <a-input
                disabled="true"
                v-model:value="EditData.examTaskNo"
                placeholder="请输入任务编号"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="审批标题" name="examName">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.examName"
                placeholder="请输入审批标题"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="审批类型" name="examType">
              <a-select
                v-model:value="EditData.examType"
                style="width: 100%"
                placeholder="请选择审批类型"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="账户权限审批"
                  >账户权限审批</a-select-option
                >
                <a-select-option value="请假审批">请假审批</a-select-option>
                <a-select-option value="基本审批">基本审批</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="紧急程度" name="emergencyLevel">
              <a-select
                v-model:value="EditData.emergencyLevel"
                style="width: 100%"
                placeholder="请选择紧急程度"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="低">低</a-select-option>
                <a-select-option value="中">中</a-select-option>
                <a-select-option value="高">高</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="开始时间" name="startTimeStr">
              <a-date-picker
                :disabled="IsDisabled"
                style="width: 100%"
                format="YYYY-MM-DD HH:mm:ss"
                v-model:value="EditData.startTimeStr"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="结束时间" name="endTimeStr">
              <a-date-picker
                :disabled="IsDisabled"
                style="width: 100%"
                format="YYYY-MM-DD HH:mm:ss"
                v-model:value="EditData.endTimeStr"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
          


            <a-form-item label="审批流程" name="flowNo">
              <!-- <a-input v-model:value="EditData.initiator" placeholder="请输入发布人" /> -->

              <a-input-search
                :disabled="IsDisabled"
                v-model:value="EditData.flowNo"
                placeholder="请输入审批流程"
                enter-button
                @search="onFlowNoSearch"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="发起人" name="initiator">
              <!-- <a-input v-model:value="EditData.initiator" placeholder="请输入发布人" /> -->

              <a-input-search
                :disabled="IsDisabled"
                v-model:value="EditData.initiator"
                placeholder="请输入发起人"
                enter-button
                @search="onSearch"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
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
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
             <a-form-item label="上传文件" name="noticeTypeArray">
               <div style="width: 100%">
            <a-upload
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <a-button type="primary">
                <upload-outlined style="color: white"></upload-outlined>
                点击选择文件
              </a-button>
            </a-upload>
          </div>
             </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>


<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="内容描述" name="taskDesc">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.taskDesc" placeholder="请输入内容描述" :rows="4"
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
              <a-button html-type="submit" type="primary">保存草稿</a-button>&nbsp;
             <a-button  style="background-color: #CAB872; border-color: #CAB872" type="primary"   v-show="IsShowContinueAdd" @click="continueAdd">继续创建</a-button>  &nbsp;
            <a-button  @click="goBackBtn">返回任务列表</a-button></a-col
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
    configName="发起人"
    @CloseConfigGridMoadl="CloseConfigSearchModal"
    :ListColumns="UserColumns"
    :ListDatas="UserDatas"
    @addStepsFunc="addStepsFunc"
  />
    <SearchDataModal2
    :visibleModelConfigGrid="visibleSearchModal_FlowNo"
    :modalTitleConfigGrid="modalTitleSearchModal_FlowNo"
    configType="flow"
    configName="流程"
    @CloseConfigGridMoadl="CloseConfigSearchModal_FlowNo"
    :ListColumns="FlowColumns"
    :ListDatas="FlowDatas"
    @addStepsFunc="addStepsFunc_FlowNo"
  />
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { ExaminationTaskEntity } from "../../TypeInterface/IExaminationInterface";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import { GetUsers } from "../../Request/userRequest";
import { SearchUserColumns ,SearchFlowColumns} from "../../TypeInterface/ISearchDataModalInterface";
 import {dateFormat} from '../../utility/commonFunc'
 import {
  ExaminationFlowEntity,ExaminationFlowColumns
} from "../../TypeInterface/IExaminationInterface";
import {
 AddExaminationTask,GeExaminationFlow
} from "../../Request/ExaminationRequest";
 import { useStore } from "vuex";
 import { message, Modal } from "ant-design-vue";
export default defineComponent({
  components: { UploadOutlined,SearchDataModal2 },
  setup() {
    const state = reactive({
      count: 0,
      spinning: false,
      delayTime: 1,
      IsDisabled: false,
      IsShowSubmit: true,
      IsShowContinueAdd: false,
       title: "新建审批任务",
      submitDesc: "提交审批",
    });
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
       const goBackBtn = () => {
      router.push({ path: "/Home/ExaminationTaskPage", query: {} });
    };
    const route = useRoute();
    const router = useRouter();
      const store = useStore();
    let DataEntityState = reactive(new ExaminationTaskEntity());

    let visibleSearchModal = ref<boolean>(false);
    let modalTitleSearchModal = ref<string>("");

    const CloseConfigSearchModal = () => {
      visibleSearchModal.value = false;
      modalTitleSearchModal.value = "";
    };

let visibleSearchModal_FlowNo = ref<boolean>(false);
    let modalTitleSearchModal_FlowNo = ref<string>("");

    const CloseConfigSearchModal_FlowNo = () => {
      visibleSearchModal_FlowNo.value = false;
      modalTitleSearchModal_FlowNo.value = "";
    };


  let FlowColumns = ref<any[]>([]);
    let FlowDatas = ref<any[]>([]);

 FlowColumns.value = SearchFlowColumns;


    let UserColumns = ref<any[]>([]);
    let UserDatas = ref<any[]>([]);

    UserColumns.value = SearchUserColumns;

    onMounted(async () => {
      let UserDatasList = await GetUsers();
   DataEntityState.EditData.initiator= store.state.USERNAME;
      UserDatas.value.push(...UserDatasList);
      console.log(localStorage.getItem("UserName"));
        let ExaminationFlowList = await GeExaminationFlow();
 FlowDatas.value.push(...ExaminationFlowList);
    });






    let validateUseStatus = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择状态");
      }

      return Promise.resolve();
    };

    let validateExamType = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择审批类型");
      }

      return Promise.resolve();
    };


    let validateEmergencyLevel = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择紧急程度");
      }

      return Promise.resolve();
    };
let validateflowNo = async (rule: any, value: any) => {
      if (value === "未选择"||value ==="") {
        return Promise.reject("请选择审批流程");
      }

      return Promise.resolve();
    };



    const rules = {
      examName: [
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
      ],
      useStatus: [
        {
          required: true,
          validator: validateUseStatus,
        },
      ],
       examType: [
        {
          required: true,
          validator: validateExamType,
        },
      ],
       emergencyLevel: [
        {
          required: true,
          validator: validateEmergencyLevel,
        },
      ],
       flowNo: [
        {
          required: true,
          validator: validateflowNo,
        },
      ],
      initiator: [
        {
          required: true,
          message: "请输入发起人",
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
    const handleFinish = async (values: any) => {
      console.log(values);
     state.spinning = !state.spinning;
      let pageType = route.query.pageType;
      console.log("pageType", pageType);

  values.startTimeStr=  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0);
  values.endTimeStr=  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.endTimeStr),0);
let params={
   flowName: values.flowName,
   useStatus: values.useStatus,

  }
       console.log(params);
          AddExaminationTask(values).then((res: any) => {
                  if (res.isSuccess) {
                 state.spinning=false;
                    message.success(res.msg);
                      router.push({ path: "/Home/ExaminationTaskPage", query: {} });
                  }
                  else
                  {
                    message.error(res.msg);
                     state.spinning=false;
                  }
                });










       
    };
    const onSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      visibleSearchModal.value = true;
      modalTitleSearchModal.value = "【信息搜索】";
      // console.log('or use this.value', value.value);
    };
    let addStepsFunc = (item: any) => {
      CloseConfigSearchModal();

      item.forEach((i: any) => {
        console.log("or use this.value", i);
        DataEntityState.EditData.initiator = i.name;
      });
    };
  let addStepsFunc_FlowNo = (item: any) => {
      CloseConfigSearchModal_FlowNo();
console.log("or use this.value111", item);
      item.forEach((i: any) => {
        console.log("or use this.value", i);
        DataEntityState.EditData.flowNo = i.flowNo;
      });
    };

   const onFlowNoSearch = (searchValue: string) => {
      console.log("use value", searchValue);
      visibleSearchModal_FlowNo.value = true;
      modalTitleSearchModal_FlowNo.value = "【流程搜索】";
      // console.log('or use this.value', value.value);
    };



    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      rules,
      handleFinish,goBackBtn,
      layout,
      onSearch,
      visibleSearchModal,
      modalTitleSearchModal,

      CloseConfigSearchModal,

      UserColumns,
      UserDatas,
      addStepsFunc,
      onFlowNoSearch,
       visibleSearchModal_FlowNo,
      modalTitleSearchModal_FlowNo,

      CloseConfigSearchModal_FlowNo,  addStepsFunc_FlowNo,FlowColumns,FlowDatas
    };
  },
});
</script>

<style  scoped>
.mainSpContent {
  box-sizing: border-box;
  border: 1px solid rgba(204, 204, 204, 0.644);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
  height: calc(100vh - 92px);
  overflow: auto;
}

.mainSpContent .col {
  line-height: 30px;
}
.mainSpContent .col span {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 16px;
}

.mainSpContent .title {
  text-align: center;
  line-break: 40px;
  font-size: 22px;
  font-weight: 600;
  color: rgba(51, 108, 161, 0.774);
}
</style>