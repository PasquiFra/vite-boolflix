<script>
export default {
    name: "CollectionCard",
    data: () => ({
        posterPath: "http://image.tmdb.org/t/p/w342"
    }),
    props: {
        id: Number,
        title: String,
        orTitle: String,
        lang: String,
        poster: String,
        vote: Number,
        voteCount: Number,
        overview: String,
        release: String
    },
    computed: {
        setVote() {
            if (this.vote === 0) return "0"
            return Math.ceil(this.vote / 2)
        }
    },
    methods: {
    }


}

</script>

<template>
    <li class="card">
        <div class="poster">
            <img v-if="poster" :src="`${posterPath}${poster}`" :alt="title" class="img-fluid">
            <div id="no-poster" v-else>
                <h4>{{ title }}</h4>
                <i class="fa-solid fa-photo-film"></i>
            </div>
        </div>
        <div id="info">
            <h6><strong>Titolo: </strong>{{ title }}</h6>
            <h6 v-if="orTitle !== title"><strong>Titolo originale: </strong>{{
                orTitle }}</h6>
            <div class="langs">
                <span v-if="lang === 'en' || lang === 'it'">
                    <strong>Lingua: </strong>
                    <img :src="`/${lang}.png`" :alt="lang">
                </span>
                <span v-else><strong>Lingua:</strong> {{ lang }}</span>
            </div>
            <span id="rating" class="d-flex">
                <strong>Rating: </strong>
                <span><i v-for="n in 5" :key="n" class="fa-star" :class="n <= setVote ? 'fas' : 'far'"></i></span>
            </span>
            <span><strong>Voti totali:</strong> {{ voteCount }}</span>
            <div>
                <strong>Trama: </strong> {{ overview }}
                <div><strong>Release: </strong> {{ release }}</div>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.row {
    justify-content: flex-start;

}

.card {
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
        color: black;
    }

    &:hover {
        background-color: white;
        opacity: 85%;

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

        .fas.fa-star {
            color: gold;
        }
    }
}
</style>