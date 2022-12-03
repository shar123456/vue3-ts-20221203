<template>
    <div class="page-container">
<div class="left">
<h1>
    403
</h1>
<h1>
    当前账号没有操作权限，请联系管理员.
    <br/>
    <router-link to="/Home" class="ant-btn  ant-btn-primary">回到首页</router-link>
</h1>
</div>
<div class="right">
<img  src="../../assets/403.jpg" alt="" srcset="">
</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
.page-container{
    width: 100%;
    height: 100vh;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}
.left{
    border: 1px solid #eee;
    width: 30%;
    height: 30%;
     display: flex;
    flex-direction: column;
    justify-content: center;
   

}
.right{
    border: 1px solid #eee;
    width: 25%;
    height: 30%;
}
.right img{
    width: 100%;
    height: 100%;
}
</style>