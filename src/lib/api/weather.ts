import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_END_POINT}`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ location, days }: { location: string; days: number }) =>
        `/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=${days}&q=${location}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
