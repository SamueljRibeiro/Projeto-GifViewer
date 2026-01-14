import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';
import { apiError } from 'src/composable/UseApiError';

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

export const useGifs = defineStore('gif', {
  state: () => ({
    gifs: [] as Gif[],
    gifsCategoria: [] as Gif[],
    gifsFavoritos: [] as Gif[],
    inputBusca: '',
    favoritos: new Set<string>(JSON.parse(localStorage.getItem('favoritos') || '[]')),
    skeleton: false,
    categorias: [] as string[],
    selecionada: '',
  }),

  getters: {
    isFavoritos: (state) => {
      return (id: string) => state.favoritos.has(id);
    },
  },

  actions: {
    /* Buscar gifs para o home */

    async buscarGifs() {
      const { tratarErro } = apiError();

      if (this.skeleton) return;
      this.skeleton = true;
      try {
        const res = await api.get('/trending', {
          params: {
            limit: 15,
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.gifs = res.data.data;
      } catch (error) {
        tratarErro(error);
      } finally {
        this.skeleton = false;
      }
    },

    /* Buscar pelo input */

    async buscarGif() {
      const { tratarErro } = apiError();

      if (!this.inputBusca) {
        await this.buscarGifs();
        return;
      }

      if (this.skeleton) return;
      this.skeleton = true;

      try {
        const res = await api.get('/search', {
          params: {
            q: this.inputBusca,
            limit: 15,
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.gifs = res.data.data;
      } catch (error) {
        tratarErro(error);
      } finally {
        this.skeleton = false;
      }
    },

    /* Buscar favoritos */

    async buscarFavoritos() {
      const { tratarErro } = apiError();

      if (this.favoritos.size === 0) {
        this.gifs = [];
        return;
      }

      if (this.skeleton) return;
      this.skeleton = true;

      try {
        const res = await api.get('/', {
          params: {
            ids: [...this.favoritos].join(','),
          },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.gifsFavoritos = res.data.data;
      } catch (error) {
        tratarErro(error);
      } finally {
        this.skeleton = false;
      }
    },

    persistirFavoritos() {
      localStorage.setItem('favoritos', JSON.stringify([...this.favoritos]));
    },

    favoritar(gif: Gif) {
      if (this.favoritos.has(gif.id)) {
        this.favoritos.delete(gif.id);
        Notify.create({
          type: 'info',
          message: 'Removido dos favoritos',
          position: 'top-right',
        });
        this.gifsFavoritos = this.gifsFavoritos.filter((g) => g.id !== gif.id);
      } else {
        this.favoritos.add(gif.id);
        Notify.create({
          type: 'positive',
          message: 'GIF favoritado com sucesso ⭐',
          position: 'top-right',
        });
      }
      this.persistirFavoritos();
    },

    /* Buscar categorias */

    buscaCategoria() {
      const { tratarErro } = apiError();

      try {
        this.categorias = [
          'Engraçados',
          'Esportes',
          'Filmes',
          'Músicas',
          'Animais',
          'Memes',
          'Reações',
          'Programas de TV',
          'Jogos',
          'Natureza',
        ];
      } catch (error) {
        tratarErro(error);
      }
    },

    async gifsPorCategoria(categorias: string) {
      const { tratarErro } = apiError();
      if (this.skeleton) return;
      this.skeleton = true;

      this.selecionada = categorias;

      try {
        const res = await api.get('/search', {
          params: {
            q: categorias,
            limit: 15,
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.gifsCategoria = res.data.data;
      } catch (error) {
        tratarErro(error);
      } finally {
        this.skeleton = false;
      }
    },
  },
});
