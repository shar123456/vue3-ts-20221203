
<template>
    <div>
 <a-modal
    cancelText="关闭"
     okText="确认"
    wrapClassName="ExportExcel"
    v-model:visible="visible1"
    width="1000px"
    :title="modalTitle"
     :ok-button-props="{ style:{display:''} }"
    @Cancel="onCancel"
       @ok="handleUpload"
  >
  
     <div class="clearfix">

<a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
        @change="handleChange"
   :before-upload="beforeUpload"
   @remove="handleRemove"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击或将文件拖拽到这里上传</p>
    <p class="ant-upload-hint">
     支持扩展名：.rar .zip .doc .docx .pdf .jpg ... 文件大小：最大支持30M
    </p>
  </a-upload-dragger>


  </div>
  
  </a-modal>
    </div>
</template>

<script lang="ts">
interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}


import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import { ManagerFileDataEntity } from "../TypeInterface/IManagerFlieInterface";

import { InboxOutlined } from '@ant-design/icons-vue';



import { message } from 'ant-design-vue';
import axios from 'axios'




export default defineComponent({
      props: { UserData: ManagerFileDataEntity,
       visibleFileUpload:Boolean,modalFileUploadTitles: String,},
    
 components: {
     InboxOutlined
  },


    setup (props,context) {
        const state = reactive({
            count: 0,
        })
          let visible1 = ref<boolean>(props.visibleFileUpload);
          let modalTitle = ref<string|undefined>(props.modalFileUploadTitles);
          const fileList = ref<any[]>([]);
          
const handleChange = (info: any) => {
      const status = info.file.status;
console.log(info);
 //fileList.value = [...fileList.value, info.file];
    // fileList.value.push(info.file);
 //console.log(info.file, info.fileList);
 
  return false;
    //   if (status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully.`);
    //   } else if (status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    };



    const uploading = ref<boolean>(false);

    const handleRemove: any['onRemove'] = (file:any) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload: any['beforeUpload'] =  (file:any) => {

         


            console.log(file);
               fileList.value.push(file);
      //fileList.value = [...fileList.value, file];
      console.log(fileList.value);
      return false;
    };

    const handleUpload = () => {
      let submitMark:number=0;
      const formData = new FormData();
      fileList.value.forEach((file: any) => {
           console.log(file);
        const isLt30M = file.size / 1024 / 1024 < 0.5
        if (!isLt30M) {
          message.warning('资源包不能超过30MB')
         submitMark=1;
        } 
        formData.append('files', file);
      });

      if(submitMark==0)
      {
uploading.value = true;

      axios({
                method: 'post',
                data: formData,
                headers:{'Content-Type':'multipart/form-data'},
                transformRequest: [function(){
                    return formData;
                }],
                url: 'http://120.40.187.174:8702/Api/ManagerFile/UpLoadFile',
            })
            .then(res => {
                res = res.data;
                 context.emit("closeFileUploadModal");
    fileList.value=[];
              
            });
      }
      
    }


    const onCancel = (e: MouseEvent) => {
      //console.log(e);
   context.emit("closeFileUploadModal");
    fileList.value=[];
    
    };
    watch(
      () => props.visibleFileUpload,
      (newValue) => {
           
         console.log(newValue)
          
            visible1.value=newValue;
      }
    );
     watch(
      () => props.modalFileUploadTitles,
      (newValue) => {
           
         console.log(newValue)
          
            modalTitle.value=newValue;
      }
    );
        return {
            ...toRefs(state),visible1,modalTitle,
            onCancel,handleRemove,beforeUpload,handleUpload,uploading,fileList,handleChange
     
   
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