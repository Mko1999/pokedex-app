import { ISpecies } from "./../types/speciesTypes";
import { api, axios } from "../utils";
import { NameURL } from "../types";

export const getAllPokemonsData = async (): Promise<NameURL[]> => {
  const { data } = await api.get("pokemon?limit=2000");
  return data.results;
};

export const getPokemonData = async (id: number) => {
  const { data } = await api.get(`pokemon/${id}`);
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
