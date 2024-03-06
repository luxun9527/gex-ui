<script setup>
import {getDepthList} from "@/api/system/sys_user.js";

let asks =$ref([])
let bids =$ref([])


const getTableData = async () => {
  return  await getDepthList({
    symbol:'BTC_USDT',
    level:100,
  })

}

onMounted(async ()=>{
  const d = await getTableData()
  asks = d.data.asks
  bids = d.data.bids
})
</script>

<template>
  <div class="">
    <el-table
        header-row-class-name="asksTableClassName"
        :data="asks" class="min-w-full"
        empty-text="无卖盘"

    >
      <el-table-column
          prop="price"
          width='100'
          label="价格(usdt)"
      >
      </el-table-column>
      <el-table-column
          prop="qty"
          label="数量"
          width='90'>
      </el-table-column>
      <el-table-column
          prop="amount"
          min-width="100"
          label="金额">
      </el-table-column>
      <template v-slot:empty>
        <div class="noData" >无数据</div>
      </template>
    </el-table>
    <el-divider>
      1212.121
    </el-divider>
    <el-table
        header-row-class-name="bidsTableClassName"
        empty-text=""
        :data="bids"
         :show-header=false
        class="min-w-full  ">
      <el-table-column
          prop="price"
          width='100'
          label="价格(usdt)"
      >
      </el-table-column>
      <el-table-column
          prop="qty"
          label="数量"
          width='90'>
      </el-table-column>
      <el-table-column
          prop="amount"
          min-width="100"
          label="金额">
      </el-table-column>
      <template v-slot:empty>
          <div class="noData" >无数据</div>
      </template>


    </el-table>
  </div>
</template>

<style scoped>
:deep(.el-table) .asksTableClassName th{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
:deep(.el-table) .bidsTableClassName th{
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