<script setup>
import { getTickerList } from '@/api/system/sys_user';
import { useTickerStore } from "@/store/modules/ticker";
import { userWebSocket } from "@/store/modules/ws.js";
const wsConn = userWebSocket()
const tickerStore = useTickerStore()
let tableData = $ref([]);

const getTableData = async(symbol) => {
  return await getTickerList({symbol:'BTC_USDT'})
}
onMounted(async() => {
  const td = await getTableData()
  tableData = td.data.ticker_list
  tickerStore.ticker = tableData[0]
  const d = {'code': 1, 'topic': 'ticker@BTC_USDT'}
  wsConn.conn.send(JSON.stringify(d))
})
</script>

<template>
  <div>
    <el-table
      header-row-class-name="asideTableClassName"
      :data="tableData"
      :cell-style="{'border': 'none','padding': '2px 0','font-size':'12px ','height':'1.5rem'}"
      class="min-w-full"
    >
      <el-table-column fixed prop="symbol" label="币对" />
      <el-table-column prop="last_price" label="价格" />
      <el-table-column prop="price_range" label="涨跌幅" />
      <template v-slot:empty>
        <div class="noData" >无数据</div>
      </template>
    </el-table>

  </div>
</template>

<style scoped>
:deep(.el-table) .asideTableClassName th{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
.noData{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
.el-table{
  --el-table-border-color:none;
  --el-table-border : none;
}
</style>