<script setup>
</script>

<template>
  <!-- 路由中设置的组件会替换router-view标签 -->
  <div id="app">
    <router-view />
  </div>

</template>

<style scoped>
#app {
  height: 100%;
  font-weight: 400 !important;
}
body,html{
  margin: 0;
  /* margin: 0;
  font-family: Georgia, serif !important; */
}
</style>
