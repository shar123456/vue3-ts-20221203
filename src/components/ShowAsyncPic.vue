<template>
  <div>
    {{ resultValue }}
  </div>
</template>

<script lang="ts">
interface Iobg{
  tests:string
}
import { defineComponent,ref } from "vue";

export default defineComponent({
  name: "ShowAsyncPic",
  async setup() {
let resultValue=ref<string>("");
    let asyncobj = new Promise((res:(p:Iobg)=>void) => {
      setTimeout(() => {
        res({ tests: "suspense测试" });
      }, 3000);
    });
    
    asyncobj.then((p:Iobg) => {
     let sss:string=p.tests;
     
         resultValue.value=sss;
             console.log(resultValue.value);
    });
 
    return {
     resultValue
    };
  },
});
</script>

<style lang="scss" scoped>
</style>