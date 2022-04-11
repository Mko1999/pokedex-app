import { AppDispatch } from "./../../types/thunk";
import {
  FETCH_POKEMON_TYPES_REQUEST,
  FETCH_POKEMON_TYPES_ERROR,
  FETCH_POKEMON_TYPES_SUCCESS,
  FETCH_POKEMON_EACH_TYPE_REQUEST,
  FETCH_POKEMON_EACH_TYPE_ERROR,
  FETCH_POKEMON_EACH_TYPE_SUCCESS,
  FILTER_CHANGE,
  RESET_FILTER,
} from "../reducers/pokemonTypeReducer";

import { getPokemonTypes, fetchFromUrl } from "../../data";
import { NameURL, Slots } from "../../types";

const fetchPokemonTypesRequest = (): { type: string } => {
  return {
    type: FETCH_POKEMON_TYPES_REQUEST,
  };
};

const fetchPokemonTypesError = (
  payload: string
): { type: string; payload: string } => {
  return {
    type: FETCH_POKEMON_TYPES_ERROR,
    payload,
  };
};

const fetchPokemonTypesSuccess = (
  payload: string
): { type: string; payload: string } => {
  return {
    type: FETCH_POKEMON_TYPES_SUCCESS,
    payload,
  };
};

const fetchPokemonsByTypeRequest = (): {
  type: string;
} => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_REQUEST,
  };
};

const fetchPokemonsByTypeError = (
  payload: string
): {
  type: string;
  payload: string;
} => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_ERROR,
    payload,
  };
};

const fetchPokemonsByTypeSuccess = (
  payload: NameURL[]
): {
  type: string;
  payload: NameURL[];
} => {
  return {
    type: FETCH_POKEMON_EACH_TYPE_SUCCESS,
    payload,
  };
};

export const fetchPokemonTypes =
  () =>
  async (dispatch: any): Promise<void> => {
    dispatch(fetchPokemonTypesRequest());
    try {
      const data = await getPokemonTypes();
      dispatch(fetchPokemonTypesSuccess(data));
    } catch (e) {
      if (e instanceof Error) dispatch(fetchPokemonTypesError(e.message));
    }
  };

export const fetchPokemonsByType =
  (url: string) =>
  async (dispatch: any): Promise<void> => {
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

export const setFilter = (
  payload: string
): {
  type: string;
  payload: string;
} => {
  return {
    type: FILTER_CHANGE,
    payload,
  };
};

export const resetFilter = (): { type: string } => {
  return {
    type: RESET_FILTER,
  };
};
