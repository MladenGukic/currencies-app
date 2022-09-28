import { Currency } from "../../models/currency";
import {
  getCurrencies,
  postCurrency,
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
    default:
      return state;
  }
};
