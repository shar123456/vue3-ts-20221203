<template>
  <teleport to="#ModalApp">
    <div id="NewMessageTipContainer" :class="NMTClass">
      <a-row style="border: 0px solid red">
        <a-col :span="2"></a-col>
        <a-col
          :span="20"
          style="
            text-align: center;
            line-height: 35px;
            font-size: 20px;
            font-weight: 700;
            color: white;
          "
          >消息提醒</a-col
        >
        <a-col
          :span="2"
          style="text-align: center; color: white; font-weight: 700"
          ><a style="color: white; font-weight: 700" @click="closeNewMsgTipBtn"
            >关闭</a
          ></a-col
        >
      </a-row>
      <a-row style="border: 1px solid #cdddf7"> </a-row>

      <div
        style="border: 0px solid red; height: calc(100% - 40px); padding: 5px"
      >
        <div style="color: white; font-weight: 500; font-size: 17px">
          尊敬的用户：<text>admin</text>
        </div>
        <div style="color: white; font-weight: 500; font-size: 17px">
          您当前有【<text>{{Total}}</text>】个审批任务尚未处理.
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch ,onMounted} from "vue";
import { useStore } from "vuex";
export default defineComponent({
   props:{ExaminationTotals:Number},
  setup(props) {
    const store = useStore();
    let NMTClass = ref<string>("NMTClass_hide");
    let closeNewMsgTipBtn = () => {
      store.state.NewMessageMark = false;
    };
 let Total = ref<number|undefined>(props.ExaminationTotals);

 onMounted(()=>{
  Total.value=props.ExaminationTotals;
 })
    watch(
      () => store.state.NewMessageMark,
      (newValue) => {
 Total.value=props.ExaminationTotals;
        console.log("Total",Total.value)
        if (newValue) {
          NMTClass.value = "NMTClass_show";
        } else {
          NMTClass.value = "NMTClass_hide";
        }
      }
    );

    return { NMTClass, closeNewMsgTipBtn ,Total};
  },
});
</script>

<style scoped>
#NewMessageTipContainer {
  width: 400px;
  height: 280px;
  box-sizing: border-box;
  border: 2px outset #eee;
  z-index: 100;
  position: fixed;
  right: 5px;
  bottom: 0;
  background-color: rgba(29, 99, 114, 1);
}

.NMTClass_hide {
  height: 0px !important;
  transition: all 0.5s linear;
}

.NMTClass_show {
  height: 280px !important;
  transition: all 0.5s linear;
}
</style>