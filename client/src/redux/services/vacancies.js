import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/vacancies/" }),
  endpoints: (builder) => ({
    getVacancyById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetVacancyByIdQuery } = vacanciesApi;
