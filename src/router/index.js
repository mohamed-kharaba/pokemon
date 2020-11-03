import Vue from 'vue';
import VueRouter from 'vue-router';
import pokemon from '../views/pokemon.vue';
import singlePokemon from '../components/singlePokemon.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/pokemon',
        name: 'pokemon',
        component: pokemon,
    },
    {
        path: '/pokemon/:name',
        name: 'singlePokemon',
        component: singlePokemon,
    },
    { path: '*', redirect: '/pokemon' },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
