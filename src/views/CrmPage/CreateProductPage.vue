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
            <a-button v-show="IsShowSubmit" type="primary" @click="handleFinishBtn" >{{
              submitDesc
            }}</a-button
            >&nbsp;
             
             <a-button  style="background-color: #CAB872; border-color: #CAB872" type="primary"   v-show="IsShowContinueAdd" @click="continueAdd">继续创建</a-button>  &nbsp;
            <a-button  @click="goBackBtn">返回产品列表</a-button></a-col
          >
        </a-row>
        <a-row style="height: 15px"></a-row>






        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">

            <a-form-item label="产品代码" name="productCode">
              <a-input
              :disabled="IsDisabledproductCode"
               
                v-model:value="EditData.productCode"
                placeholder="请输入产品代码"
              />
            </a-form-item>
            
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="产品名称" name="productName">
              <a-input
              :disabled="IsDisabled"
                v-model:value="EditData.productName"
                placeholder="请输入产品名称"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="产品类别" name="productCategory">
              <a-select
               :disabled="IsDisabled"
                v-model:value="EditData.productCategory"
                style="width: 100%"
                placeholder="请选择产品类别"
              >
                <a-select-option value="未选择">未选择</a-select-option>
                <a-select-option value="光学"
                  >光学</a-select-option
                >
                <a-select-option value="精密">精密</a-select-option>
                <a-select-option value="电子">电子</a-select-option>
                <a-select-option value="高端">高端</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="单位" name="unit">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.unit"
                placeholder="请输入单位"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

        <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="需求数量" name="requidQty">
              <a-input-number style="width:100%"
                :disabled="IsDisabled"
                v-model:value="EditData.requidQty"
                placeholder="请输入需求数量"
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
          


            <a-form-item label="供应商名" name="vendorName">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.vendorName"
                placeholder="请输入供应商名"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="供应商编号" name="vendorID">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.vendorID"
                placeholder="请输入供应商编号"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row style="height: 0px"></a-row>

<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="制造厂" name="manufactory">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.manufactory"
                placeholder="请输入制造厂"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="体积" name="volume">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.volume"
                placeholder="请输入体积"
              />
            </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>



 <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="体积单位" name="volumeUnit">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.volumeUnit"
                placeholder="请输入体积单位"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="体积尺寸" name="volumeSize">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.volumeSize"
                placeholder="请输入体积尺寸"
              />
            </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>


 <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="重量" name="weight">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.weight"
                placeholder="请输入重量"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="重量单位" name="weightUnit">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.weightUnit"
                placeholder="请输入重量单位"
              />
            </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>


 <a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="毛重" name="gossWeight">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.grossWeight"
                placeholder="请输入毛重"
              />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="净重" name="netWeight">
              <a-input
                :disabled="IsDisabled"
                v-model:value="EditData.netWeight"
                placeholder="请输入净重"
              />
            </a-form-item>
          </a-col>
        </a-row>

 <a-row style="height: 0px"></a-row>







<a-row type="flex" justify="center">
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="内容描述" name="description">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.description" placeholder="请输入内容描述" :rows="4"
        />
            </a-form-item>
          </a-col>
          <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
          <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
            <a-form-item label="备注" name="description">
            <a-textarea  :disabled="IsDisabled" v-model:value="EditData.description" placeholder="请输入备注" :rows="4" />
            </a-form-item>
          </a-col>
        </a-row>
 

      </a-form>

     

    
    

      
    </div>
  </div>
  </a-spin>
  
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { ProductEntity } from "../../TypeInterface/ICrm/IProductManagement";
import SearchDataModal2 from "../../components/SearchDataModal2.vue";
import { GetUsers } from "../../Request/userRequest";
import { SearchUserColumns ,SearchFlowColumns} from "../../TypeInterface/ISearchDataModalInterface";
 import {dateFormat} from '../../utility/commonFunc'
 import {
  ExaminationFlowEntity,ExaminationFlowColumns
} from "../../TypeInterface/IExaminationInterface";
import {
  AddProduct,UpdateProduct,GetProductById
} from "../../Request/CrmRequest/ProductManagementRequest";
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
       title: "新建产品",
      submitDesc: "提交",
      IsDisabledproductCode: false,
    });
    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };
       const goBackBtn = () => {
      router.push({ path: "/Home/ProductManagementPage", query: {} });
    };
    const route = useRoute();
    const router = useRouter();
      const store = useStore();
    let DataEntityState = reactive(new ProductEntity());

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
        state.title = "新建产品";
        state.submitDesc = "提交";
         
      }
      if (pageType != undefined && pageType == "edit") {
        state.title = "编辑产品";
        state.submitDesc = "更新";
         state.IsDisabledproductCode=true;
        GetProductById({ Id: Id }).then((res: any) => {
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






   

    let validateProductCategory = async (rule: any, value: any) => {
      if (value === "未选择") {
        return Promise.reject("请选择产品类别");
      }

      return Promise.resolve();
    };


    



    const rules = {
      productName: [
        {
          required: true,
          message: "请输入产品名",
          trigger: "blur",
        },
        {
          min: 2,
          max: 50,
          message: "长度在2至50之间",
          trigger: "blur",
        },
      ],
      
      productCategory: [
        {
          required: true,
          validator: validateProductCategory,
        },
      ],
      
    };
        const formRef = ref<FormInstance>();
    const handleFinishBtn = async (values: any) => {
      console.log(values);
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
    
        AddProduct(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
   
    
   
    //router.push({ path: "/Home/WorkSchedulePage", query: {} });
     state.IsDisabled=true;
    state.IsShowSubmit=false;
       state.IsShowContinueAdd=true;
      state.IsDisabledproductCode=true;
           } else {
             message.error("添加失败.");
           }
            state.spinning = !state.spinning;
         });
        
      
        
        }
         if (pageType != undefined && pageType == "edit") {
           //UpdateorkSchedule
   
   
   
         //DataEntityState.EditData.startTimeStr= dayjs(dateFormat("YYYY-mm-dd HH:MM:SS",new Date(values.startTimeStr),0),"YYYY-MM-DD HH:mm:ss");
   UpdateProduct(DataEntityState.EditData).then((res: any) => {
           console.log(res);
           if (res.isSuccess) {
           
             message.success(res.msg);
   
   
             DataEntityState.EditData.id="";
     DataEntityState.EditData.productName= "";
     DataEntityState.EditData.productCode= "";
     DataEntityState.EditData.vendorID="";
     DataEntityState.EditData.vendorName= "";
    
     DataEntityState.EditData.productCategory="未选择";
   
     DataEntityState.EditData.requidQty=0;
     DataEntityState.EditData.manufactory="";
     DataEntityState.EditData.unitPrice=0;
     DataEntityState.EditData.volume="";
     DataEntityState.EditData.volumeUnit="";
     
     DataEntityState.EditData.weight="";
     DataEntityState.EditData.weightUnit="";
     DataEntityState.EditData.grossWeight="";
     DataEntityState.EditData.netWeight=""; 
    


     
     DataEntityState.EditData.unit="",
    
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
   
     router.push({ path: "/Home/ProductManagementPage", query: {} });
   
   
   
           } else {
             message.error(res.msg);
           }
            state.spinning = !state.spinning;
         });
         }
   









       
    };
  
    const continueAdd=()=>{
       state.IsDisabled=false;
        state.IsDisabledproductCode=false;
       
        state.IsShowSubmit=true;
    state.IsShowContinueAdd=false;
    DataEntityState.EditData.id="";
     DataEntityState.EditData.productName= "";
     DataEntityState.EditData.productCode= "";
     DataEntityState.EditData.vendorID="";
     DataEntityState.EditData.vendorName= "";
    
     DataEntityState.EditData.productCategory="未选择";
   
     DataEntityState.EditData.requidQty=0;
     DataEntityState.EditData.manufactory="";
     DataEntityState.EditData.unitPrice=0;
     DataEntityState.EditData.volume="";
     DataEntityState.EditData.volumeUnit="";
     
     DataEntityState.EditData.weight="";
     DataEntityState.EditData.weightUnit="";
     DataEntityState.EditData.grossWeight="";
     DataEntityState.EditData.netWeight=""; 
    


     
     DataEntityState.EditData.unit="",
    
     DataEntityState.EditData.createTimeStr= dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0);
     DataEntityState.EditData.key= "";
     DataEntityState.EditData.TmStamp=[];
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