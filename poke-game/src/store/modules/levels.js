import { getLevels } from "../../api/levelsAPI";

const levels = {
  namespaced: true,
  state: () => ({
    levels: [],
    isLoadingLevels: true,
  }),
  getters: {},
  actions: {
    async loadLevels({ commit }) {
      commit("SET_LOADING_LEVELS", true);

      const levels = await getLevels();

      commit("SET_ALL_LEVELS", levels);
      commit("SET_LOADING_LEVELS", false);
    },
  },
  mutations: {
    SET_ALL_LEVELS(state, levels) {
      state.levels = [...levels];
    },
    SET_LOADING_LEVELS(state, flag) {
      state.isLoadingLevels = flag;
    },
  },
};

export default levels;
