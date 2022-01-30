import { combineReducers } from '@reduxjs/toolkit';
import TestReducer from './TestSlice';


export const RootReducer = combineReducers({
  test: TestReducer,
});
