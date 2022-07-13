<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-chip square size="18px">
          <q-avatar icon="person" color="red" text-color="white" />
          {{ userLogged.name }}
        </q-chip>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("users", ["userLogged"]),
  },
};
</script>

<style>
</style>