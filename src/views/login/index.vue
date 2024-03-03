<template>
  <el-row class="min-h-screen bg-dark-500">
    <el-col :span="10" class="flex justify-center items-center flex-col">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临gex</div>
      </div>
    </el-col>
    <el-col
      :span="14"
      class="bg-light-50 flex justify-center items-center flex-col"
    >
      <div class="border-red-100 w-xs">
        <div class="font-mono text-2xl text-center mb-5">登录</div>
        <div>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
            <el-form-item prop="username">
              <el-input
                size="large"
                v-model="loginForm.username"
                prefix-icon="User"
                placeholder="请输入账号"
                maxlength="30"
                class="mb-2"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                size="large"
                v-model="loginForm.password"
                prefix-icon="Lock"
                placeholder="请输入密码"
                show-password
                class="mb-2"
                maxlength="30"
              />
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              @click="handleLogin"
              size="large"
              :loading="buttonLoading"
              color="#1f1f1f"
              round
              >{{ buttonName }}</el-button
            >
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { useUserStore } from "@/store/modules/user";
import { ElMessage } from "element-plus";

const loginFormRef = $ref({});
const loginForm = $ref({});
let buttonLoading = $ref(false);
let buttonName = $ref("登 录");

const userStore = useUserStore();

const loginRules = reactive({
  username: [{ required: true, trigger: "blur", message: "请输入账号" }],
  password: [{ required: true, trigger: "blur", validator: validatePassword }],
});

function validatePassword(rule, value, callback) {
  if (!value || value.length < 6) {
    callback(new Error("密码最少6位"));
  } else {
    callback();
  }
}

const login = async () => {
  return await userStore.LoginIn(loginForm);
};
const handleLogin = async () => {
  loginFormRef.validate(async (v) => {
    if (v) {
      buttonLoading = true;
      buttonName = "登录中";
      await login(loginForm);
      buttonName = "登录";
      buttonLoading = false;
    } else {
      ElMessage({
        type: "error",
        message: "请正确填写登录信息",
        showClose: true,
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.el-input {
  --el-input-focus-border-color: #1f1f1f;
}
</style>