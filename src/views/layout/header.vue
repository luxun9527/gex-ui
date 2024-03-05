<script setup>

import { useTickerStore } from "@/store/modules/ticker";
const tickerStore = useTickerStore()
import { storeToRefs } from 'pinia'

const {ticker}=storeToRefs(tickerStore)


</script>

<template>
  <el-header class="border-4 border-gray-500  border-opacity-30 border-solid flex items-center">
      <div class="flex flex-row items-center">
         <div>
          <span class="header-item">{{ ticker.symbol }}</span>
        </div>
         <div class="header-item">
          <span>{{ticker.last_price}}</span>
          <span>{{ticker.price_range}}</span>
        </div>
        <div class="header-item">
          <span>24小时最低</span>
          <span>{{ticker.low}}</span>
        </div>
        <div class="header-item">
          <span>24小时最高</span>
          <span>{{ticker.high}}</span>
        </div>
        <div class="header-item">
          <span>24小时量(btc)</span>
          <span>{{ticker.amount}}</span>
        </div>
        <div class="header-item">
          <span>24小时额(usdt)</span>
          <span>{{ticker.volume}}</span>
        </div>
      </div>
  </el-header>    
</template>

<style scoped>
  .header-item{
    display: flex;
    width: 7rem;
    flex-direction: column;
    font-size: 14px;
    align-content: center;

  }
</style>