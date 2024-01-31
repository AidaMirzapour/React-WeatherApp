import React from "react";
import WeatherIcon from "./WeatherIcons";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast row">
      <div className="forecastDays col-2 text-center">
        <div className="forecastDayName">Thu</div>
        <WeatherIcon icon="snow-day" className="m-0" />
        <div className="forecastTemperature">
          <span className="forecastTemperature-max">23° </span>-
          <span className="forecastTemperature-min"> 14°</span>
        </div>
        <div className="text-capitalize description">clear sky</div>
      </div>
    </div>
  );
}
