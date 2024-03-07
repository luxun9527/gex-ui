<script setup>
import {getDepthList} from "@/api/system/sys_user.js";
import { useTickerStore } from "@/store/modules/ticker";
import {storeToRefs} from "pinia";
import {Decimal} from 'decimal.js'

const tickerStore = useTickerStore()

const {ticker}=storeToRefs(tickerStore)

let asks =$ref([])
let bids =$ref([])

const asksType=1
const bidsType=2


//卖盘最大的数量
let asksMaxQty = $ref( new Decimal(0))
//买盘最大数量
let bidsMaxQty = $ref(new Decimal(0))

const getTableData = async () => {
  const data=  await getDepthList({
    symbol:'BTC_USDT',
    level:15,
  })
  calMaxQty(data.data.asks,asksType)
  calMaxQty(data.data.bids,bidsType)
  if (data.data.asks.length < 15) {
    for (let i = 0; i < (15-data.data.asks.length)+1; i++) {
      data.data.asks.unshift({'price':' ','qty':' ','amount':' '})
    }
  }
  return data
}
const calMaxQty = (data,t)=>{
  data.forEach(el=>{
    if (el.qty === '') {
       return
    }
    let q = new Decimal(el.qty)

    if (t===asksType){
      if (q.gt(asksMaxQty)) {
        asksMaxQty = q
      }
    }else{
      if (q.gt(bidsMaxQty)) {
        bidsMaxQty = q
      }
    }


  })
}
const  asksListCell = ({rowIndex, columnIndex, row, column})=> {
  if (columnIndex === 0) {
    return {color: "#EB4F70",'text-align':'left','border': 'none','padding': '0','font-size':'12px','height':'1.5rem'}
  }
  return {'text-align':'right','border': 'none','padding': '2px 0','font-size':'12px ','height':'1.5rem'}
}
onMounted(async ()=>{
  const d = await getTableData()
  asks = d.data.asks
  bids = d.data.bids
})

const  bidsListCell = ({rowIndex, columnIndex, row, column})=> {
  if (columnIndex === 0) {
    return {'color': "#31BD65",'text-align':'left','border': 'none','padding': '0','font-size':'12px','height':'1.5rem'}
  }
  return {'text-align':'right','border': 'none','padding': '2px 0','font-size':'12px ','height':'1.5rem'}
}
const  asksListRow=({row, rowIndex})=> {
  if (row.qty === '') {
    return
  }
  let qty = new Decimal(row.qty)

  let sc = qty.div(asksMaxQty).mul(new Decimal(100)).ceil().toFixed(0, Decimal.ROUND_CEIL)
  return {'background-image': `linear-gradient(to left,#F1D9DE ` + sc + `%, #FFFFFF ` + sc + `%  )`}
}
const  bidsListRow=({row, rowIndex})=> {
  if (row.qty === '') {
    return
  }
  let qty = new Decimal(row.qty)

  let sc = qty.div(bidsMaxQty).mul(new Decimal(100)).ceil().toFixed(0, Decimal.ROUND_CEIL)
  return {'background-image': `linear-gradient(to left,#F1D9DE ` + sc + `%, #FFFFFF ` + sc + `%  )`}
}
</script>

<template>
  <div>


      <el-table
          header-row-class-name="asksTableClassName"
          :data="asks" class="min-w-full min-h-sm"
          :cell-style="asksListCell"
          :row-style="asksListRow"
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
      {{ ticker.last_price }}
    </el-divider>
    <el-table
        header-row-class-name="bidsTableClassName"
        empty-text=""
        :data="bids"
        :cell-style="bidsListCell"
        :row-style="bidsListRow"
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

.el-table{
  --el-table-border-color:none;
    --el-table-border : none;
}
</style>