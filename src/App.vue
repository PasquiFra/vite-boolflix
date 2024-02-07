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
  }
}

</script>

<template>
  <!-- Header con searchbar -->
  <header>
    <h1>Boolflix</h1>
    <SearchForm />
  </header>
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
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
