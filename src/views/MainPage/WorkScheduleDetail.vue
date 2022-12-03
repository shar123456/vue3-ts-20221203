<template>
    <div class="WorkScheduleDetail">
 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 13 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">计划编号</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.workScheduleNo}}</a-col> 
  </a-row>

<a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 13 }" :lg="{ span: 2 }"   style="font-weight:700;font-size: 18px;">标题</a-col>
    <a-col  :xs="{ span: 'auto' }" :lg="{ span: 'auto' }"  style="font-weight:400;font-size: 17px;">{{EditData.workScheduleName}}</a-col>
  </a-row>
<a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col  :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">计划状态</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">
    
    <text v-if="EditData.workScheduleStatus === '即将开始'" style="
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:#C1CE28;
            border-radius: 4px;
          ">{{EditData.workScheduleStatus}}</text>

 <text v-if="EditData.workScheduleStatus === '已过期'" style="
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:#dd4b39;
            border-radius: 4px;
          ">{{EditData.workScheduleStatus}}</text>

 <text v-if="EditData.workScheduleStatus === '已完成'" style="
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:green;
            border-radius: 4px;
          ">{{EditData.workScheduleStatus}}</text>


<text v-if="EditData.workScheduleStatus === '未开始'" style="
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:#A3A98D;
            border-radius: 4px;
          ">{{EditData.workScheduleStatus}}</text>

        <text v-if="EditData.workScheduleStatus === '已取消'" style="
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            border:1px solid #dedede;
             padding-top:1px;
               padding-bottom:3px;
             padding-left:7px;
               padding-right:7px;
            background-color:pink;
            border-radius: 4px;
          ">{{EditData.workScheduleStatus}}</text>  
          
         
          
          
          
          
          
          
          
          </a-col>
  </a-row>
  <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col  :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">发布人</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.initiator}}</a-col>
  </a-row>
  <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">状态</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.useStatus}}</a-col>
  </a-row>

    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col  :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">开始时间</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.startTimeStr}}</a-col>
  </a-row>
  
    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col  :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">创建时间</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.createTimeStr}}</a-col>
  </a-row>


    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">工作内容</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.workScheduleDesc}}</a-col>
  </a-row>
 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 13 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">备注</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.remarkDesc}}</a-col>
  </a-row>

<a-row  style="height:75px"></a-row>
 <a-row type="flex" justify="center">
   
   
    <a-col class="col" :span="24" style="text-align:center">
     <a-button @click="returnBtn" type="primary">返回</a-button>&nbsp;
      </a-col>
  </a-row>

    </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted,reactive,toRefs } from 'vue'
import { useRouter, useRoute } from "vue-router";
import {
  AddWorkSchedule,GetWorkScheduleById,UpdateWorkSchedule
}
 from "../../Request/WorkScheduleRequest";
 import {
  WorkScheduleEntity,
  IWorkScheduleInfo,
} from "../../TypeInterface/IWorkScheduleInterface";
import { message, Modal } from "ant-design-vue";
export default defineComponent({
    setup () {
          let DataEntityState = reactive(new WorkScheduleEntity());
          DataEntityState.EditData.workScheduleStatus="";
           const route = useRoute();
    const router = useRouter();


  onMounted(() => {
      
      let Id = route.query.Id;
    let Type= route.query.Type;
        
    GetWorkScheduleById({ Id: Id }).then((res: any) => {
                  if (res.isSuccess) {
                   
                 DataEntityState.EditData=res.datas;
                  }
                  else
                  {
                      message.error(res.msg);
                  }
                });

      

  




     
    });

  const returnBtn = () => {
    if(route.query.Type=="Calendar")
    {
 router.push({ path: "/Home/MyCalendarPage", query: {} });
      
    }
   else if(route.query.Type=="HomePageCalendar")
    {
 router.push({ path: "/Home/HomePage", query: {} });
      
    }else 
    {
 router.push({ path: "/Home/WorkSchedulePage", query: {} });
    }
     
    };
        return {returnBtn,      ...toRefs(DataEntityState),
      }
    }
})
</script>

<style scoped>
.WorkScheduleDetail {
  height: calc(100vh - 93px);
  border: 0px solid red;
  box-sizing: border-box;
  padding: 5px;
   padding-left: 10px;
   overflow: auto;
}
</style>