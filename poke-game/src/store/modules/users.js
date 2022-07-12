import { getUsers, addUser } from "@/api/usersAPI";

const usuarios = {
  namespaced: true,
  state: () => ({
    users: [],
    userLogged: {},
    isLoadingUsers: true,
  }),
  getters: {},
  actions: {
    async loadUsers({ commit }) {
      commit("SET_LOADING_USERS", true);

      const users = await getUsers();

      commit("SET_ALL_USUARIOS", users);
      commit("SET_LOADING_USERS", false);
    },
    async addUser({ commit }, user) {
      const userCreated = await addUser(user);
      commit("ADD_USER", userCreated);
    },
  },
  mutations: {
    SET_ALL_USUARIOS(state, users) {
      state.users = [...users];
      state.isLoadingUsers = false;
    },
    ADD_USER(state, userCreated) {
      state.userLogged = userCreated;
    },
  },
};

export default usuarios;
