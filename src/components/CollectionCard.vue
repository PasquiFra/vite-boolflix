<script>
export default {
    name: "CollectionCard",
    data: () => ({
    }),
    props: {
        object: Object,
    },
    computed: {
        setCategories() {
            const title = this.object.title || this.object.name
            const originalTitle = this.object.original_title || this.object.original_name
            const language = this.object.original_language
            const overview = this.object.overview
            return { title, originalTitle, language, overview }
        },
        setLanguage() {
            const lang = this.object.original_language
            return lang
        },
        setVote() {
            const vote = this.object.vote_average
            if (vote === 0) return "0"
            const newVote = parseInt((vote / 2) + 1)
            return newVote
        }
    },
    methods: {
    }


}

</script>

<template>
    <ul class="col">
        <li class="card">
            <div class="poster">
                <img v-if="object.poster_path" :src="`http://image.tmdb.org/t/p/w342${object.poster_path}`" alt=""
                    class="img-fluid">
                <div id="no-poster" v-else>
                    <h4>{{ setCategories.title }}</h4>
                    <i class="fa-solid fa-photo-film"></i>
                </div>
            </div>
            <div id="info">
                <h6><strong>Titolo: </strong>{{ setCategories.title }}</h6>
                <h6 v-if="setCategories.originalTitle !== setCategories.title"><strong>Titolo originale: </strong>{{
                    setCategories.originalTitle }}</h6>
                <div class="langs">
                    <span v-if="setLanguage === 'en' || setLanguage === 'it'">
                        <strong>Lingua: </strong>
                        <img :src="`/${setLanguage}.png`" :alt="setLanguage">
                    </span>
                    <span v-else><strong>Lingua:</strong> {{ setCategories.language }}</span>
                </div>
                <span id="rating" class="d-flex">
                    <strong>Rating: </strong>
                    <span v-if="setVote === 1" class="px-1"><i class="fa-solid fa-star"></i><i
                            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span>
                    <span v-else-if="setVote === 2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i></span>
                    <span v-else-if="setVote === 3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i></span>
                    <span v-else-if="setVote === 4"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-regular fa-star"></i></span>
                    <span v-else-if="setVote === 5"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i></span>
                    <span v-else><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                            class="fa-regular fa-star"></i></span>
                </span>
                <span><strong>Voti totali:</strong> {{ object.vote_count }}</span>
                <div>
                    <strong>Trama: </strong> {{ setCategories.overview }}
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.col {
    flex-grow: 0;
    flex-shrink: 0;
}

.card {
    background-color: transparent;
    position: relative;
    width: 350px;
    height: 500px;
    border: 2px solid black;


    #info {
        display: none;
        padding: 10px 15px;
        overflow: auto;
    }

    #no-poster {
        display: flex;
    }

    &:hover {
        #info {
            display: block;
        }

        .poster {
            flex-basis: 0;
            opacity: 15%;
        }

        #no-poster {
            display: none;
        }
    }

    .langs {
        width: auto;
        height: 15px;
        margin: 10px 0;

        img {
            height: 100%;
            width: auto;
        }
    }

    .poster img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        height: 100%;
        width: 100%;

        border-radius: 3px;
    }

    .poster {
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;


        i {
            align-self: center;
            font-size: 5rem;
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
        }
    }

    #rating {

        span {
            padding: 0 3px;
        }

        .fa-solid.fa-star {
            color: gold;
        }
    }
}
</style>