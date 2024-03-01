import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'

import App from './App.vue'


const app = createApp(App)

import router from '@/router'
app.use(router)


import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
    locale: zhCn,
})

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
// 持久化存储
import { createPersistedState } from 'pinia-plugin-persistedstate';
pinia.use(
    createPersistedState({
        auto: true, // 启用所有 Store 默认持久化
    }),
);

// 重写 $reset 方法 => 解决组合式api中无法使用问题
pinia.use(({ store }) => {
    const initialState = JSON.parse(JSON.stringify(store.$state));
    store.$reset = () => {
        store.$patch(initialState);
    }
})
app.use(pinia)

// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app')
