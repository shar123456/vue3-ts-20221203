<template>
  <div>
    <input type="text" ref="txtRef" name="" id="" />
    <input type="button" value="change" @click="changeColor" />
    <MyTestSub />

    <div
      class="container"
      style="
        width: 500px;
        height: 500px;
        border: 1px solid blue;
        margin: 0 auto;
        padding: 5px;
      "
    >
      <div class="header">
        <input
          type="text"
          ref="txtInputRef"
          placeholder="请输入内容，按回车键确认"
          name=""
          id="txtInput"
          v-model="txtvalue"
          @keyup.enter="addData"
        />
      </div>
      <div class="contents">

      <div v-if="todos.length<=0" style="display:flex;justify-content:center;align-items:center;color:red;padding-top:10px">
        暂无数据.
      </div>


        <div
          v-for="item in todos"
          @mouseenter="ShowFunc(true, item.id)"
          @mouseleave="ShowFunc(false, item.id)"
          :key="item.id"
          class="contents-sub"
        >
          <div class="C-Left">
            <input type="checkbox" v-model="item.IsCompleted" name="" id="" />
            <div>{{ item.title }}</div>
          </div>
          <div class="C-Right">
            <input v-show="item.IsShow" type="button" @click="deleteBtn(item.id)" value="删除" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="F-Left">
          <input type="checkbox" name="" id="" />
          <div>已完成2/全部4</div>
        </div>
        <div class="F-Right">
          <input type="button" value="清楚已完成任务" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onMounted,
  provide,
} from "vue";
import MyTestSub from "@/components/MyTestSub.vue";
export default defineComponent({
  components: { MyTestSub },
  setup() {
    const state = reactive({
      txtvalue: "",
    });
    const stateToDos = reactive({
      todos: [
        {
          id: 1,
          title: "奔驰",
          IsCompleted: true,
          IsShow: false,
        },
        {
          id: 2,
          title: "宝马",
          IsCompleted: true,
          IsShow: false,
        },
      ],
    });
    let IsShow = ref(false);
    const txtRef = ref<HTMLElement | null>(null);
    const txtInputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      txtRef.value && txtRef.value.focus();
      txtInputRef.value && txtInputRef.value.focus();
    });
    let h = ref("red");
    provide("color", h);
    let changeColor = () => {
      h.value = "blue";
      IsShow.value = true;
    };
    let ShowFunc = (flag: boolean, id: number) => {
      if (flag) {
        let index = stateToDos.todos.findIndex((i) => i.id == id);
        stateToDos.todos[index].IsShow = true;
        IsShow.value = true;
      } else {
        let index = stateToDos.todos.findIndex((i) => i.id == id);
        stateToDos.todos[index].IsShow = false;
        IsShow.value = false;
      }
    };
    let addData=():void=>{
       let id=1;
      if(stateToDos.todos.length>0)
      {
 let ids=stateToDos.todos.map((i,j)=>{
      return i.id;
    });
    let idsF=ids.sort((a,b)=>{
      return b-a


    });
      console.log(idsF);
     id=idsF[0]+1;
      }
   

      let todo={
          id: id,
          title: state.txtvalue,
          IsCompleted: false,
          IsShow: false,

      }
      stateToDos.todos.unshift(todo);
      state.txtvalue="";
    }
    let deleteBtn=(id:number)=>{
      if(window.confirm(`确定要删除，Id为${id}的记录么？`))
stateToDos.todos.splice((stateToDos.todos.findIndex(i=>i.id==id)),1)
    }
    return {
      ...toRefs(state),
      changeColor,
      txtRef,
      txtInputRef,
      ...toRefs(stateToDos),
      IsShow,
      ShowFunc,addData,deleteBtn
    };
  },
});
</script>

<style  scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.contents {
  width: 100%;
  min-height: 50px;
  max-height: 50%;

  border: 1px solid grey;
  overflow-y: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.contents-sub {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid grey;
  height: 50px;
}
.contents-sub:hover {
  background-color: rgba(169, 169, 169, 0.637);
}
.C-Left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
}
.header {
  width: 100%;
  height: 10%;
  border: 1px solid grey;
  padding: 5px;
}

#txtInput {
  width: 100%;
  height: 100%;
  border: 0px;
}

.footer {
  width: 100%;
  height: 10%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.F-Left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
}
</style>