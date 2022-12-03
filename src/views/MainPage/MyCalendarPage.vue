<template>
    <div class="MyCalendarPage">

 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 12 }" :lg="{ span: 12 }"  >
     <a-button type="primary" @click="addBtn">新增</a-button
            >&nbsp;

            <a-button @click="goBackBtn">返回计划列表</a-button>
    </a-col>
  
  </a-row>

         <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '4px' }">
     <a-calendar v-model:value="value" :fullscreen="true" :locale="locale"   @select="onSelect" @panelChange="onPanelChange"  >   
    <template #dateCellRender="{  current: value  }">
      <ul class="events">
        <li v-for="item in getListData(value)" :key="item.content" >
          <a-badge style="color:blue;" @click="gotoDetail(item.Id)" :status="item.type" :text="item.content"/>
        </li>
        <li v-for="item in listData11" :key="item.content" >
          <a-badge style="color:blue;" @click="gotoDetail(item.Id)" :status="item.type" :text="item.content"/>
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current: value }">
      <div v-if="getMonthData(value)" class="notes-month">
        <section>{{ getMonthData(value) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
     </div> 
   </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router";
 import 'moment/locale/zh-cn';
 import {
  GetWorkScheduleDatas,DeleteById,BatchDelete
}
 from "../../Request/WorkScheduleRequest";
 import {
  WorkScheduleEntity,
  IWorkScheduleInfo,
} from "../../TypeInterface/IWorkScheduleInterface";
export default defineComponent({
    setup () {
           const route = useRoute();
    const router = useRouter();

    let DataEntityState = reactive(new WorkScheduleEntity());
  
      


onMounted(async()=>{
let res= await   GetWorkScheduleDatas({
        current:1,
        pageSize: 500,
        ...DataEntityState.QueryConditionInfo,
      })
        if (res.isSuccess) {
          DataEntityState.DataList = res.datas;
           console.log("DataEntityState.DataList",DataEntityState.DataList)
        }

})



 let calendarMark=ref<number>(0);
   const value = ref<any>();
 let listData:any[]|undefined=undefined;
    const getListData = (value: any) => {
        console.log("month",value.month())
 listData=[];
   let date=new Date();
                

             if(value.month()== date.getMonth())
             { console.log("month",value.month())
               const day=value.date();
                const month=value.month()+1;
          let datas:any=(Array.from(DataEntityState.DataList)).filter((i:any)=>i.day==day&&i.month==month)
          // console.log("d111111111atas",value.date())
          //   console.log("d111111111atas",Array.from(datas))
           let datasTemp= Array.from(datas);
             if(datasTemp&&datasTemp.length>0)
             {
               for(var t=0;t<datasTemp.length;t++)
               {
               //console.log("d111111111at666as", ((datasTemp[t] as IWorkScheduleInfo)).workScheduleName )
              const contentTemp= ((datasTemp[t] as IWorkScheduleInfo)).workScheduleName;
                const id= ((datasTemp[t] as IWorkScheduleInfo)).id;
                if(((datasTemp[t] as IWorkScheduleInfo)).workScheduleStatus=='已取消')
                 {
                 listData.push({
                   type: 'error', content: contentTemp,Id:id
                 })
                  
                }
                else
                 {
                 listData.push({
                   type: 'success', content: contentTemp,Id:id
                 }) }
               }
             }
            
      // switch (value.date()) {
      //      case 3:{
           
      //     listData = [
      //       { type: 'success', content: '总部视频会议，主要讨论第三季生产部产能消耗问题.' },
      //       //{ type: 'success', content: 'This is usual event.' },
      //     ];
      //     break;}
      //      case 19:
      //     listData = [
      //       { type: 'success', content: '拟定排产初步方案.' },
      //       //{ type: 'success', content: 'This is usual event.' },
      //     ];
      //     break;
      //   case 8:
      //     listData = [
      //       { type: 'success', content: '提交采购合同，并对相关附件信息进行审核，签字确认.' },
      //       //{ type: 'success', content: 'This is usual event.' },
      //     ];
      //     break;
      //   case 10:
      //     listData = [
      //       { type: 'warning', content: '生产会议，针对第三产线生产设备优化等相关问题.' },
      //     //  { type: 'success', content: 'This is usual event.' },
      //       //{ type: 'error', content: 'This is error event.' },
      //     ];
      //     break;
      //   case 15:
      //     listData = [
      //       { type: 'warning', content: '预定酒店' },
      //     //  { type: 'success', content: 'This is very long usual event。。....' },
      //     //  { type: 'error', content: 'This is error event 1.' },
      //      // { type: 'error', content: 'This is error event 2.' },
      //      // { type: 'error', content: 'This is error event 3.' },
      //      // { type: 'error', content: 'This is error event 4.' },
      //     ];
      //     break;
      //   default:
      // }     
      
      }   
      else
      {
        if(calendarMark&&calendarMark.value!=0)
        {
  const day=value.date();
    if(value.month()== calendarMark.value){
          const month=calendarMark.value+1;
          let datas:any=(Array.from(DataEntityState.DataList)).filter((i:any)=>i.day==day&&i.month==month)
          // console.log("d111111111atas",value.date())
          //   console.log("d111111111atas",Array.from(datas))
           let datasTemp= Array.from(datas);
             if(datasTemp&&datasTemp.length>0)
             {
               for(var t1=0;t1<datasTemp.length;t1++)
               {
               //console.log("d111111111at666as", ((datasTemp[t] as IWorkScheduleInfo)).workScheduleName )
              const contentTemp= ((datasTemp[t1] as IWorkScheduleInfo)).workScheduleName;
                const id= ((datasTemp[t1] as IWorkScheduleInfo)).id;
                 listData.push({
                   type: 'success', content: contentTemp,Id:id
                 })
               }
             }
    }
            
        }
      
      } 
         //console.log("listDatas", listData )
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
     console.log("onPanelChange",value.month())
calendarMark.value=value.month();
  //            listData11.value=[];
            
  //           console.log("month",value.month())
  //              const day=value.date();
  //               const month=value.month()+1;
  //               for(var z=1;z<=28;z++)
  //               {
  // let datas:any=(Array.from(DataEntityState.DataList)).filter((i:any)=>i.day==z&&i.month==month)
     
  //          let datasTemp= Array.from(datas);
  //            if(datasTemp&&datasTemp.length>0)
  //            {
  //              for(var t=0;t<datasTemp.length;t++)
  //              {
  //              //console.log("d111111111at666as", ((datasTemp[t] as IWorkScheduleInfo)).workScheduleName )
  //             const contentTemp= ((datasTemp[t] as IWorkScheduleInfo)).workScheduleName;
  //               const id= ((datasTemp[t] as IWorkScheduleInfo)).id;
  //                listData11.value.push({
  //                  type: 'success', content: contentTemp,Id:id
  //                })
  //              }
  //            }
  //               }
        
  // console.log("listData11.value",listData11.value)



    };
   const goBackBtn = () => {
      router.push({ path: "/Home/WorkSchedulePage", query: {} });
    };
      const addBtn = () => {
      router.push({ path: "/Home/CreateWorkSchedule", query: {} });
    };
 const gotoDetail = (Id:any) => {
       router.push({path: '/Home/WorkScheduleDetail', query: {Id: Id,Type:"Calendar"}});
    };

        return {getListData,
      getMonthData,locale: {
          lang: {
            month: '月',
            year: '年',
          },
        }, onSelect,
      onPanelChange,value,goBackBtn,addBtn,gotoDetail}
    }
})
</script>

<style >
.MyCalendarPage {
  height: calc(100vh - 93px);
  border: 0px solid red;
  box-sizing: border-box;
  padding: 5px;
   padding-left: 10px;
   overflow:auto;
}

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
.ant-fullcalendar-value{
    font-size: 19px;
    font-weight: 500;
}
</style>