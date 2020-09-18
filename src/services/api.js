import axios from 'axios';

export async function getAllPokemon(url) {
  const allPokemon = await axios.get(url);

  return allPokemon.data;
}

export async function getPokemon(pokemonUrl) {
  const pokemon = await axios.get(`${pokemonUrl}`);

  return pokemon.data;
}
