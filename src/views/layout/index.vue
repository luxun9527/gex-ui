<script setup>
import Header from '@/views/layout/header.vue'
import Main from '@/views/layout/main.vue'
import Footer from '@/views/layout/footer.vue'
import { userWebSocket } from "@/store/modules/ws.js";
const wsConn = userWebSocket()

</script>

<template>
  <el-container class=" text-light flex-col">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </el-container>
</template>

<style scoped>
</style>