import { Collapse } from 'ant-design-vue';
import { deburr } from 'lodash';
import { createStore } from 'vuex'
import {login,register,getCode} from '../Request/login'
export default createStore({
  state: {
    TOKEN: "",
    USERNAME:(localStorage.getItem("UserName")==""||localStorage.getItem("UserName")==undefined||localStorage.getItem("UserName")==null)?"***" :localStorage.getItem("UserName"),
    CollapseMark:true,
    NewMessageMark:false,
    allRoutes:[]
  },
  mutations: {
    set_allRoutes(state, payLoad){
      //console.log("payLoadallRoutes",payLoad)
      state.allRoutes=payLoad
    }
    ,
    SetToken(state, payLoad) {
      state.TOKEN = payLoad;
    },
    SetUserName(state, payLoad) {
      state.USERNAME = payLoad;
      localStorage.setItem("UserName",payLoad);
    }
  },
  actions: {
     LoginSys({commit},payLoad){
     return new Promise((resolve)  => {
        const {user,password}=payLoad;
        setTimeout(  ()  => {          
           login({user,password}).then((res:any)=>{
       
              if (!res.result) {
                resolve({result:false,msg:res.msg});
              } else {
                commit("SetToken",res.token);
                commit("SetUserName",user);
                
                localStorage.setItem("starToken","Bearer "+res.token);
                resolve({result:true,msg:""});
               }
            }).catch((err:any)=>{
              console.log(err);
              resolve({result:false,msg:"网络异常,通讯失败."});
            });
        }, 200);
      });
    },
    RegisterSys({commit},payLoad){
      return new Promise((resolve)  => {
         
         setTimeout(  ()  => {          
          register(payLoad).then((res:any)=>{
               if (!res.result) {
                 resolve({result:false,msg:res.msg});
               } else {
                commit("SetToken","");
                commit("SetUserName","***");
                 resolve({result:true,msg:""});
                }
             }).catch((err:any)=>{
               console.log(err);
               resolve({result:false,msg:"网络异常,通讯失败."});
             });
         }, 1);
       });
     },
     GetCodeSys({commit}){
      return new Promise((resolve)  => {
         
         setTimeout(  ()  => {          
          getCode().then((res:any)=>{
               if (!res.success) {
                 resolve(false);
               } else {
                
                 resolve(res);
                }
             }).catch((err:any)=>{
               console.log(err);
               resolve(false);
             });
         }, 1);
       });
     }
  },
  modules: {
  }
})
