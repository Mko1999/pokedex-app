import { IPokemonState } from "./types";
import { AnyAction } from "redux";
import { ERROR_MESSAGE } from "../../constants";
import { sortOptions } from "../../utils";

export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMONS_REQUEST";
export const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";

export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";

export const OFFSET_CHANGE = "OFFSET_CHANGE";
export const LIMIT_CHANGE = "LIMIT_CHANGE";
export const SEARCH_CHANGE = "SEARCH_CHANGE";
export const SORT_BY_CHANGE = "SORT_BY_CHANGE";

const initialState: IPokemonState = {
  allPokemons: [],
  pokemons: [],
  error: "",
  loading: false,
  pokemonLoading: false,
  offset: 1,
  limit: 10,
  searchValue: "",
  sortBy: sortOptions[0],
};

const pokemonReducer = (
  state = initialState,
  { type, payload }: AnyAction
): IPokemonState => {
  switch (type) {
    case FETCH_POKEMONS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }

    case FETCH_POKEMONS_ERROR: {
      return {
        ...state,
        error: ERROR_MESSAGE || payload,
        loading: false,
        allPokemons: [],
      };
    }

    case FETCH_POKEMONS_SUCCESS: {
      return {
        ...state,
        error: "",
        loading: false,
        allPokemons: payload,
      };
    }

    case OFFSET_CHANGE: {
      return {
        ...state,
        offset: payload,
      };
    }

    case FETCH_POKEMON_REQUEST: {
      return {
        ...state,
        pokemonLoading: true,
        pokemons: [],
        error: "",
      };
    }

    case FETCH_POKEMON_ERROR: {
      return {
        ...state,
        error: ERROR_MESSAGE || payload,
        pokemonLoading: false,
        pokemons: [],
      };
    }

    case FETCH_POKEMON_SUCCESS: {
      return {
        ...state,
        pokemons: payload,
        pokemonLoading: false,
        error: "",
      };
    }

    case SORT_BY_CHANGE: {
      return {
        ...state,
        sortBy: payload,
      };
    }

    case LIMIT_CHANGE: {
      return {
        ...state,
        limit: payload,
      };
    }

    case SEARCH_CHANGE: {
      return {
        ...state,
        searchValue: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemonReducer;
