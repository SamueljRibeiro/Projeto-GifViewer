<template>
  <q-page class="p-6 bg-slate-100 shadow">
    <div class="mb-8 mt-6">
      <h1 class="text-2xl lg:text-5xl font-bold mb-4">
        Categorias de <span class="text-blue-600">GIFs</span>
      </h1>
      <p class="text-gray-600 text-md lg:text-lg">Explore diferentes categorias de Gifs!</p>
    </div>

    <!-- Botões de categorias -->

    <div v-if="!mobile" class="flex flex-wrap gap-4 mb-6">
      <q-btn
        v-for="categoria in gifStore.categorias"
        :key="categoria"
        :label="categoria"
        color="blue"
        flat
        rounded
        @click="gifStore.gifsPorCategoria(categoria)"
      />
    </div>

    <!-- Select de categorias Mobile-->

    <div v-else class="q-gutter-md mb-6">
      <q-select
        outlined
        v-model="categoriaSelecionada"
        :options="gifStore.categorias"
        label="Categorias"
        emit-value
        map-options
        @update:model-value="gifStore.gifsPorCategoria"
        class="shadow-md"
      />
    </div>

    <!-- Skeleton de carregamento-->

    <GifSkeleton v-if="gifStore.skeleton" />

    <!-- Card Gifs  -->

    <div v-else-if="gifStore.gifsCategoria.length" class="p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-lg lg:text-2xl flex font-bold mb-4 gap-2">
        <span class="text-blue-600">{{ gifStore.selecionada }}</span>
      </h1>
      <div class="columns-2 md:columns-3 lg:columns-4 gap-4">
        <div
          v-for="giff in gifStore.gifsCategoria"
          :key="giff.id"
          class="relative group mb-4 break-inside-avoid hover:scale-[1.02] transition bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <img :src="giff.images.fixed_height.url" class="w-full rounded-xl" alt="Gif" />

          <q-btn
            dense
            round
            flat
            :icon="gifStore.isFavoritos(giff.id) ? 'star' : 'star'"
            :color="gifStore.isFavoritos(giff.id) ? 'yellow' : 'white'"
            class="mt-2 absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 hover:scale-[1.02] bg-black/0 group-hover:bg-black/50 backdrop-blur-sm transition"
            @click="gifStore.favoritar(giff)"
          />
        </div>
      </div>
    </div>

    <!--Caso não tenha nenhuma categoria selecionada-->

    <div v-else class="flex flex-col items-center lg:mt-60 text-gray-400 mt-16">
      <p class="text-lg">Selecione uma categoria acima!</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import GifSkeleton from 'src/components/GifSkeleton.vue';
import { onMounted, computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useGifs } from 'src/stores/PiniaGifs';

const $q = useQuasar();

const mobile = computed(() => $q.screen.lt.md);

const categoriaSelecionada = ref<string | null>(null);

const gifStore = useGifs();

onMounted(() => {
  gifStore.buscaCategoria();
});
</script>
