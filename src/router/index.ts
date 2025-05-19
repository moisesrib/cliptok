import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import ErrorView from '@/pages/ErrorView.vue';
import PrivacidadeView from '@/pages/privacidade/PrivacidadeView.vue';
import TermosView from '@/pages/termos/TermosView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/termos' },
      { path: 'termos', component: TermosView },
      { path: 'privacidade', component: PrivacidadeView },
    ],
  },
  { path: '/:catchAll(.*)*', component: ErrorView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

