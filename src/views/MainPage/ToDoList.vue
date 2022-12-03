<template>
  <div id="Container">
    <div id="up">
      <div id="up-left">LcTODO</div>
      <div id="up-right">
        <input type="text" v-model="msg" @keydown.enter="addMsg" />
      </div>
    </div>
    <div id="middle">
      <div id="middle-up">
        <div id="middle-up-left">正在进行</div>
        <div id="middle-up-right">{{ dolingList.length }}</div>
      </div>
      <div id="middle-down">
        <span class="doingList" v-for="item in dolingList" :key="item.id">
          <input
            @change="removeList(item.id)"
            class="one"
            type="checkbox"
            :value="item.id"
          />
          <div class="two">{{ item.content }}</div>
          <a
            class="three"
            @click.prevent="deleteList"
            :data-id="item.id"
            href=""
            >删除</a
          >
        </span>
      </div>
    </div>
    <div id="down">
      <div id="down-up">
        <div id="down-up-left">已完成</div>
        <div id="down-up-right">{{ doneList.length }}</div>
      </div>
      <div id="down-down">
        <span
          class="doingList donelist"
          v-for="item in doneList"
          :key="item.id"
        >
          <input
            @change="removeList(item.id)"
            class="one"
            type="checkbox"
            name="cks"
            :value="item.id"
          />
          <div class="two">{{ item.content }}</div>
          <a
            class="three"
            @click.prevent="deleteList"
            :data-id="item.id"
            href=""
            >删除</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let toDoList = ref([
      { id: 1, content: "1", isDone: false },
      { id: 2, content: "2", isDone: false },
      { id: 3, content: "3", isDone: false },
      { id: 4, content: "4", isDone: false },
    ]);
    let msg = ref("");
    let checks = ref([]);
    const addMsg = () => {
      if (msg.value.trim() != "") {
        let num = 0;
        toDoList.value.forEach((e) => {
          if (e.id > num) {
            num = e.id;
          }
        });
        toDoList.value.push({ id: num + 1, content: msg.value, isDone: false });
      }
    };
    const deleteList = (event: MouseEvent) => {
      let delId = (event?.target as HTMLElement)?.dataset.id;
      let indexs: number = parseInt(delId == undefined ? "0" : delId);
      let delIndex = toDoList.value.findIndex((i) => i.id == indexs);
      toDoList.value.splice(delIndex, 1);
    };
    const dolingList = computed(() => {
      return toDoList.value.filter((i) => !i.isDone);
    });
    const doneList = computed(() => {
      return toDoList.value.filter((i) => i.isDone);
    });
    const removeList = (id: number) => {
      let removeEntity = toDoList.value.filter((i) => i.id == id);
      removeEntity[0].isDone = !removeEntity[0].isDone;
    };
    return {
      toDoList,
      deleteList,
      msg,
      addMsg,
      dolingList,
      doneList,
      checks,
      removeList,
    };
  },
});
</script>

<style scoped>
#Container {
  width: 50%;
  height: 600px;
  background-color: #dedede96;
  border: 3px outset #eee;
  margin: 20px auto;
}
#up {
  width: 100%;
  background-color: tan;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#up-left {
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  color: #eee;
}
#up-right {
  width: 70%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
#up-right input {
  width: 80%;
  height: 80%;
  border-radius: 15px;
  font-size: 30px;
  font-weight: 300;
}
#middle {
  width: 100%;
  background-color: rgba(83, 175, 71, 0.911);
  height: calc((100% - 80px) / 2);
  padding: 10px;
}
#middle-up {
  width: 100%;
  height: 20%;
  background-color: rgba(0, 128, 128, 0.411);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
  font-weight: 600;
  color: #eee;
}
#middle-down {
  width: 100%;
  height: 80%;
  background-color: rgba(179, 178, 184, 0.966);
  overflow-y: auto;
}
#down {
  width: 100%;
  background-color: rgb(185, 29, 146);
  height: calc((100% - 80px) / 2);
  padding: 10px;
}
#down-up {
  width: 100%;
  height: 20%;
  background-color: rgba(0, 128, 128, 0.411);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
  font-weight: 600;
  color: #eee;
}
#down-down {
  width: 100%;
  height: 80%;
  background-color: rgba(179, 178, 184, 0.966);
  overflow-y: auto;
}
.doingList {
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  border: 1px dotted #eee;
  align-items: center;
  justify-content: space-between;
  color: black;
  margin-bottom: 3px;
  background-color: cyan;
}
.one {
  width: 3%;
  height: 50%;
}
.two {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
}
.three {
  width: 10%;
  text-align: center;
  height: 100%;
  color: rgb(226, 50, 6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.donelist {
  background-color: rgb(142, 148, 130);
  opacity: 0.5;
}
</style>