<template>
  <q-page class="p-6 bg-slate-100 shadow">
    <div class="flex flex-col justify-center items-center lg:items-start mb-8 mt-6">
      <h1 class="text-2xl lg:text-5xl font-bold mb-4">
        Bem-vindo(a) ao <span class="text-blue-600">GifViewer</span>
      </h1>
      <p class="text-gray-600 text-md lg:text-lg">Explore, favorite e salve seus GIFs favoritos!</p>
    </div>

    <!--Input de busca -->

    <div class="max-w-2xl mx-auto mt-3 shadow-md rounded-2xl">
      <div class="flex justify-between gap-2 mb-20 bg-white rounded-2xl shadow-md p-4">
        <q-input
          placeholder="Buscar GIFs..."
          outlined
          v-model="gifStore.inputBusca"
          class="w-full lg:max-w-lg border-none rounded-lg focus-within:shadow-lg focus-within:scale-[1.01] transition"
          @keyup.enter="gifStore.buscarGif"
        />

        <q-btn
          label="Buscar"
          color="primary"
          @click="gifStore.buscarGif"
          class="rounded-lg hover:scale-[1.02] transition w-full lg:w-auto lg:px-5 px-4"
        />
      </div>
    </div>

    <!-- Skeleton de carregamento-->

    <GifSkeleton v-if="gifStore.skeleton" />

    <!-- Card Gifs  -->

    <div v-else-if="gifStore.gifs.length" class="p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-lg lg:text-2xl font-bold mb-4">Gifs</h1>
      <div class="columns-2 md:columns-3 lg:columns-4 gap-4">
        <div
          v-for="gif in gifStore.gifs"
          :key="gif.id"
          class="relative group mb-4 break-inside-avoid hover:scale-[1.02] transition bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <img :src="gif.images.fixed_height.url" class="w-full rounded-xl" alt="Gif" />

          <q-btn
            dense
            round
            flat
            :icon="gifStore.isFavoritos(gif.id) ? 'star' : 'star'"
            :color="gifStore.isFavoritos(gif.id) ? 'yellow' : 'white'"
            class="mt-2 absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 hover:scale-[1.02] bg-black/0 group-hover:bg-black/50 backdrop-blur-sm transition"
            @click="gifStore.favoritar(gif)"
          />
        </div>
      </div>
    </div>

    <!--Caso não encontre GIFs-->

    <div v-else class="text-gray-400 flex flex-col items-center lg:mt-40 mt-16">
      <q-icon
        name="search_off"
        size="200px"
        class="hover:scale-[1.02] transition-transform duration-200"
      />
      <p class="text-lg">nenhum GIF encontrado!</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import GifSkeleton from 'src/components/GifSkeleton.vue';
import { onMounted } from 'vue';
import { useGifs } from 'src/stores/PiniaGifs';

const gifStore = useGifs();

onMounted(async () => {
  await gifStore.buscarGifs();
});
</script>
