import { createRouter, createWebHistory } from "vue-router";

import PokemonPage from "./pages/PokemonPage.vue";
import UserRegister from "./pages/UserRegister";

const routes = [
  { path: "/game", name: "game", component: PokemonPage },
  { path: "/", name: "home", component: UserRegister },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
