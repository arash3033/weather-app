import { FC } from "react";
import { Typography } from "@mui/material";

import { ForecastDay } from "@/src/types/forecastDay";
import WeatherIcon from "./WeatherIcon";
import style from "../../styles/weatherCard.module.css";

type WeatherStatusProps = {
  weather: ForecastDay;
}
const WeatherStatus: FC<WeatherStatusProps> = ({ weather }) => {
  return (
    <li className={style.weatherStatusItem}>
      <Typography variant="h5">{new Date(weather.date).toLocaleDateString("en", { weekday: "short" })}</Typography>
      <WeatherIcon condition={weather.day.condition.text} />
      <Typography variant="body1" component={"p"}>
        {`${weather.day.mintemp_c}°/${weather.day.mintemp_f}°`}
      </Typography>
    </li>
  );
};

export default WeatherStatus;
