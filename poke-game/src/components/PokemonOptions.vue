<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="q-pa-md justify-center">
    <div class="column items-center">
      <div v-for="pokemon in pokemons" class="col-4">
        <q-btn
          push
          color="red"
          size="md"
          class="q-mr-xs"
          style="margin-top: 5px"
          text-color="white"
          :key="pokemon.id"
          @click="$emit('selection', pokemon.id)"
          :label="pokemon.name"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>