import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { BsCloudLightningRain } from "react-icons/bs";

import WeatherStatus from "./WeatherStatus";
import style from "../../styles/weatherCard.module.css";

type indexProps = {
  isLoading: boolean;
};

const index: FC<indexProps> = ({ isLoading }) => {
  const WeatherCard = styled(Card)({
    width: "430px",
    height: "256px",
    backgroundImage: isLoading ? "unset" : "url(https://unsplash.it/600/400?image=1043&blur)",
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
        <Skeleton variant="rounded" width={430} height={256} animation={"pulse"} />
      </WeatherCard>
    );
  }
  return (
    <WeatherCard>
      <WeatherContent>
        <div className={style.topSection}>
          <div className={style.leftInfo}>
            <Typography variant="h2">
              Lucerne
              <br />
              <Typography variant="body1" component={"small"}>
                May 24, 2016
              </Typography>
            </Typography>
            <div className={style.weatherStatus}>
              <BsCloudLightningRain />
              <Typography variant="body1">Rainy</Typography>
            </div>
          </div>
          <div className={style.RightInfo}>
            <Typography variant="body1" component={"span"}>
              12°
            </Typography>
            <Typography variant="body2" component={"small"}>
              8° / 13°
            </Typography>
          </div>
        </div>
        <div className={style.bottomSection}>
          <ul>
            <WeatherStatus />
            <WeatherStatus />
            <WeatherStatus />
            <WeatherStatus />
            <WeatherStatus />
            <WeatherStatus />
          </ul>
        </div>
      </WeatherContent>
    </WeatherCard>
  );
};

export default index;
