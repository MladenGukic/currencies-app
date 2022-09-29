import { Currency } from "../../models/currency";
import { ActionType } from "../action-types";

interface AddAction {
  type: ActionType.ADD;
  payload: Currency;
}

interface RemoveAction {
  type: ActionType.REMOVE;
  payload: string;
}

interface EditAction {
  type: ActionType.EDIT;
  payload: Currency;
}

export type Action = AddAction | RemoveAction | EditAction;
