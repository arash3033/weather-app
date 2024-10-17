import { FC } from "react";
import { Typography } from "@mui/material";
import { BsCloudLightningRain } from "react-icons/bs";

import style from "../../styles/weatherCard.module.css";

const WeatherStatus: FC = () => {
  return (
    <li className={style.weatherStatusItem}>
      <Typography variant="h5">Wed</Typography>
      <BsCloudLightningRain />
      <Typography variant="body1" component={"p"}>
        9°/18°
      </Typography>
    </li>
  );
};

export default WeatherStatus;
