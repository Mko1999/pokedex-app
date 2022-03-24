import { IPokemonState } from "./types";
import { AnyAction } from "redux";
import { ERROR_MESSAGE } from "../../constants";
import { sortOptions } from "../../utils";

export const SET_ALL_POKEMONS = "SET_ALL_POKEMONS";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMONS_REQUEST";
export const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";
export const OFFSET_CHANGE = "OFFSET_CHANGE";
export const LIMIT_CHANGE = "LIMIT_CHANGE";
export const SEARCH_CHANGE = "SEARCH_CHANGE";

const initialState: IPokemonState = {
  allPokemons: [],
  error: "",
  loading: false,
  offset: 0,
  limit: 10,
  searchValue: "",
  filterSearch: "",
  filterType: { value: "All" },
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