import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "react-redux";
import ridersReducer from "../features/riders/ridersSlice";

const store = configureStore({
  reducer: {
    riders: ridersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
