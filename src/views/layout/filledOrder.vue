<script setup>
import {getTickList} from "@/api/system/sys_user.js";


let tableData = $ref([])
const getTableData = async () => {
  return  await getTickList({
    symbol:'BTC_USDT',
    limit:20,
  })

}
const filledOrderCell = ({rowIndex, columnIndex, row, column})=>{
  if (row.taker_is_buyer && columnIndex === 0) {
    return {color :  "#31BD65","font-size":"14px","border":"none"};
  }
  if (!row.taker_is_buyer && columnIndex === 0) {
    return {color : "#EB4F70","font-size":"14px","border":"none"}
  }
  return {"border":"none","font-size":"14px"}

}
onMounted(async ()=>{
  const d  = await getTableData()
  tableData = d.data.tick_list
})
</script>

<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%"
        header-row-class-name="filledOrderListClassName"
        :cell-style="filledOrderCell"

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