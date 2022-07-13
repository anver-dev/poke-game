import pokemonApi from "../api/pokemonApi";

const getPokemons = () => {
  const pokemonArray = Array.from(Array(650));
  return pokemonArray.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));

  return pokemons;
};

const getPokemonNames = async ([a, b, c] = []) => {
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
  ];

  const [pokemon1, pokemon2, pokemon3] = await Promise.all(promiseArr);

  return [
    { name: pokemon1.data.name, id: pokemon1.data.id },
    { name: pokemon2.data.name, id: pokemon2.data.id },
    { name: pokemon3.data.name, id: pokemon3.data.id },
  ];
};

export default getPokemonOptions;
