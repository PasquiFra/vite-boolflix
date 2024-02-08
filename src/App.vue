<script>
//Importo lo store
import { store } from './data/store'
//Importo api
import { api } from './data/api'

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
  methods: {
    callAxios(endpoint, collection) {
      axios.get(endpoint).then(res => {
        if (collection === "films") { store.films = res.data.results }
        else { store.series = res.data.results }
        console.log(store)
      })
      //.catch(err).then(store.firstAccess = true)
    },
    searchTitle(text) {
      api.query = text
      store.firstAccess = false;

      const filmsEndpoint =
        `${api.baseUri}${api.searchMovies}${api.apiKey}&query=${api.query}`

      const seriesEndpoint =
        `${api.baseUri}${api.searchSeries}${api.apiKey}&query=${api.query}`

      this.callAxios(filmsEndpoint, "films")
      this.callAxios(seriesEndpoint, "series")
    },
  }
}

</script>

<template>
  <!-- Header con searchbar -->
  <header class="d-flex">
    <h1>Boolflix</h1>
    <SearchForm :placeholder="'Scrivi qui un titolo...'" @submit-search-text="searchTitle" />
  </header>
  <div class="container-fluid">
    <!-- Main section con lista film/serie -->
    <section>
      <div v-if="store.firstAccess">
        <h1>Scegli il titolo di un Film o di una Serie TV</h1>
      </div>
      <div v-else>
        <!-- ! Componente: FILM  -->
        <CollectionList category="Film" :objects="store.films" />
        <!-- ! Componente: SERIE  -->
        <CollectionList category="Serie TV" :objects="store.series" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';

header {
  height: 150px;
  background-color: black;

  padding: 0 1rem;

  justify-content: space-between;
  align-items: center;

  h1 {
    color: red;
  }
}
</style>
