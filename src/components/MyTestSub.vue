<template>
    <div>
      <div :style="{'color':color}">你好啊</div>
    </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, reactive, toRefs,ref } from 'vue'

export default defineComponent({
    setup () {
        const state = reactive({
            count: 0,
        })
        //let color=ref<string|undefined>('red');
      let color=   inject<string>("color");
      console.log(color);
      onMounted(()=>{
          console.log(color);
      });
        return {
            ...toRefs(state),color
        }
    }
})
</script>

<style lang="scss" scoped>

</style>