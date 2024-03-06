<script setup>
import {onMounted, ref} from "vue";
import {createChart} from "lightweight-charts";
import {getKlineList} from "@/api/system/sys_user.js";

let chart;
const chartContainer = ref();
let cycleList = $ref(['1分钟', '5分钟', '15分钟', '30分钟', '60分钟', '日线', '周线', '月线'])
let activeIndex = $ref(0)
let klineData = []
/*
*   {
      time: "2018-10-22",
      open: 180.82,
      high: 181.4,
      low: 177.56,
      close: 178.75,
    },*/

onMounted(async () => {
  const d = await getTableData()
  klineData = d.data.kline_list
  updateKline(klineData)
})
const updateKline = (data) => {
  chart = createChart(chartContainer.value)
  const lineSeries = chart.addCandlestickSeries()
  lineSeries.setData(data)
  chart.timeScale().fitContent()
}
const changeBtnStatus = (index) => {
  activeIndex = index
}


const getTableData = async () => {
  let d =  await getKlineList({
    start_time: 1,
    end_time: 893185722521,
    kline_type: 1,
    symbol: "BTC_USDT"
  })

  d.data.kline_list.forEach(el=>{
    el.time = el.start_time
    el.open = parseFloat(el.open)
    el.high = parseFloat(el.high)
    el.low =  parseFloat(el.low)
    el.close = parseFloat(el.close)
  })
  d.data.kline_list = d.data.kline_list.slice(-40);
  return d
}


</script>

<template>
  <div class="border-b-1 border-b-gray-500  border-opacity-30 border-solid min-h-10 flex pl-4">
    <el-button v-for="(item, index) in cycleList" @click="changeBtnStatus(index)"
               :class="activeIndex === index ? 'el-button--text-active' : ''" type="text">{{ item }}
    </el-button>
  </div>

  <div class="lw-chart" ref="chartContainer"></div>

</template>

<style scoped>
.lw-chart {
  width: 100%;
  height: 60%;
  padding-right: 5px;
}

.el-button--text {
  font-size: 16px;
  color: #000000;
  text-align: center;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.5rem;
  margin: 0;
  padding: 0;
  border: none;
}

.el-button--text:hover {
  background-color: #e5e5e5;
  color: #000000;
}

.el-button--text-active {
  background-color: #e5e5e5;
  color: #000000;
  font-size: 16px;
  color: #000000;
  text-align: center;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.5rem;
  margin: 0;
  padding: 0;
}
</style>