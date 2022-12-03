import axios from 'axios'
import router from '@/router'
//vue3项目，新的vue-router中规定的使用useRouter,useRoute只能在setup中使用!
//import router from '@/router'
	//router.push('/xxx')

// vue3项目，新的vue-router中规定的使用useRouter,useRoute只能在setup中使用!
// 所以现在的问题，不是在组件中使用vue-router，最后查了官方文档得知，如果想用router，直接引用router的实例就可以了
//https://www.csdn.net/tags/MtTaAg4sNDg4MDU1LWJsb2cO0O0O.html
import { message, Modal } from "ant-design-vue";
enum messageEnum{
"操作成功"=200,
"密码错误"=400,
"账号错误"=202,
"请求异常"=901,

}
const instance = axios.create({
   // baseURL: '/api/',
    //baseURL:process.env.VUE_APP_BASE_URL,
    //baseURL:'/mock/',
    //baseURL:'http://localhost:3165/api/',
    //baseURL:'http://192.168.8.11:8086/Api/',
    //baseURL:'http://http://localhost:8701/Api/',
    //
    //baseURL:'http://120.40.187.174:8702/Api/',
    baseURL:'/DevApi',
    timeout: 15000
})

//请求拦截
instance.interceptors.request.use(
    config => {
        //如果有一个接口需要认证token才可以访问，就在这统一设置
        const token=localStorage.getItem("starToken");
        //console.log("1111111111111token",token)

        config.headers['Authorization']=token;
      
        //console.log("axios拦截")
        //直接放行
        return config;
    }, err => {console.log("interceptors.requesterr",err)}
)

//响应拦截
instance.interceptors.response.use(
    res => {
       
      
        if(res.headers["content-type"]=='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                  {
                    return res;
                  }
                  
        {
            // const result=  res.data ? res.data : res;
            // const code:number=result.code;
            //console.log("interceptors.response",res)
              if(res.status==401)
              {
              
                message.error("检测到授权 token 已过期,请重新登录.");
                router.push({ path: "/login", query: { selected: "1" } });
                  ///alert(messageEnum[code]);
                  //return Promise.reject(result);
                  return res.data;
              }else
              {
            
                  {
                    return res.data;
                  }
              }
        }
    

        
    }, err => {
        if(err.response){
            console.log("err.response",err.response)
            if(err.response.status==401)
        { message.error("检测到授权 token 已过期,请重新登录.");
            //const router11 = useRouter();
          console.log("login",router)
          router.push({ path: "/login", query: { selected: "1" } });
            ///alert(messageEnum[code]);
            //return Promise.reject(result);
            return err.data;
        }
        if(err.response.status==500)
        { message.error("网络异常,通讯失败.");
            //const router11 = useRouter();
        
          //router11.push({ path: "/login", query: { selected: "1" } });
            ///alert(messageEnum[code]);
            //return Promise.reject(result);
            return err.data;
        }
        }
        console.log("interceptors.responseerr",err)
        
        //如果有需要授权才可以访问的接口，统一去login授权
        //如果有错误，这里面会去处理，显示错误信息
    }
)


export default instance;