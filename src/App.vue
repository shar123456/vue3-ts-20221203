<template>
 <a-config-provider  :locale="languageT==='zh'?zhCNLocale:enLocale" >
  <div>
    <router-view></router-view>
  </div>
    </a-config-provider>
</template>
<script lang="ts">
 import zhCN from 'ant-design-vue/es/locale/zh_CN';
      import en from 'ant-design-vue/lib/locale-provider/en_US';
     
import { defineComponent, ref } from 'vue';
export default defineComponent({
  
  setup() {
     let zhCNLocale=ref<any>(zhCN);
       let enLocale=ref<any>(en);


     
let languageT=ref<string>("zh")
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),zhCNLocale,languageT,enLocale
    };
  },
});
</script>
<style lang="scss">
  #app{
   
  }
</style>


