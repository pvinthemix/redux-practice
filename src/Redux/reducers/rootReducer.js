import { combineReducers } from 'redux';
import { addGroceriesReducer } from './addGroceriesReducer.js';

export const rootReducer = combineReducers({
  groceries: addGroceriesReducer
})