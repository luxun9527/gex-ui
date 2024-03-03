<script setup>
</script>

<template>
  <div class="min-w-full border-t-4   border-opacity-30 border-t-solid border-t-gray-500">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="限价委托" name="second">Config</el-tab-pane>
      <el-tab-pane label="市价委托" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>

</style>