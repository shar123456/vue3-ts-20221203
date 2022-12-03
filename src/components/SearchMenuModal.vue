<template>
    <div>
 <a-modal
    cancelText="取消"
    okText="跳转"
    wrapClassName="UserList"
    v-model:visible="visible"
    width="1000px"
    :title="modalTitle"
    @Cancel="onCancel"
      @ok="handleOk"
       :ok-button-props="{ style:{display:''} }"
  >
  
<a-row  >
   
    <a-col   :lg="{ span: 24 }"   class="titleSub">
   
<a-auto-complete
    v-model:value="MenuValue"
    style="width: 100%"
    placeholder="请输入菜单名"
    @search="handleSearch"
  >
    <template #dataSource>
      <a-select-option v-for="temp in result" :key="temp.menuTitle">
        {{ temp.menuTitle }}
      </a-select-option>
    </template>
  </a-auto-complete>


    </a-col>
  
   
  </a-row>
   
  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'
import {
 getMenuByName
} from "../Request/menuRequest";
import { message} from "ant-design-vue";
import {useRouter, useRoute} from 'vue-router'
export default defineComponent({
          props: {
       visibleSetting:Boolean,modalTitleSetting: String},
        
    setup (props,context) {
        const state = reactive({
            count: 0,
        })
          let visible = ref<boolean>(props.visibleSetting);
          let modalTitle = ref<string|undefined>(props.modalTitleSetting);
        
              const route = useRoute();
  const router=useRouter();


let MenuValue=ref<string>("");
  const result = ref<any[]>([]);
    const handleSearch = (val: string) => {
      let res: string[];
      
 getMenuByName({ Name: val }).then((res1: any) => {
                 
                  if (res1.isSuccess) {
                  result.value = res1.datas;
                  }
                

    })
    }



 const searchBtn=()=>{
        //
  }







 const handleOk = (e: MouseEvent) => {
     
   console.log(result.value);
   if(result.value==[]||result.value==undefined||result.value.length==0)
   {
  message.error("菜单不存在.");
   }
      else
      {

        result.value.forEach(item=>{
          if(item.menuTitle==MenuValue.value)
          {
             router.push({path: item.menuUrl, query: {}});
              context.emit("closeSearchMenuModal");
          }
        })
          
        //   let url=((result.value)[0]).menuUrl as string;
        //    router.push({path: url, query: {}});
      }
  //
   
    
    
    };
    const onCancel = (e: MouseEvent) => {
      //console.log(e);
   context.emit("closeSearchMenuModal");
    
    
    };
    watch(
      () => props.visibleSetting,
      (newValue) => {
           
         console.log("visibleMenu",newValue)
          
            visible.value=newValue;
            MenuValue.value="";
            result.value=[];
      }
    );
     watch(
      () => props.modalTitleSetting,
      (newValue) => {
           
         console.log(newValue)
          
            modalTitle.value=newValue;
      }
    );
        return {
            ...toRefs(state),visible,modalTitle,handleOk,onCancel

            ,searchBtn
            ,   result,
      handleSearch,MenuValue
        }
    }
})
</script>

<style  >

.UserList .ant-modal-title {
  font-size: 16px;
  color: #1890ff !important;
  font-weight: 400;
}
</style>