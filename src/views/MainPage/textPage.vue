<template>
    <div>
 <HelloWorld/> 
  
<Suspense> 
<template #default>
    <div>
         <ShowAsyncPic /> 
        
  </div>

</template>
<template #fallback>
 <div> <h1>LOADING.....</h1> </div>
 
  
</template>
    </Suspense>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ShowAsyncPic from '@/components/ShowAsyncPic.vue'


export default defineComponent({
    components:{
        HelloWorld,ShowAsyncPic
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>