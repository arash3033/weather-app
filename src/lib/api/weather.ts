import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { WeatherData } from "@/src/types/weatherData";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_END_POINT}`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, { location: string; days: number }>({
      query: ({ location, days }) =>
        `/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=${days}&q=${location}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
