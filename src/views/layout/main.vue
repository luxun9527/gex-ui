<script setup>
import Aside from '@/views/layout/aside.vue'
import Kline from '@/views/layout/kline.vue'
import Trade from '@/views/layout/trade.vue'
import OrderBook from '@/views/layout/orderbook.vue'
import FilledOrder from '@/views/layout/filledOrder.vue'

</script>

<template>
    <el-main>
      <el-row>
        <el-col :span="4"><Aside></Aside></el-col>
        <el-col :span="12"><Kline></Kline><Trade></Trade></el-col>
        <el-col :span="4"><OrderBook></OrderBook></el-col>
        <el-col :span="4"><FilledOrder></FilledOrder></el-col>
      </el-row>
    </el-main>
</template>

<style scoped>
.el-main{
  padding: 0;
}
</style>