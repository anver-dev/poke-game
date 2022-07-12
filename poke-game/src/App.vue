<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-red-9 text-white shadow-2">
        <q-toolbar-title> POKE - GAME </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",
  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
