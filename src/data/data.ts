import { api, axios } from "../utils";
import { NameURL, Pokemon, PokemonSpecies } from "../types";

export const getAllPokemonsData = async (): Promise<NameURL[]> => {
  const { data } = await api.get("pokemon?limit=2000");
  return data.results;
};

export const getPokemonData = async (id: number): Promise<void> => {
  const { data } = await api.get(`pokemon/${id}`);
  return data;
};

export const fetchFromUrl = async (url: string): Promise<any> => {
  const { data } = await axios.get(url);
  return data;
};

export const getPokemonSpecies = async (id: number): Promise<void> => {
  const { data } = await api.get(`pokemon-species/${id}`);
  return data;
};

export const getFemalePokemons = async (): Promise<Pokemon[]> => {
  const { data } = await api.get("gender/1");

  return data.pokemon_species_details.map(
    (pokemon: PokemonSpecies) => pokemon.pokemon_species.name
  );
};

export const getMalePokemons = async (): Promise<void> => {
  const { data } = await api.get("gender/2");
  return data.pokemon_species_details.map(
    (pokemon: PokemonSpecies) => pokemon.pokemon_species.name
  );
};

export const getPokemonTypes = async (): Promise<string> => {
  const { data } = await api.get("type");
  return data.results;
};

export const getEachPokemonTypes = async (name: string): Promise<void> => {
  const { data } = await api.get(`type/${name}`);
  return data.pokemon;
};

export const getEvolutionChain = async (id: number): Promise<void> => {
  const { data } = await api.get(`evolution-chain/${id}`);
  return data.chain;
};

console.log(getFemalePokemons(), "000");
