<template>
  <div id="skill-report-chart" class="chart"></div>
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
        tooltip: {
          show: true,
          trigger: "item",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              lte: 100,
              color: "#fff6d9",
            },
            {
              gt: 100,
              lte: 200,
              color: "#9ad74a",
            },
            {
              gt: 200,
              color: "#40c8fb",
            }
          ],
        },
        xAxis: {
          data: ["2/5", "9/5", "16/5", "23/5", "30/5", "6/6", "13/6"],
          show: false,
          color: "#fffff",
          scale: true,
        },
        yAxis: {
          type: "value",
          scale: true,
          show: true
        },
        series: [
          {
            data: [0, 70, 109, 130, 150, 180, 300],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("skill-report-chart"), 'dark');
    myChart.setOption(this.option);
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>