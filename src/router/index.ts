import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/MainPage/HomePage.vue'
import {
  GetMenuColumn,
  GetMenuDatas,
  DeleteMenuById,
  UpdateMenuDatas,
} from "../Request/menuRequest";
import { MenuDataEntity, IMenuInfo } from "../TypeInterface/IMenuInterface";
import store from '../store'
const DataEntityState =new MenuDataEntity();

const MenuArr:any=[
  {
            path: 'HomePage',
            name: 'HomePage',
            meta:{rName:"/主页"},
            component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/HomePage.vue')
          },
          
  {
            path: 'ExaminationFlowDetail',
            name: 'ExaminationFlowDetail',
            meta:{rName:"/审批管理/审批流程详情",Sub:"sub5"},
            component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationFlowDetail.vue')
          },
          
          {
            path: 'ExaminationTaskDetail',
            name: 'ExaminationTaskDetail',
            meta:{rName:"/审批管理/审批任务详情",Sub:"sub5"},
            component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationTaskDetail.vue')
          },
          {
                    path: 'WorkScheduleDetail',
                    name: 'WorkScheduleDetail',
                    meta:{rName:"/工作计划管理/工作计划明细",Sub:"gzjh"},
                    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/WorkScheduleDetail.vue')
                  },
                  // {
                  //   path: 'GlobleParameterConfig',
                  //   name: 'GlobleParameterConfig',
                  //   meta:{rName:"/系统设置/全局参数配置",Sub:"sub1"},
                  //   component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/GlobleParameterConfig.vue')
                  // },
];



//const routes: Array<RouteRecordRaw> = [
// const routes: Array<any> = [
//   {
//     path: '/',
//     name: 'Home1',
//     meta:{rName:"/首页/"},
//     //component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
//     redirect: "/Home/HomePage"
//   },
//   {
//     path: '/Home',
//     name: 'Home',
//     meta:{rName:"/首页/"},
//     component: Home,
//     children:[
//       {
//         path: 'testPage',
//         name: 'testPage',
//         meta:{rName:"/首页/测试",Sub:"sub1"},
//         component: "/"
//       },
//       {
//         path: 'testPage',
//         name: 'testPage',
//         meta:{rName:"/首页/测试",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/textPage.vue')
//       },
//       {
//         path: 'HomePage',
//         name: 'HomePage',
//         meta:{rName:"/主页"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/HomePage.vue')
//       }
//       ,
//       {
//         path: 'MainPage',
//         name: 'MainPage',
//         meta:{rName:"/首页/MainPage",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/MainPage.vue')
//       }
//       ,
//       {
//         path: 'ToDoList',
//         name: 'ToDoList',
//         meta:{rName:"/首页/ToDoList",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ToDoList.vue')
//       }
//       ,
//       {
//         path: 'MyTest',
//         name: 'MyTest',
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/MyTest.vue')
//       }
//       ,
//       {
//         path: 'UserListPage',
//         name: 'UserListPage',
//         meta:{rName:"/系统设置/用户列表",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/UserListPage.vue')
//       }
//       ,
//       {
//         path: 'RolePage',
//         name: 'RolePage',
//         meta:{rName:"/系统设置/角色列表",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/RolePage.vue')
//       }
//       ,
//       {
//         path: 'LoginRecordPage',
//         name: 'LoginRecordPage',
//         meta:{rName:"/系统设置/登录记录",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/LoginRecordPage.vue')
//       }
//       ,
//       {
//         path: 'MenuPage',
//         name: 'MenuPage',
//         meta:{rName:"/系统设置/菜单列表",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/MenuPage.vue')
//       }
//       ,
//       {
//         path: 'ManagerFilePage',
//         name: 'ManagerFilePage',
//         meta:{rName:"/系统设置/文件管理",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ManagerFilePage.vue')
//       }
//       ,
//       {
//         path: 'RemindRecordPage',
//         name: 'RemindRecordPage',
//         meta:{rName:"/系统设置/通知提醒记录",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/RemindRecordPage.vue')
//       }
//       ,
//       {
//         path: 'DevicePage',
//         name: 'DevicePage',
//         meta:{rName:"/设备管理/设备列表",Sub:"sub3"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/DevicePage.vue')
//       }
//       ,
//       {
//         path: 'RoleListPage',
//         name: 'RoleListPage',
//         meta:{rName:"/系统设置/角色列表",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/RoleListPage.vue')
//       }
//       ,
//       {
//         path: 'ConfigDetailInfo',
//         name: 'ConfigDetailInfo',
//         meta:{rName:"/系统设置/配置信息",Sub:"sub1"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ConfigDetailInfo.vue')
//       }
//       ,
//       {
//         path: 'CreateExaminationPage',
//         name: 'CreateExaminationPage',
//         meta:{rName:"/审批管理/创建审批任务",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/CreateExaminationPage.vue')
//       }
//       ,
//       {
//         path: 'ExaminationFlowPage',
//         name: 'ExaminationFlowPage',
//         meta:{rName:"/审批管理/创建审批流程",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationFlowPage.vue')
//       }
//       ,
//       {
//         path: 'ExaminationTaskPage',
//         name: 'ExaminationTaskPage',
//         meta:{rName:"/审批管理/审批任务列表",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationTaskPage.vue')
//       } ,
//       {
//         path: 'ExaminationListPage',
//         name: 'ExaminationListPage',
//         meta:{rName:"/审批管理/审批列表",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationListPage.vue')
//       }
//       ,
//       {
//         path: 'ExaminationFlowListPage',
//         name: 'ExaminationFlowListPage',
//         meta:{rName:"/审批管理/审批流程列表",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationFlowListPage.vue')
//       }
//       ,
//       {
//         path: 'ExaminationFlowDetail',
//         name: 'ExaminationFlowDetail',
//         meta:{rName:"/审批管理/审批流程详情",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationFlowDetail.vue')
//       },
      
//       {
//         path: 'ExaminationTaskDetail',
//         name: 'ExaminationTaskDetail',
//         meta:{rName:"/审批管理/审批任务详情",Sub:"sub5"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/ExaminationTaskDetail.vue')
//       },



//       {
//         path: 'SeeingPanelPage',
//         name: 'SeeingPanelPage',
//         meta:{rName:"/看板管理/看板列表",Sub:"sub4"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/SeeingPanelPage.vue')
//       },
//       {
//         path: 'WorkSchedulePage',
//         name: 'WorkSchedulePage',
//         meta:{rName:"/工作计划管理/工作计划列表",Sub:"gzjh"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/WorkSchedulePage.vue')
//       },
//       {
//         path: 'CreateWorkSchedule',
//         name: 'CreateWorkSchedule',
//         meta:{rName:"/工作计划管理/创建工作计划",Sub:"gzjh"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/CreateWorkSchedule.vue')
//       }
      
//       ,
//       {
//         path: 'MyCalendarPage',
//         name: 'MyCalendarPage',
//         meta:{rName:"/工作计划管理/我的日历",Sub:"gzjh"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/MyCalendarPage.vue')
//       } ,
//       {
//         path: 'WorkScheduleDetail',
//         name: 'WorkScheduleDetail',
//         meta:{rName:"/工作计划管理/工作计划明细",Sub:"gzjh"},
//         component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/WorkScheduleDetail.vue')
//       }
      


      

//     ]
//   },
//   {
//     path: '/about',
//     name: 'About', 
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/403',
//     name: '403',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Error/403.vue')
//   }
//   ,
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Login/register.vue')
//   },
// ]


let routes: Array<RouteRecordRaw> =[
  {
    path: '/',
    name: 'Home1',
    meta:{rName:"/首页/"},
    //component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    redirect: "/Home/HomePage"
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    meta:{rName:"/首页/"},
    component: Home,
    children:MenuArr
  },
    {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export function resetRouter():void{
  // router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  //   routes
  // })
 // console.log(store)
  store.commit('set_allRoutes',[])
  
  }

  export function getInitRouter():void{
   //
    
    }







// router.addRoute('Home',{
//           path: 'RoleListPage',
//           name: 'RoleListPage',
//           meta:{rName:"/系统设置/角色列表",Sub:"sub1"},
//           component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/RoleListPage.vue')
//         })





router.beforeEach((to:any,from:any,next:any)=>{
  //console.log(to.path)
  if(to.path==="/login"||to.path==="/register")
  {
   // console.log("/login",to.path);
    resetRouter();
    next();
  }
  else
  {
    const token=localStorage.getItem("starToken");
    //console.log(token);
    
    if(!token){
      next("/login");
    }
    else
    {

      

      //不是去首页的话，判湖store仓库中的aLLroutes是不是有值了，如果有说明己经构造过了，就跳转
     
      if(store.state.allRoutes&&store.state.allRoutes.length>0){
//console.log("store.state.allRoutes",store.state.allRoutes)
        // routes=store.state.allRoutes
      //  console.log("s111tore.state.allRoutes",store.state.allRoutes)
        // router = createRouter({
        //   history: createWebHistory(process.env.BASE_URL),
        //   routes
        // })
       next();
       //next({ ...to })
      }
        else{
          //console.log("getInitRouter",store.state.allRoutes)
        
          GetMenuDatas({
            current: 1,
            pageSize: 1000,
            ...DataEntityState.QueryConditionInfo,
          }).then((res: any) => {
           
            if (res.isSuccess) {
              //console.log("111111routerMenu",res.datas);
               if(res.datas!=undefined&&res.datas!=null){
               
                res.datas.forEach((element:any) => {
                  // console.log("routerMenuelement",element);
                   if(element.menuLevel==1)
                   {
                    if(element.hasSub=="是")
                    {
                      element?.children?.forEach((elementSub2:any) => {
                        const menuPageTemp= elementSub2.menuUrl.split('/');
                        const menuPage=menuPageTemp[menuPageTemp.length-1]
                       // console.log("menuPage",menuPage);
                        // MenuArr.push(
                        //   {
                        //     path: menuPage,
                        //     name: menuPage,
                        //     meta:{rName:"/"+element.menuTitle+"/"+elementSub2.menuTitle,Sub:element.menuKey},
                        //     component: () => import(/* webpackChunkName: "about" */ `../views/MainPage/${menuPage}.vue`)
                        //   }
                        // );
          
                        router.addRoute('Home',{
                          path: menuPage,
                          name: menuPage,
                          meta:{rName:"/"+element.menuTitle+"/"+elementSub2.menuTitle,Sub:element.menuKey},
                          component: () => import(/* webpackChunkName: "about" */ `../views/MainPage/${menuPage}.vue`)
                        })
                         
                    
          
                        })
                    }
                   
                    
                   }
          
          
                });
          
                //console.log("set");
                //将更新后的路由提交给store，后续展示中会从store中获取
                             store.commit( 'set_allRoutes' , router.getRoutes());
                             //console.log("111埃夫特rgetInitRouter",store.state.allRoutes)
                             next({...to,replace:true});
                              
                //console.log("MenuArr",MenuArr);
               }
            
            }
          });
       
        
        }















      //next();
    }
  }

})

export default router
