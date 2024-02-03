import React from "react";
import WeatherIcon from "./WeatherIcons";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast(props) {
  let minTemp = props.data.temperature.minimum;
  let maxTemp = props.data.temperature.maximum;
  let description = props.data.condition.description;
  let forecastIcon = props.data.condition.icon;

  function getForecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherDailyForecast">
      <div className="forecastDayName">{getForecastDay()}</div>
      <WeatherIcon icon={forecastIcon} className="m-0" />
      <div className="forecastTemperature">
        <span className="forecastTemperature-max">{Math.round(maxTemp)}° </span>
        -
        <span className="forecastTemperature-min"> {Math.round(minTemp)}°</span>
      </div>
      <div className="text-capitalize description">{description}</div>
    </div>
  );
}
