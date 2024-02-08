<script>
import CollectionCard from './CollectionCard.vue'

export default {
    name: "CollectionList",
    components: {
        CollectionCard
    },
    props: {
        objects: Array,
        category: String
    }
};

</script>

<template>
    <section>
        <h1>{{ category }}</h1>
        <div class="row">

            <CollectionCard :object="object" v-for="object in objects" />

        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    justify-content: flex-start;

}
</style>