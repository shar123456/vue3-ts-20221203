<template>
  <div id="userInfo" v-if="true">
    <table>
      <tr>
        <th colspan="2">基本信息</th>
      </tr>
    
      <tr>
        <td style="width:30%">性别</td>
        <td>{{ userinfo==undefined?"暂无":userinfo.gender }}</td>
      </tr>
      <tr>
        <td>年龄</td>
        <td>{{ userinfo==undefined?"暂无":userinfo.age}}</td>
      </tr>
      <tr>
        <td>特长</td>
        <td>{{ userinfo==undefined?"暂无":userinfo.hobby }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent,  reactive, toRefs, watch ,ref} from "vue";
interface IResult {
  name: string;
  age: string;
  gender: string;
  hobby: string;
}
export default defineComponent({
  props: { nameInfo: String },
  setup(props) {
    const state = reactive({
      userinfo: {},
    });
    let IsShow =ref(false);
    const Datas = [
      { name: "STAR", age: "23", gender: "女", hobby: "唱歌，跳舞" },
      { name: "KING", age: "25", gender: "女", hobby: "演戏" },
    ];
    watch(
      () => props.nameInfo,
      async (newValue) => {
          IsShow.value=false;
        let result = new Promise((resolve) => {
          setTimeout(() => {
            let resultUser = Datas.find((i) => i.name == newValue);
            resolve(resultUser);
          }, 10);
        });

        let res = await result;
        state.userinfo = res as IResult;
            IsShow.value=true;
          
           
            
      }
    );

    return { ...toRefs(state),IsShow };
  },
});
</script>

<style scoped>
#userInfo {
  border: 0px solid blue;
  width: 300px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#userInfo table {
  border: 1px solid rgba(146, 146, 175, 0.582);
  width: 98%;
  height: 98%;
  border-collapse: collapse;
}
#userInfo table td {
  border: 1px solid rgba(146, 146, 175, 0.582);
}
#userInfo table th {
  background-color: rgba(54, 94, 112, 0.212);
  height: 40px;
}
</style>