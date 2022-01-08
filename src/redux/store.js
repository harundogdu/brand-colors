import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "./brands/brandsSlice";

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
  },
});
