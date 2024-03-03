<script setup>
import { createOrder } from '@/api/system/sys_user';

const limitOrderBuyFormRef = $ref({})
const limitOrderBuyForm = $ref({})
const limitOrderBuyFormRules = reactive({
  price: [{ required: true, trigger: "blur", message: "限价单请输入价格" }],
  qty: [{ required: true, trigger: "blur", message: "限价单请输入数量" }],
})
const limitOrderSellFormRef = $ref({})
const limitOrderSellForm = $ref({})
const limitOrderSellFormRules =  reactive({
  price: [{ required: true, trigger: "blur", message: "限价单请输入价格" }],
  qty: [{ required: true, trigger: "blur", message: "限价单请输入数量" }],
})


const markerOrderSellFormRef = $ref({})
const markerOrderSellForm = $ref({})
const markerOrderSellFormRules =  reactive({
  amount: [{ required: true, trigger: "blur", message: "市价单请输入金额" }],
})

const markerOrderBuyFormRef = $ref({})
const markerOrderBuyForm = $ref({})
const markerOrderBuyFormRules = reactive({
  qty: [{ required: true, trigger: "blur", message: "市价单请输入数量" }],
})
let activeName = $ref('lo')

const buy = 1
const sell = 2
const mo = 1
const lo = 2


const submitForm = async(orderType, side) => {
  let data = {
      symbol_id: 14,
      symbol_name: "BTC_USDT",
      price: "",
      qty: "",
      amount: "",
      side: side,
      order_type: orderType
  }
  //
  if (side === buy&&orderType === lo) {
    data.price = limitOrderBuyForm.price
    data.qty = limitOrderBuyForm.price
  }else if (side === sell&&orderType === lo) {
    data.price = limitOrderSellForm.price
    data.qty = limitOrderSellForm.qty
  }else if (side === buy&&orderType === mo) {
    data.amount = markerOrderBuyForm.amount
  }else if (side === sell&&orderType === mo) {
    data.qty = markerOrderSellForm.qty
  }

  const res = await createOrder(data)
  if (res.code === 0) {
    ElMessage.success('下单成功')
  }
}


</script>

<template>
  <div class="min-w-full border-t-4   border-opacity-30 border-t-solid border-t-gray-500">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="限价委托" class="flex justify-between  items-center" name="lo">
        <el-form class="min-w-p45 ml-8"  ref="limitOrderBuyFormRef" :model="limitOrderBuyForm" :rules="limitOrderBuyFormRules">
            <el-form-item  prop="price">
              <el-input
                size="large"
                v-model="limitOrderBuyForm.price"
                placeholder="价格"
                maxlength="30"
                class="mb-2"
              />
            </el-form-item>
            <el-form-item prop="qty">
              <el-input
                size="large"
                v-model="limitOrderBuyForm.qty"
                placeholder="数量"
                class="mb-2"
                maxlength="30"
              />
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              size="large"
              color="#ef6f8a"
              @click="submitForm"
              round
              >买入</el-button
            >
          </el-form>
          <el-form class="min-w-p45 mr-8" ref="limitOrderSellFormRef" :model="limitOrderSellForm" :rules="limitOrderSellFormRules">
            <el-form-item prop="price">
              <el-input
                size="large"
                v-model="limitOrderSellForm.price"
                placeholder="价格"
                maxlength="30"
                class="mb-2"
              />
            </el-form-item>
            <el-form-item prop="qty">
              <el-input
                size="large"
                v-model="limitOrderSellForm.qty"
                placeholder="数量"
                class="mb-2"
                maxlength="30"
              />
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              size="large"
              color="#58ca82"
              round
              @click="submitForm"
              >卖出</el-button
            >
          </el-form>
      </el-tab-pane>
      <el-tab-pane label="市价委托" name="mo">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.el-input {
  --el-input-focus-border-color: #1f1f1f;
}
</style>