import { ISpecies } from "./../types/speciesTypes";
import axios from "axios";
import { api } from "../utils";

export const getAllPokemonsData = async () => {
  const { data } = await api.get("pokemon?offset=0&limit=898");
  return data.results;
};

export const getPokemonData = async (name: string) => {
  const { data } = await api.get(`pokemon/${name}`);
  return data;
};

export const getPokemonSpecies = async (id: number) => {
  const { data } = await api.get(`pokemon-species${id}`);
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