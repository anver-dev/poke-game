<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-red-9 text-white shadow-2">
        <q-toolbar-title>
          POKE - GAME
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <UserRegister />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import UserRegister from './pages/UserRegister.vue'

export default {
  name: 'LayoutDefault',

  components: {
    UserRegister
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
