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
            <a-button  @click="goBackBtn">返回客户列表</a-button></a-col
          >
        </a-row>
        <a-row style="height: 15px"></a-row>






        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="客户编号" name="customerCode">
              <a-input
              :disabled="IsDisabledCustomerCode"
               
                v-model:value="EditData.customerCode"
                placeholder="请输入客户编号"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="客户姓名" name="customername">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.customername"
                placeholder="请输入客户姓名"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="行业" name="industry">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.industry"
                placeholder="请输入行业"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="股票代码" name="stockCode">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.stockCode"
                placeholder="请输入股票代码"
              />
            </a-form-item>
          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>


        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            

            <a-form-item label="年收入" name="annualIncome">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.annualIncome"
                placeholder="请输入年收入"
              />
            </a-form-item>



            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="员工数量" name="employeeQty">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.employeeQty"
                placeholder="请输入员工数量"
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
            <a-form-item label="SIC码" name="sicCode">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.sicCode"
                placeholder="请输入SIC码"
              />
            </a-form-item>
          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>





        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="电话" name="phone">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.phone"
                placeholder="请输入电话"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="传真" name="fax">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.fax"
                placeholder="请输入传真"
              />
            </a-form-item>
          </a-col>
        </a-row>



       


       



        <a-row style="height: 0px"></a-row>



        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="电邮" name="email">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.email"
                placeholder="请输入电邮"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
           


            <a-form-item label="邮件免打扰" name="emailNoDisturb">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.emailNoDisturb"
                style="width: 100%"
                placeholder="请选择邮件免打扰"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="是"
                  >是</a-select-option
                >
                <a-select-option value="否">否</a-select-option>
             
               
              </a-select>
            </a-form-item>



          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>




        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="网站" name="webSite">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.webSite"
                placeholder="请输入网站"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

           
            <a-form-item label="客户状态" name="customerState">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.customerState"
                style="width: 100%"
                placeholder="请选择客户状态"
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

           


            <a-form-item label="评级" name="rate">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.rate"
                style="width: 100%"
                placeholder="请选择评级"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="Level1"
                  >Level1</a-select-option
                >
                <a-select-option value="Level2">Level2</a-select-option>
                <a-select-option value="Level3">Level3</a-select-option>
                <a-select-option value="Level4">Level4</a-select-option>
            
               
              </a-select>
            </a-form-item>





            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="第二电邮" name="secondEmail">
              <a-input
            :disabled="IsDisabled"
               
                v-model:value="EditData.secondEmail"
                placeholder="请输入第二电邮"
              />
            </a-form-item>




          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>







        <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

    <a-form-item label="地址" name="address">
      <a-input
    
       :disabled="IsDisabled"
        v-model:value="EditData.address"
        placeholder="请输入地址"
      />
    </a-form-item>
    
  </a-col>
  <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
    <a-form-item label="省份" name="province">
      <a-input
      :disabled="IsDisabled"
        v-model:value="EditData.province"
        placeholder="省份"
      />
    </a-form-item>
  </a-col>
</a-row>



<a-row style="height: 0px"></a-row>


<a-row type="flex" justify="center">
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

    <a-form-item label="城市" name="city">
      <a-input
    :disabled="IsDisabled"
       
        v-model:value="EditData.city"
        placeholder="请输入城市"
      />
    </a-form-item>
    
  </a-col>
  <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
    <a-form-item label="邮政编码" name="postalCode">
      <a-input
      :disabled="IsDisabled"
        v-model:value="EditData.postalCode"
        placeholder="邮政编码"
      />
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
import { CustomerEntity } from "../../TypeInterface/ICrm/ICustomerManagement";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import { GetUsers } from "../../Request/userRequest";
import { SearchUserColumns ,SearchFlowColumns} from "../../TypeInterface/ISearchDataModalInterface";
 import {dateFormat} from '../../utility/commonFunc'
 import {
  ExaminationFlowEntity,ExaminationFlowColumns
} from "../../TypeInterface/IExaminationInterface";
import {
  AddCustomer,UpdateCustomer,GetCustomerById
} from "../../Request/CrmRequest/CustomerManagementRequest";
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
       title: "新建客户",
      submitDesc: "提交",
      IsDisabledCustomerCode: true,
    });
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
       const goBackBtn = () => {
      router.push({ path: "/Home/CustomerManagementPage", query: {} });
    };
    const route = useRoute();
    const router = useRouter();
      const store = useStore();
    let DataEntityState = reactive(new CustomerEntity());

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
        state.title = "新建客户";
        state.submitDesc = "提交";
         
      }
      if (pageType != undefined && pageType == "edit") {
        state.title = "编辑客户";
        state.submitDesc = "更新";
         state.IsDisabledCustomerCode=true;
        GetCustomerById({ Id: Id }).then((res: any) => {
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

   

    let validateCustomerState = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择客户状态");
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
      
      CustomerState: [
        {
          required: true,
          validator: validateCustomerState,
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
    
        AddCustomer(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
   
    
   
    //router.push({ path: "/Home/WorkSchedulePage", query: {} });
     state.IsDisabled=true;
    state.IsShowSubmit=false;
       state.IsShowContinueAdd=true;
      state.IsDisabledCustomerCode=true;
           } else {
             message.error("添加失败.");
           }
            state.spinning = !state.spinning;
         });
        
      
        
        }
         if (pageType != undefined && pageType == "edit") {
           //UpdateorkSchedule
   
   
   
         //DataEntityState.EditData.startTimeStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0),"YYYY-MM-DD HH:mm:ss");
   UpdateCustomer(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
             if(DataEntityState.EditData!=undefined)
             {
              DataEntityState.EditData.id="";
     DataEntityState.EditData.clueCode= "";
     DataEntityState.EditData.customerCode= "";
     DataEntityState.EditData.customername="";
     DataEntityState.EditData.stockCode= "";
    
     DataEntityState.EditData.industry="人民币";
  
     DataEntityState.EditData.annualIncome=0;
     DataEntityState.EditData.employeeQty=0;
     DataEntityState.EditData.currency="";
     DataEntityState.EditData.sicCode="";
     
     DataEntityState.EditData.phone="";
     DataEntityState.EditData.fax="";
     DataEntityState.EditData.email="";
     DataEntityState.EditData.emailNoDisturb="否"
  
     DataEntityState.EditData.secondEmail="",
     DataEntityState.EditData.webSite="",

 
     DataEntityState.EditData.customerSource="",
     DataEntityState.EditData.customerState="启用",
     DataEntityState.EditData.rate="Level1",

     DataEntityState.EditData.address="",
     DataEntityState.EditData.province="",
     DataEntityState.EditData.city="",
     DataEntityState.EditData.postalCode="",
     DataEntityState.EditData.remark="",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
             }
             
   
     router.push({ path: "/Home/CustomerManagementPage", query: {} });
   
   
   
           } else {
             message.error(res.msg);
           }
            state.spinning = !state.spinning;
         });
         }
   









       
    };
  
    const continueAdd=()=>{
       state.IsDisabled=false;
         state.IsDisabledCustomerCode=true;
       
        state.IsShowSubmit=true;
    state.IsShowContinueAdd=false;

    if(DataEntityState.EditData!=undefined)
             {
              DataEntityState.EditData.id="";
     DataEntityState.EditData.clueCode= "";
     DataEntityState.EditData.customerCode= "";
     DataEntityState.EditData.customername="";
     DataEntityState.EditData.stockCode= "";
    
     DataEntityState.EditData.industry="人民币";
  
     DataEntityState.EditData.annualIncome=0;
     DataEntityState.EditData.employeeQty=0;
     DataEntityState.EditData.currency="";
     DataEntityState.EditData.sicCode="";
     
     DataEntityState.EditData.phone="";
     DataEntityState.EditData.fax="";
     DataEntityState.EditData.email="";
     DataEntityState.EditData.emailNoDisturb="否"
  
     DataEntityState.EditData.secondEmail="",
     DataEntityState.EditData.webSite="",

 
     DataEntityState.EditData.customerSource="",
     DataEntityState.EditData.customerState="启用",
     DataEntityState.EditData.rate="Level1",

     DataEntityState.EditData.address="",
     DataEntityState.EditData.province="",
     DataEntityState.EditData.city="",
     DataEntityState.EditData.postalCode="",
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