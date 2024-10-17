import { FC, useEffect, useState } from "react";

import { useGetWeatherQuery } from "../lib/api/weather";
import WeatherCard from "../components/WeatherCard";
import SearchAppBar from "../components/Hedaer";
import style from "../styles/home.module.css";

const HomePage: FC = () => {
  const [location, setLocation] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1]);
  const { data, isLoading, isFetching, error } = useGetWeatherQuery({ location, days: 7 }, { refetchOnMountOrArgChange: true });

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

  return (
    <>
    <SearchAppBar handleSearch={(loc) => setLocation(loc)} />
      <div className={style.container}>
        {error ? <div>Something went wrong!!!</div> : <WeatherCard isLoading={isLoading || isFetching} weather={data} />}
      </div>
    </>
  );
};

export default HomePage;
