<template>
  <div id="skill-report-chart" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "SkillReportChart",
  props: {
    mode: {
      default: 'dark'
    }
  },
  methods: {
    getBackgroundColor(){
      if (this.mode === 'dark') {
        return "#404040"
      }
      if (this.mode === 'light') {
        return "#FFFFFF"
      }
    },
    getTextColor(){
      if (this.mode === 'dark') {
        return "#FFFFFF"
      }
      if (this.mode === 'light') {
        return "#404040"
      }
    },
  },
  data() {
    return {
      option: {
        backgroundColor: this.getBackgroundColor(),
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "6%",
          containLabel: true,
        },
        // tooltip: {
        //   show: false,
        //   trigger: "item",
        // },
        tooltip: {
          triggerOn: "none",
          position: function (pt) {
            return [pt[0], 130];
          },
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              max: 2,
              color: "#FFEAA6",
            },
            {
              min: 2,
              max: 11,
              color: "#B1E074",
            },
            {
              min: 11,
              color: "#40c8fb",
            },
          ],
        },
        xAxis: {
          data: [
            "2/5",
            "8/5",
            "9/5",
            "24th percentile",
            "16/5",
            "16/5",
            "16/5",
            "16/5",
            "16/5",
            "16/5",
            "23/5",
            "30/5",
            "6/6",
            "13/6",
          ],
          //   show: false,
          color: this.getTextColor,
          axisPointer: {
            type: "line",
            value: "24th percentile",
            snap: true,
            lineStyle: {
              color: "#81C32B",
              width: 2,
            },
            label: {
              show: true,
              backgroundColor: "#81C32B",
              margin: 6,
            },
            handle: {
              show: true,
              color: "#81C32B",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },

        yAxis: {
          type: "value",
          //   scale: true,
          show: true,
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
        },
        series: [
          {
            data: [
              0, 70, 100, 109, 120, 130, 140, 150, 162, 172, 180, 201, 230, 300,
            ],
            type: "line",
            smooth: true,
            areaStyle: {},
            lineStyle: {
              width: 5,
            },
            markPoint: {
              symbolSize: 30,
              data: [
                {
                  value: "Skill IQ\n109",
                  coord: [3, 111],
                  symbol: "circle",
                  label: {
                    // position: "left",
                    position: ["-130%", "-120%"],
                    show: true,
                    color: this.getTextColor(),
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
        ],
      },
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("skill-report-chart"));
    myChart.setOption(this.option);
  },
};
</script>

<style scoped>
.chart {
  height: 350px;
}
</style>