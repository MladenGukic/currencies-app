import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Currency } from "../../models/currency";

export const addCurrency = (currency: Currency) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD,
      payload: currency,
    });
  };
};

export const removeCurrency = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE,
      payload: id,
    });
  };
};
