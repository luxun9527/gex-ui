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
  <div class="border-l-4 border-r-4 border-l-gray-500 border-r-gray-500 border-opacity-30 border-solid min-h-full">
    <el-table
        :data="tableData"
        style="width: 100%"
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
    </el-table>
  </div>
</template>

<style scoped>

</style>