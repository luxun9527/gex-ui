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
  <div class="border-l-4 border-l-gray-500  border-opacity-30 border-solid">
    <el-table :data="asks" class="min-w-full">
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
    </el-table>

    <el-table :data="bids" class="min-w-full min-h-screen ">
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
    </el-table>
  </div>
</template>

<style scoped>

</style>