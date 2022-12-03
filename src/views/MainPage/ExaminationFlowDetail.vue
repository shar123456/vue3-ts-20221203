<template>
  <div class="ExaminationFlowDetail">
    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px"
        >流程编号</a-col
      >
      <a-col :span="22" style="font-weight: 400; font-size: 17px">{{
        EditData.flowNo
      }}</a-col>
    </a-row>

    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px"
        >流程名称</a-col
      >
      <a-col :span="22" style="font-weight: 400; font-size: 17px">{{
        EditData.flowName
      }}</a-col>
    </a-row>
    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px">状态</a-col>
      <a-col :span="22" style="font-weight: 400; font-size: 17px">{{
        EditData.useStatus
      }}</a-col>
    </a-row>
    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px"
        >创建时间</a-col
      >
      <a-col :span="22" style="font-weight: 400; font-size: 17px">{{
        EditData.createTimeStr
      }}</a-col>
    </a-row>
    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px">审批人</a-col>
      <a-col :span="22" style="font-weight: 400; font-size: 17px"
        ><text    v-for="(item,index) in steps"
            :key="item.title" style="color: #1890ff">{{ item.title }}{{index==steps.length-1?"":"，"}}</text></a-col
      >
    </a-row>
    <a-row
      style="
        border-bottom: 1px solid #f4f4f4;
        line-height: 45px;
        padding-left: 5px;
      "
    >
      <a-col :span="2" style="font-weight: 700; font-size: 18px">流程图</a-col>
      <a-col
        :span="22"
        style="
          font-weight: 400;
          font-size: 17px;
          border: 0px dotted #71a6e7;
          height: 180px;
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
              <span style="color: darkgrey">审批状态：{{ "***" }}</span
              ><br />
              <span style="color: darkgrey">审批时间：{{ "***" }}</span>
            </template>
            <!-- <template v-if="item.isLast" #icon
              ><PlusCircleTwoTone @click="addPersonBtn"
            /></template> -->
          </a-step>
        </a-steps>
      </a-col>
    </a-row>

    <a-row style="height: 75px"></a-row>
    <a-row type="flex" justify="center">
      <a-col class="col" :span="24" style="text-align: center">
        <a-button @click="returnBtn" type="primary">返回</a-button>&nbsp;
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { message, Modal } from "ant-design-vue";
import { GetExaminationFlowById } from "../../Request/ExaminationRequest";
import { ExaminationFlowEntity } from "../../TypeInterface/IExaminationInterface";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    let direction = ref<string>("horizontal");
    const current = ref<number>(0);
    let steps = ref<any[]>([]);

    let DataEntityState = reactive(new ExaminationFlowEntity());

    onMounted(() => {
      let Id = route.query.Id;

      GetExaminationFlowById({ Id: Id }).then((res: any) => {
      
        if (res.isSuccess) {
          DataEntityState.EditData = res.datas;
          steps.value = res.datas.examinationFlowDtoHelps;
            console.log("steps.value", steps.value);
          if (steps.value.length > 8) {
            direction.value = "vertical";
          } else {
            direction.value = "horizontal";
          }
        } else {
          message.error(res.msg);
        }
      });
    });

    // steps.value.push({
    //     id:"001",
    //     title:"admin",
    //     content:"13898695585",
    //   })
    //   steps.value.push({
    //     id:"002",
    //     title:"Queen",
    //     content:"15536969963",
    //   })
    //   steps.value.push({
    //     id:"002",
    //     title:"Jack",
    //     content:"15999883322",
    //   })
    //   if(steps.value.length>8){
    // direction.value="vertical"
    //   }
    //   else
    //   {
    //     direction.value="horizontal"
    //   }

    const returnBtn = () => {
      router.push({ path: "/Home/ExaminationFlowListPage", query: {} });
    };
    return { returnBtn, current, direction, steps, ...toRefs(DataEntityState) };
  },
});
</script>

<style >
.ExaminationFlowDetail {
  height: calc(100vh - 93px);
  border: 0px solid red;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 10px;
}
.ExaminationFlowDetail .ant-steps-item-description{
max-width: 210px!important;
}
</style>