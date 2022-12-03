<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
  
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
<style lang="scss">
  #app{
   
  }
</style>


