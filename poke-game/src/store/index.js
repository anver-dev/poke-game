import VuexPersistence from "vuex-persist";
import { createStore } from "vuex";

import users from "./modules/users";
import scores from "./modules/scores";
import levels from "./modules/levels.js";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  modules: {
    users,
    scores,
    levels,
  },
  plugins: [vuexLocal.plugin],
});

export default store;
