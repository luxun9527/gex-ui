<script setup>

</script>

<template>
  <div class="border-l-4 border-l-gray-500  border-opacity-30 border-solid">
    <el-table :data="tableData" class="min-w-full min-h-screen ">
      <el-table-column fixed prop="date" label="价格"  />
      <el-table-column prop="name" label="数量"  />
      <el-table-column prop="name" label="时间"  />
    </el-table>
  </div>
</template>

<style scoped>

</style>