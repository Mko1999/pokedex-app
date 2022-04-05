import { combineReducers } from "redux";
import { pokemonReducer, pokemonTypeReducer } from "./reducers";

const mainReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonType: pokemonTypeReducer,
});
export default mainReducer;
