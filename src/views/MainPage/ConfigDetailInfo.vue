<template>
  <div class="CfgDetailInfoContent">
    <div class="CfgDetailInfo">
      <a-row>
        <a-col :span="24" class="title">系统用户权限配置信息总览</a-col>
      </a-row>
      <a-row>
        <a-col
          :xs="{ span: 4 }"
          :sm="{ span: 8 }"
          :lg="{ span: 4 }"
          class="titleSub"
        >
          <a-auto-complete
            v-model:value="UserName"
            style="width: 100%"
            placeholder="请输入用户名"
            @search="handleSearch"
          >
            <template #dataSource>
              <a-select-option v-for="temp in result" :key="temp">
                {{ temp }}
              </a-select-option>
            </template>
          </a-auto-complete>
        </a-col>
        <a-col
          :xs="{ span: 14 }"
          :sm="{ span: 15 }"
          :lg="{ span: 3 }"
          class="titleSub"
        >
          <a-button type="primary" @click="searchBtn">搜索</a-button
          >&nbsp;&nbsp;
          <a-button
            v-if="QueryId != '' && QueryId != undefined"
            type="primary"
            @click="returnBtn"
            >返回</a-button
          >
        </a-col>
      </a-row>
      <div id="tttt" class="content">
        <div
          v-if="!(list && list.length)"
          style="
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <a-empty description="暂无数据" />
        </div>



        <line-111
          style="  display: flex;
  align-items: center;justify-content: center;"
          v-if="(list && list.length)"
          :list="list"
          :showfields="showFields"
        ></line-111>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import line111 from "../../components/LeaderLine.vue";
import { reactive, toRefs, defineComponent, onMounted, ref } from "vue";
import { getUserByName } from "../../Request/userRequest";
import { useRouter, useRoute } from "vue-router";
import LeaderLine from 'leader-line-vue'
export default defineComponent({
  components: {
    line111,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const route = useRoute();
    const router = useRouter();
    let QueryId = ref<any>("");
    let UserName = ref<string>("");
    const result = ref<string[]>([]);
    const handleSearch = (val: string) => {
      let res: string[];

      getUserByName({ Name: val }).then((res1: any) => {
        if (res1.isSuccess) {
          result.value = res1.datas;
        }
      });
    };

    const list = ref([
      //datasource
      {
        id: "1",

        type: "用户",
        userName: "Admin",
        createTime: "2022-05-20",
        children: [
          {
            id: "1-1",

            roleName: "管理员",
            type: "角色",
            createTime: "2020-12-15",
            children: [
              
              {
                id: "1-13",
                type: "菜单",
                menuName: "看板管理",
                urlAddress: "/Home/SeeingPanelPage",
                createTime: "2022-05-20",
              },

              {
                id: "1-14",
                type: "菜单",
                menuName: "首页",
                urlAddress: "/Home/MainPage",
                createTime: "2022-05-20",
              },
            ],
          },
          {
            id: "1-2",
            type: "角色",
            roleName: "车间主任",
            createTime: "2020-12-15",
             children: [
              {
                id: "1-111",
                menuName: "系统设置",
                type: "菜单",
                urlAddress: "/Home/UserListPage",
                createTime: "2022-05-20",
              },
              {
                id: "1-121",
                type: "菜单",
                menuName: "审批管理",
                urlAddress: "/Home/CreateExaminationPage",
                createTime: "2022-05-20",
              }
              
            ],
          },
        ],
      },
    ]);

    const showFields = ref([
      {
        name: "名称：",
        key: "userName",
      },
      {
        name: "名称：",
        key: "roleName",
      },
      {
        name: "名称：",
        key: "menuName",
      },
      {
        name: "路径：",
        key: "urlAddress",
      },

      {
        name: "创建时间：",
        key: "createTime",
      },
    ]);

    onMounted(() => {
      QueryId.value = route.query.Id;
      console.log("获取到的参数", route.query.Id);

      console.log(localStorage.getItem("UserName"));










    });
    const returnBtn = () => {
      router.push({ path: "/Home/UserListPage", query: {} });
    };
    const searchBtn = () => {
      //
    };

    return {
      ...toRefs(state),
      returnBtn,
      QueryId,
      searchBtn,
      result,
      handleSearch,
      UserName,
      list,
      showFields,
    };
  },
});
</script>

<style  >
.CfgDetailInfoContent {
  box-sizing: border-box;
  border: 0px solid rgba(255, 0, 0, 0.288);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
overflow: auto;
  height: calc(100vh - 94px);
}
.CfgDetailInfo {
    border: 0px solid blue;
  height: 100%;
}

.CfgDetailInfo .title {
  text-align: center;
  line-break: 40px;
  font-size: 25px;
  font-weight: 600;
  color: rgba(51, 108, 161, 0.774);
}
.CfgDetailInfo .content {
  border-top: 1px dotted rgba(204, 204, 204, 0.26);
  width: 100%;
 
 
}
</style>