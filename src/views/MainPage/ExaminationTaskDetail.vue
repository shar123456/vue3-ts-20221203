<template>
    <div class="ExaminationTaskDetail">
 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">任务编号</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.examTaskNo}}</a-col> 
  </a-row>
   <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">审批标题</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.examName}}</a-col> 
  </a-row>
   <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24}" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">审批类型</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.examType}}</a-col> 
  </a-row>
   <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">紧急程度</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.emergencyLevel}}</a-col> 
  </a-row>
   <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">审批状态</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">
    
    
    <text v-if="EditData.examStatus === '进行中'" style="
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
          ">{{EditData.examStatus}}</text>

 <text v-if="EditData.examStatus === '已过期'" style="
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
          ">{{EditData.examStatus}}</text>

 <text v-if="EditData.examStatus === '已完成'" style="
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
          ">{{EditData.examStatus}}</text>


<text v-if="EditData.examStatus === '未开始'" style="
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
          ">{{EditData.examStatus}}</text>

        <text v-if="EditData.examStatus === '已取消'" style="
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
          ">{{EditData.examStatus}}</text>  
          
         
          
          
          
    







    
    
    
    
    
    
    
    
    
    
    </a-col> 
  </a-row>

<a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">发起人</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.initiator}}</a-col> 
  </a-row>


<a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :xs="{ span: 24 }" :lg="{ span: 2 }" style="font-weight: 700; font-size: 18px">流程进展</a-col>
      <a-col
     :xs="{ span: 24 }" :lg="{ span: 22 }" 
        style="
          font-weight: 400;
          font-size: 17px;
          border: 0px dotted #71a6e7;
          min-height: 180px;
          background-color: white;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div v-if="steps == undefined || steps.length <= 0">
          <a-empty description="暂无预览信息" />
        </div>
        <a-steps
          :direction="direction"
          v-if="!(steps == undefined || steps.length <= 0)"
          :current="current"
        >
          <a-step
            status="process"
            v-for="item in steps"
            :key="item.title"
            :title="item.title"
          >
            <template #description>
              <span style="color: darkgrey;border:0px solid red">手机号：{{ item.content }}.</span
              ><br />
                <span style="color: darkgrey">Email：{{ item.email }}.</span
              ><br />
              <span :class="item.examResult=='通过'?'stepAgreeClass':(item.examResult=='驳回')?'stepRejectClass':''">审批状态：{{ item.examResult }}</span
              ><br />
              <span :class="item.examResult=='通过'?'stepAgreeClass':(item.examResult=='驳回')?'stepRejectClass':''">审批时间：{{ item.examResultTimeStr }}</span>
            </template>
            <!-- <template v-if="item.isLast" #icon
              ><PlusCircleTwoTone @click="addPersonBtn"
            /></template> -->
          </a-step>
        </a-steps>
      </a-col>
    </a-row>

 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">状态</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.useStatus}}</a-col> 
  </a-row>
   <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">流程编号</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.flowNo}}</a-col> 
  </a-row>

   
  <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">通知类型</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.noticeType}}</a-col> 
  </a-row>
    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">创建时间</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.createTimeStr}}</a-col> 
  </a-row>
    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">开始时间</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.startTimeStr}}</a-col> 
  </a-row>
    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px;">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }"  style="font-weight:700;font-size: 18px;">结束时间</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.endTimeStr}}</a-col> 
  </a-row>
    <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">内容描述</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.taskDesc}}</a-col>
  </a-row>
 <a-row style="border-bottom: 1px solid #f4f4f4;line-height: 45px;padding-left:5px">
    <a-col :xs="{ span: 24 }" :lg="{ span: 2 }" style="font-weight:700;font-size: 18px;">备注</a-col>
    <a-col :xs="{ span: 'auto' }" :lg="{ span: 'auto' }" style="font-weight:400;font-size: 17px;">{{EditData.remarkDesc}}</a-col>
  </a-row>



<a-row  style="height:75px"></a-row>
 <a-row type="flex" justify="center">
   
   
    <a-col class="col" :span="24" style="text-align:center">
     <a-button @click="returnBtn" type="primary">返回</a-button>&nbsp;
      </a-col>
  </a-row>

<div v-if="EditData.examStatus=='已完成'&&(steps.filter(i=>i.examResult=='通过'))?.length==steps?.length" class="PassTaskMark">
    <img :src="passpic" alt="" srcset="" />
  </div>
<div v-if="EditData.examStatus=='已完成'&&steps.filter(i=>i.examResult=='驳回')?.length>0" class="PassTaskMark">
    <img :src="nopasspic" alt="" srcset="" />
  </div>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs ,defineComponent,ref,onMounted} from 'vue'
import { useRouter, useRoute } from "vue-router";
import { GetExaminationTaskById } from "../../Request/ExaminationRequest";
 import {
ExaminationTaskEntity
} from "../../TypeInterface/IExaminationInterface";
import { message, Modal } from "ant-design-vue";
export default defineComponent({
    setup () {
                   const route = useRoute();
    const router = useRouter();
        const state = reactive({
            count: 0,
            passpic:require('../../assets/passe.png'),
              nopasspic:require('../../assets/nopasse.png'),
        })
        let direction = ref<string>("horizontal");
    const current = ref<number>(0);
    let steps = ref<any[]>([]);
  let DataEntityState = reactive(new ExaminationTaskEntity());
onMounted(() => {
      
      let Id = route.query.Id;
    let Type= route.query.Type;
        
  
 GetExaminationTaskById({ Id: Id }).then((res: any) => {
                  if (res.isSuccess) {
                   
                 DataEntityState.EditData=res.datas;

 steps.value = res.datas.examinationFlowDtoHelps;
            console.log("steps.value", steps.value);
          if (steps.value.length > 8) {
            direction.value = "vertical";
          } else {
            direction.value = "horizontal";
          }

                  }
                  else
                  {
                      message.error(res.msg);
                  }
                });



     
    });






//  steps.value.push({
//         id:"001",
//         title:"admin",
//         content:"13898695585",
//       })
//       steps.value.push({
//         id:"002",
//         title:"Queen",
//         content:"15536969963",
//       })
//       steps.value.push({
//         id:"002",
//         title:"Jack",
//         content:"15999883322",
//       })
//       if(steps.value.length>8){
//     direction.value="vertical"
//       }
//       else
//       {
//         direction.value="horizontal"
//       }


const returnBtn = () => {
    if(route.query.Type=="ExaminationTask")
    {
 router.push({ path: "/Home/ExaminationTaskPage", query: {} });
      
    }else  if(route.query.Type=="Examination")   
    {
        router.push({ path: "/Home/ExaminationListPage", query: {} }); 
    }else{
         router.push({ path: "/Home/ExaminationTaskPage", query: {} });
    }
}
        return {
            ...toRefs(state),current, direction, steps,returnBtn, ...toRefs(DataEntityState),
        }
    }
})
</script>

<style  >
.ExaminationTaskDetail{
     height: calc(100vh - 93px);
  border: 0px solid red;
  box-sizing: border-box;
  padding: 5px;
   padding-left: 10px;
   overflow: auto;
     position:relative
}
.ExaminationTaskDetail .ant-steps-item-description{
max-width: 210px!important;
}

.stepAgreeClass{
    color: green;font-weight: 900;font-size: 16px;
}
.stepRejectClass{
    color: #dd4b39;font-weight: 900;font-size: 16px;
}
.PassTaskMark{
width:320px;
height:160px;
  border:0px solid red;
  position:absolute;
  top:12%;
  left:57%
}
.PassTaskMark img{
  width:100%;
height:100%;
}
</style>