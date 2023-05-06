import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/user";

const combinedReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: combinedReducer,
});
export default store;
