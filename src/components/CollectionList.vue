<script>

export default {
    name: "CollectionList",
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
                <li class="card" v-for="object in objects">
                    <h3>{{ object.title }}</h3>
                    <h6>{{ object.original_title }}</h6>
                    <div class="langs">
                        <span v-if="object.original_language === 'en'">
                            Lingua:
                            <img src="../../public/en.png" alt="en">
                        </span>
                        <span v-else-if="object.original_language === 'it'">
                            Lingua:
                            <img src="../../public/it.png" alt="it">
                        </span>
                        <span v-else>Lingua: {{ object.original_language }}</span>
                    </div>
                    <span>Voto medio: {{ object.vote_average }} su {{ object.vote_count }} totali</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    width: 200px;
    height: 300px;
    border: 1px solid black;

    .langs {
        width: auto;
        height: 25px;

        img {
            height: 100%;
            width: auto;
        }
    }
}
</style>