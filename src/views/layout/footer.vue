<script setup>
import {getOrderList} from "@/api/system/sys_user.js";

const activeName = $ref('current')
let tableData = $ref([])

const newCreated = 1
const partFilled = 2
const allFilled = 3
const canceled = 4
const cancelOrder = () => {

}

const handlerSwitch = ()=>{

}
onMounted(async ()=>{
  let s1,s2
  if (activeName === 'current'){
    s1 = newCreated
    s2 = partFilled
  }else{
    s1 = allFilled
    s2 = canceled
  }
  tableData = await getTableData(s1,s2)

})
const getTableData = async (...status) => {
  const orderList = await getOrderList({
    status_list: status,
    symbol_name: "BTC_USDT"
  })

  return  orderList.data.order_list.map((el, i, arr) => {
    el.side = el.side === 1 ? '买' : '卖'
    el.symbol = el.symbol_name
    el.date = el.created_at
    el.order_type = el.order_type === 1 ? '市价单' : '限价单'
    el.filledUnfilled = el.filled_qty + '/' + el.qty

    let statusStr = ''
    switch (el.status) {
      case newCreated:
        statusStr = '未成交'
        break
      case partFilled:
        statusStr = '部分成交'
        break
      case allFilled:
        statusStr = '全部成交'
        break
      case canceled:
        statusStr = '订单取消'
        break
    }
    el.status = statusStr
    return el
  })

}
</script>

<template>
  <el-footer
      class="border-l-4 border-t-4 border-r-4 border-t-gray-500 border-l-gray-500 border-r-gray-500 border-opacity-30 border-solid ">

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handlerSwitch">
      <el-tab-pane label="当前委托" class="flex justify-between  items-center" name="current">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="时间"
              width="150">
          </el-table-column>
          <el-table-column
              prop="symbol"
              label="交易对"
              width="180">
          </el-table-column>
          <el-table-column
              prop="side"
              label="方向">
          </el-table-column>
          <el-table-column
              prop=price
              label="委托价"
              width="180">
          </el-table-column>
          <el-table-column
              prop="qty"
              label="委托量"
              width="180">
          </el-table-column>
          <el-table-column
              prop="amount"
              label="委托总额">
          </el-table-column>
          <el-table-column
              prop="filledUnfilled"
              label="已成交数量/未成交数量">
          </el-table-column>
          <el-table-column
              prop="status"
              label="操作"

          >
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  type="danger"
                  @click="cancelOrder(scope.$index, scope.row)">取消订单
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="历史委托" class="flex justify-between  items-center" name="history">
        历史委托
      </el-tab-pane>

    </el-tabs>

  </el-footer>
</template>

<style scoped>

</style>