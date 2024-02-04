import React, { useEffect, useState } from "react";
import WeatherDailyForecast from "./WeatherDailyForecast";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function getAPIResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
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
        {forecastData.map(function (dailyForecast, index) {
          if (index !== 0) {
            return (
              <div className="forecastDays col-2 text-center" key={index}>
                <WeatherDailyForecast data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    callAPI();
    return null;
  }
}
