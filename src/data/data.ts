import { ISpecies } from "./../types/speciesTypes";
import { api, axios } from "../utils";
import { NameURL, Species } from "../types";

export const getAllPokemonsData = async (): Promise<NameURL[]> => {
  const { data } = await api.get("pokemon?limit=898");
  return data.results;
};

export const getPokemonData = async (id: number) => {
  const { data } = await api.get(`pokemon/${id}`);
  return data;
};

export const fetchFromUrl = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const getPokemonSpecies = async (name: string) => {
  const { data } = await api.get(`pokemon-species/${name}`);
  return data;
};

export const getFemalePokemons = async () => {
  const { data } = await api.get("gender/1");
  console.log(data.pokemon_species_details, "00");
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

export const getPokemonTypes = async () => {
  const { data } = await api.get("type");
  return data.results;
};

export const getEachPokemonTypes = async (name: string) => {
  const { data } = await api.get(`type/${name}`);
  return data.pokemon;
};

export const getEvolutionChain = async (id: number) => {
  const { data } = await api.get(`evolution-chain${id}`);
  return data.chain;
};

console.log(getPokemonSpecies("bulbasaur"), "11");
console.log(getPokemonTypes(), "333");
console.log(getPokemonData(3), "444");
console.log(getFemalePokemons(), "female");

console.log(getEachPokemonTypes("fairy"), "pop");
