import { configureStore } from "@reduxjs/toolkit";
import favoritesRedcuer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesRedcuer,
  },
});
