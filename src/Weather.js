import React, { useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import FormattedDateAndHour from "./FormattedDateAndHour";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function callApi(){
    const apiKey = "3t3727bff68c9c7b7704eb1fo7a5d0e1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    callApi();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-4 mt-5">
        <div className="row d-flex justify-content-between">
          <div className="col-6">
            <h1 className="m-0 city">{weatherData.city}</h1>
            <div className="m-0 date">
              <FormattedDateAndHour date={weatherData.date} />
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={getCity}
                placeholder="Enter a city..."
                className="searchInput col-6"
                autoFocus="on"
              ></input>
              <input
                type="submit"
                value={"Search"}
                className="submitInput col-4"
              ></input>
            </form>
          </div>
        </div>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    callApi();
    return (
      <div className="loader mt-5">
        <PulseLoader
          size={15}
          cssOverride={{
            "text-align": "center",
          }}
          color="rgb(23, 36, 154)"
          loading={true}
          speedMultiplier={1}
        />
      </div>
    );
  }
}
