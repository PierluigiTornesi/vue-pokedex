import {createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Pokedex from "./pages/Pokedex.vue";
import InfoPokemon from "./pages/InfoPokemon.vue";
import FavouritesPokemon from "./pages/FavouritesPokemon.vue";
import AboutPage from "./pages/AboutPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/pokedex",
            name: "pokedex",
            component: Pokedex,
        },
        {
            path: "/info/:slug",
            name: "info",
            component: InfoPokemon,
        },
        {
            path: "/favourites",
            name: "favourites",
            component: FavouritesPokemon,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
    ],
});
export {router}