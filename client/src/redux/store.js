import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { vacanciesApi } from "./services/vacancies";

export const store = configureStore({
  reducer: {
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesApi.middleware),
});

setupListeners(store.dispatch);
