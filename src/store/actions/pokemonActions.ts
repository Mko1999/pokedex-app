import { RESET_FILTER, SORT_BY_CHANGE } from "./../reducers/pokemonReducer";
import { Dispatch } from "redux";
import { getAllPokemonsData, getPokemonTypes } from "../../data";
import { fetchFromUrl } from "../../data/data";
import { NameURL, Pokemon, Slots } from "../../types";
import {
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_TYPES_REQUEST,
  FETCH_POKEMON_TYPES_ERROR,
  FETCH_POKEMON_TYPES_SUCCESS,
  FETCH_POKEMON_EACH_TYPE_REQUEST,
  FETCH_POKEMON_EACH_TYPE_ERROR,
  FETCH_POKEMON_EACH_TYPE_SUCCESS,
  OFFSET_CHANGE,
  LIMIT_CHANGE,
  SEARCH_CHANGE,
  FILTER_CHANGE,
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

const fetchPokemonTypesRequest = () => {
  return {
    type: FETCH_POKEMON_TYPES_REQUEST,
  };
};

const fetchPokemonTypesError = (payload: string) => {
  return {
    type: FETCH_POKEMON_TYPES_ERROR,
    payload,
  };
};

const fetchPokemonTypesSuccess = (payload: any) => {
  return {
    type: FETCH_POKEMON_TYPES_SUCCESS,
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

const fetchPokemonSuccess = (payload: Pokemon[]) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload,
  };
};

export const fetchPokemons = () => async (dispatch: any) => {
  dispatch(fetchPokemonsRequest());
  try {
    const data = await getAllPokemonsData();
    dispatch(fetchPokemonsSuccess(data));
  } catch (e) {
    if (e instanceof Error) dispatch(fetchPokemonsError(e.message));
  }
};

export const fetchPokemonTypes = () => async (dispatch: any) => {
  dispatch(fetchPokemonTypesRequest());
  try {
    const data = await getPokemonTypes();
    dispatch(fetchPokemonTypesSuccess(data));
  } catch (e) {
    if (e instanceof Error) dispatch(fetchPokemonTypesError(e.message));
  }
};

export const fetchPokemon = (urls: string[]) => async (dispatch: any) => {
  dispatch(fetchPokemonRequest());
  try {
    const data = await Promise.all(urls.map((url) => fetchFromUrl(url)));
    await new Promise((res) => setTimeout(res, 2000));
    dispatch(fetchPokemonSuccess(data));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(fetchPokemonError(e.message));
    }
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

export const setSortBy = (payload: string) => {
  return {
    type: SORT_BY_CHANGE,
    payload,
  };
};

export const setFilter = (payload: any) => {
  return {
    type: FILTER_CHANGE,
    payload,
  };
};

export const resetFilter = () => {
  return {
    type: RESET_FILTER,
  };
};

const fetchPokemonsByTypeRequest = () => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_REQUEST,
  };
};

const fetchPokemonsByTypeError = (payload: string) => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_ERROR,
    payload,
  };
};

const fetchPokemonsByTypeSuccess = (payload: any) => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_SUCCESS,
    payload,
  };
};

export const fetchPokemonsByType = (url: string) => async (dispatch: any) => {
  dispatch(fetchPokemonsByTypeRequest());
  try {
    const data = await fetchFromUrl(url);
    dispatch(
      fetchPokemonsByTypeSuccess(
        data.pokemon.map((item: Slots) => item.pokemon)
      )
    );
  } catch (e) {
    if (e instanceof Error) {
      dispatch(fetchPokemonsByTypeError(e.message));
    }
  }
};
