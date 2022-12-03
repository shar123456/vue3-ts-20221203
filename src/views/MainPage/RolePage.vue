<template>
  <div class="RolePage">
    <div class="RolePageQuery" :class="RolePageQueryTran">
      <RoleQueryHeader v-if="IsShowQueryPanel" />
    </div>
    <div class="RolePageFun">
      <a-button type="primary" @click="showCreateModal">
        <template #icon><plus-outlined /></template> 新增 </a-button
      >&nbsp;
      <a-button type="primary" @click="importExcel">
        <template #icon><bar-chart-outlined /></template>导出</a-button
      >&nbsp;
      <a-button danger type="primary"
        ><template #icon><delete-outlined /></template>批量删除</a-button
      >&nbsp;
      <a-button type="primary" @click="importExcel">
        <template #icon><redo-outlined /></template>刷新</a-button
      >&nbsp;
      <a-button
        type="primary"
        @click="ClearQueryBtn"
        style="background-color: goldenrod; border-color: goldenrod"
        ><template #icon><clear-outlined /></template>清空筛选条件</a-button
      >&nbsp;
      <a-button type="primary" @click="SearchBtn">
        <template #icon><SearchOutlined /></template>
        Search </a-button
      >&nbsp;&nbsp;
      <a-button type="primary" @click="showQueryPanel">
        <template #icon><SplitCellsOutlined /></template>
        {{ btnTxt }} </a-button
      >&nbsp;
    </div>
    <div class="RolePageContent">

 


    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, watch } from "vue";


import RoleQueryHeader from "../../components/RoleQueryHeader.vue";

import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  BarChartOutlined,
  RedoOutlined,
  ClearOutlined,
  SplitCellsOutlined,EditTwoTone,DeleteTwoTone
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    RoleQueryHeader,
    SearchOutlined,
    PlusOutlined,
    DeleteOutlined,
    BarChartOutlined,
    RedoOutlined,
    ClearOutlined,
    SplitCellsOutlined,
  },
  setup() {
    const state = reactive({
      IsShowQueryPanel: true,
      RolePageQueryTran: "RolePageQueryShow",
      btnTxt: "",
    });


    let visible = ref<boolean>(false);
    let modalTitle = ref<string>("");
    const deleteMark = ref<string>("");


  
    const SearchBtn = () => {
      console.log(1);
    };
    const showCreateModal = () => {
      console.log(1);
    };
    const ClearQueryBtn = () => {
      console.log(1);
    };
    const importExcel = () => {
      console.log(1);
    };
    const showQueryPanel = () => {
      if (!state.IsShowQueryPanel) {
        state.RolePageQueryTran = "RolePageQueryShow";
        state.btnTxt = "隐藏";
        setTimeout(() => {
          state.IsShowQueryPanel = true;
        }, 200);
      } else {
        state.RolePageQueryTran = "RolePageQueryHide";
        state.IsShowQueryPanel = false;
        state.btnTxt = "展开";
      }
    };


















    return {
      ...toRefs(state),
      SearchBtn,
      showCreateModal,
      ClearQueryBtn,
      importExcel,
      showQueryPanel,
 visible,
      confirm,
     
    };
  },
});
</script>

<style  >
.RolePage {
  border: 0px solid red;
  box-sizing: border-box;
  padding: 1px;
  height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.RolePageQuery {
  border: 0px solid rgb(19, 92, 201);
  box-sizing: border-box;

  min-width: 1000px;
  min-height: 90px;
  height: calc(90px);
  /* background-image: url("../../assets/bgHome.png");
    background-repeat: no-repeat; 
    background-origin: border-box;
    background-size: cover; */
}
.RolePageQueryShow {
  transition: all 0.3s linear;
  min-height: 90px;
  height: calc(90px);
}
.RolePageQueryHide {
  transition: all 0.3s linear;
  height: calc(0px);
  min-height: 0px;
}

.RolePageFun {
  border: 0px solid rgb(19, 92, 201);
  box-sizing: border-box;

  min-width: 1000px;
  min-height: 40px;
  height: calc(40px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.RolePageContent {
  border: 1px solid rgb(19, 92, 201);
  box-sizing: border-box;

  min-width: 1000px;
  min-height: 545px;
  /* height: calc(100vh - 239px); */
  flex-grow: 1;
  /* background-image: url("../../assets/bgHome.png");
    background-repeat: no-repeat; 
    background-origin: border-box;
    background-size: cover; */
  background-color: darkgray;
}














</style>