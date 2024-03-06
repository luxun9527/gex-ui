<script setup>
import {getTickList} from "@/api/system/sys_user.js";

let tableData = $ref([])
const getTableData = async () => {
  return  await getTickList({
    symbol:'BTC_USDT',
    level:100,
  })

}

onMounted(async ()=>{
  const d  = await getTableData()
  tableData = d.data.tick_list
})
</script>

<template>
  <div class="border-l-4 border-r-4 border-l-gray-500 border-r-gray-500 border-opacity-30 border-solid min-h-80">
    <el-table
        :data="tableData"
        style="width: 100%"
        header-row-class-name="filledOrderListClassName"

    >
      <el-table-column
          prop="price"
          label="价格(usdt)">
      </el-table-column>
      <el-table-column
          prop="qty"
          label="数量(btc)">
      </el-table-column>
      <el-table-column
          prop="filled_time"
          label="时间">
      </el-table-column>
      <template v-slot:empty>
        <div class="noData" >无数据</div>
      </template>
    </el-table>
  </div>
</template>

<style scoped>
:deep(.el-table) .filledOrderListClassName th{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
.noData{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
</style>