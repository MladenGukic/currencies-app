import { combineReducers } from "redux";
import { reducer } from "./currrenciesReducer";

export const reducers = combineReducers({
  currenciesReducer: reducer,
});

export type State = ReturnType<typeof reducers>;
