<script>
export default {
    name: "SearchForm",
    data: () => ({
        text: "",
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
    <form class="w-50 d-flex" action="" @submit.prevent="$emit('submit-search-text', lowercasedText)">
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