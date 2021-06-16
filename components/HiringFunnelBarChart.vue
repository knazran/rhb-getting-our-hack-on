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
          show: true,
          trigger: "item",
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: "Skill",
            type: "bar",
            data: [198, 178, 81, 41, 38],
            markPoint: {
              data: [
                // {
                //   name: "maximum",
                //   type: "max",
                // },
                {
                  name: "coordinate",
                  coord: [198, 198],
                },
                // {
                //   name: "fixed x position",
                //   yAxis: 198,
                //   x: "20%",
                // },
                // {
                //   name: "screen coordinate",
                //   x: 160,
                //   y: 160,
                // },
              ],
              itemStyle: {
                color: "red",
              },
              // [
              //   // { type: "max", name: "MAX" },
              //   // { type: "min", name: "MIN" },
              //   { name: "MAX", value: "100%" },
              //   { name: "MIN" },
              // ],
              // label: {
              //   show: true,
              // },
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: [5, 5],
              },
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                // label: {
                //   show: true,
                //   position: "inside",
                // },
                label: {
                  show: true,
                  position: "bottom",
                  // formatter: function (params) {
                  //   for (
                  //     var i = 0, l = option.xAxis[0].data.length;
                  //     i < l;
                  //     i++
                  //   ) {
                  //     if (option.xAxis[0].data[i] == params.name) {
                  //       var val1 = params.value || 0;
                  //       var val2 = option.series[0].data[i] || 0;
                  //       return "{color1|" + val1 + "}/{color2|" + val2 + "}";
                  //     }
                  //   }
                  // },
                  rich: {
                    color1: {
                      color: "#f7ba0e",
                    },
                    color2: {
                      color: "#42a1fe",
                    },
                  },
                  textStyle: {
                    color: "#333",
                  },
                },
              },
            },
            color: "rgba(0, 103, 177, 1)",
            barWidth: "90%",
          },
        ],
      },
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("hiring-funnel"));
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
