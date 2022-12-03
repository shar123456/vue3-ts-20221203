import {dateFormat} from '../utility/commonFunc'

interface IGlobleParameterInfo {
    id: string;
    smallTopic: string;
    smallShortTopic: string;
    bigTopic: string;
   
    createTimeStr: string;
    updateTimeStr: string;
    key: string;
    TmStamp:string[];
  }



  
const GlobleParameterDatas=[
    {
        id:"WS2205280001",
        smallTopic: "STAR 智能科技",
        smallShortTopic: "star",
        bigTopic: "您好，欢迎使用企业级后台管理系统",
        createTimeStr:"2022-05-28",
        updateTimeStr:"2022-05-28",
      key: "0001",
    }]

    class GlobleParameterEntity{
       
          

          EditData:IGlobleParameterInfo={
            id: "",
            smallTopic:  "STAR 智能科技",
 
    smallShortTopic:  "star",
    bigTopic:  "您好，欢迎使用企业级后台管理系统",
    updateTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
    createTimeStr:  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(),0),
    key:  "",
    TmStamp:[]
      }


        DataList:Array<IGlobleParameterInfo>=[];
        
       
        GlobleParameterDatas:any=GlobleParameterDatas;


       

      }
     
      export {IGlobleParameterInfo,GlobleParameterEntity
    }