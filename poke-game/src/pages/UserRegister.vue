<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <div class="card" style="width: 18rem">
      <h5>Welcome to Poke - Game</h5>
      <div class="column" style="height: 150px">
        <div class="col">
          <q-input
            color="red-6"
            filled
            square
            v-model="user"
            stack-label
            label="Type a user to play!"
            error-message="Please "
            :error="userExist"
          />
        </div>
        <div class="col">
          <div class="fit row wrap justify-center items-start content-start">
            <q-btn
              color="red"
              icon-right="play_arrow"
              label="play"
              @click="register"
              :disable="userExist"
            />
          </div>
        </div>
      </div>
      <div class="mb-3"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapState("users", ["userLogged"]),
    userExist() {
      console.log(
        "🚀 ~ file: UserRegister.vue ~ line 47 ~ userExist ~ this.user ",
        this.user
      );
      if (this.user == "" || !this.user) return true;

      return false;
    },
  },
  methods: {
    ...mapActions("users", ["addUser"]),
    register() {
      let userName = this.user;

      const user = {
        name: userName,
        id_level: 1,
      };
      this.addUser(user);
    },
  },
  watch: {
    userLogged() {
      console.log("usuario creado :)");
    },
  },
};
</script>