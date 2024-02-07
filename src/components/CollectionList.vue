<script>

export default {
    name: "CollectionList",
    props: {
        categories: String
    }
};

</script>

<template>
    <section>
        <h1>{{ categories }}</h1>
        <div class="row">
            <ul class="col">
                <li class="card"></li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    width: 100px;
    height: 150px;
    border: 1px solid black;
}
</style>