<script>
//Importo lo store
import { store } from './data/store'
//Importo api
import { api, apiAddress } from './data/api'

//Importo i componenti
import SearchForm from './components/SearchForm.vue';
import CollectionList from './components/CollectionList.vue';

//importo axios
import axios from "axios";

export default {
  name: "Boolflix",
  data: () => ({
    store, api
  }),
  components: {
    SearchForm, CollectionList
  },
  computed: {
    isNoResults() {
      if (!store.films.length && !store.series.length) return store.noResults = true;
    },
  },
  methods: {
    callAxios(endpoint, collection) {
      axios.get(endpoint).then(res => {
        store[collection] = res.data.results.map((prod) => {
          store.noResults = false;
          return {
            id: prod.id,
            title: prod.title || prod.name,
            orTitle: prod.original_title || prod.original_name,
            lang: prod.original_language,
            poster: prod.poster_path,
            vote: prod.vote_average,
            voteCount: prod.vote_count,
            overview: prod.overview,
            release: prod.release_date || prod.first_air_date
          }
        })

      })
      //.catch(err).then(store.firstAccess = true)
    },
    searchTitle(text) {
      if (!text) return
      store.firstAccess = false;
      api.query = text

      const filmsEndpoint = `${api.baseUri}${api.moviesSearch}${api.apiKey}&query=${api.query}`
      const seriesEndpoint = `${api.baseUri}${api.seriesSearch}${api.apiKey}&query=${api.query}`
      this.callAxios(filmsEndpoint, "films")
      this.callAxios(seriesEndpoint, "series")
    },

  }
}

</script>

<template>
  <!-- Header con searchbar -->
  <header class="d-flex">
    <button id="logo-button" onclick="location.reload()">
      <h1>Boolflix</h1>
    </button>
    <SearchForm :placeholder="'Scrivi qui un titolo...'" @submit-search-text="searchTitle" />
  </header>
  <main>
    <img src="../cinema.png" alt="">
    <div class="container-fluid">
      <!-- Main section con lista film/serie -->
      <div v-if="store.firstAccess || store.noResults" id="start-screen" class="flex-center">
        <div class="flex-center">
          <div v-if="store.firstAccess" class="flex-center">
            <img src="../pops.png" alt="">
            <h1 class="w-100">Scegli il titolo di un Film o di una Serie TV</h1>
          </div>
          <div v-else>
            <h1 class="w-100">Spiacente, nessun risultato</h1>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- ! Componente: FILM  -->
        <CollectionList category="Films" :objects="store.films" />
        <div class="spacing"></div>
        <!-- ! Componente: SERIE  -->
        <CollectionList category="Serie TV" :objects="store.series" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  height: 150px;
  padding: 0 1rem;

  background-color: black;

  justify-content: space-between;
  align-items: center;

  #logo-button {
    background-color: transparent;
    border: none;

    h1 {
      color: red;
    }
  }
}

main {
  position: relative;
  margin-top: 150px;

  &>img {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: calc(100vh - 150px);

  }

  .spacing {
    border: 1px solid white;
  }

}

#start-screen {
  height: calc(100vh - 150px);
  color: white;

  img {
    height: 100px;
  }
}
</style>
