import type { RouteRecordRaw } from 'vue-router';


export const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    }
];