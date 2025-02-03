import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/callback-kakao',
        name: 'CallbackKakao',
        component: () => import('../components/CallbackKakao.vue'),
        meta: { 
            requiresAuth: false,
            title: '카카오 로그인 콜백'
        }
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;