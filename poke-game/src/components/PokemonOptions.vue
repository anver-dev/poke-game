<template>
  <div class="d-flex justify-content-center mb-4">
    <div class="card mt-4" style="width: 18rem">
      <div class="card-body">
        <div class="row">
          <div
            v-for="pokemon in pokemons"
            class="col-12 col-md-12 d-grid gap-2"
          >
            <button
              type="button"
              class="btn btn-danger m-1"
              :key="pokemon.id"
              @click="$emit('selection', pokemon.id)"
            >
              {{ pokemon.name }}
            </button>
          </div>
          
        </div>
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