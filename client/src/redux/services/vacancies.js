import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/vacancies/" }),
  endpoints: (builder) => ({
    getVacancyById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllVacancies: builder.query({
      query: () => "/",
    }),
    addVacancy: builder.mutation({
      query(body) {
        return {
          url: `/`,
          method: "POST",
          body,
        };
      },
    }),
    updateVacancy: builder.mutation({
      query(id, body) {
        return {
          url: `/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
    deleteVacancy: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetVacancyByIdQuery,
  useGetAllVacanciesQuery,
  useAddVacancyMutation,
  useUpdateVacancyMutation,
  useDeleteVacancyMutation,
} = vacanciesApi;
