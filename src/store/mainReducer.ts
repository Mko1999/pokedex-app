import { combineReducers } from "redux";
import { pokemonReducer } from "./reducers";

const mainReducer = combineReducers({
  pokemon: pokemonReducer,
  //   info: infoReducer,
});
export default mainReducer;
