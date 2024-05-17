<script>
//Importo lo store

export default {
    name: "SearchForm",
    data: () => ({
        text: "",
        selected: ""
    }),
    computed: {
        lowercasedText() {
            return this.text.toLowerCase()
        }
    },
    props: {
        placeholder: String,
    },
    emits: ['submit-search-text']


}
</script>

<template>
    <form class="w-50 d-flex" @submit.prevent="$emit('submit-search-text', lowercasedText)">
        <select class="form-select">
            <option selected value=0>Filtra per:</option>
            <option value="films">Films</option>
            <option value="series">Serie TV</option>
            <option value="actors">Attori</option>
        </select>
        <input class="form-control" type="text" :placeholder="placeholder" v-model.trim="text">
        <button class="btn">Search</button>
    </form>
</template>


<style lang="scss" scoped>
form {

    button {
        background-color: red;
        color: white;
        font-weight: 600;

        &:hover,
        &:focus-visible,
        &:active {
            background-color: red;
        }

    }
}
</style> 