import { FC, useEffect } from "react";

import WeatherCard from "../components/WeatherCard";
import { useGetWeatherQuery } from "../lib/api/weather";
import style from "../styles/home.module.css";

const HomePage: FC = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1];
  const { data, isLoading, error } = useGetWeatherQuery({
    location: timeZone,
    days: 7,
  });
  console.log(data, isLoading, error);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // geolocation does not work because of sanctions.
      // We can get ip and get location from that or get city name from timezone.
      // navigator.geolocation.getCurrentPosition(
      //   (position) => {
      //     setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      //   },
      //   () => {
      //     // Error call back
      //   }
      // );
    }
  }, []);

  if (error) {
    return (
      <div className={style.container}>
        <div>Something went wrong!!!</div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <WeatherCard isLoading={isLoading} weather={data} />
    </div>
  );
};

export default HomePage;
