import users from "./modules/users";
import scores from "./modules/scores";
import levels from "./modules/levels.js";

import { createStore } from "vuex";

const store = createStore({
  modules: {
    users,
    scores,
    levels,
  },
});

export default store;
