import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'Favoritos', name: 'favoritos', component: () => import('pages/FavoritosPage.vue') },
      { path: 'Categorias', name: 'categorias', component: () => import('pages/CategoriasPage.vue') },
      { path: 'Sobre', name: 'sobre', component: () => import('pages/SobrePage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
