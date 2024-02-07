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
      axios.get(endpoint).then(res => {
        console.log(store)
      })
    },
    searchTitle(text) {
      console.log("sto cercando... ", text)
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
      <div>
        <h1>Scegli il titolo di un Film o di una Serie TV</h1>
      </div>
      <div>
        <h1>Film e serie TV</h1>
        <!-- ! Componente: FILM  -->
        <CollectionList />
        <!-- ! Componente: SERIE  -->

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
