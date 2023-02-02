import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const reducer = {
  AuthReducer: authSlice,
};

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
