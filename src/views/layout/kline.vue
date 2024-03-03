<script setup>
import { onMounted, ref } from "vue";
import { createChart } from "lightweight-charts";
let chart;
const chartContainer = ref();

onMounted(() => {
  chart = createChart(chartContainer.value)
  const lineSeries = chart.addCandlestickSeries()
  lineSeries.setData([
    {
      time: "2018-10-19",
      open: 180.34,
      high: 180.99,
      low: 178.57,
      close: 179.85,
    },
    {
      time: "2018-10-22",
      open: 180.82,
      high: 181.4,
      low: 177.56,
      close: 178.75,
    },
    {
      time: "2018-10-23",
      open: 175.77,
      high: 179.49,
      low: 175.44,
      close: 178.53,
    },
    {
      time: "2018-10-24",
      open: 178.58,
      high: 182.37,
      low: 176.31,
      close: 176.97,
    },
    {
      time: "2018-10-25",
      open: 177.52,
      high: 180.5,
      low: 176.83,
      close: 179.07,
    },
    {
      time: "2018-10-26",
      open: 176.88,
      high: 177.34,
      low: 170.91,
      close: 172.23,
    },
    {
      time: "2018-10-29",
      open: 173.74,
      high: 175.99,
      low: 170.95,
      close: 173.2,
    },
    {
      time: "2018-10-30",
      open: 173.16,
      high: 176.43,
      low: 172.64,
      close: 176.24,
    },
    {
      time: "2018-10-31",
      open: 177.98,
      high: 178.85,
      low: 175.59,
      close: 175.88,
    },
  ])
  chart.timeScale().fitContent();

});
</script>

<template>
    <div class="border-b-4 border-b-gray-500  border-opacity-30 border-solid">
      <el-button type="text">1分钟</el-button>
      <el-button type="text">5分钟</el-button>
      <el-button type="text">10分钟</el-button>
      <el-button type="text">1小时</el-button>
      <el-button type="text">1日</el-button>
      <el-button type="text">1周</el-button>
      <el-button type="text">1月</el-button>

    </div>
    <div class="lw-chart" ref="chartContainer"></div>

</template>

<style scoped>
.lw-chart {
  height: 60%;
}
</style>