<script>

export default {
    name: "CollectionList",
    props: {
        objects: Array,
        category: String,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
    }
};

</script>

<template>
    <section>
        <h1>{{ category }}</h1>
        <div class="row">
            <ul class="col">
                <li class="card" v-for="object in objects">
                    <h3>{{ title }}</h3>
                    <!-- <h6>{{ originalTitle }}</h6>
                    <div class="langs">
                        <span v-if="originalLanguage === 'en'">
                            Lingua:
                            <img src="../../public/en.png" alt="en">
                        </span>
                        <span v-else-if="originalLanguagee === 'it'">
                            Lingua:
                            <img src="../../public/it.png" alt="it">
                        </span>
                        <span v-else>Lingua: {{ object.originalLanguage }}</span>
                    </div>
                    <span>Voto medio: {{ object.vote_average }} su {{ object.vote_count }} totali</span> -->
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