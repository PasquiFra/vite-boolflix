<script>
//Importo lo store
import { store } from './data/store'

//Importo i componenti
import SearchForm from './components/SearchForm.vue';
import CollectionList from './components/CollectionList.vue';

//importo axios
import axios from "axios";

export default {
  name: "Boolflix",
  data: () => ({
    store
  }),
  components: {
    SearchForm, CollectionList
  },
  methods: {
    callAxios(endpoint) {
      store.firstAccess = false;
      axios.get(endpoint).then(res => {
        store.films = res.data.results;
        console.log(store)
      })
    },
    searchTitle(text) {
      console.log("sto cercando... ", text)

      const endpoint =
        `https://api.themoviedb.org/3/search/movie?api_key=1045354cc543dac9c17edc10d1cc018f&query=${text}`

      this.callAxios(endpoint)
    }
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
        <CollectionList categories="Film" />
        <!-- ! Componente: SERIE  -->
        <CollectionList categories="Serie TV" />
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
