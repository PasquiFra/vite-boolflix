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
        <div class="row row-cols-sm-2 row-cols-md-5">

            <CollectionCard :object="object" v-for="object in objects" />

        </div>
    </section>
</template>

<style lang="scss" scoped>
.row {
    flex-wrap: wrap;
    flex-shrink: 0;

}
</style>