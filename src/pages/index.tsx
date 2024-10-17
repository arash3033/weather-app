import { FC } from "react";

import WeatherCard from "../components/WeatherCard";
import style from "../styles/home.module.css";

const HomePage: FC = () => {
  return (
    <div className={style.container}>
      <WeatherCard />
    </div>
  );
};

export default HomePage;
