<template>
  <a-spin :spinning="spinning" :delay="delayTime">
    <div class="mainWSContent">
      <div style="padding: 5px">
        <a-row>
          <a-col :span="24" class="title">{{ title }}</a-col>
        </a-row>
        <a-row style="height: 23px"></a-row>

        <a-form
          ref="formRef"
          :model="EditData"
          :rules="rules"
          @finish="handleFinish"
          v-bind="layout"
        >
          <a-row type="flex" justify="center">
            <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
              <a-form-item label="小主题" name="smallTopic">
                <a-input
                  :disabled="IsDisabled"
                  v-model:value="EditData.smallTopic"
                  placeholder="请输入小主题"
                />
              </a-form-item>
            </a-col>
            <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
            <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
              <a-form-item label="缩写" name="smallShortTopic">
                <a-input
                  :disabled="IsDisabled"
                  v-model:value="EditData.smallShortTopic"
                  placeholder="请输入缩写"
                />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row style="height: 0px"></a-row>

          <a-row type="flex" justify="center">
            <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }">
              <a-form-item label="大主题" name="bigTopic">
                <a-textarea
                  :disabled="IsDisabled"
                  v-model:value="EditData.bigTopic"
                  placeholder="请输入大主题"
                  :rows="4"
                />
              </a-form-item>
            </a-col>
            <a-col class="col" :xs="{ span: 0 }" :lg="{ span: 1 }"></a-col>
            <a-col class="col" :xs="{ span: 24 }" :lg="{ span: 11 }"> </a-col>
          </a-row>

          <a-row style="height: 65px"></a-row>
          <a-row type="flex" justify="center">
            <a-col class="col" :span="24" style="text-align: center">
              <a-button
                :disabled="IsDisabledSubmit"
                type="primary"
                html-type="submit"
                >{{ submitDesc }}</a-button
              >&nbsp;

              <a-button @click="UnlockBtn">{{ lockDesc }}</a-button></a-col
            >
          </a-row>
        </a-form>
      </div>
    </div>
  </a-spin>
</template>

<script lang="ts">
import { message, Modal } from "ant-design-vue";
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import {
  GlobleParameterEntity,
  IGlobleParameterInfo,
} from "../../TypeInterface/IGlobleParameterInterface";

import { useRouter, useRoute } from "vue-router";
import {
 UpdateGlobleParameter,GetGlobleParameter
} from "../../Request/GlobleParameterRequest";
import { dateFormat } from "../../utility/commonFunc";
import { useStore } from "vuex";
export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      count: 0,
      title: "全局参数配置",
      submitDesc: "提交",
      spinning: false,
      delayTime: 0,
      IsDisabled: true,
      IsDisabledSubmit: true,
      lockDesc: "解锁",
    });

    const store = useStore();
    let DataEntityState = reactive(new GlobleParameterEntity());

    const layout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 30 },
    };

    onMounted(async () => {
  let GlobleParameter = await GetGlobleParameter();
  if(GlobleParameter.isSuccess&&GlobleParameter.datas!=undefined&&GlobleParameter.datas.length>0)
  {
    DataEntityState.EditData=GlobleParameter.datas[0]
  }
  console.log("GlobleParameter",GlobleParameter);
    });

    const rules = {
      smallTopic: [
        {
          required: true,
          message: "请输入小主题",
          trigger: "blur",
        },
        {
          min: 2,
          max: 9,
          message: "长度在2至9之间",
          trigger: "blur",
        },
      ],
      smallShortTopic: [
        {
          required: true,
          message: "请输入缩写",
          trigger: "blur",
        },
        {
          min: 2,
          max: 4,
          message: "长度在2至4之间",
          trigger: "blur",
        },
      ],
       bigTopic: [
        {
          required: true,
          message: "请输入大主题",
          trigger: "blur",
        },
        {
          min: 0,
          max: 30,
          message: "长度在0至30之间",
          trigger: "blur",
        },
      ],
    };

    const UnlockBtn = () => {
      state.IsDisabled = !state.IsDisabled;
      state.IsDisabledSubmit = !state.IsDisabledSubmit;
      if (!state.IsDisabled) {
        state.lockDesc = "锁定";
      } else {
        state.lockDesc = "解锁";
      }
    };

    const handleFinish = async (values: any) => {
      state.spinning = !state.spinning;

      UpdateGlobleParameter(DataEntityState.EditData).then((res: any) => {
        console.log(res);
        if (res.isSuccess) {
           state.IsDisabled = true;
            state.IsDisabledSubmit = true;
              localStorage.setItem("UserGlobleParameter",JSON.stringify(DataEntityState.EditData));
          message.success(res.msg);
        } else {
          message.error(res.msg);
        }
        state.spinning = !state.spinning;
      });
    };

    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),

      rules,
      handleFinish,
      layout,
      UnlockBtn,
    };
  },
});
</script>

<style  scoped>
.mainWSContent {
  box-sizing: border-box;
  border: 1px solid rgba(204, 204, 204, 0.644);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
  height: calc(100vh - 92px);
  overflow: auto;
}

.mainWSContent .col {
  line-height: 30px;
}
.mainWSContent .col span {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 16px;
}

.mainWSContent .title {
  text-align: center;
  line-break: 40px;
  font-size: 22px;
  font-weight: 600;
  color: rgba(51, 108, 161, 0.774);
}

.mainWSContent .addRedStar:after {
  content: "*";
  color: red;
  font-size: 18px;
}
</style>