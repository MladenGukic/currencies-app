import { Currency } from "../../models/currency";
import {
  deleteCurrency,
  getCurrencies,
  postCurrency,
  updateCurrency,
} from "../../services/localStorageServices";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const reducer = (
  state: Currency[] = getCurrencies(),
  action: Action,
) => {
  switch (action.type) {
    case ActionType.ADD:
      postCurrency(action.payload);
      return state.concat(action.payload);
    case ActionType.REMOVE:
      deleteCurrency(action.payload);
      return state.filter((curr) => curr.id !== action.payload);
    case ActionType.EDIT:
      updateCurrency(action.payload);
      return state.map((curr) =>
        curr.id === action.payload.id ? action.payload : curr,
      );
    default:
      return state;
  }
};
