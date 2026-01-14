<!--Layout Skeleton de carregamento -->

<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-lg lg:text-2xl font-bold mb-4">Gifs</h1>
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4">
      <div
        v-for="n in 16"
        :key="n"
        class="relative group mb-4 break-inside-avoid hover:scale-[1.02] transition bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <q-skeleton type="rect" class="w-full" :height="`${120 + (n % 3) * 60}px`" />

        <div class="mt-2 absolute top-2 right-2">
          <q-skeleton dense round flat type="circle" size="28px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
