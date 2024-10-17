import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";

import { WeatherData } from "@/src/types/weatherData";
import WeatherStatus from "./WeatherStatus";
import WeatherIcon from "./WeatherIcon";
import style from "../../styles/weatherCard.module.css";

type indexProps = {
  weather: WeatherData | undefined;
  isLoading: boolean;
};

const index: FC<indexProps> = ({ weather, isLoading }) => {
  const date = new Date();

  const WeatherCard = styled(Card)({
    width: "460px",
    minHeight: "256px",
    backgroundImage: isLoading ? "unset" : "url(/images/400.jpg)",
    backgroundSize: "cover",
    borderRadius: "20px",
    boxShadow: "25px 25px 40px 0px rgba(0, 0, 0, 0.33)",
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  });
  const WeatherContent = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    padding: "0px 15px !important",
  });

  if (isLoading) {
    return (
      <WeatherCard>
        <Skeleton
          variant="rounded"
          width={460}
          height={256}
          animation={"pulse"}
        />
      </WeatherCard>
    );
  }
  if (!weather) {
    return <div>Something went wrong!!!</div>;
  }
  return (
    <WeatherCard>
      <WeatherContent>
        <div className={style.topSection}>
          <div className={style.leftInfo}>
            <Typography variant="h2">
              {weather.location.name}
              <br />
              <Typography variant="body1" component={"small"}>
                {`${date.toLocaleDateString("en", { month: "short" })} ${date.getDate()},${date.getFullYear()}`}
              </Typography>
            </Typography>
            <div className={style.weatherStatus}>
              <WeatherIcon condition={weather.current.condition.text} />
              <Typography variant="body1">
                {weather.current.condition.text}
              </Typography>
            </div>
          </div>
          <div className={style.RightInfo}>
            <Typography variant="body1" component={"span"}>
              {`${weather.current.heatindex_c}°`}
            </Typography>
            <Typography variant="body2" component={"small"}>
             {`${weather.current.temp_c}° / ${weather.current.temp_f}°`}
            </Typography>
          </div>
        </div>
        <div className={style.bottomSection}>
          <ul>
            {weather.forecast.forecastday.map((weather, index) => {
              if(index === 0) return;
              return <WeatherStatus weather={weather} key={weather.date} />
            })}
          </ul>
        </div>
      </WeatherContent>
    </WeatherCard>
  );
};

export default index;
