import { IPokemonState } from "./types";
import { AnyAction } from "redux";
import { ERROR_MESSAGE } from "../../constants";
import { sortOptions } from "../../utils";

export const SET_ALL_POKEMONS = "SET_ALL_POKEMONS";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_REQUEST = "FETCH_POKEMONS_REQUEST";
export const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_TYPES_REQUEST = "FETCH_POKEMON_TYPES_REQUEST";
export const FETCH_POKEMON_TYPES_ERROR = "FETCH_POKEMON_TYPES_ERROR";
export const FETCH_POKEMON_TYPES_SUCCESS = "FETCH_POKEMON_TYPES_SUCCESS";
export const FETCH_POKEMON_EACH_TYPE_REQUEST = "FETCH_POKEMON_EACH_TYPE";
export const FETCH_POKEMON_EACH_TYPE_ERROR = "FETCH_POKEMON_EACH_TYPE_ERROR";
export const FETCH_POKEMON_EACH_TYPE_SUCCESS =
  "FETCH_POKEMON_EACH_TYPE_SUCCESS";
export const OFFSET_CHANGE = "OFFSET_CHANGE";
export const LIMIT_CHANGE = "LIMIT_CHANGE";
export const SEARCH_CHANGE = "SEARCH_CHANGE";
export const SORT_BY_CHANGE = "SORT_BY_CHANGE";
export const FILTER_CHANGE = "FILTER_CHANGE";
export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";

const initialState: IPokemonState = {
  allPokemons: [],
  pokemons: [],
  pokemonTypes: [],
  pokemonsByType: [],
  error: "",
  loading: false,
  pokemonLoading: false,
  offset: 1,
  limit: 10,
  searchValue: "",
  filterType: "All types",
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

    case FETCH_POKEMON_TYPES_REQUEST: {
      return {
        ...state,
        loading: true,
        pokemonTypes: [],
        error: "",
      };
    }

    case FETCH_POKEMON_TYPES_ERROR: {
      return {
        ...state,
        error: ERROR_MESSAGE || payload,
        loading: false,
        pokemonTypes: [],
      };
    }

    case FETCH_POKEMON_TYPES_SUCCESS: {
      return {
        ...state,
        loading: false,
        pokemonTypes: payload,
      };
    }

    case FETCH_POKEMON_EACH_TYPE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: "",
        pokemonsByType: [],
      };
    }

    case FETCH_POKEMON_EACH_TYPE_ERROR: {
      return {
        ...state,
        loading: false,
        error: ERROR_MESSAGE || payload,
        pokemonsByType: [],
      };
    }

    case FETCH_POKEMON_EACH_TYPE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        pokemonsByType: payload,
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

    case FILTER_CHANGE: {
      return {
        ...state,
        filterType: payload,
      };
    }

    case RESET_FILTER: {
      return {
        ...state,
        filterType: "All types",
        pokemonsByType: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemonReducer;
