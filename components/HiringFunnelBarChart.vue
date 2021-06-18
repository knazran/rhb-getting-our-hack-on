<template>
  <div id="hiring-funnel" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "HiringFunnelBarChart",
  data() {
    return {
      option: {
        xAxis: {
          data: ["Application", "Screen", "Interview", "Offer", "Onboard"],
          splitLine: {
            //remove grid lines
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            //x-axis tick
            show: false,
            lineStyle: {
              type: "dashed",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 20,
            },
          },
        },
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
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          scale: true,
          max: 240,
          min: 0,
          interval: 40,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 20,
            },
          },
        },
        series: [
          {
            name: "Skill",
            type: "bar",
            barWidth: "90%",
            data: [
              {
                value: 198,
                itemStyle: { color: "#34D399" },
              },
              {
                value: 178,
                itemStyle: { color: "#F76363" },
              },
              {
                value: 81,
                itemStyle: { color: "#F76363" },
              },
              {
                value: 41,
                itemStyle: { color: "#F76363" },
              },
              {
                value: 38,
                itemStyle: { color: "#34D399" },
              },
            ],
            markPoint: {
              symbol: "roundRect",
              data: [
                {
                  yAxis: 198,
                  x: "16%",
                  name: "100%",
                  value: "198",
                },
                {
                  yAxis: 178,
                  x: "34%",
                  name: "90%",
                  value: "178",
                },
                {
                  yAxis: 81,
                  x: "51.5%",
                  name: "46%",
                  value: "81",
                },
                {
                  yAxis: 47,
                  x: "69.5%",
                  name: "51%",
                  value: "41",
                },
                {
                  yAxis: 44,
                  x: "87%",
                  name: "93%",
                  value: "38",
                },
              ],
              label: {
                align: "center",
                formatter: function (params) {
                  return `{a|${params.name}}\n{b|${params.value}}`;
                },
                rich: {
                  a: {
                    fontSize: 15.5,
                  },
                  b: {
                    fontSize: 12,
                    color: "gray",
                  },
                },
              },
              itemStyle: {
                color: "white",
                borderColor: "gray",
                borderWidth: 0.5,
                shadowColor: "gray",
                shadowBlur: 10,
              },
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: [5, 5],
              },
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                label: {
                  show: true,
                  position: "insideBottom",
                  fontSize: 20,
                  formatter: function (params) {
                    switch (params.value) {
                      case 198:
                        return "4 days";
                      case 178:
                        return "14 days";
                      case 81:
                        return "8 days";
                      case 41:
                        return "19 days";
                      case 38:
                        return "";
                      default:
                        return params.value;
                    }
                  },
                  // formatter: function (params) {
                  //   for (
                  //     var i = 0, l = this.option.xAxis[0].data.length;
                  //     i < l;
                  //     i++
                  //   ) {
                  //     if (this.option.xAxis[0].data[i] == params.name) {
                  //       var val1 = params.value || 0;
                  //       var val2 = option.series[0].data[i] || 0;
                  //       return "{color1|" + val1 + "}/{color2|" + val2 + "}";
                  //     }
                  //   }
                  // },
                  // rich: {
                  //   color1: {
                  //     color: "#f7ba0e",
                  //   },
                  //   color2: {
                  //     color: "#42a1fe",
                  //   },
                  // },
                  textStyle: {
                    color: "white",
                  },
                },
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("hiring-funnel"));
    myChart.setOption(this.option);

    myChart.on("click", (params) => {
      this.$emit("hiring-funnel-bar-click", {
        name: params.name,
        value: params.value,
      });
    });
  },
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
