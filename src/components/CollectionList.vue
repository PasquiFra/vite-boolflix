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
            <ul class="col">
                <CollectionCard v-bind="object" v-for="object in objects" />
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    padding: 15px 0;
    color: white;
}

ul.col {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: 10px;
}
</style>