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
          backgroundColor: "#404040",
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "6%",
          containLabel: true,
        },
        tooltip: {
          show: false,
          trigger: "item",
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              max: 2,
              color: "#fff6d9",
            },
            {
              min: 2,
              max: 5,
              color: "#9ad74a",
            },
            {
              min: 5,
              color: "#40c8fb",
            },
          ],
        },
        xAxis: {
          data: ["2/5", "8/5", "9/5","16/5", "23/5", "30/5", "6/6", "13/6"],
          show: false,
          color: "#fffff",
        //   scale: true,
        },
        yAxis: {
          type: "value",
        //   scale: true,
          show: true,
        },
        series: [
          {
            data: [0, 70, 100, 109, 130, 150, 180, 300],
            type: "line",
            smooth: true,
            areaStyle: {},
            lineStyle: {
      width: 5
    },
            markPoint: {
              symbolSize: 30,
              data: [
                {
                  value: "Skill IQ\n109",
                  coord: [3, 109],
                  symbol: "circle",
                  label: {
                    position: "top",
                    show: true,
                    color: "#FFFFFF",
                    fontSize: 16,
                    lineHeight: 24,
                  },
                  itemStyle: {
                    color: "#9ad74a",
                  },
                },
              ],
            },
          },
        //   {
        //         data: [0, 70, 109, 130, 150, 180, 300],
        //         type: 'line',
        //         smooth: true,
        //         areaStyle: {}
        //     }
        ],
      },
    };
  },
  mounted() {
    var myChart = echarts.init(
      document.getElementById("skill-report-chart")
    );
    myChart.setOption(this.option);
  },
};
</script>

<style scoped>
.chart {
  height: 350px;
}
</style>