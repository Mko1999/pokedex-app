import { ISpecies } from "./../types/speciesTypes";
import { NameURL } from "../types";
import { api, axios } from "../utils";

export const getAllPokemonsData = async (): Promise<NameURL[]> => {
  const { data } = await api.get("pokemon?limit=5000");
  return data.results;
};

export const getPokemonData = async (name: string) => {
  const { data } = await api.get(`pokemon/${name}`);
  return data;
};
export const getPokemonUrls = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
export const getPokemonSpecies = async (id: number) => {
  const { data } = await api.get(`pokemon-species/${id}`);
  return data;
};

export const getFemalePokemons = async () => {
  const { data } = await api.get("gender/1");
  return data.pokemon_species_details.map(
    (pokemon: any) => pokemon.pokemon_species.name
  );
};

export const getMalePokemons = async () => {
  const { data } = await api.get("gender/2");
  return data.pokemon_species_details.map(
    (pokemon: any) => pokemon.pokemon_species.name
  );
};

export const getEvolutionChain = async (id: number) => {
  const { data } = await api.get(`evolution-chain${id}`);
  return data.chain;
};

console.log(getAllPokemonsData());
// console.log(getPokemonData("bulbasaur"));
// console.log(getPokemonSpecies(1), "aaa");
// console.log(getFemalePokemons());
// console.log(getMalePokemons());
// console.log(getEvolutionChain(2));
