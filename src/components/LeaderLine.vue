<template>
  <div
    class="tree-right"
    v-if="showTree"
  >
    <div class="childs">
      <div
        class="child"
        v-for="(dataItem,index) in list"
        :key="dataItem.id +'-child-'+index"
      >
        <div
          class="child-item"
          :style="{marginRight: dataItem.children && dataItem.children.length > 1 ? '20px' :''}"
        >
          <div
            class="childname"
            :id="dataItem"
          >
            <div
              class="content-box"
              @click="traceDetail(dataItem)"
              :ref="dataItem.id"
              :id="dataItem.id"
            >

             <p v-if="dataItem['type']=='角色'" style="background-color:#dedede;text-align:center"><strong>角色</strong></p>
 <p v-if="dataItem['type']=='用户'" style="background-color:#dedede;text-align:center"><strong>用户</strong></p>
 <p v-if="dataItem['type']=='菜单'" style="background-color:#dedede;text-align:center"><strong>菜单</strong></p> 

            <p 
                v-for="(showItem,index3) in showfields"
                :key="'showItem'+index3"
              >
           <span v-if="dataItem['type']=='角色'&&(showItem.key=='roleName'||showItem.key=='createTime')">
             <strong>{{showItem.name}}</strong><span :style="{'color':showItem.color}">{{dataItem[showItem.key]}}</span>
            </span>
             <span v-if="dataItem['type']=='用户'&&(showItem.key=='userName'||showItem.key=='createTime')">
             <strong>{{showItem.name}}</strong><span :style="{'color':showItem.color}">{{dataItem[showItem.key]}}</span>
            </span>
                <span v-if="dataItem['type']=='菜单'&&(showItem.key=='menuName'||showItem.key=='createTime'||showItem.key=='urlAddress')">
             <strong>{{showItem.name}}</strong><span :style="{'color':showItem.color}">{{dataItem[showItem.key]}}</span>
            </span> 
 


              </p>
             
            </div>
            <div style="width:30px"></div>
            <div
              class="position-top"
              v-if="isFirst(dataItem.id) && domready"
              :style="position_top(dataItem.id,'top')"
            ></div>
            <div
              class="position-top"
              v-if="isLast(dataItem.id)"
              :style="position_top(dataItem.id,'bottom')"
            ></div>
          </div>
          <div style="width:160px"></div>
        </div>
        <!-- 递归组件展示子节点 -->
        <div
          class="child-children"
          v-if="dataItem.children && dataItem.children.length"
        >
          <line-111
         
            :list="dataItem.children"
            :showfields="showfields"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import{useRouter} from 'vue-router'
import LeaderLine from 'leader-line-vue'
import AnimEvent from 'anim-event'




import { useStore } from "vuex";
import { computed, defineComponent, ref,onMounted,nextTick,onBeforeUnmount,watch,onBeforeUpdate,onUnmounted  } from "vue";

export default defineComponent({
 
    name: "line111",
     props: {
        list: {
            type: Array,
            default: () => [],
        },
        showfields: {
            type: Array,
            default: () => [],
        },
    },
       
  setup(props,context) {

  let   domready=ref(false)
       let     lines=ref<any>([])
let mark=ref<number>(0);

   const router=useRouter();

 const store = useStore();


onBeforeUnmount(()=> {
  
if (lines.value && lines.value.length) {
      lines.value.forEach((line:any) => {
         line.remove();
        });
     }
})


onMounted(()=>{

 nextTick(() => {
   
  domready.value= true;
            drawArrowLine()
   
          
               
        })





    window.addEventListener('resize', () => {
    if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                      line.position();
                })
                  
            }
    }, false);

        document?.getElementById("tttt")?.addEventListener('resize', () => {
    if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                      line.position();
                })
                  
            }
    }, false);


document.getElementById("tttt")?.addEventListener('mousewheel', () => {
     if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                  
                      line.hide();
                })
            }
          setTimeout(()=>{
  
  
let showEffectName = 'draw'
      // 动画参数
let animOptions = {
   duration: 500, //持续时长
   timing: 'ease-in' // 动画函数
}
  if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                 line.show(showEffectName, animOptions)
                      line.position();
                })
            }},500)
    }, false)
    document.getElementById("tttt")?.addEventListener('scroll', () => {

   if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                  
                      line.hide();
                })
            }
          setTimeout(()=>{
  
  
let showEffectName = 'draw'
      // 动画参数
let animOptions = {
   duration: 500, //持续时长
   timing: 'ease-in' // 动画函数
}
  if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                 line.show(showEffectName, animOptions)
                      line.position();
                })
            }},500)
   
            
         
        
    })

})


 watch(
      () => store.state.CollapseMark,
      (newValue) => {
      console.log(newValue)
        if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                  
                      line.hide();
                })
            }
          setTimeout(()=>{
  
  
let showEffectName = 'draw'
      // 动画参数
let animOptions = {
   duration: 500, //持续时长
   timing: 'ease-in' // 动画函数
}
  if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                 line.show(showEffectName, animOptions)
                      line.position();
                })
            }},500)
   
        
          
           
      }
    );


let showTree = computed(() => {
      return  props.list && props.list.length
    })



  /**
         * 查看追踪详情
         */
       let traceDetail=(data:any)=> {
            //
        }
        /**
         * 递归绘制箭头
         */
    let   drawArrowLine=()=>{
     
            drawLeaderLine(props.list)
        }
        /**
         * 销毁所有线条
         */
      let  destoryLine=()=>{
            if(lines.value && lines.value.length){
                lines.value.forEach((line:any) => {
                    line.remove()
                })
            }
        }
        /**
         * 根据上下级关系绘制线条
         */
      let  drawLeaderLine=(list:any)=>{
         
            list.forEach((element:any)=> {
                let start =  document.getElementById(element.id)
                if(element.children && element.children.length){
                    element.children.forEach((child:any) => {
                        let line = LeaderLine.setLine(start,  document.getElementById(child.id))
                        line.startPlug = 'square'
                        line.color = '#1890ff'
                       
                        line.size = 3
                        line.setOptions({
                            dash: {animation: true},
                        })
                        line.path="grid"
                        lines.value.push(line)
                      
                    })
                 
                   
                   
                }
            })
        }
      let  position_top=(id:any, position:any)=> {
            let dom = document.getElementById(id)
            let height:any=0;
            if (dom) {
                height = dom.clientHeight
            }
            let rt
            if (position === 'top') {
                rt = {
                    height: height / 2 - 2 + 'px',
                    top: 0,
                }
            }
            if (position === 'bottom') {
                rt = {
                    height: height / 2 + 1 + 'px',
                    bottom: 0,
                }
            }
            return rt
        }
       let isFirst=(id:any)=>{
            return (
                props.list.length > 1 && props.list.map((x:any) => x.id).indexOf(id) === 0
            )
        }
      let  isLast=(id:any)=>{
            return (
                props.list.length > 1 &&
        props.list.map((x:any) => x.id).indexOf(id) === props.list.length - 1
            )
        }





















       return {
   isFirst,isLast,showTree,position_top,drawLeaderLine
    };
  },
});






</script>

<style  >
  .tree-right {
  display: flex;
  
}
.tree-right p {
  margin: 0;
  font-size: 13px;
}
.tree-right .father {
  width: 70px;
  background-color: red;
  padding: 100px 10px;
}
.tree-right .childs .child {
  display: flex;
  background-color: #fff;
}
.tree-right .childs .child .child-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.tree-right .childs .child .child-item .childname {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
 
  text-align: center;
  justify-content: center;
  position: relative;
  padding: 10px 0;
}
.tree-right .childs .child .child-item .childname .content-box {
  text-align: left;
  border: 1px solid #e8e8e8;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  -webkit-box-shadow: 0 1px 5px 1px #dadce0;
  box-shadow: 0 1px 5px 1px #dadce0;
  font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
  font-size: 13px;
  font-weight: 500;
}
.tree-right .childs .child .child-item .childname .position-arrow {
  position: absolute;
  left: -22px;
}
.tree-right .childs .child .child-item .childname .position-top {
  position: absolute;
  width: 3px;
  background-color: #fff;
  left: -23px;
  height: 10px;
}
.tree-right .childs .child .child-item .childarrow {
  height: 100%;
  display: flex;
  align-items: center;
}
.tree-right .childs .child-children {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

svg{
  overflow: hidden!important;
}
.leader-line{
   overflow: hidden!important;
   position: fixed!important;
}
</style>
