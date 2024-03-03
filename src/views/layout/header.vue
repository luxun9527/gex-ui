<script setup>

</script>

<template>
  <el-header class="border-4 border-gray-500  border-opacity-30 border-solid flex items-center">
      <div class="flex flex-row items-center">
         <div>
          <span class="header-item">BTC/USDT</span>
        </div>
         <div class="header-item">
          <span>0.787878</span>
          <span>-0.56%</span>
        </div>
         <div class="header-item">
          <span>人民币价格</span>
          <span>￥5.2</span>
        </div>
        <div class="header-item">
          <span>24小时最低</span>
          <span>0.6800</span>
        </div>
        <div class="header-item">
          <span>24小时最高</span>
          <span>0.7800</span>
        </div>
        <div class="header-item">
          <span>24小时量(ada)</span>
          <span>12212</span>
        </div>
        <div class="header-item">
          <span>24小时额(usdt)</span>
          <span>232323</span>
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