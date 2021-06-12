<template>
  <div id="challenge-chart" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ChallengeLineChart",
  data() {
    return {
      option: {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "6%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["2/5", "9/5", "16/5", "23/5", "30/5", "6/6", "13/6"],
          splitLine:{ //remove grid lines
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
        yAxis: {
          type: "value",
          scale: true,
          min: 500,
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1361],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("challenge-chart"));
    myChart.setOption(this.option);
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>