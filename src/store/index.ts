import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainReducer from "./mainReducer";

export const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
