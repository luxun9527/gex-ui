<script setup>
import { getTickerList } from '@/api/system/sys_user';


let tableData = $ref([]);

const getTableData = async(symbol) => {
  
  return await getTickerList({symbol:'BTC_USDT'})
  
}
onMounted(async() => {
  const td = await getTableData()
  tableData = td.data.ticker_list
})
</script>

<template>
  <div
    class="border-l-4 border-r-4 border-l-gray-500 border-r-gray-500 border-opacity-30 border-solid"
  >
    <el-table
      header-row-class-name="tableRowClassName"
      :data="tableData"
      class="min-w-full min-h-screen"
    >
      <el-table-column fixed prop="symbol" label="币对" />
      <el-table-column prop="last_price" label="价格" />
      <el-table-column prop="price_range" label="涨跌幅" />
    </el-table>
  </div>
</template>

<style scoped>
:deep(.el-table) .tableRowClassName th{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}

</style>