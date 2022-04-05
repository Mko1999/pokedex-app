import { IPokemonTypeState } from "./types";
import { AnyAction } from "redux";
import { ERROR_MESSAGE, ALL_TYPES } from "../../constants";

export const FETCH_POKEMON_TYPES_REQUEST = "FETCH_POKEMON_TYPES_REQUEST";
export const FETCH_POKEMON_TYPES_ERROR = "FETCH_POKEMON_TYPES_ERROR";
export const FETCH_POKEMON_TYPES_SUCCESS = "FETCH_POKEMON_TYPES_SUCCESS";

export const FETCH_POKEMON_EACH_TYPE_REQUEST =
  "FETCH_POKEMON_EACH_TYPE_REQUEST";
export const FETCH_POKEMON_EACH_TYPE_ERROR = "FETCH_POKEMON_EACH_TYPES_ERROR";
export const FETCH_POKEMON_EACH_TYPE_SUCCESS =
  "FETCH_POKEMON_EACH_TYPE_SUCCESS";

export const FILTER_CHANGE = "FILTER_CHANGE";
export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";

const initialState: IPokemonTypeState = {
  pokemonTypes: [],
  pokemonsByType: [],
  error: "",
  loading: false,
  filterType: ALL_TYPES,
};
const pokemonTypeReducer = (
  state = initialState,
  { type, payload }: AnyAction
): IPokemonTypeState => {
  switch (type) {
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

    case FILTER_CHANGE: {
      return {
        ...state,
        filterType: payload,
      };
    }

    case RESET_FILTER: {
      return {
        ...state,
        filterType: ALL_TYPES,
        pokemonsByType: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemonTypeReducer;
