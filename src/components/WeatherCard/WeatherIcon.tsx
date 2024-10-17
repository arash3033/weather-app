import { FC } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { BsCloudLightningRain } from "react-icons/bs";
import { BsSnow2 } from "react-icons/bs";

import { WeatherCondition } from "@/src/types/weatherCondition";

type WeatherIconProps = {
  condition: WeatherCondition;
};

const WeatherIcon: FC<WeatherIconProps> = ({ condition }) => {
  if (condition === "Clear") {
    return <MdOutlineNightlight />;
  }
  if (condition === "Sunny") {
    return <MdOutlineWbSunny />;
  }
  if (condition === "Cloudy") {
    return <CiCloudOn />;
  }
  if (condition.includes("rain")) {
    return <BsCloudLightningRain />;
  }
  if (condition.includes("snow")) {
    return <BsSnow2 />;
  }
  return <CiCloudOn />;
};

export default WeatherIcon;
