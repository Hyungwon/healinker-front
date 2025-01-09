import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import CallbackKakao from '../components/CallbackKakao.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/callback-kakao', component: CallbackKakao }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;