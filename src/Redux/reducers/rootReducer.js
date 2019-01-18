import { combineReducers } from "redux";
import { groceriesReducer } from "./groceriesReducer.js";

export const rootReducer = combineReducers({
  groceries: groceriesReducer
});
