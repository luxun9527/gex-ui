import {createRouter, createWebHashHistory} from 'vue-router';
const Index = () => import('@/views/layout/index.vue')


// 本地静态路由
export const constantRoutes = [
    {
        path: '/',
        name: 'index',
        component:Index
    }
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

export default router;
