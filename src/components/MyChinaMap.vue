<template>
    <div style="border: 0px solid red;width:100%;height:100%;display: flex;align-items: center;">
        <div id="chinaMap" style="width:100%;height:100%;"></div></div>
   
</template>
    
<script lang="ts">
import { defineComponent, watch } from 'vue'
import * as echarts from "echarts";
//将以下设置放入tsconfig.json的compilerOptions中。
//"resolveJsonModule": true,
//"esModuleInterop": true,
//解决找不到模块'./china.json‘。考虑使用'--resolveJsonModule‘导入带有'.json’扩展名的模块的问题
import china from '@/utility/china.json'  // 就是地图数据，可以直接在网上直接下载 
echarts.registerMap('china', china as any);//注册可用的地图
export default defineComponent({
    props: {
        saleMapData: Object,
    },
    setup(props) {
       let  data=[
		                {name: '北京市',value: 100},
		                {name: '天津市',value: 12},
		                {name: '上海市',value: 90},
		                {name: '重庆',value: 23},
		                {name: '河北省',value: 56},
		                {name: '河南省',value: 77},
		                {name: '云南省',value: 22},
		                {name: '辽宁省',value: 34},
		                {name: '黑龙江省',value: 76},
		                {name: '湖南省',value: 87},
		                {name: '安徽省',value: 29},
		                {name: '山东省',value: 87},
		                {name: '新疆维吾尔自治区',value: 99},
		                {name: '江苏省',value: 11},
		                {name: '浙江省',value: 66},
		                {name: '江西省',value: 57},
		                {name: '湖北省',value: 38},
		                {name: '广西壮族自治区',value: 89},
		                {name: '甘肃省',value: 44},
		                {name: '山西省',value: 43},
		                {name: '内蒙古自治区',value: 35},
		                {name: '陕西省',value: 1},
		                {name: '吉林省',value: 4},
		                {name: '福建省',value: 6},
		                {name: '贵州省',value: 2},
		                {name: '广东省',value: 7},
		                {name: '青海省',value: 3},
		                {name: '西藏自治区',value: 1},
		                {name: '四川省',value: 98},
		                {name: '宁夏回族自治区',value:66},
		                {name: '海南省',value:23},
		                {name: '台湾省',value: 87},
		                {name: '香港',value: 18},
		                {name: '澳门',value: 9}
		            ]


        
        let myMapChart: any = undefined;
        watch(
            () => props.saleMapData,
            (newValue) => {
                myMapChart = echarts.init(document?.getElementById("chinaMap") as HTMLElement);
                //
                document?.getElementById("chinaMap")?.removeAttribute('_echarts_instance_');

                const optionObj = {
                    title: {
                text: '全国销量分布图',
                subtext: '',
                
            },

                    roam: false, //是否允许缩放，拖拽
                    zoom: 1.5, //初始化大小
                    // //缩放大小限制
                    scaleLimit: {
                        min: 1.5, //最小
                        max: 1.5, //最大
                    },
                    toolbox: {
	           show: true,
	           orient: 'vertical',
	           left: 'right',
	           top: 'center',
	           feature: {
	               dataView: {readOnly: false},
	               restore: {},
	               saveAsImage: {}
	           }
    		},



                    tooltip:{
show:true,
formatter:'{b}<br />销量：{c}',
backgroundColor:'rgba(50,50,50,0.7)',
textStyle:{

color:'#fff'}
},
                    series: {
                       top:140,
                        type: 'map',
                        mapType: 'china',
                        label:{
normal:{
//show:true,
textStyle:{
fontsize:8
}


}

},
                        emphasis: {
                            label: {

                                show: true
                            }
                            ,
                            itemStyle: {
                                areaColor: '#40adff',
                            color: '#ffffff',
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff'
                        },
                        data
                    },
//                     visualMap:{
// type:'continuous',
// min:0,
// max:100000,
// calculabel:true,
// inRange:{
// color:['#DEADA5','#E1897B','#E56D5A','#EF2A0C']
// },
visualMap: {
                min: 0,
                max: 100,
               
                text: ['high','low'], // 文本，默认为数值文本
                inRange: {
                    color:['#DEADA5','#E1897B','#E56D5A','#EF2A0C'],
                    symbolSize: [0, 0]
                },//修改凸缘大小和修改地图不同颜色
                calculable: true
            },

          

                }
                setInterval(() => {
                    myMapChart.setOption(optionObj);
                    if(myMapChart!=undefined){
                        myMapChart?.resize();
          }
                }, 100)

                myMapChart.on('click', function (params: any) {
                    //alert("map")
                });

            }
        );

        return {}
    }
})
</script>
    
<style scoped>

</style>