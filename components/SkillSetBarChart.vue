<template>
  <div>
    <canvas id="skillset-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'SkillSetBarChart',
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Vue', 'Go', 'React', 'Kotlin', 'Python', 'NodeJS'],
      datasets: [
        {
          label: 'Programming Languages',
          backgroundColor: '#6CCEE6',
          data: [40, 23, 60, 33, 50, 80]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    const ctx = document.getElementById('skillset-chart');
    new Chart(ctx, this.chartdata);
  }
}
</script>

<style>

</style>