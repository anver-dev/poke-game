<template>
  <h3>¿Quién es este Pokémon?</h3>
  <div v-if="!pokemon" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="fade-in" v-else>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @selection="checkAnswer" />
  </div>

  <template v-if="showAnswer">
    <h2>{{ message }}</h2>
    <button class="btn btn-primary" type="button" @click="newGame">
      Nuevo juego
    </button>
  </template>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonsOptions from "@/helpers/getPokemonOptions";
import { mapActions } from "vuex";

console.log(getPokemonsOptions());
export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    ...mapActions("levels", ["loadLevels"]),
    async mixPokemonArray() {
      this.pokemons = await getPokemonsOptions();
      const randomNumber = Math.floor(Math.random() * 4);
      setTimeout(() => {
        this.pokemon = this.pokemons[randomNumber];
      }, 200);
    },
    checkAnswer(idSelectedPokemon) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (idSelectedPokemon == this.pokemon.id) {
        this.message = `¡Es correcto! es ${this.pokemon.name}`;
      } else {
        this.message = `¡Ops! la respuesta era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.pokemon = null;
      this.pokemons = [];
      this.mixPokemonArray();
    },
  },
  beforeMount() {
    console.log(this.$store);
    this.loadLevels();
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>