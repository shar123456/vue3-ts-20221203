import { ref } from 'vue';

import axios from 'axios'


const  currentTime = ref("");
const GetNowTime = () => {
    const now = new Date();
    const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minus =
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const sec =
        now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    currentTime.value = `${hour}：${minus}：${sec}`;
    setTimeout(GetNowTime, 1000);
};


function GetImageAxios(url:string):any{
   
     return  axios.get(url);
  
}

function GetRandom(min:number,max:number):number{
    return Math.floor(Math.random()*(max-min))+min

}
function dateFormat(fmt:any, date:any,addday:number) {
    date.setDate(date.getDate()+addday);
    let ret;
    const opt:any = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": (date.getDate()).toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
function deepClone(obj:any){
    let objClone:any = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    

export {currentTime,GetNowTime,GetImageAxios,GetRandom,dateFormat,deepClone}