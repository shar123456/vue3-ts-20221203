<template>
  <a-layout id="Main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible  :style="{ overflow: 'auto', height: '100vh',display:menuShow }">
      <div class="logo">
        <span :class="titleTxt1">{{ titleTxt }}</span>
      </div>

      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
          @openChange="onOpenChange"
      >


 
     <a-menu-item key="/Home/HomePage">
          <!-- <AppstoreOutlined /> -->
          <iconFont  IconStr="BankOutlined"  />
          <span
            ><router-link
              to="/Home/HomePage"
              style="color: rgba(255, 255, 255, 0.65)"
              >首页</router-link
            ></span
          >
        </a-menu-item>

   
    
        
       
     
       


           
<template  v-for="item1 in menuList" :key="item1.key">

  <a-menu-item  v-if="(item1.hasSub=='否'&&item1.menuLevel==1)" :key="item1.menuKey" >
           <iconFont  :IconStr="item1.menuIcon"  />
          <span
            ><router-link
              :to="item1.menuUrl"
              style="color: rgba(255, 255, 255, 0.65)"
              >{{item1.menuTitle}}</router-link
            ></span
          >
    </a-menu-item>



    
<a-sub-menu  v-if="item1.hasSub!='否'&&item1.menuLevel==1"  :key="item1.menuKey">
 <template #icon>
          <iconFont  :IconStr="item1.menuIcon"  />
          </template>
          <template #title>{{item1.menuTitle}}</template>


<template   v-for="item2 in item1.children"    :key="item2.key">

<a-menu-item  v-if="item2.hasSub=='否'&&item2.menuLevel==2" :key="item2.menuKey">
       <iconFont  :IconStr="item2.menuIcon"  />
          <span
            ><router-link
              :to="item2.menuUrl"
              style="color: rgba(255, 255, 255, 0.65)"
              >{{item2.menuTitle}}</router-link
            ></span
          >
    </a-menu-item>
<a-sub-menu  v-if="item2.hasSub=='是'&&item2.menuLevel==2"  :key="item2.menuKey" >
 <template #icon>
            <iconFont  :IconStr="item2.menuIcon"  />
          </template>
          <template #title>{{item2.menuTitle}}</template>



<template    v-for="item3 in item2.children"    :key="item3.key">
 <a-menu-item  v-if="item3.hasSub=='否'&&item3.menuLevel==3" :key="item3.menuKey">
          <iconFont  :IconStr="item3.menuIcon"  />
          <span
            ><router-link
              :to="item3.menuUrl"
              style="color: rgba(255, 255, 255, 0.65)"
              >{{item3.menuTitle}}</router-link
            ></span
          >
    </a-menu-item>

<a-sub-menu  v-if="item3.hasSub=='是'&&item3.menuLevel==3"    :key="item3.menuKey">
 <template #icon>
           <iconFont  :IconStr="item3.menuIcon"  />
          </template>
          <template #title>{{item3.menuTitle}}</template>

<template    v-for="item4 in item3.children"    :key="item4.key">
 <a-menu-item  v-if="item4.hasSub=='否'&&item4.menuLevel==4" :key="item4.menuKey">
          <iconFont  :IconStr="item4.menuIcon"  />
          <span
            ><router-link
              :to="item4.menuUrl"
              style="color: rgba(255, 255, 255, 0.65)"
              >{{item4.menuTitle}}</router-link
            ></span
          >
    </a-menu-item>


</template>




 








  </a-sub-menu>



</template>



  </a-sub-menu>

    
</template>
  
  </a-sub-menu>

</template> 


  <!-- <a-sub-menu  v-for="item in menuList"    :key="item.key">
 <template #icon>
            <SettingOutlined />
          </template>
          <template #title>{{item.title}}</template>

          <a-menu-item v-for="subItem in item.subMenu"  :key="subItem.key">
         {{subItem.icon}}
            <span
              ><router-link
                :to="subItem.url"
                style="color: rgba(255, 255, 255, 0.65)"
                >{{subItem.title}}</router-link
              ></span
            >
          </a-menu-item>


  </a-sub-menu> -->




        <!-- <a-sub-menu key="sub1">
          <template #icon>
            <SettingOutlined />
          </template>
          <template #title>系统设置</template>

          <a-menu-item key="/Home/UserListPage">
            <user-outlined />
            <span
              ><router-link
                to="/Home/UserListPage"
                style="color: rgba(255, 255, 255, 0.65)"
                >用户列表</router-link
              ></span
            >
          </a-menu-item>
          <a-menu-item key="/Home/LoginRecordPage">
            <SnippetsOutlined />
            <span
              ><router-link
                to="/Home/LoginRecordPage"
                style="color: rgba(255, 255, 255, 0.65)"
                >登录记录</router-link
              ></span
            >
          </a-menu-item>
          <a-menu-item key="/Home/RolePage">
            <TrademarkCircleOutlined />
            <span
              ><router-link
                to="/Home/RolePage"
                style="color: rgba(255, 255, 255, 0.65)"
                >角色列表</router-link
              ></span
            >
          </a-menu-item>

          <a-menu-item key="/Home/testPage">
            <user-outlined />
            <span
              ><router-link
                to="/Home/testPage"
                style="color: rgba(255, 255, 255, 0.65)"
                >test page</router-link
              ></span
            >
          </a-menu-item>

          <a-menu-item key="/Home/MainPage">
            <video-camera-outlined />
            <span
              ><router-link
                to="/Home/MainPage"
                style="color: rgba(255, 255, 255, 0.65)"
                >首页</router-link
              ></span
            >
          </a-menu-item>

          <a-menu-item key="/Home/ToDoList">
            <upload-outlined />
            <span
              ><router-link
                to="/Home/ToDoList"
                style="color: rgba(255, 255, 255, 0.65)"
                >ToDoList</router-link
              ></span
            >
          </a-menu-item>
          <a-menu-item key="/Home/MyTest">
            <upload-outlined />
            <span
              ><router-link
                to="/Home/MyTest"
                style="color: rgba(255, 255, 255, 0.65)"
                >MyTest</router-link
              ></span
            >
          </a-menu-item>

          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="/Home/ToDoList">
            <upload-outlined />
            <span
              ><router-link
                to="/Home/ToDoList"
                style="color: rgba(255, 255, 255, 0.65)"
                >ToDoList</router-link
              ></span
            >
          </a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        class="headerLayout"
        style="background: #fff; padding: 0"
      >
        <a-row>
          <a-col :xs="6" :sm="0" :md="2" :lg="2" :xl="2">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="Mycollapsed(collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="Mycollapsed(collapsed)"
            />
          </a-col>
          <a-col :xs="0" :sm="0" :md="0" :lg="10" :xl="7">
            <span  ref="homeDesc"
              style="
                font-size: 18px;
                font-weight: 600;
                color: rgb(33, 124, 160);
              "
              >{{bigTopic}}</span
            >
          </a-col>

  <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="9" style="border:0px solid red">
       
         
      
          </a-col>

          <a-col :xs="0" :sm="0" :md="0" :lg="10" :xl="4">
            <div class="funbox">
              <a href="#" title="全屏" @click="toggleFullscreen"
                ><FullscreenOutlined
              /></a>


       
      <a href="#" @click="NewMessageBtn" title="消息"
                >      <BellOutlined
              /> </a>
   
             
              <a href="#" @click="SearchMenuBtn" title="搜索"
                ><SearchOutlined
              /></a>

              <!-- <a href="#" @click="toggleFullscreen">全屏</a>
          <a href="#" @click="toggleFullscreen">全屏</a> -->
            </div>
          </a-col>
          <a-col :xs="18" :sm="0" :md="22" :lg="2" :xl="2" class="avatarCls">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                <a-avatar>
                  <template #icon> <img src="../assets/tx.jpg" /></template>
                </a-avatar>

                {{ UserTitle }}
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">个人设置</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;" @click="LogOut">退出登录</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '0px 0px',
          padding: '1px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <a-row class="breadPanel">
          <a-col
            style="border: 0px solid red"
            :xs="0"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="22"
          >
            <a-breadcrumb style="margin: 1px 0">
              <a-breadcrumb-item style="height: 30px; font-weight: 500">
                当前位置：</a-breadcrumb-item
              >
              <a-breadcrumb-item
                v-for="(item, index) in routeDescArr"
                :key="index"
                style="height: 30px; font-weight: 500"
              >
                {{ item }}
              </a-breadcrumb-item>
            </a-breadcrumb>
          </a-col>
          <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="0"> </a-col>
          <a-col
            style="border: 0px solid rgb(19, 207, 44); text-align: right"
            :xs="0"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="2"
          >
          </a-col>
        </a-row>

        <div id="homeContent"><router-view></router-view></div>
      </a-layout-content>
    </a-layout>
  </a-layout>


 <search-menu-modal
    :visibleSetting="visibleSearchMenu"
    :modalTitleSetting="modalTitleSearchMenu"
   
    @closeSearchMenuModal="CloseSearchMenu"
 
  />

  
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  FullscreenOutlined,
  BellOutlined,
  SearchOutlined,
  AppstoreOutlined,
  SettingOutlined,
  TrademarkCircleOutlined,SnippetsOutlined
} from "@ant-design/icons-vue";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import screenfull from "screenfull";
//https://blog.csdn.net/qq_26642611/article/details/109528669
import {
  GetMenuColumn,
  GetMenuDatas,
  DeleteMenuById,
  GetMenuDatasById

} from "../Request/menuRequest";

import {
  IMenuInfo
} from "../TypeInterface/IMenuInterface";
import iconFont from "../components/iconFont.vue";
import SearchMenuModal from "../components/SearchMenuModal.vue";
import {
 UpdateGlobleParameter,GetGlobleParameter
} from "../Request/GlobleParameterRequest";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    FullscreenOutlined,
    BellOutlined,
    SearchOutlined,
    AppstoreOutlined,
    SettingOutlined,
    TrademarkCircleOutlined,SnippetsOutlined,iconFont,SearchMenuModal
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
        const store = useStore();
         let UserTitle = ref("");
         let menuShow= ref("");

let homeDesc=ref(null);
 let bigTopic = ref("");
    let collapsed = ref<boolean>(false);
    let titleTxt = ref("");
    let titleTxt1 = ref("");
    let selectedKeys = ref<string[]>([route.path]);
    let routeDesc = ref<string>(route.path);
    let routeDescMeta = ref<any>(route?.meta);
     let openKeys= ref<string[]>(['']);
    const LogOut = () => {
      localStorage.setItem("starToken", "");
        localStorage.setItem("UserName", "");
      router.push({ path: "/login", query: { selected: "1" } });
    };

let rootSubmenuKeys=ref<string[]>(['sub1', 'sub3', 'sub4', 'sub5'])


const onOpenChange = (openKeyss: string[]) => {

             if(openKeyss!=undefined&&openKeyss!=[]&&openKeyss.length>0)
{
  //console.log('openKeyss',openKeyss)
    let lastItem= openKeyss[openKeyss.length-1];
    //console.log('lastItem',lastItem)
    if(!(lastItem.indexOf('sub11')>=0)){
  openKeys.value=[`${lastItem}`] 
    }
  
 }

      
    };









let visibleSearchMenu = ref<boolean>(false);
    let modalTitleSearchMenu = ref<string>("");

 const CloseSearchMenu = () => {
      visibleSearchMenu.value = false;
         modalTitleSearchMenu.value= "";
    };











let menuList=ref<IMenuInfo[]>();




let menuLists:any=[

  {
    hasSub: true,
menuIcon: "默认",
menuId: "M0001",
menuKey: "sub1",
menuLevel: 1,
menuParentId: "0000",
menuTitle: "系统设置",
menuUrl: "/",
menuorder: 1,
children:[
  {
    children: null,
current: 0,
hasSub: false,
menuIcon: "默认",
menuId: "S0001",
menuKey: "/Home/UserListPage",
menuLevel: 2,
menuParentId: "M0001",
menuTitle: "用户列表",
menuUrl: "/Home/UserListPage",
menuorder: 1,
pageSize: 0,
  },
  {
    children: null,
current: 0,
hasSub: false,
menuIcon: "默认",
menuId: "S0003",
menuKey: "/Home/LoginRecordPage",
menuLevel: 2,
menuParentId: "M0001",
menuTitle: "登录记录",
menuUrl: "/Home/LoginRecordPage",
menuorder: 2,
pageSize: 0,
  }
]
  }
]







let menuList1:any=[
{
menuId:"1",
title:"系统设置",
key:"sub1",
url:"",
menuLevel:1,
hasSub:true,
menuParentId:0,
menuIcon:"",
order:1,
subMenu:[
{
menuId:"11",
title:"用户列表",
menuParentId:1,
url:"/Home/UserListPage",
hasSub:false,
menuLevel:2,
key:"/Home/UserListPage",
menuIcon:"",
order:1,
},
{
menuId:"12",
title:"登录记录",
menuParentId:1,
url:"/Home/LoginRecordPage",
key:"/Home/LoginRecordPage",
hasSub:false,
menuLevel:2,
menuIcon:"",
order:2,
},
{
menuId:"13",
title:"菜单列表",
menuParentId:1,
url:"/Home/MenuPage",
key:"/Home/MenuPage",
hasSub:false,
menuLevel:2,
menuIcon:"",
order:3,
},





]
}

]





    onMounted(async () => {
        const GlobleParameter=localStorage.getItem("UserGlobleParameter");
        const GlobleParameterObj = JSON.parse(GlobleParameter==null?"[]":GlobleParameter)
       
         if(GlobleParameterObj!=null&&GlobleParameterObj!=undefined&&GlobleParameterObj.length!=0)
         {
        console.log("GlobleParameterObj",GlobleParameterObj);
        bigTopic.value=GlobleParameterObj.bigTopic
         }else
         {
          let GlobleParameter = await GetGlobleParameter();
  if(GlobleParameter.isSuccess&&GlobleParameter.datas!=undefined&&GlobleParameter.datas.length>0)
  {
      localStorage.setItem("UserGlobleParameter",JSON.stringify(GlobleParameter.datas[0]));
       console.log("GlobleParameterObjnew",GlobleParameter.datas[0].bigTopic);
        bigTopic.value=GlobleParameter.datas[0].bigTopic
  }
         }





 let UserDatasList = await GetMenuDatasById({
        current: 1,
        pageSize: 100,
        
      });
   

    // console.log("a555mountMenuDatas", UserDatasList);
      if (UserDatasList.isSuccess) {
        menuList.value = UserDatasList.datas;
          
      }

    console.log('menuList.value ',menuList.value );


   
      UserTitle.value=store.state.USERNAME;
      if (routeDescMeta.value && routeDescMeta.value.rName) {
    

        routeDescArr.value = routeDescMeta.value.rName.split("/");
        routeDescArr.value.splice(0, 1);
      } else {
        routeDescArr.value = routeDesc.value.split("/");
        routeDescArr.value.splice(0, 1);
      }
//  if(route.meta && route.meta.Sub&&route.meta.Sub=="sub1")
//          {
//  openKeys.value=["sub1"]
//         }
 if(route.meta && route.meta.Sub&&route.meta.Sub!="")
         {
           console.log("route",route)
           openKeys.value=[];
         let openKeyStr=  route.meta.Sub;
 openKeys.value=[`${openKeyStr}`]
        }

      if (collapsed.value) {
        titleTxt.value = "star";
        titleTxt1.value = "titleTxt11";
      } else {
        titleTxt.value = "STAR 智能科技";
        titleTxt1.value = "titleTxt12";
      }
    });
    let routeDescArr = ref<string[]>([""]);
    watch(
      () => route.path,
      (newValue, oldValue) => {
        console.log(route.meta);
        //  console.log(newValue)
        //     console.log(oldValue)
        if (route.meta && route.meta.rName) {
          routeDescArr.value = (route.meta.rName as string).split("/");
          routeDescArr.value.splice(0, 1);
        } else {
          routeDescArr.value = routeDesc.value.split("/");
          routeDescArr.value.splice(0, 1);
        }
          
       if(route.meta && route.meta.Sub&&route.meta.Sub!="")
         { 
           openKeys.value=[];
         let openKeyStr=  route.meta.Sub;
 openKeys.value=[`${openKeyStr}`]
   selectedKeys.value=[];
 let selectedKeyStr=  route.path;
  selectedKeys.value =[`${selectedKeyStr}`] 
//console.log("watchroute",openKeyStr)

        }

        // console.log(routeDesc.value);
      }
    );

    function toggleFullscreen() {
      console.log(screenfull);
      //https://blog.csdn.net/weixin_42324665/article/details/106917095
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }

 function NewMessageBtn() {
     
     store.state.NewMessageMark=!store.state.NewMessageMark
    }



function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


    const Mycollapsed = (p: boolean) => {

      //console.log("homeDesc",IsPC())
    
      if (collapsed.value) {
        menuShow.value="";
        setTimeout(() => {
          titleTxt.value = "STAR 智能科技";
        }, 500);

        titleTxt1.value = "titleTxt12";
      } else {
           if(IsPC())
      {
 menuShow.value="";
      }
      else
      {
 menuShow.value="none";
      }
        titleTxt.value = "star";
        titleTxt1.value = "titleTxt11";
      }

      collapsed.value = !collapsed.value;

    store.state.CollapseMark=!store.state.CollapseMark
 



    };



   const SearchMenuBtn=()=>{
    visibleSearchMenu.value = true;
         modalTitleSearchMenu.value= "【菜单搜索】";
   }

    return {
      selectedKeys,
      collapsed,
      LogOut,
      Mycollapsed,
      titleTxt,
      titleTxt1,
      routeDescArr,
      openKeys,
      toggleFullscreen,UserTitle,
      menuList,
      SearchMenuBtn,NewMessageBtn,

visibleSearchMenu,modalTitleSearchMenu,CloseSearchMenu,onOpenChange
      ,menuShow,homeDesc,bigTopic
    };
  },
});
</script>
<style>






.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo span {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 3px;
}

.site-layout .site-layout-background {
  background: #fff;
}

#Main {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.trigger svg {
  height: 25px !important;
  width: 25px !important;
  margin-left: 0px;
}
.avatarCls {
  border: 0px solid red;
  display: flex !important;
  justify-content: flex-end !important;
  padding-right: 5px;
  padding-left: 5px;
  align-items: flex-start;
  line-height: 40px;
}

.titleTxt11 {
  color: #fff !important;
  /* color: green !important;; */
  font-size: 15px !important;
}
.titleTxt12 {
  transition: all 3s linear;
  font-size: 15px !important;
  color: #fff !important;
}
.headerLayout {
  /* background-image: url('../assets/bg7.jpg')!important;
  background-position:center;
  background-repeat: no-repeat;
  background-size:contain; */
}
.breadPanel {
  border-bottom: 0px dotted red;
  height: 23px;
  background-color: #e5e6e9;
  margin-bottom: 3px;
}
.funbox {
  border: 0px solid red;
  display: flex !important;
  align-items: flex-start;
  justify-content: flex-end;
  line-height: 35px;
}
.funbox a {
  margin-right: 8px;
  font-size: 17px;
}
#homeContent {
box-sizing: border-box;
  overflow: auto;border:0px solid blue;
  height:calc(100vh - 91px);
}
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-item
  .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-submenu
  > .ant-menu-submenu-title
  .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-submenu
  > .ant-menu-submenu-title
  .ant-menu-item-icon,
.ant-menu.ant-menu-inline-collapsed > .ant-menu-item .anticon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-item
  .anticon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-submenu
  > .ant-menu-submenu-title
  .anticon,
.ant-menu.ant-menu-inline-collapsed
  > .ant-menu-submenu
  > .ant-menu-submenu-title
  .anticon {
  font-size: 24px !important;
}











/* 设置滚动条的样式 */
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(0,0,0,0.1);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
/* ::-webkit-scrollbar-thumb:window-inactive {
background:rgba(255,0,0,0.4);
} */









</style>

