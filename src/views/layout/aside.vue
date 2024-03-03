<script setup>
//let headerClass = $ref('headerClass')
const tableRowClassName = ({ row, rowIndex }) => {
  console.log(rowIndex);
  if (rowIndex === 0) {
    return "warning-row";
  } else if (rowIndex === 1) {
    return "success-row";
  }
  return "";
};
const tableData = $ref([
  {
    symbol_name: "2016-05-03",
    price: "Tom",
    range:'test',
  },
]);
</script>

<template>
  <div
    class="border-l-4 border-r-4 border-l-gray-500 border-r-gray-500 border-opacity-30 border-solid"
  >
    <el-table
      :header-row-class-name="tableRowClassName"
      :data="tableData"
      class="min-w-full min-h-screen"
    >
      <el-table-column fixed prop="symbol_name" label="币对" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="range" label="涨跌幅" />
    </el-table>
  </div>
</template>

<style scoped>
:deep(.el-table) .warning-row th{
  font-size: 12px;
  font-weight:normal;
  padding:0;
}
</style>