import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { store } from "../store";

export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
