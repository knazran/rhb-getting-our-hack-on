<template>
  <div id='skillset-chart' class="chart">
    <!-- <v-chart id='skillset-chart' class="chart" :option="option" /> -->
  </div>
</template>

<script>
// import { use } from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { BarChart } from "echarts/charts";
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
//   GridComponent
// } from "echarts/components";
// import VChart, { THEME_KEY } from "vue-echarts";

// use([
//   CanvasRenderer,
//   BarChart,
//   GridComponent,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// ]);

import * as echarts from 'echarts';

export default {
  name: "SkillSetBarChart",
  // components: {
  //   VChart
  // },
  // provide: {
  //   [THEME_KEY]: "light"
  // },
  data() {
    return {
      option: {
        xAxis: {
            data: ['Vue', 'React', 'Python', 'Go', 'Node', 'AWS'],
            splitLine:{//remove grid lines
                lineStyle: {
                type: "dashed"
              }
            },
            axisTick:{ //x-axis tick
              show:false,
              lineStyle: {
                type: "dashed"
              }
            },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '6%',
          containLabel: true
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
            {
                name: 'Num',
                type: 'bar',
                data: [30, 48, 56, 20, 76, 33],
                itemStyle: {
                    emphasis: {
                        barBorderRadius: [25, 25]
                    },
                    normal: {
                        barBorderRadius: [25, 25, 25 ,25 ]
                    }
                },
                color: '#6CCEE6',
            }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('skillset-chart'));
    myChart.setOption(this.option);
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>