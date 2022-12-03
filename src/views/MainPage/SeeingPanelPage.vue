<template>
    <div class="SeeingPanelContent">
         <a-row  class="seeingRow" type="flex" justify="space-around">
    <a-col v-for="(item,index) in panelArray" :key="index" class="seeingCol" :span="5"><div style="height:87%;border:3px outset rgba(129, 180, 209, 0.829);
border-radius: 5px;"><a-image
   
    :src="item.path"
  /></div> 
  <div style="height:13%;display:flex;justify-content:center;align-items: center;background-color:  white;
  font-size: 600;font-size: 16px;"><a @click="kbbtn">{{item.name}}</a></div>
  </a-col>
  
  </a-row>

    </div>
</template>

<script lang="ts">
import { reactive, toRefs,defineComponent,ref } from 'vue'

export default defineComponent({
    setup () {
        const state = reactive({
            count: 0,
            
        })
        let panelArray=ref<any[]>([]);
    panelArray.value=[{"name":"材料管理看板","path":require('../../assets/panel1.jpg')},
    {name:"生产管理看板",path:require('../../assets/panel2.jpg')},
    {name:"包装生产运营管理看板",path:require('../../assets/panel3.jpg')},
    {name:"销售版图",path:require('../../assets/panel5.jpg')},
        {name:"生产运营看板",path:require('../../assets/panel6.jpg')},
            {name:"一车间看板",path:require('../../assets/05-02.jpg')},
                {name:"二车间看板",path:require('../../assets/05-01.jpg')},
                   
                                                
    {name:"智能产线看板",path:require('../../assets/11-01.jpg')}]

    const kbbtn=()=>{
window.open(
                        "http://localhost:8858/About",
                        '_blank',//是否在新的页面打开
                        'width=500,height=500,toolbar=no,scrollbars=no,menubar=no,screenX=100,screenY=100'
                         )


    }
        return {
            ...toRefs(state),panelArray,kbbtn
        }
    }
})
</script>

<style  >
.SeeingPanelContent {
  box-sizing: border-box;
  border: 1px solid rgba(204, 204, 204, 0.644);
  background-color: rgba(223, 223, 223, 0);
  width: 100%;
  height: calc(100vh - 92px);
  overflow: auto;
  padding-top:10px
}
.seeingRow{

}
.seeingCol{
height: 270px;
text-align: center;
display: flex;
flex-direction: column;
margin-bottom: 18px;
cursor: pointer;

}
.seeingCol:hover{
   box-shadow: 0 0 22px rgba(69, 104, 117, 0.651);
   border:2px solid rgba(69, 104, 117, 0.851);
}
.ant-image-preview-img-wrapper
{
    /* left:55%!important;
    bottom: 60%!important; */
    position: relative!important;
    width:60%!important;;
      height:80%!important;;
      margin: 0 auto;
      margin-top: 3%;
    border:0px solid red!important;
}
.ant-image-preview-img
{
    position: absolute!important;
    top:0px!important;
    width: 100%!important;
     height: 100%!important;
}
/* 图片缩小的状态下模糊解决办法 */
/* https://tsxiaochen.com/child/pskills/317.html */
.ant-image-img,.ant-image{
    height:100%!important;    width: 100%!important;
     backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden; 

}


</style>