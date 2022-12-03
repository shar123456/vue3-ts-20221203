<template>
<teleport to="#ModalApp">
    <div class="modalCenter">
        <div class="head">提示信息</div>
         <div class="content"> {{ModalMsg}}</div>
     
    </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:["ModalMsg"],
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

.modalCenter{
    width: 400px;
height:240px;
border:1px solid #eee;
position: fixed;
left: 50%;;
top:50%;
background-color: rgb(198, 204, 185);
margin-left: -160px;
margin-top:-160px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.head{
  width: 90%;
  height: 20%;
  border:1px solid #eee;
  color: blue;
  font-size:23px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content{
    width: 90%;
  height: 75%;
  border:1px solid #eee;
  border-top:0;
  color: blue;
  font-size:18px;
  font-weight: 500;
  padding: 5px;
  text-indent: 30px;
 letter-spacing: 3px;
 line-height: 30px;word-wrap:break-word;
}
</style>