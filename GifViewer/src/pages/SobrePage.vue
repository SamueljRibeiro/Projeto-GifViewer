<template>
  <q-page class="p-6 bg-slate-100">
    <div class="max-w-5xl mx-auto mb-8 mt-6 space-y-6">
      <div class="mb-8 mt-6">
        <h1 class="text-2xl lg:text-5xl font-bold mb-4">
          Sobre o <span class="text-blue-600">Projeto</span>
        </h1>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md">
        <div class="text-h6">Sobre o Desenvolvedor</div>
        <div class="text-subtitle2 text-grey-7 mb-3">Informações gerais</div>

        <div class="mb-8">
          <p class="leading-relaxed">
            Me chamo Samuel Ribeiro e sou um desenvolvedor Front-end focado em tecnologias modernas.
            Este projeto faz parte da minha trajetória de aprendizado em Vue.js, TypeScript e
            Quasar, onde busco aplicar boas práticas de desenvolvimento e criar interfaces
            intuitivas.
          </p>
        </div>

        <div class="text-h6">Propósito do Teste</div>
        <div class="text-subtitle2 text-grey-7 mb-3">Objetivo da aplicação</div>

        <div class="mb-8">
          <p class="leading-relaxed">
            O GifViewer foi desenvolvido como um projeto de teste com o objetivo de demonstrar
            habilidades técnicas no desenvolvimento front-end, incluindo consumo de APIs,
            componentização, organização de código e uso de frameworks modernos.
          </p>
        </div>

        <div class="text-h6">Tecnologias Utilizadas</div>
        <div class="text-subtitle2 text-grey-7 mb-3">Ferramentas e frameworks</div>

        <div>
          <ul class="list-inside grid grid-cols-1 md:grid-cols-2 gap-1">
            <li>Vue 3 (Composition API + script setup)</li>
            <li>Quasar Framework</li>
            <li>Vue Router</li>
            <li>TypeScript</li>
            <li>Pinia (gerenciamento de estado)</li>
            <li>Axios (requisições HTTP)</li>
            <li>LocalStorage</li>
            <li>Tailwind CSS</li>
            <li>API do GIPHY</li>
          </ul>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
