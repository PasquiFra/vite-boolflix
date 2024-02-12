import { reactive } from 'vue';

export const store = reactive({
    firstAccess: true,
    noResults: false,
    films: [],
    series: [],
    actors: [],
});

