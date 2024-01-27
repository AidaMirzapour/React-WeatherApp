import React from "react";
//All weather icons i have take from https://bas.dev/work/meteocons
import ClearDay from "./icons/clear-sky-day.svg";
import ClearNight from "./icons/clear-sky-night.svg";
import PartlyCloudyDay from "./icons/few-clouds-day.svg";
import PartlyCloudyNight from "./icons/few-clouds-night.svg";
import ScatteredClouds from "./icons/scattered-clouds.svg";
import BrokenCloudsNight from "./icons/broken-clouds-night.svg";
import BrokenCloudsday from "./icons/broken-clouds-day.svg";
import ShowerRainNight from "./icons/shower-rain-night.svg";
import ShowerRainDay from "./icons/shower-rain-day.svg";
import RainNight from "./icons/rain-night.svg";
import RainDay from "./icons/rain-day.svg";
import ThunderstormNight from "./icons/thunderstorm-night.svg";
import ThunderstormDay from "./icons/thunderstorm-day.svg";
import SnowNight from "./icons/snow-night.svg";
import SnowDay from "./icons/snow-day.svg";
import MistNight from "./icons/mist-night.svg";
import MistDay from "./icons/mist-day.svg";

export default function WeatherIcon(props) {
  const iconsMaping = {
    "clear-sky-day": ClearDay,
    "clear-sky-night": ClearNight,
    "few-clouds-day": PartlyCloudyDay,
    "few-clouds-night": PartlyCloudyNight,
    "scattered-clouds-day": ScatteredClouds,
    "scattered-clouds-night": ScatteredClouds,
    "broken-clouds-day": BrokenCloudsday,
    "broken-clouds-night": BrokenCloudsNight,
    "shower-rain-day": ShowerRainDay,
    "shower-rain-night": ShowerRainNight,
    "rain-day": RainDay,
    "rain-night": RainNight,
    "thunderstorm-day": ThunderstormDay,
    "thunderstorm-night": ThunderstormNight,
    "snow-day": SnowDay,
    "snow-night": SnowNight,
    "mist-night": MistDay,
    "mist-night": MistNight,
  };

  return (
    <img
      src={iconsMaping[props.icon]}
      alt={props.alt}
      className="img-fluid me-3"
    />
  );
}
