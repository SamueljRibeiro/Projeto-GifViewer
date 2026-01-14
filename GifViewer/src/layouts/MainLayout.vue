<template>
  <q-layout view="hHh LpR fFf" class="bg-slate-100">
    <q-header reveal class="Azul-600 text-white">
      <q-toolbar class="shadow-xl h-16">
        <q-toolbar-title class="flex items-center">
          <q-img src="/src/assets/GifViewer.png" class="h-auto w-40 lg:w-48 lg:ml-11" />
        </q-toolbar-title>

        <div
          v-if="showAvatar"
          class="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
        >
          <h1 class="mr-4 text-xl">Samuel Ribeiro</h1>
          <q-avatar class="h-auto w-12 mr-4">
            <img src="src/assets/icone.png" />
          </q-avatar>
        </div>
        <div
          class="lg:hidden p-2 hover:scale-105 transition-transform duration-300 flex items-center"
        >
          <button class="border-none">
            <q-icon name="menu" class="text-white w-full" @click="toggleLeftDrawer()" size="32px" />
          </button>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :overlay="Mobile"
      v-model="leftDrawerOpen"
      side="left"
      :behavior="Mobile ? 'mobile' : 'desktop'"
      class="AzulBLateral text-white lg:rounded-r-2xl shadow-xl"
      :width="Mobile ? $q.screen.width : 300"
    >
      <nav class="flex flex-col p-4 space-y-4 mt-8 group">
        <div class="lg:hidden flex justify-end mb-4 mr-7">
          <button
            class="text-white hover:scale-105 transition-transform duration-300"
            @click="leftDrawerOpen = false"
          >
            <span class="text-3xl transition-transform duration-300">X</span>
          </button>
        </div>

        <!--Home-->
        <router-link
          to="/"
          class="rounded-lg transition-colors duration-500"
          :class="
            $route.path === '/'
              ? 'Azul-600 text-white shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]'
              : 'text-white hover:bg-blue-600 hover:text-white hover:shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]  transition-all group'
          "
        >
          <div
            class="relative inline-block px-6 py-2 border-2-none cursor-pointer rounded-lg group"
          >
            <img
              :src="iconHome"
              alt="Ícone Dashboard"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-auto pl-5 pointer-events-none"
              :class="
                $route.path === '/'
                  ? ' opacity-100'
                  : 'brightness-100 opacity-50 group-hover:opacity-100'
              "
            />

            <span class="ml-6 pl-3 text-lg">Home</span>
          </div>
        </router-link>

        <!--Favoritos-->
        <router-link
          to="/Favoritos"
          class="rounded-lg transition-colors duration-500"
          :class="
            $route.path === '/Favoritos'
              ? 'Azul-600 text-white shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]'
              : 'text-white hover:bg-blue-600 hover:text-white hover:shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]  transition-all group'
          "
        >
          <div
            class="relative inline-block px-6 py-2 border-2-none cursor-pointer rounded-lg transition-colors group"
          >
            <img
              :src="iconeFavorito"
              alt="Ícone"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-11 h-auto pl-5 pointer-events-none"
              :class="
                $route.path === '/Favoritos'
                  ? 'opacity-100'
                  : 'brightness-100 opacity-50 group-hover:opacity-100'
              "
            />

            <span class="ml-6 pl-3 text-lg">Favoritos</span>
          </div>
        </router-link>

        <!--Categorias-->
        <router-link
          to="/Categorias"
          class="rounded-lg transition-colors duration-500"
          :class="
            $route.path === '/Categorias'
              ? 'Azul-600 text-white shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]'
              : 'text-white hover:bg-blue-600 hover:text-white hover:shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]  transition-all group'
          "
        >
          <div
            class="relative inline-block px-6 py-2 border-2-none cursor-pointer rounded-lg transition-colors group"
          >
            <img
              :src="IconCategorias"
              alt="Ícone"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-11 h-auto pl-5 pointer-events-none"
              :class="
                $route.path === '/Categorias'
                  ? 'opacity-100'
                  : 'brightness-100 opacity-50 group-hover:opacity-100'
              "
            />

            <span class="ml-6 pl-3 text-lg">Categorias</span>
          </div>
        </router-link>

        <!--Sobre-->

        <router-link
          to="/Sobre"
          class="rounded-lg transition-colors duration-500"
          :class="
            $route.path === '/Sobre'
              ? 'Azul-600 text-white shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]'
              : 'text-white hover:bg-blue-600 hover:text-white hover:shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]  transition-all group'
          "
        >
          <div
            class="relative inline-block px-6 py-2 border-2-none cursor-pointer rounded-lg transition-colors group"
          >
            <img
              :src="iconInformacoes"
              alt="Ícone"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 w-11 h-auto pl-5 pointer-events-none"
              :class="
                $route.path === '/Sobre'
                  ? 'opacity-100'
                  : 'brightness-100 opacity-50 group-hover:opacity-100'
              "
            />

            <span class="ml-6 pl-3 text-lg">Sobre</span>
          </div>
        </router-link>
      </nav>
    </q-drawer>

    <q-page-container class="flex-1 overflow-x-hidden">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import iconHome from 'src/assets/IconHome.png';
import iconeFavorito from 'src/assets/IconFavoritos.png';
import IconCategorias from 'src/assets/IconCategorias.png';
import iconInformacoes from 'src/assets/Iconinformacoes.png';
import { useQuasar } from 'quasar';

const $q = useQuasar();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const showAvatar = computed(() => $q.screen.gt.sm);

const Mobile = computed(() => $q.screen.lt.md);

const leftDrawerOpen = ref(!$q.screen.lt.md);

watch(Mobile, (mobile) => {
  leftDrawerOpen.value = !mobile;
});
</script>
