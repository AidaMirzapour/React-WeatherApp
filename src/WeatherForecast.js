import React, { useState } from "react";
import WeatherIcon from "./WeatherIcons";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getForecastDay(){
    let day = props.date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day+1];
  }

  function getAPIResponse(response) {
    console.log(response);
    setLoaded(true);
    setForecastData({
      minTemp: response.data.daily[1].temperature.minimum,
      maxTemp: response.data.daily[1].temperature.maximum,
      description: response.data.daily[1].condition.description,
      forecastIcon: response.data.daily[1].condition.icon,
    });
  }

  function callAPI() {
    let lon = props.lon;
    let lat = props.lat;
    let apiKey = "3t3727bff68c9c7b7704eb1fo7a5d0e1";
    let oneCallApiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(oneCallApiUrl).then(getAPIResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="forecastDays col-2 text-center">
          <div className="forecastDayName">{getForecastDay()}</div>
          <WeatherIcon icon={forecastData.forecastIcon} className="m-0" />
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              {Math.round(forecastData.maxTemp)}°{" "}
            </span>
            -
            <span className="forecastTemperature-min">
              {" "}
              {Math.round(forecastData.minTemp)}°
            </span>
          </div>
          <div className="text-capitalize description">
            {forecastData.description}
          </div>
        </div>
      </div>
    );
  } else {
    callAPI();
    return null;
  }
}
