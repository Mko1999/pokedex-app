import { getAllPokemonsData, getPokemonData } from "../../data";
import { getPokemonUrls } from "../../data/data";
import { NameURL } from "../../types";
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
} from "../reducers/pokemonReducer";

const fetchPokemonsRequest = () => {
  return {
    type: FETCH_POKEMONS_REQUEST,
  };
};

const fetchPokemonsError = (payload: string) => {
  return {
    type: FETCH_POKEMONS_ERROR,
    payload,
  };
};

const fetchPokemonsSuccess = (payload: NameURL[]) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload,
  };
};

const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

const fetchPokemonError = (payload: string) => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload,
  };
};

const fetchPokemonSuccess = (payload: any[]) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload,
  };
};

export const fetchPokemons = () => async (dispatch: any) => {
  dispatch(fetchPokemonsRequest());
  try {
    const data = await getAllPokemonsData();
    console.log(data);
    dispatch(fetchPokemonsSuccess(data));
  } catch (e: any) {
    dispatch(fetchPokemonsError(e.message));
  }
};

export const fetchPokemon = (urls: string[]) => async (dispatch: any) => {
  dispatch(fetchPokemonRequest());
  try {
    const data = await Promise.all(urls.map((url) => getPokemonUrls(url)));
    dispatch(fetchPokemonSuccess(data));
  } catch (e: any) {
    dispatch(fetchPokemonError(e.message));
  }
};

export const setOffset = (payload: number) => {
  return {
    type: OFFSET_CHANGE,
    payload,
  };
};

export const setLimit = (payload: number) => {
  return {
    type: LIMIT_CHANGE,
    payload,
  };
};

export const setSearch = (payload: string) => {
  return {
    type: SEARCH_CHANGE,
    payload,
  };
};
