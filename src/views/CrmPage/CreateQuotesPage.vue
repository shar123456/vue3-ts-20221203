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
            <a-button  @click="goBackBtn">返回报价单列表</a-button></a-col
          >
        </a-row>
        <a-row style="height: 15px"></a-row>






        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="报价单" name="quoteCode">
              <a-input
              :disabled="IsDisabledQuotesCode"
               
                v-model:value="EditData.quoteCode"
                placeholder="请输入报价单"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="报价单行项" name="quoteItem">
              <a-input
              :disabled="IsDisabledQuotesCode"
                v-model:value="EditData.quoteItem"
                placeholder="请输入报价单行项"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <!-- <a-form-item label="产品名称" name="productCode">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.productCode"
                placeholder="请输入产品名称"
              />
            </a-form-item> -->
             <a-form-item label="产品编号" name="productCode">
           

              <a-input-search
                :disabled="IsDisabled"
                v-model:value="EditData.productCode"
                placeholder="请输入产品编号"
                enter-button
                @search="onSearch"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <!-- <a-form-item label="客户名称" name="customerCode">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.customerCode"
                placeholder="请输入客户名称"
              />
            </a-form-item> -->


            <a-form-item label="客户编号" name="customerCode">
           

           <a-input-search
             :disabled="IsDisabled"
             v-model:value="EditData.customerCode"
             placeholder="请输入客户编号"
             enter-button
             @search="onSearch_Customer"
           />
         </a-form-item>

          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>


        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            

            <a-form-item label="数量" name="quantity">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.quantity"
                placeholder="请输入数量"
              />
            </a-form-item>



            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="单价" name="unitPrice">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.unitPrice"
                placeholder="请输入单价"
              />
            </a-form-item>




          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            

            <a-form-item label="标价" name="listPrice">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.listPrice"
                placeholder="请输入标价"
              />
            </a-form-item>



            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="总金额" name="total">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.total"
                placeholder="请输入总金额"
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
            <a-form-item label="所有者" name="quoteOwner">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.quoteOwner"
                placeholder="请输入报价单所有者"
              />
            </a-form-item>
          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>





        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="报价单描述" name="quoteSubject">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.quoteSubject"
                placeholder="请输入报价单描述"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="交易描述" name="quoteDealName">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.quoteDealName"
                placeholder="请输入报价单交易描述"
              />
            </a-form-item>
          </a-col>
        </a-row>



       


       



        <a-row style="height: 0px"></a-row>



        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="联系人ID" name="contactID">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.contactID"
                placeholder="请输入联系人ID"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
           


            <a-form-item label="报价单状态" name="quoteState">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.quoteState"
                style="width: 100%"
                placeholder="请选择报价单状态"
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
            <a-form-item label="开始日期" name="validitySdateStr">
              <a-date-picker
                :disabled="IsDisabled"
                style="width: 100%"
                format="YYYY-MM-DD HH:mm:ss"
                v-model:value="EditData.validitySdateStr"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="截止日期" name="validityEdateStr">
              <a-date-picker
                :disabled="IsDisabled"
                style="width: 100%"
                format="YYYY-MM-DD HH:mm:ss"
                v-model:value="EditData.validityEdateStr"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>


        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="售达方" name="carrier">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.carrier"
                placeholder="请输入售达方"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="送达方" name="shipping">
              <a-input
            
               :disabled="IsDisabled"
                v-model:value="EditData.shipping"
                placeholder="请输入送达方"
              />
            </a-form-item>


          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="账单地址" name="billAddress">
              <a-input
            :disabled="IsDisabled"
               
                v-model:value="EditData.billAddress"
                placeholder="请输入账单地址"
              />
            </a-form-item>


           





            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            

            <a-form-item label="账单省份" name="billProvince">
              <a-input
            :disabled="IsDisabled"
               
                v-model:value="EditData.billProvince"
                placeholder="请输入账单省份"
              />
            </a-form-item>




          </a-col>
        </a-row>



        <a-row style="height: 0px"></a-row>







        <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

    <a-form-item label="账单城市" name="billCity">
      <a-input
    
       :disabled="IsDisabled"
        v-model:value="EditData.billCity"
        placeholder="请输入账单城市"
      />
    </a-form-item>
    
  </a-col>
  <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
    <a-form-item label="账单邮编" name="billPostalCode">
      <a-input
      :disabled="IsDisabled"
        v-model:value="EditData.billPostalCode"
        placeholder="账单邮编"
      />
    </a-form-item>
  </a-col>
</a-row>



<a-row style="height: 0px"></a-row>


<a-row type="flex" justify="center">
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

    <a-form-item label="收货地址" name="shipAddress">
      <a-input
    :disabled="IsDisabled"
       
        v-model:value="EditData.shipAddress"
        placeholder="请输入收货地址"
      />
    </a-form-item>
    
  </a-col>
  <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
    <a-form-item label="收货省份" name="shipProvince">
      <a-input
      :disabled="IsDisabled"
        v-model:value="EditData.shipProvince"
        placeholder="收货省份"
      />
    </a-form-item>
  </a-col>
</a-row>



<a-row style="height: 0px"></a-row>
<a-row type="flex" justify="center">
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

    <a-form-item label="收货城市" name="shipCity">
      <a-input
    
       :disabled="IsDisabled"
        v-model:value="EditData.shipCity"
        placeholder="请输入收货城市"
      />
    </a-form-item>
    
  </a-col>
  <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
  <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
    <a-form-item label="收货邮编" name="shipPostalCode">
      <a-input
      :disabled="IsDisabled"
        v-model:value="EditData.shipPostalCode"
        placeholder="收货邮编"
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
  

<SearchCommonModal
    :visibleModelConfigGrid="visibleSearchModal"
    :modalTitleConfigGrid="modalTitleSearchModal"
    configType="SysUser"
    configName="发起人"
    @CloseConfigGridMoadl="CloseConfigSearchModal"
    :ListColumns="ProductColumns"
    :ListDatas="ProductDatas"
   @selectRowFunc="SelectProduct"
  />

  <SearchCommonModal
    :visibleModelConfigGrid="visibleSearch_Customer"
    :modalTitleConfigGrid="modalTitleSearch_Customer"
    configType="Customer"
    configName=""
    @CloseConfigGridMoadl="CloseConfigSearch_Customer"
    :ListColumns="CustomerColumns"
    :ListDatas="CustomerDatas"
   @selectRowFunc="SelectCustomer"
  />






</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { QuotesEntity } from "../../TypeInterface/ICrm/IQuotesManagement";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import { GetUsers } from "../../Request/userRequest";
import { SearchUserColumns ,SearchProductColumns,SearchCustomerColumns} from "../../TypeInterface/ISearchDataModalInterface";
 import {dateFormat} from '../../utility/commonFunc'
 import {
  ExaminationFlowEntity,ExaminationFlowColumns
} from "../../TypeInterface/IExaminationInterface";
import {
  AddQuotes,UpdateQuotes,GetQuotesById
} from "../../Request/CrmRequest/QuotesManagementRequest";
import {
 GetProductManagementDatas
} from "../../Request/CrmRequest/ProductManagementRequest";
import {
 GetCustomerManagementDatas
} from "../../Request/CrmRequest/CustomerManagementRequest";
 import { useStore } from "vuex";
 import { message, Modal } from "ant-design-vue";
   import type { FormInstance } from 'ant-design-vue';
   import dayjs, { Dayjs } from 'dayjs';
   import SearchCommonModal from "../../components/SearchCommonModal.vue";
export default defineComponent({
  components: { UploadOutlined,SearchCommonModal },
  setup() {
    const state = reactive({
      count: 0,
      spinning: false,
      delayTime: 1,
      IsDisabled: false,
      IsShowSubmit: true,
      IsShowContinueAdd: false,
       title: "新建报价",
      submitDesc: "提交",
      IsDisabledQuotesCode: true,
    });
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
       const goBackBtn = () => {
      router.push({ path: "/Home/QuotesManagementPage", query: {} });
    };
    const route = useRoute();
    const router = useRouter();
      const store = useStore();
    let DataEntityState = reactive(new QuotesEntity());

/***产品搜索配置 */

    let visibleSearchModal = ref<boolean>(false);
    let modalTitleSearchModal = ref<string>("");
  let ProductColumns = ref<any[]>([]);
    let ProductDatas = ref<any[]>([]);

    ProductColumns.value = SearchProductColumns;
    const CloseConfigSearchModal = () => {
      visibleSearchModal.value = false;
      modalTitleSearchModal.value = "";
    };

 const onSearch = (searchValue: string) => {
   
      visibleSearchModal.value = true;
      modalTitleSearchModal.value = "【产品信息搜索】";
     
    };

 let SelectProduct = (item: any) => {
      CloseConfigSearchModal();
 console.log("SelectProduct", item);
      item.forEach((i: any) => {
       // console.log("or use this.value", i);
        DataEntityState.EditData.productCode = i.productCode;
      });
    };

/***产品搜索配置 */
/***客户搜索配置 */

let visibleSearch_Customer = ref<boolean>(false);
    let modalTitleSearch_Customer = ref<string>("");
  let CustomerColumns = ref<any[]>([]);
    let CustomerDatas = ref<any[]>([]);

    CustomerColumns.value = SearchCustomerColumns;
    const CloseConfigSearch_Customer = () => {
      visibleSearch_Customer.value = false;
      modalTitleSearch_Customer.value = "";
    };

 const onSearch_Customer = (searchValue: string) => {
   
      visibleSearch_Customer.value = true;
      modalTitleSearch_Customer.value = "【客户信息搜索】";
     
    };

 let SelectCustomer = (item: any) => {
      CloseConfigSearch_Customer();
 
      item.forEach((i: any) => {
    
        DataEntityState.EditData.customerCode = i.customerCode;
      });
    };

/***客户搜索配置 */

  

    onMounted(async () => {
     let  ProductQueryConditionInfo:any={
           
            productName: "",
            productCode: "",
        
            productCategory: "未选择",
          
          }
 let ProductDatasList = await GetProductManagementDatas({
        current: 1,
        pageSize: 200,
        ...ProductQueryConditionInfo,
      });

      ProductDatas.value.push(...ProductDatasList.datas);
console.log("ProductDatas",ProductDatas.value)

let  CustomerQueryConditionInfo:any={
           
  customerCode: "",
          customername: "",
        
          industry: "",
        
          phone:"",
         
         }
let CustomerDatasList = await GetCustomerManagementDatas({
       current: 1,
       pageSize: 200,
       ...CustomerQueryConditionInfo,
     });

     CustomerDatas.value.push(...CustomerDatasList.datas);







      let pageType = route.query.pageType;
      let Id = route.query.id;
      if ((pageType != undefined && pageType == "add")||pageType==undefined) {
        state.title = "新建报价";
        state.submitDesc = "提交";
         
      }
      if (pageType != undefined && pageType == "edit") {
        state.title = "编辑报价";
        state.submitDesc = "更新";
         state.IsDisabledQuotesCode=true;
        GetQuotesById({ Id: Id }).then((res: any) => {
                  if (res.isSuccess) {
                 
                 DataEntityState.EditData=res.datas;
                 DataEntityState.EditData.validitySdateStr=  dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(DataEntityState.EditData.validitySdateStr),0),"YYYY-MM-DD HH:mm:ss");
                 DataEntityState.EditData.validityEdateStr=  dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(DataEntityState.EditData.validityEdateStr),0),"YYYY-MM-DD HH:mm:ss");
                  }
                  else
                  {
                      message.error(res.msg);
                  }
                });

      }

      console.log("Id", Id);


    });



    



    



    const rules = {
      productCode: [
        {
          required: true,
          message: "请输入产品编号",
          trigger: "blur",
        },
        {
          min: 1,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
      
      customerCode: [
        {
          required: true,
          message: "请输入客户编号",
          trigger: "blur",
        },
        {
          min: 1,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
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
    
        AddQuotes(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
   
    
   
    //router.push({ path: "/Home/WorkSchedulePage", query: {} });
     state.IsDisabled=true;
    state.IsShowSubmit=false;
       state.IsShowContinueAdd=true;
      state.IsDisabledQuotesCode=true;
           } else {
             message.error("添加失败.");
           }
            state.spinning = !state.spinning;
         });
        
      
        
        }
         if (pageType != undefined && pageType == "edit") {
           //UpdateorkSchedule
   
   
   
         //DataEntityState.EditData.startTimeStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0),"YYYY-MM-DD HH:mm:ss");
   UpdateQuotes(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
             if(DataEntityState.EditData!=undefined)
             {


              DataEntityState.EditData.id="";
     DataEntityState.EditData.quoteCode= "";
     DataEntityState.EditData.quoteItem= "";
     DataEntityState.EditData.productCode="";
     DataEntityState.EditData.customerCode= "";
    

  
     DataEntityState.EditData.quantity=0;
     DataEntityState.EditData.unitPrice=0;
     DataEntityState.EditData.listPrice=0;
     DataEntityState.EditData.total=0;
     
     DataEntityState.EditData.currency="人民币";
     DataEntityState.EditData.quoteOwner="";
     DataEntityState.EditData.quoteSubject="";
     DataEntityState.EditData.quoteDealName="";
     DataEntityState.EditData.validitySdateStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss");
  
     DataEntityState.EditData.validityEdateStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss");



     DataEntityState.EditData.contactID="",

 
     DataEntityState.EditData.carrier="",
     DataEntityState.EditData.shipping="",
     DataEntityState.EditData.quoteSource="",

     DataEntityState.EditData.quoteState="启用",
     DataEntityState.EditData.billAddress="",
     DataEntityState.EditData.billProvince="",
     DataEntityState.EditData.billCity="",
     DataEntityState.EditData.billPostalCode="",


     DataEntityState.EditData.shipAddress="",
     DataEntityState.EditData.shipProvince="",
     DataEntityState.EditData.shipCity="",
     DataEntityState.EditData.shipPostalCode="",
   
         
     DataEntityState.EditData.remark="",
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
             }
             
   
     router.push({ path: "/Home/QuotesManagementPage", query: {} });
   
   
   
           } else {
             message.error(res.msg);
           }
            state.spinning = !state.spinning;
         });
         }
   









       
    };
  
    const continueAdd=()=>{
       state.IsDisabled=false;
         state.IsDisabledQuotesCode=true;
       
        state.IsShowSubmit=true;
    state.IsShowContinueAdd=false;

    if(DataEntityState.EditData!=undefined)
             {
              DataEntityState.EditData.id="";
     DataEntityState.EditData.quoteCode= "";
     DataEntityState.EditData.quoteItem= "";
     DataEntityState.EditData.productCode="";
     DataEntityState.EditData.customerCode= "";
    

  
     DataEntityState.EditData.quantity=0;
     DataEntityState.EditData.unitPrice=0;
     DataEntityState.EditData.listPrice=0;
     DataEntityState.EditData.total=0;
     
     DataEntityState.EditData.currency="人民币";
     DataEntityState.EditData.quoteOwner="";
     DataEntityState.EditData.quoteSubject="";
     DataEntityState.EditData.quoteDealName="";
     DataEntityState.EditData.validitySdateStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss");
  
     DataEntityState.EditData.validityEdateStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),"YYYY-MM-DD HH:mm:ss");



     DataEntityState.EditData.contactID="",

 
     DataEntityState.EditData.carrier="",
     DataEntityState.EditData.shipping="",
     DataEntityState.EditData.quoteSource="",

     DataEntityState.EditData.quoteState="启用",
     DataEntityState.EditData.billAddress="",
     DataEntityState.EditData.billProvince="",
     DataEntityState.EditData.billCity="",
     DataEntityState.EditData.billPostalCode="",


     DataEntityState.EditData.shipAddress="",
     DataEntityState.EditData.shipProvince="",
     DataEntityState.EditData.shipCity="",
     DataEntityState.EditData.shipPostalCode="",
   
         
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
     
     

    
      continueAdd,


      ProductColumns,
      ProductDatas,
onSearch,SelectProduct,
      visibleSearchModal,modalTitleSearchModal,CloseConfigSearchModal,


      CustomerColumns,
      CustomerDatas,
onSearch_Customer,SelectCustomer,
      visibleSearch_Customer,modalTitleSearch_Customer,CloseConfigSearch_Customer,

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