<template>
    <div>
 <a-modal
    cancelText="关闭"
     okText="确认"
    wrapClassName="ExportExcel"
    v-model:visible="visibleConfigGrid"
    width="1000px"
    :title="titleConfigGrid"
     :ok-button-props="{ style:{display:'none'} }"
    @Cancel="onCancel"
      @ok="handleOk"
  >
  <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '4px' }">
     <a-calendar v-model:value="value" :fullscreen="true" :locale="locale"   @select="onSelect" @panelChange="onPanelChange"  >   
    <template #dateCellRender="{ current }">
      <ul class="events">
        <li v-for="item in getListData(current)" :key="item.content" >
          <a-badge style="color:blue;" :status="item.type" :text="item.content"/>
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current }">
      <div v-if="getMonthData(current)" class="notes-month">
        <section>{{ getMonthData(current) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
     </div> 

  </a-modal>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,ref,onMounted,watch } from 'vue'

import { message} from "ant-design-vue";





export default defineComponent({
      props: { 
       visible:Boolean,modalTitle: String},
       components: {
  
  },
    setup (props,context) {
        const state = reactive({
            count: 0,
        })
          let visibleConfigGrid = ref<boolean>(props.visible);
          let titleConfigGrid = ref<string|undefined>(props.modalTitle);
       
        
      const value = ref<any>();
 let listData:any[]|undefined=undefined;
    const getListData = (value: any) => {
        console.log("getListData",value.date())
 listData=[];
      switch (value.date()) {
           case 3:
          listData = [
            { type: 'success', content: '总部视频会议，主要讨论第三季生产部产能消耗问题.' },
            //{ type: 'success', content: 'This is usual event.' },
          ];
          break;
           case 19:
          listData = [
            { type: 'success', content: '拟定排产初步方案.' },
            //{ type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 8:
          listData = [
            { type: 'success', content: '提交采购合同，并对相关附件信息进行审核，签字确认.' },
            //{ type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: '生产会议，针对第三产线生产设备优化等相关问题.' },
          //  { type: 'success', content: 'This is usual event.' },
            //{ type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: '预定酒店' },
          //  { type: 'success', content: 'This is very long usual event。。....' },
          //  { type: 'error', content: 'This is error event 1.' },
           // { type: 'error', content: 'This is error event 2.' },
           // { type: 'error', content: 'This is error event 3.' },
           // { type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }         
 return listData || [];
    }

const getMonthData = (value: any) => {
      if (value.month() === 8) {
        return "约见重要客人";
      }
    };
 const onSelect = (value: any) => {
     console.log(value)
    };
    const onPanelChange = (value: any) => {
     value
    };

           
const handleOk = (e: MouseEvent) => {
  //
  };

 
 
    const onCancel = (e: MouseEvent) => {
  context.emit("CloseSetingMoadl");
    };
    watch(
      () => props.visible,
      (newValue) => {
           
        
           console.log("nvisibleSettingewValue",newValue);
            visibleConfigGrid.value=newValue;
      }
    );
     watch(
      () => props.modalTitle,
      (newValue) => {
           
      
          
            titleConfigGrid.value=newValue;
      }
    );
    






      
        
    
        return {
            ...toRefs(state),visibleConfigGrid,titleConfigGrid,onCancel,handleOk, getListData,
      getMonthData,locale: {
          lang: {
            month: '月',
            year: '年',
          },
        }, onSelect,
      onPanelChange,value
     
   
        }
    }
})
</script>

<style  >
.configCol{
  border:2px solid #f0f0f0;height:40px;text-align:center;line-height:40px;color:black;
    font-size:14px
}
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  /* overflow: hidden;
  white-space: nowrap; */
  width: 100%;
  /* text-overflow: ellipsis; */
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>