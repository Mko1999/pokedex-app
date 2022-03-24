import {
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_REQUEST,
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

const fetchPokemonsSuccess = (payload: string) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload,
  };
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
