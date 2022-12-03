<template>
 

  <div id="hello">
    <h1>{{msg}}</h1>
 <Modal v-if="TipMessage != ''" :ModalMsg="TipMessage" /> 
    <div id="container">
      <div class="imgDiv">
        <img :src="imageUrl" alt="" />
      </div>
      <div ref="btnGrp">
        <button
          v-for="(temp, index) in Girls"
          :key="index"
          @click="selectGrilFunc(index, $event)"
        >
          {{ `${index}：${temp}` }}
        </button>
      </div>
      <div :style="'color:' + color">
        {{ `您当前选择了：${selectGirl}` }}
      </div>
 <base-info :nameInfo="nameInfo" /> 
  

   
      <div>状态：{{ serviceState }}</div>
      <div>时间：{{ currentTime }}</div>
      <div>
        <button ref="finishedBtn" disabled @click="finishedServiceFunc">
          关闭服务
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted, watch } from "vue";
import { IDataPros } from "../utility/interface";
import { currentTime, GetNowTime, GetImageAxios } from "../utility/commonFunc";
import Modal from "./Modal.vue";
import BaseInfo from './BaseInfo.vue'
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
   Modal,BaseInfo
  },
  setup() {
    const data: IDataPros = reactive({
      Girls: ["STAR", "KING", "QUEEN"],
      selectGirl: "no select",
      color: "red",
    });
    let serviceState = ref("no service");
    let finishedBtn = ref<HTMLElement>();
    let btnGrp = ref<HTMLElement>();
    let imageUrl = ref(
      "https://p3.ssl.qhimgs1.com/sdr/400__/t01baeb27cc1a52109d.jpg"
    );
    let TipMessage = ref("");
    let nameInfo=ref("");
    const selectGrilFunc = async (index: number, e: Event) => {
      data.selectGirl = data.Girls[index];
      
    
      
      const result = await GetImageAxios(
        "https://apiblog.jspang.com/default/getGirl"
      );
      imageUrl.value = result.data.imgUrl;

      disableAllBtn();

      if (e && e.target) {
        (e.target as HTMLButtonElement).disabled = true;
      }
    };
    const finishedServiceFunc = () => {
      data.selectGirl = "no select";
       
      disableAllBtn();
    };
    onMounted(() => {
      // if (btnGrp.value) {
      // (Array.from((btnGrp.value  as HTMLDivElement)?.children)[1] as HTMLButtonElement).disabled=true;
      // }
      GetNowTime();
    });

    watch(
      () => data.selectGirl,
      (newValue) => {
        nameInfo.value=newValue;
        switch (newValue) {
          case "STAR":
            document.title = "正在服务....";
            data.color = "blue";
            serviceState.value = "正在服务....";
            (finishedBtn.value as HTMLButtonElement).disabled = false;
            break;
          case "KING":
            document.title = "正在服务....";
            serviceState.value = "正在服务....";
            data.color = "red";
            (finishedBtn.value as HTMLButtonElement).disabled = false;
            break;
          case "QUEEN":
            document.title = "正在服务....";
            serviceState.value = "正在服务....";
            data.color = "yellow";
            (finishedBtn.value as HTMLButtonElement).disabled = false;
            break;
          default:
            document.title = "服务已关闭";
            serviceState.value = "no service";
            data.selectGirl = "no select";
            data.color = "black";
            imageUrl.value =
              "https://p3.ssl.qhimgs1.com/sdr/400__/t01baeb27cc1a52109d.jpg";
            (finishedBtn.value as HTMLButtonElement).disabled = true;
            TipMessage.value = "正在退出所有服务....";
            setTimeout(() => {
              TipMessage.value = "";
            }, 2000);
            break;
        }
      }
    );

    const disableAllBtn = () => {
      if (btnGrp.value) {
        Array.from((btnGrp.value as HTMLDivElement).children).forEach(
          (element) => {
            (element as HTMLButtonElement).disabled = false;
          }
        );
      }
    };

    return {
      ...toRefs(data),
      selectGrilFunc,
      btnGrp,
      serviceState,
      finishedServiceFunc,
      finishedBtn,
      currentTime,
      imageUrl,
      TipMessage,
      nameInfo
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 6px;
  width: 100px;
  height: 30px;
}
#hello {
  width: 900px;
  height: 600px;
  border: 3px inset rgb(102, 187, 22);
  margin: 50px auto;
  text-align: center;
}
#container {
  width: 600px;
  height: 480px;
  border: 5px inset #333;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.imgDiv {
  width: 130px;
  height: 160px;
  border: 1px outset #eee;
  margin-bottom: 13px;
}
.imgDiv img {
  width: 100%;
  height: 100%;
}
</style>
