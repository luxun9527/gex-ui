<script setup>
</script>

<template>
  <div class="border-l-4 border-r-4 border-l-gray-500 border-r-gray-500  border-opacity-30 border-solid">
    <el-table :data="tableData" class="min-w-full min-h-screen ">
      <el-table-column fixed prop="date" label="币对"  />
      <el-table-column prop="name" label="价格"  />
      <el-table-column prop="name" label="涨跌幅"  />
    </el-table>
  </div>
</template>

<style scoped>

</style>