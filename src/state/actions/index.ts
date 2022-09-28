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

export type Action = AddAction | RemoveAction;
