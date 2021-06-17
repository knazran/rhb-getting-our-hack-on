<template>
  <div id="skillset-chart" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "SkillSetBarChart",
  data() {
    return {
      barChart: {},
      option: {
        animation:false,
        stateAnimation: {
          duration: 300,
          easing: 'cubicOut'
        },
        xAxis: {
          data: ["Vue", "React", "Python", "Go", "Node", "AWS", "PHP"],
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
            data: [
              30,
              48,
              56,
              {
                value: 20,
                itemStyle: {
                  color: "#dc2626",
                  shadowBlur: 10,
                  shadowColor: "rgba(184, 28, 28, 1)",
                },
              },
              76,
              35,
              77,
            ],
            itemStyle: {
              emphasis: {
                barBorderRadius: [25, 25],
              },
              normal: {
                barBorderRadius: [25, 25, 25, 25],
              },
            },
            color: "#6CCEE6",
            barWidth: "40%",
          },
        ],
      },
    };
  },
  methods: {
    blinkBarChart: function(){  
      console.log("Start")
      var count = 0;         
      setInterval(function(){
          if(count%2==0){
            console.log("Blind")
            console.log(this.option.series)
            // this.barChartOptions(true)
            // this.barChart.setOption(this.option, {notMerge:true});      //Alternative set
            this.barChart.setOption({
                  series: [
          {
            name: "Skill",
            type: "bar",
            data: [
              30,
              48,
              56,
              {
                value: 20,
                itemStyle: {
                  color: "#dc2626",
                  shadowBlur: 10,
                  shadowColor: "rgba(184, 28, 28, 1)",
                },
              },
              76,
              35,
              77,
            ],
            itemStyle: {
              emphasis: {
                barBorderRadius: [25, 25],
              },
              normal: {
                barBorderRadius: [25, 25, 25, 25],
              },
            },
            color: "#6CCEE6",
            barWidth: "40%",
          },
        ],
              }, { replaceMerge: 'series' });
        }else{
          console.log("Dont blink")
          // this.barChartOptions(false)
          // console.log(this.option.series)
          // this.barChart.setOption(this.option);
          this.barChart.setOption({
                  series: [
          {
            name: "Skill",
            type: "bar",
            data: [
              30,
              48,
              56,
              {
                value: 20,
                itemStyle: {
                  color: "#dc2606",
                },
              },
              76,
              35,
              77,
            ],
            itemStyle: {
              emphasis: {
                barBorderRadius: [25, 25],
              },
              normal: {
                barBorderRadius: [25, 25, 25, 25],
              },
            },
            color: "#6CCEE6",
            barWidth: "40%",
          },
        ],
              }, { replaceMerge: 'series' });
        }
        count+=1;
      }.bind(this), 700);
    },
    barChartOptions(blink) {
      if (blink) {
        this.option.series.data = [
              30,
              48,
              56,
              {
                value: 20,
                itemStyle: {
                  color: "#dc2626",
                  shadowBlur: 10,
                  shadowColor: "rgba(184, 28, 28, 1)",
                },
              },
              76,
              35,
              77,
            ]
      } else {
        this.option.series.data = [
              30,
              48,
              56,
              20,
              76,
              35,
              77,
            ]
      }
    }
  },
  mounted() {
    this.barChart = echarts.init(document.getElementById("skillset-chart"));
    this.barChart.setOption(this.option);

    this.barChart.on("click", (params) => {
      this.$emit("skill-bar-click", { name: params.name, value: params.value });
    });
    this.blinkBarChart()
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>