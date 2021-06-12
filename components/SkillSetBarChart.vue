<template>
  <div id='skillset-chart' class="chart">
  </div>
</template>

<script>

import * as echarts from 'echarts';

export default {
  name: "SkillSetBarChart",
  data() {
    return {
      option: {
        xAxis: {
            data: ['Vue', 'React', 'Python', 'Go', 'Node', 'AWS', 'PHP'],
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
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '6%',
          containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item',
            // formatter: function (a) {
            //     my_json_data = get_and_format_my_data()
            //     return `${my_json_data}`
            // }
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
                name: 'Skill',
                type: 'bar',
                data: [30, 48, 56, 20, 76, 33, 77],
                itemStyle: {
                    emphasis: {
                        barBorderRadius: [25, 25]
                    },
                    normal: {
                        barBorderRadius: [25, 25, 25 ,25 ]
                    }
                },
                color: '#6CCEE6',
                barWidth: '40%'
            }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('skillset-chart'));
    myChart.setOption(this.option);

    // myChart.on('click', function(params) {
    //     console.log(params)
    //     this.$emit('skill-bar-click', {name: params.name, value: params.value})
    // });

    myChart.on('click', (params) => { 
      console.log(params)
      this.$emit('skill-bar-click', {name: params.name, value: params.value})
    });
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>