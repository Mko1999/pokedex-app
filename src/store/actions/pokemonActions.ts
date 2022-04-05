import { getAllPokemonsData } from "../../data";
import { fetchFromUrl } from "../../data/data";
import { NameURL, Pokemon } from "../../types";
import {
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  OFFSET_CHANGE,
  LIMIT_CHANGE,
  SEARCH_CHANGE,
  SORT_BY_CHANGE,
} from "../reducers/pokemonReducer";

const fetchPokemonsRequest = (): { type: string } => {
  return {
    type: FETCH_POKEMONS_REQUEST,
  };
};

const fetchPokemonsError = (
  payload: string
): { type: string; payload: string } => {
  return {
    type: FETCH_POKEMONS_ERROR,
    payload,
  };
};

const fetchPokemonsSuccess = (
  payload: NameURL[]
): { type: string; payload: NameURL[] } => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload,
  };
};

const fetchPokemonRequest = (): { type: string } => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

const fetchPokemonError = (
  payload: string
): {
  type: string;
  payload: string;
} => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload,
  };
};

const fetchPokemonSuccess = (
  payload: Pokemon[]
): { type: string; payload: Pokemon[] } => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload,
  };
};

export const fetchPokemons =
  () =>
  async (dispatch: any): Promise<void> => {
    dispatch(fetchPokemonsRequest());
    try {
      const data = await getAllPokemonsData();
      dispatch(fetchPokemonsSuccess(data));
    } catch (e) {
      if (e instanceof Error) dispatch(fetchPokemonsError(e.message));
    }
  };

export const fetchPokemon =
  (urls: string[]) =>
  async (dispatch: any): Promise<void> => {
    dispatch(fetchPokemonRequest());
    try {
      const data = await Promise.all(urls.map((url) => fetchFromUrl(url)));
      await new Promise((res) => setTimeout(res, 500));
      dispatch(fetchPokemonSuccess(data));
    } catch (e) {
      if (e instanceof Error) {
        dispatch(fetchPokemonError(e.message));
      }
    }
  };

export const setOffset = (
  payload: number
): { type: string; payload: number } => {
  return {
    type: OFFSET_CHANGE,
    payload,
  };
};

export const setLimit = (
  payload: number
): { type: string; payload: number } => {
  return {
    type: LIMIT_CHANGE,
    payload,
  };
};

export const setSearch = (
  payload: string
): { type: string; payload: string } => {
  return {
    type: SEARCH_CHANGE,
    payload,
  };
};

export const setSortBy = (
  payload: string
): { type: string; payload: string } => {
  return {
    type: SORT_BY_CHANGE,
    payload,
  };
};
