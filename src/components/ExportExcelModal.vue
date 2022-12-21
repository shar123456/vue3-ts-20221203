<template>
    <div>
 <a-modal
    cancelText="关闭"
     okText="确认"
    wrapClassName="ExportExcel"
    v-model:visible="visibleExportExcel"
    width="1000px"
    :title="modalTitleeExportExcel"
     :ok-button-props="{ style:{display:'none'} }"
    @Cancel="onCancel"
      @ok="handleOk"
  >
  
     <div class="clearfix">
    <a-upload :file-list="fileList" :before-upload="beforeUpload" @remove="handleRemove" multiple="false">
      <a-button>
        <upload-outlined></upload-outlined>
        选择文件
      </a-button>
    </a-upload>
   <div>

     <a-row>
    <a-col :span="12"><a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : '执行导入' }}
    </a-button></a-col>
    <a-col :span="12">仅支持扩展名：.xlsx 文件，大小：最大支持30M</a-col>
  
  </a-row>
   <a-row>
    <a-col :span="12">
    </a-col>
    <a-col :span="12" >  <a  :href="downLoadHref">{{downLoadName}}</a></a-col>
  
  </a-row>
   </div>
    
  </div>
  
  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { UserDataEntity,IUserInfo } from "../TypeInterface/IUserInterface";



import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import axios from 'axios'
import {
  importData
} from "../Request/userRequest";
import type { UploadProps } from 'ant-design-vue';
import {
  G_BASEURL
} from "../Request/GlobelConfig";

export default defineComponent({
      props: { UserData: UserDataEntity,urlData:String,configType:String,
       visibleExportExcel:Boolean,modalExportExcelTitles: String,},
       components: {
    InboxOutlined,
  },
    setup (props,context) {
        const state = reactive({
            count: 0,
            downLoadName:"",
            downLoadHref:""
        })
          let visibleExportExcel = ref<boolean>(props.visibleExportExcel);
          let modalTitleeExportExcel = ref<string|undefined>(props.modalExportExcelTitles);
           const EditData:IUserInfo=props.UserData?.EditData as IUserInfo;
           let urlDataT = ref<string|undefined>(props.urlData);
let configType = ref<string|undefined>(props.configType);
  if(configType.value=="ClueManagement")
           {
            state.downLoadName="线索模板下载";
state.downLoadHref="./线索导入模板.xlsx";
           }
  if(configType.value=="CustomerManagement")
           {
            state.downLoadName="客户模板下载";
state.downLoadHref="./客户导入模板.xlsx";
           }
 if(configType.value=="CommercialManagement")
           {
            state.downLoadName="商机模板下载";
state.downLoadHref="./商机导入模板.xlsx";
           }
           if(configType.value=="QuotesManagement")
           {
            state.downLoadName="报价单模板下载";
state.downLoadHref="./报价单模板下载.xlsx";
           }
 const fileList = ref<any['fileList']>([]);
    const uploading = ref<boolean>(false);

    const handleRemove: any['onRemove'] = (file:any) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload: any['beforeUpload'] =  (file:any) => {

console.log(file.type );
const isfile = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isfile) {
        message.error(`请上传 xlsx 格式的文件.`);
         return false;
      }







      fileList.value = [...fileList.value, file];
        console.log(fileList.value);
      return false;
    };

    const handleUpload = () => {console.log("urlDataT",urlDataT);
      const formData = new FormData();
      fileList.value.forEach((file: ['fileList'][number]) => {
         console.log(file);
        formData.append('files', file as any);
      });
      uploading.value = true;

   let urlT='http://120.40.187.174:8702/Api/ManagerFile/UpLoadFile';
     
  const token=localStorage.getItem("starToken");
        console.log('formData11111',formData);
 console.log(typeof formData );
      
      axios({
                method: 'post',
                data: formData,
                transformRequest: [function(){
                    return formData;
                }],
               headers:{'Authorization':token},
                //url: '/api/SysAccount/UpLoadFile',
               // url: 'http://120.40.187.174:8702/Api/SysAccount/UpLoadFile',
 //url: 'http://localhost:3165/Api/SysAccount/UpLoadFile',
 //url:G_BASEURL+'/SysAccount/UpLoadFile'
             url:G_BASEURL+urlDataT.value 
               
            })
            .then((res:any )=> {
               
                 uploading.value = false;
                 fileList.value=[];
                  //message.success(`导入成功`);
                  console.log("导入MSG",res);
message.success(res.data.msg)
                  
                   context.emit("closeExportExcelMoadl");
            });
    }




















    const onCancel = (e: MouseEvent) => {
      //console.log(e);
   context.emit("closeExportExcelMoadl");
    
    
    };
    watch(
      () => props.visibleExportExcel,
      (newValue) => {
           
         console.log(newValue)
          fileList.value=[];
            visibleExportExcel.value=newValue;
      }
    );
     watch(
      () => props.modalExportExcelTitles,
      (newValue) => {
           
         console.log(newValue)
          
            modalTitleeExportExcel.value=newValue;
      }
    );
   
        return {
            ...toRefs(state),visibleExportExcel,modalTitleeExportExcel,EditData,onCancel,handleRemove,beforeUpload,handleUpload,uploading,fileList,
     
   
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
</style>