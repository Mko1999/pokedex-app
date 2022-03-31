import { combineReducers } from "redux";
import { pokemonReducer } from "./reducers";

const mainReducer = combineReducers({
  pokemon: pokemonReducer,
});
export default mainReducer;
