<template>
  <div :id="chartId" class="chart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'ChareList',
  mounted () {
    const myChart = echarts.init(document.getElementById(this.chartId))
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })
  },
  props: ['chartId']
}

</script>

<style scoped>
  .chart {
    width: 100%;
    height: 100%;
  }
</style>
