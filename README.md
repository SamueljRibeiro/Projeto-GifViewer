# 🎬 GifViewer

Aplicação web para explorar GIFs utilizando a API do GIPHY, com busca por termos, filtros por categoria e sistema de favoritos, tudo em uma interface moderna e responsiva.

## 🚀 Funcionalidades

- 📈 Listagem de GIFs populares
- 🔍 Busca de GIFs por termo
- 🗂️ Filtro por categorias
- ⭐ Sistema de favoritos
- 💾 Persistência de dados com LocalStorage
- 📱 Interface responsiva (desktop e mobile)

## 🛠 Tecnologias Utilizadas

- Vue 3 (Composition API + script setup)
- Quasar Framework 2
- Vue Router
- Pinia (gerenciamento de estado)
- TypeScript
- Axios (requisições HTTP)
- Tailwind CSS
- LocalStorage
- API do GIPHY

## ⚙️ Configuração do Projeto

### 📌 Pré-requisitos

- Node.js (versão recomendada: LTS)
- NPM ou Yarn

### 📥 Instalação

npm install

ou

yarn install

Obs: Os comandos acima devem ser executados dentro da pasta do projeto GifViewer

## 🔐 Variáveis de Ambiente

Este projeto utiliza uma chave da API do GIPHY.  
Por boas práticas de segurança, o arquivo .env não é versionado.

### Passos

1. Crie um arquivo .env na raiz do projeto baseado no .env.example
2. Adicione sua chave da API:

API_KEY=SUACHAVEAQUI

A chave pode ser obtida gratuitamente em:  
https://developers.giphy.com/

## ▶️ Executar em Modo Desenvolvimento

npm run dev


© 2026 - Samuel Ribeiro
Projeto para fins educacionais.
