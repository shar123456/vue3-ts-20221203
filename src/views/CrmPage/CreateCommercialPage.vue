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
       
        v-bind="layout"
      >



      <a-row style="height: 2px"></a-row>
  <a-row type="flex" justify="start">
          <a-col class="col" :span="24" style="text-align:left">
            <a-button v-show="IsShowSubmit" type="primary" @click="handleFinishBtn">{{
              submitDesc
            }}</a-button
            >&nbsp;
             
             <a-button  style="background-color: #CAB872; border-color: #CAB872" type="primary"   v-show="IsShowContinueAdd" @click="continueAdd">继续创建</a-button>  &nbsp;
            <a-button  @click="goBackBtn">返回商机列表</a-button></a-col
          >
        </a-row>
        <a-row style="height: 15px"></a-row>






        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="商机编号" name="commercialCode">
              <a-input
              :disabled="IsDisabledCommercialCode"
               
                v-model:value="EditData.commercialCode"
                placeholder="请输入商机编号"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="商机名称" name="commercialName">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.commercialName"
                placeholder="请输入商机名称"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="客户编号" name="customerCode">
              <a-input
            
               
                v-model:value="EditData.customerCode"
                placeholder="请输入客户编号"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="客户名称" name="customername">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.customername"
                placeholder="请输入客户名称"
              />
            </a-form-item>
          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>


        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            

            <a-form-item label="预期收入" name="prospectionIncome">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.prospectionIncome"
                placeholder="请输入预期收入"
              />
            </a-form-item>



            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="金额" name="amount">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.amount"
                placeholder="请输入金额"
              />
            </a-form-item>




          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>







        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="货币" name="currency">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.currency"
                style="width: 100%"
                placeholder="请选择货币"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="人民币"
                  >人民币</a-select-option
                >
                <a-select-option value="欧元">欧元</a-select-option>
                <a-select-option value="英镑">英镑</a-select-option>
                <a-select-option value="港元">港元</a-select-option>
                <a-select-option value="日元">日元</a-select-option>
                <a-select-option value="美元">美元</a-select-option>
              </a-select>
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
           


            <a-form-item label="商机类型" name="commercialType">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.commercialType"
                style="width: 100%"
                placeholder="请选择商机类型"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="已有业务"
                  >已有业务</a-select-option
                >
                <a-select-option value="新业务">新业务</a-select-option>
             
               
              </a-select>
            </a-form-item>








          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>





        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="联系人" name="contactName">
              <a-input
            
               
                v-model:value="EditData.contactName"
                placeholder="请输入联系人"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="概率" name="probability">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.probability"
                placeholder="请输入概率"
              />
            </a-form-item>
          </a-col>
        </a-row>



       


       


        <a-row style="height: 0px"></a-row>




        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

           


            <a-form-item label="阶段" name="commercialStage">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.commercialStage"
                style="width: 100%"
                placeholder="请输入阶段"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="资质审查"
                  >资质审查</a-select-option
                >
                <a-select-option value="价值建议">价值建议</a-select-option>
                <a-select-option value="确定决策者">确定决策者</a-select-option>
                <a-select-option value="提案/报价">提案/报价</a-select-option>
                <a-select-option value="谈判/复审">谈判/复审</a-select-option>
                <a-select-option value="赢单关闭">赢单关闭</a-select-option>
                <a-select-option value="丢单关闭">丢单关闭</a-select-option>
                <a-select-option value="因竞争丢单关闭">因竞争丢单关闭</a-select-option>
              </a-select>
            </a-form-item>







          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

           
            <a-form-item label="商机状态" name="commercialState">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.commercialState"
                style="width: 100%"
                placeholder="请选择商机状态"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="启用"
                  >启用</a-select-option
                >
                <a-select-option value="禁用">禁用</a-select-option>
             
               
              </a-select>
            </a-form-item>



          </a-col>
        </a-row>



       








<a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="备注" name="remark">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.remark" placeholder="请输入备注" :rows="4"
        />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
           
          </a-col>
        </a-row>




     

       

       



 
 <a-row style="height: 0px"></a-row>








 

      </a-form>

     

    
    

      
    </div>
  </div>
  </a-spin>
  
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { CommercialEntity } from "../../TypeInterface/ICrm/ICommercialManagement";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import { GetUsers } from "../../Request/userRequest";
import { SearchUserColumns ,SearchFlowColumns} from "../../TypeInterface/ISearchDataModalInterface";
 import {dateFormat} from '../../utility/commonFunc'
 import {
  ExaminationFlowEntity,ExaminationFlowColumns
} from "../../TypeInterface/IExaminationInterface";
import {
  AddCommercial,UpdateCommercial,GetCommercialById
} from "../../Request/CrmRequest/CommercialManagementRequest";
 import { useStore } from "vuex";
 import { message, Modal } from "ant-design-vue";
   import type { FormInstance } from 'ant-design-vue';
   import dayjs, { Dayjs } from 'dayjs';
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
       title: "新建商机",
      submitDesc: "提交",
      IsDisabledCommercialCode: false,
    });
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
       const goBackBtn = () => {
      router.push({ path: "/Home/CommercialManagementPage", query: {} });
    };
    const route = useRoute();
    const router = useRouter();
      const store = useStore();
    let DataEntityState = reactive(new CommercialEntity());

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
      
      let pageType = route.query.pageType;
      let Id = route.query.id;
      if ((pageType != undefined && pageType == "add")||pageType==undefined) {
        state.title = "新建商机";
        state.submitDesc = "提交";
         
      }
      if (pageType != undefined && pageType == "edit") {
        state.title = "编辑商机";
        state.submitDesc = "更新";
         state.IsDisabledCommercialCode=true;
        GetCommercialById({ Id: Id }).then((res: any) => {
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



    

    let validaterate = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择评级");
      }

      return Promise.resolve();
    };

   

    let validateCommercialState = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择商机状态");
      }

      return Promise.resolve();
    };


    



    const rules = {
      customername: [
        {
          required: true,
          message: "请输入客户姓名",
          trigger: "blur",
        },
        {
          min: 1,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
      commercialName: [
        {
          required: true,
          message: "请输入商机姓名",
          trigger: "blur",
        },
        {
          min: 1,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
      CommercialState: [
        {
          required: true,
          validator: validateCommercialState,
        },
      ],
      rate: [
        {
          required: true,
          validator: validaterate,
        },
      ],
    };
         const formRef = ref<FormInstance>();
    const handleFinishBtn = async (values: any) => {
      //console.log(values);

        var doMark=true;
   try{
 const values1 = await formRef.value?.validateFields();
   }
   catch (e:any){
     if(e.errorFields&&e.errorFields.length>0)
     {
      doMark=false;
     }
   }

 if(!doMark){
  return;
 }
     state.spinning = !state.spinning;
      let pageType = route.query.pageType; 
      //console.log("pageType", pageType);

  
      if ((pageType != undefined && pageType == "add")||pageType==undefined) {
    
        AddCommercial(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
   
    
   
    //router.push({ path: "/Home/WorkSchedulePage", query: {} });
     state.IsDisabled=true;
    state.IsShowSubmit=false;
       state.IsShowContinueAdd=true;
      state.IsDisabledCommercialCode=true;
           } else {
             message.error("添加失败.");
           }
            state.spinning = !state.spinning;
         });
        
      
        
        }
         if (pageType != undefined && pageType == "edit") {
           //UpdateorkSchedule
   
   
   
         //DataEntityState.EditData.startTimeStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0),"YYYY-MM-DD HH:mm:ss");
   UpdateCommercial(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
             if(DataEntityState.EditData!=undefined)
             {
              DataEntityState.EditData.id="";
     DataEntityState.EditData.clueCode= "";
     DataEntityState.EditData.customerCode= "";
     DataEntityState.EditData.customername="";
     DataEntityState.EditData.commercialName= "";
    
     DataEntityState.EditData.commercialCode="";
  
     DataEntityState.EditData.prospectionIncome=0;
     DataEntityState.EditData.amount=0;
     DataEntityState.EditData.currency="人民币";
     DataEntityState.EditData.commercialType="未选择";
     
     DataEntityState.EditData.commercialSource="";
     DataEntityState.EditData.contactName="";
     DataEntityState.EditData.commercialState="启用",
     DataEntityState.EditData.probability="";
     DataEntityState.EditData.commercialStage="未选择"
  
     DataEntityState.EditData.clueCode="",
    
     DataEntityState.EditData.remark="",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
             }
             
   
     router.push({ path: "/Home/CommercialManagementPage", query: {} });
   
   
   
           } else {
             message.error(res.msg);
           }
            state.spinning = !state.spinning;
         });
         }
   









       
    };
  
    const continueAdd=()=>{
       state.IsDisabled=false;
        state.IsDisabledCommercialCode=false;
       
        state.IsShowSubmit=true;
    state.IsShowContinueAdd=false;

    if(DataEntityState.EditData!=undefined)
             {
              DataEntityState.EditData.id="";
     DataEntityState.EditData.clueCode= "";
     DataEntityState.EditData.customerCode= "";
     DataEntityState.EditData.customername="";
     DataEntityState.EditData.commercialName= "";
    
     DataEntityState.EditData.commercialCode="";
  
     DataEntityState.EditData.prospectionIncome=0;
     DataEntityState.EditData.amount=0;
     DataEntityState.EditData.currency="人民币";
     DataEntityState.EditData.commercialType="未选择";
     
     DataEntityState.EditData.commercialSource="";
     DataEntityState.EditData.contactName="";
     DataEntityState.EditData.commercialState="启用",
     DataEntityState.EditData.probability="";
     DataEntityState.EditData.commercialStage="未选择"
  
     DataEntityState.EditData.clueCode="",
    
     DataEntityState.EditData.remark="",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
             }
             







    }

    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      rules,formRef,
      handleFinishBtn,goBackBtn,
      layout,
     
      visibleSearchModal,
      modalTitleSearchModal,

      CloseConfigSearchModal,

      UserColumns,
      UserDatas,
      continueAdd,
       visibleSearchModal_FlowNo,
      modalTitleSearchModal_FlowNo,

      CloseConfigSearchModal_FlowNo,  FlowColumns,FlowDatas
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