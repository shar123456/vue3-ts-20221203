<template>
  <div class="HomePage">
    <!-- <div class="HomePageContent"> 主页显示</div> -->

    <!-- <div class="HP-Up" style="width: 100%;
  height: 350px;">
      
      
     

       <div class="HP-Up-Left"   style="width: 70%;
  height: 350px;"   id="chinaChart"></div> 

      


     
     
     
      <div class="HP-Up-Right">
        <a-card
          :hoverable="true"
          size="small"
          title="本月工作计划"
          headStyle="font-size:21px;font-weight:600;"
          style="width: 100%; height: 100%"
        >
          <template #extra><a href="#" @click="ShowSchedule">更多</a></template>
          <div
            style="width: 100%; height: 100%; border: 0px solid red"
            v-if="ScheduleEmptyMark"
          >
            <a-empty description="暂无计划" />
          </div>
          <div style="width: 100%; height: 100%; border: 0px solid red">
            <p
              v-for="(item, index) in DataList"
              :key="index"
              @click="gotoDetail(item.id)"
            >
              {{ index + 1 }}、{{ item.workScheduleName }}.
            </p>
          </div>
        </a-card>
      </div>
      
    </div> -->





    <!-- <div class="HP-Down" style="width: 100%; height: 450px; border: 0px solid red">
      <a-row style="width: 100%; height: 350px; border: 0px solid red">
        <a-col :span="6"
          ><div style="width: 100%; height: 350px;" id="pinA"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            设备号ED0001
          </div></a-col
        >
        <a-col :span="6" style="border-left: 1px dotted #dedede"
          ><div style="width: 100%; height: 350px;" id="pinB"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            设备号ED0002
          </div></a-col
        >
        <a-col :span="6" style="border-left: 1px dotted #dedede"
          ><div style="width: 100%; height: 350px;" id="pinC"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            设备号ED0003
          </div></a-col
        >
        <a-col :span="6" style="border-left: 1px dotted #dedede"
          ><div style="width: 100%; height: 350px;" id="pinD"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            设备号ED0004
          </div></a-col
        >
      </a-row>
    </div> -->

   

<a-row type="flex" justify="center"  >
          <a-col class="col"  style="height: 350px;"   :xs="{ span: 24 }" :lg="{ span: 17 }">
    <div class="HP-Up-Left"   style="width: 100%;height: 350px;"   id="chinaChart"></div> 

 </a-col>
 <a-col class="col" style="height: 350px;"  :xs="{ span: 24 }" :lg="{ span: 7 }">
 <div class="HP-Up-Right" style="width: 100%; height: 350px;" >
        <a-card
          :hoverable="true"
          size="small"
          title="本月工作计划"
          headStyle="font-size:21px;font-weight:600;"
          style="width: 100%; height: 100%"
        >
          <template #extra><a href="#" @click="ShowSchedule">更多</a></template>
          <div
            style="width: 100%; height: 100%; border: 0px solid red"
            v-if="ScheduleEmptyMark"
          >
            <a-empty description="暂无计划" />
          </div>
          <div style="width: 100%; height: 100%; border: 0px solid red">
            <p
              v-for="(item, index) in DataList"
              :key="index"
              @click="gotoDetail(item.id)"
            >
              {{ index + 1 }}、{{ item.workScheduleName }}.
            </p>
          </div>
        </a-card>
      </div>

 </a-col>
    </a-row>

    
 
   <!-- <div   style="width: 100%;
  height: 10px;">
 <a-row type="flex" justify="center">
   <a-col class="col" style="width: 100%; height: 10px; border: 1px solid red"  :xs="{ span: 24 }" :lg="{ span: 24 }">
     </a-col>
  </a-row>
 </div> -->
 


        <a-row type="flex" justify="center"  >


          <a-col class="col" style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 17 }">
            <div class="HP-Up-Left"   style="width: 100%;height: 450px;" >
            <MyChinaMap :saleMapData="saleMap" />
            
            </div> 
          </a-col>
          <a-col class="col" style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 7 }">
            <div class="HP-Up-Right" style="width: 100%; height: 450px;" >
            
            
              <div class="boxall" style="height:450px">
        <div class="alltitle">销量排行榜</div>
	<div class="navboxall">
		  <table class="table1" width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <th scope="col">排名</th>
      <th scope="col">省份</th>
      <th scope="col">销售额</th>
      <th scope="col">增长率</th>
    </tr>
    <tr>
		<td><span>1</span></td>
      <td>北京市</td>
      <td>2114万<br></td>
      <td>100%<br></td>
    </tr>
    <tr>
		<td><span>2</span></td>
      <td>四川省</td>
      <td>1123万</td>
      <td>69%</td>
    </tr>
    
    <tr>
		<td><span>3</span></td>
      <td>湖北省</td>
      <td>953万</td>
      <td>43%</td>
    </tr>
    <tr>
		<td><span>4</span></td>
      <td>山东省</td>
      <td>674.6万</td>
      <td>33%</td>
    </tr>
	  <tr>
		  <td><span>5</span></td>
      <td>辽宁省</td>
      <td>323万</td>
      <td>28%</td>
    </tr>
	
  </tbody>
</table>
		  </div>
      </div>
            
            
            
            
            
            
            
            
            
            
            
            
            </div> 
          </a-col>
        </a-row>
 <a-row type="flex" justify="center">
          <a-col class="col" style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 6 }">
            <div style="width: 100%; height: 350px;" id="pinA"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            华东地区销售汇总
          </div>
              </a-col>
                <a-col class="col"   style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 6 }">
                  <div style="width: 100%; height: 350px;" id="pinB"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            华南地区销售汇总
          </div>
              </a-col>
               <a-col class="col"   style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 6 }">
                <div style="width: 100%; height: 350px;" id="pinC"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
            东北地区销售汇总
          </div>
              </a-col>
               <a-col class="col"   style="height: 450px;"  :xs="{ span: 24 }" :lg="{ span: 6 }">
                <div style="width: 100%; height: 350px;" id="pinD"></div>
          <div
            style="
              width: 100%;
              height: 15%;
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: #83757e;
            "
          >
           华北地区销售汇总
          </div>
              </a-col>
        </a-row>
  </div>

  <New-Message-Tip   :ExaminationTotals="ExaminationTotal" />
</template>

<script lang="ts">
import {
  reactive,
  ref,
  watch,
  toRefs,
  defineComponent,
  onMounted,
  computed,
} from "vue";

import NewMessageTip from "../../components/NewMessageTip.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { GetCurrentMonthWorkSchedule } from "../../Request/WorkScheduleRequest";
import {
  WorkScheduleEntity,
  IWorkScheduleInfo,
} from "../../TypeInterface/IWorkScheduleInterface";
import * as echarts from "echarts";
import MyChinaMap from "@/components/MyChinaMap.vue";

import {
  GetExaminationTotal,

} from "../../Request/ExaminationRequest";

export default defineComponent({
  components: {
    NewMessageTip,MyChinaMap
  },
  setup() {
    const state = reactive({
      count: 0,
      ScheduleEmptyMark: false,
      ExaminationTotal:0,
   
    });
    let saleMap=ref<any>([]);
    const router = useRouter();
    let DataEntityState = reactive(new WorkScheduleEntity());
    const store = useStore();
    const ShowSchedule = () => {
      router.push({ path: "/Home/MyCalendarPage", query: { Id: "1" } });
    };
    const gotoDetail = (Id: any) => {
      router.push({
        path: "/Home/WorkScheduleDetail",
        query: { Id: Id, Type: "HomePageCalendar" },
      });
    };

    //https://ant.design/components/calendar-cn/
    //https://blog.csdn.net/qq_41619796/article/details/104795405

    let ProductEfficiencyChart: any = undefined;
    let showPinAChart: any = undefined;
    let showPinBChart: any = undefined;
    let showPinCChart: any = undefined;
    let showPinDChart: any = undefined;
      let ProductEfficiencyOption: any = undefined;
    onMounted(async () => {

      saleMap.value=[1111,22334];



      DataEntityState.QueryConditionInfo.useStatus = "启用";
      let res = await GetCurrentMonthWorkSchedule({
        current: 1,
        pageSize: 500,
        ...DataEntityState.QueryConditionInfo,
      });
      if (res.isSuccess) {
        //DataEntityState.DataList = res.datas;
        let date = new Date();
        const month = date.getMonth() + 1;
        let datas: any = res.datas.filter((i: any) => i.month == month);
        DataEntityState.DataList = datas.slice(0, 6);
        // console.log("DataEntityState.DataList", DataEntityState.DataList);
        // console.log("ScheduleEmptyMark", DataEntityState.DataList);
        state.ScheduleEmptyMark = false;
        if (DataEntityState.DataList && DataEntityState.DataList.length <= 0) {
          state.ScheduleEmptyMark = true;
        }
      } else {
        state.ScheduleEmptyMark = true;
      }

const ExaminationRes = await GetExaminationTotal();

if (ExaminationRes.isSuccess) {
state.ExaminationTotal=ExaminationRes.datas;
 console.log("state.ExaminationTotal",state.ExaminationTotal)
  setTimeout(() => {
        store.state.NewMessageMark = true;
      }, 1000);

      setTimeout(() => {
        store.state.NewMessageMark = false;
      }, 5000);
}

 ProductEfficiencyChart = undefined;
   showPinAChart= undefined;
    showPinBChart = undefined;
    showPinCChart = undefined;
     showPinDChart = undefined;

      //vue3中如何解决echarts 二次渲染时不显示的问题
      //https://blog.csdn.net/breakcastle/article/details/127461167?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-127461167-blog-115304832.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-127461167-blog-115304832.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=4
       showEchart();







      
       showPinB();
      showPinC();
      showPinD();

     



 let showPinA = () => {
      const handred = 100;
      let point = 66;

let pinA=document?.getElementById("pinA");
     pinA?.removeAttribute("_echarts_instance_");
      
      showPinAChart = echarts.init(
        document?.getElementById("pinA") as HTMLElement
      );

      let showPinAOption;
      showPinAOption = {
        title: {
          text: point + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#29EEF3",
            fontSize: "60",
          },
        },
        tooltip: {
          formatter: function (params: any) {
            return params.name + "：" + params.percent + " %";
          },
        },
        legend: {
          show: true,
          itemGap: 12,
          data: ["实际", "剩余"],
        },

        series: [
          {
            name: "circle",
            type: "pie",
            clockWise: true,
            radius: ["50%", "66%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: "实际",
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4FADFD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#28E8FA", // 100% 处的颜色1
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: "剩余",
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE",
                  },
                },
              },
            ],
          },
        ],
      };

      // 3. 把配置给实例对象
      showPinAChart.setOption(showPinAOption);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        showPinAChart.resize();
      });
    };

 showPinA();
 setInterval(() => {
          if(ProductEfficiencyChart!=undefined){
 ProductEfficiencyChart?.resize();
          }
       
        if(showPinAChart!=undefined)
        showPinAChart?.resize();
        showPinBChart?.resize();
        showPinCChart?.resize();
        showPinDChart?.resize();
      }, 2000);


    });

   
    let showPinD = () => {
      const handred = 100;
      let point = 70;

      let pinD=document?.getElementById("pinD");
     pinD?.removeAttribute("_echarts_instance_");
      showPinDChart = echarts.init(
        document?.getElementById("pinD") as HTMLElement
      );

      let showPinDOption;
      showPinDOption = {
        title: {
          text: point + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#29EEF3",
            fontSize: "60",
          },
        },
        tooltip: {
          formatter: function (params: any) {
            return params.name + "：" + params.percent + " %";
          },
        },
        legend: {
          show: true,
          itemGap: 12,
          data: ["实际", "剩余"],
        },

        series: [
          {
            name: "circle",
            type: "pie",
            clockWise: true,
            radius: ["50%", "66%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: "实际",
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: "#D5D81A", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#F0F290", // 100% 处的颜色1
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: "剩余",
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE",
                  },
                },
              },
            ],
          },
        ],
      };

      // 3. 把配置给实例对象
      showPinDChart.setOption(showPinDOption);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        showPinDChart.resize();
      });
    };
    let showPinC = () => {
      const handred = 100;
      let point = 77;
          let pinC=document?.getElementById("pinC");
     pinC?.removeAttribute("_echarts_instance_");

showPinCChart = echarts.init(
        document?.getElementById("pinC") as HTMLElement
      );
      let showPinCOption;
      showPinCOption = {
        title: {
          text: point + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#29EEF3",
            fontSize: "60",
          },
        },
        tooltip: {
          formatter: function (params: any) {
            return params.name + "：" + params.percent + " %";
          },
        },
        legend: {
          show: true,
          itemGap: 12,
          data: ["实际", "剩余"],
        },

        series: [
          {
            name: "circle",
            type: "pie",
            clockWise: true,
            radius: ["50%", "66%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: "实际",
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: "#56E11B", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#ADF290", // 100% 处的颜色1
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: "剩余",
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE",
                  },
                },
              },
            ],
          },
        ],
      };

      // 3. 把配置给实例对象
      showPinCChart.setOption(showPinCOption);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        showPinCChart.resize();
      });
    };
    let showPinB = () => {
      const handred = 100;
      let point = 38;
           let pinB=document?.getElementById("pinB");
     pinB?.removeAttribute("_echarts_instance_");
 showPinBChart = echarts.init(
        document?.getElementById("pinB") as HTMLElement
      );
      let showPinBOption;
      showPinBOption = {
        title: {
          text: point + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#29EEF3",
            fontSize: "60",
          },
        },
        tooltip: {
          formatter: function (params: any) {
            return params.name + "：" + params.percent + " %";
          },
        },
        legend: {
          show: true,
          itemGap: 12,
          data: ["实际", "剩余"],
        },

        series: [
          {
            name: "circle",
            type: "pie",
            clockWise: true,
            radius: ["50%", "66%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: "实际",
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: "#D6CDF7", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#9279EB", // 100% 处的颜色1
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: "剩余",
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE",
                  },
                },
              },
            ],
          },
        ],
      };

      // 3. 把配置给实例对象
      showPinBChart.setOption(showPinBOption);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        showPinBChart.resize();
      });
    };

    let showEchart = () => {
     let chinaChart=document?.getElementById("chinaChart");
     chinaChart?.removeAttribute("_echarts_instance_");
ProductEfficiencyChart = echarts.init(
        document?.getElementById("chinaChart") as HTMLElement
      );

      

      // 统计百分比
      var data1 = [14, 15, 65, 24, 75, 23, 24, 43, 27, 72, 12, 53];
      var data2 = [45, 65, 24, 74, 25, 53, 42, 54, 13, 32, 52, 23];
      var json: any = {
        chart0: {
          xcategory: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          low: data1,
          lowLine: [],
        },
      };
      var json2 = {
        chart0: {
          xcategory: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          low: data2,
          lowLine: [],
        },
      };

      var zrUtil = echarts.util;
      zrUtil.each(json.chart0.xcategory, function (item: any, index: any) {
        json.chart0.lowLine.push([
          {
            coord: [index, json.chart0?.low[index]],
          },
          {
            coord: [index + 1, json.chart0?.low[index + 1]],
          },
        ]);
      });

      ProductEfficiencyOption = {
        title: {
          text: "销售达成率",
          textStyle: {
            align: "center",
            color: "black",
            //fontSize: 20,
          },
          top: "3%",
          left: "2%",
        },
        //backgroundColor: '#fff',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#15ecf4",
            },
          },
          backgroundColor: "rgba(0,0,0,.8)",
          extraCssText: "box-shadow: 4px 4px 10px rgba(21, 250, 255,.6);",
          // formatter: function(params) {
          //     var result = params[0].name + '<br>';
          //     params.forEach(function(item) {
          //         result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
          //         // 判断设置增长还是降低
          //         if (parseFloat(item.data) >= 50) {
          //             result += item.seriesName + ": " + '<span class="growth">增长' + item.data + "%</span><br>"
          //         } else if (parseFloat(item.data) < 50) {
          //             result += item.seriesName + ": " + '<span class="reduce">降低' + item.data + "%</span><br>"
          //         }
          //     });
          //     return result;
          // }
        },
        legend: {
          data: ["目标", "实际"],
          textStyle: {
            fontSize: 12,
            //color: 'rgb(0,253,255,0.6)'
            color: "black",
          },
          top: "5%",
          right: "5%",
        },
        grid: {
          bottom: 40,
          left: 60,
          right: 20,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              //color: '#15faff',
              color: "black",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          max: 100,
          splitNumber: 4,
          interval: 25,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#4b4d64",
            },
          },
          axisLabel: {
            formatter: "{value} %",
            textStyle: {
              //改变刻度字体样式
              // color: '#ffffff'
              color: "black",
            },
          },
        },
        series: [
          {
            name: "目标",
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 10,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(223, 151,203, .9)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(223, 151,203,.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: "#DF97CB",
              },
            },
            data: data1,
          },
          {
            name: "目标",
            type: "lines",
            coordinateSystem: "cartesian2d",
            zlevel: 1,
            smooth: true,
            symbol: "circle",
            effect: {
              show: true,
              smooth: true,
              period: 3,
              symbolSize: 5,
            },
            lineStyle: {
              normal: {
                color: "#DF97CB",
                width: 0,
                opacity: 0,
                curveness: 0,
              },
            },
            data: json.chart0.lowLine,
          },
          {
            name: "实际",
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 10,
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgba(21, 250, 255,.9)'
            //         }, {
            //             offset: 0.8,
            //             color: 'rgba(21, 250, 255,.1)'
            //         }], false),
            //         shadowColor: 'rgba(0, 0, 0, 0.1)',
            //         shadowBlur: 10
            //     }
            // },
            itemStyle: {
              normal: {
                color: "#15faff",
              },
            },
            data: data2,
          },
          // {
          //     name: '同比',
          //     type: 'lines',
          //     coordinateSystem: 'cartesian2d',
          //     zlevel: 1,
          //     smooth: true,
          //     symbol: 'circle',
          //     effect: {
          //         show: true,
          //         smooth: true,
          //         period: 2,
          //         symbolSize: 8
          //     },
          //     lineStyle: {
          //         normal: {
          //             color: '#15faff',
          //             width: 0,
          //             opacity: 0,
          //             curveness: 0,
          //         }
          //     },
          //     data: json2.chart0.lowLine
          // },
        ],
      };

      // 3. 把配置给实例对象
      ProductEfficiencyChart.setOption(ProductEfficiencyOption);
      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        ProductEfficiencyChart?.resize();
      });
    };

    return {
      ...toRefs(state),
      ...toRefs(DataEntityState),
      ShowSchedule,
      gotoDetail,saleMap
    };
  },
});
</script>

<style scoped>
/* .warp {
    height: 370px;
    width: 360px;
    margin: 0 auto;
 
    border:1px solid rgb(21, 51, 221);
    padding:3px
    
  }
  .warp ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      
    }
 .warp ul li,a {
        display: block;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 15px;border:1px solid red
      } */
.HomePageContent {
  border: 1px solid rgb(19, 92, 201);
  box-sizing: border-box;

  min-width: 1000px;
  min-height: 675px;
   height: calc(100vh - 92px); 
  /* background-image: url("../../assets/bgHome.png");
    background-repeat: no-repeat; 
    background-origin: border-box;
    background-size: cover; */
  background-color: darkgray;
}
.HomePage {
  border: 0px solid red;
  box-sizing: border-box;
  padding: 1px;
  /* height: calc(100vh - 92px); */
   overflow: auto;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  */
 height: calc(100vh - 92px); 
}

.HP-Up {
  border: 1px solid blue;

  box-sizing: border-box;
  width: 100%;
  
}
.HP-Up-Left {
  border: 1px solid #dedede;

  box-sizing: border-box;
 
   
 
  
}
.HP-Up-Right {
  border: 1px solid #dedede;

  box-sizing: border-box;

  
  /* //overflow: auto; */
}

.HP-Down {
  border: 1px solid #dedede;

  box-sizing: border-box;
  width: 100%;
  /* //height: 350px; */
   /* min-width: 5px;
   min-height: 5px; */
}

.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: auto;
  white-space: wrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 23px;
}
.notes-month section {
  font-size: 23px;
}
.ant-badge-status-text {
  color: blue !important;
}








.boxall{ padding:15px;  background: rgba(0,0,0,.0); position: relative; margin-bottom:15px;; z-index: 10;}
.alltitle{ font-size:18px; color:black; position: relative; padding-left: 12px;margin-bottom: 10px;}
.alltitle:before{ width: 5px; height: 20px; top:2px; position: absolute; content: ""; background: #49bcf7; border-radius:20px; left: 0; }

.navboxall{height: calc(100% - 30px);}
.num,.zhibiao{height: 100%; width: 50%;}
.zb1,.zb2,.zb3{float: left; width: 33.3333%; height: 100%;}
#zb1,#zb2,#zb3{height: calc(100% - 30px); }
.zhibiao span{ padding-top: 20px; display: block; text-align: center; color: black; font-size: 16px;}
.num{padding-right: 20px;}
.numbt{ font-size: 24px; color:black ; padding-top:14px;}
.numbt span{font-size: 18px; padding-left: 10px;color: black; }
.numtxt{ color: #fef000; font-size: 80px; font-family: arial; border-top: 1px solid rgba(255,255,255,.1);border-bottom: 1px solid rgba(255,255,255,.1); padding: 10px 0; margin: 18px 0; font-weight: bold; letter-spacing: 2px;}

.table1 th{border-bottom: 1px solid rgba(255,255,255,.2); font-size: 16px; color:black; font-weight: normal; padding:0 0 10px 0;}
.table1 td{ font-size: 16px; color:black; padding: 15px 0 0 0; }
.table1 span{ width: 24px; height: 24px; border-radius: 3px; display: block; background: #878787; color: black; line-height: 24px; text-align: center;}

.table1 tr:nth-child(2) span{ background: #ed405d}
.table1 tr:nth-child(3) span{ background: #f78c44}
.table1 tr:nth-child(4) span{ background: #49bcf7}











</style>