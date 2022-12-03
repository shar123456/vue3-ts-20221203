<template>
  <div id="userListPad">
    <div class="upPad">
      <div class="upPad-up">
        <div>
          <label>用户Id：</label>
          <div>
            <a-input
            
              placeholder="用户Id"
            />
          </div>
        </div>
        <div>
          <label>用户名：</label>
          <div>
            <a-input
            
              placeholder="用户名"
            />
          </div>
        </div>
        <div>
          <label>手机号：</label>
          <div>
            <a-input
             
              placeholder="手机号"
            />
          </div>
        </div>
        <div>
          <label>E-mail：</label>
          <div>
            <a-input
           
              placeholder="E-mail"
            />
          </div>
        </div>
      </div>

      <div class="upPad-down">
        <div>
          <label>性别：</label>
          <div>
            <a-select
              ref="select"
            
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="男">男</a-select-option>

              <a-select-option value="女">女</a-select-option>
            </a-select>
          </div>
        </div>
        <div>
          <label>状态：</label>
          <div>
            <a-select
              ref="select"
            
              style="width: 150px"
            >
              <a-select-option value="未选择">未选择</a-select-option>
              <a-select-option value="启用">启用</a-select-option>

              <a-select-option value="禁用">禁用</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";

import { SearchOutlined,PlusOutlined, DeleteOutlined,BarChartOutlined,RedoOutlined,ClearOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    
  },
 
  setup(props, context) {
    const state = reactive({});
    

    return {
      ...toRefs(state),
     
    };
  },
});
</script>

<style  scoped>
#userListPad {
 min-height: 90px;
      height: calc(90px);
  box-sizing: border-box;
  border: 0px solid red;
  box-sizing: border-box;
  margin-bottom: 0px;


}
.upPad {
  min-height: 90px;
      height: calc(90px);
  border: 0px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
 
}
.upPad-up {
  border: 0px solid red;
  height: 50%;

  display: flex;
}
.upPad-up div {
  display: flex;
  align-items: center;

  width: 23%;
  display: flex;
  justify-content: flex-start;
}
.upPad-up div label {
  width: 20%;
  border: 0px solid red;
  margin-left: 10px;
}
.upPad-up div div {
  width: 80%;
  border: 0px solid red;
}
.upPad-down {
  border: 0px solid red;
  height: 50%;
  display: flex;
  width: 100%;
}
.upPad-down div {
  display: flex;
  align-items: center;

  width: 23%;
  display: flex;
  justify-content: flex-start;
}
.upPad-down div label {
  border: 0px solid red;
  width: 20%;
  margin-left: 10px;
}
.upPad-down div div {
  border: 0px solid red;
  width: 80%;
}


</style>