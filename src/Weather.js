import React, { useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import FormattedDateAndHour from "./FormattedDateAndHour";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  //get current location
  function showCurrentPlace(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "3t3727bff68c9c7b7704eb1fo7a5d0e1";
    let apiUrl2 = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl2).then(getData);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showCurrentPlace);
  }

  function updateLocation(event) {
    event.preventDefault();
    getCurrentPosition();
  }

  function getData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      longitude: response.data.coordinates.longitude,
      latitude: response.data.coordinates.latitude,
    });
  }

  function callApi() {
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
                className="submitInput col-3"
              ></input>
              <img
                onClick={updateLocation}
                className="col-1 m-2 locationIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCElEQVR4nLWXe0xTVxzHm72XLVtmYm+NTB691yhijWHGbbw2euugtzDg3lJoxRaB2jJgPMaEIY8gi2Fkig6m97QUH3XVqhOMc27CkI1pFhczdWzT+MCxTUMUjQklq8hZTuVCW3tpUXeS7z+n7e9zzu98z+93KhA8phEZqX86XpGWQlL0Nqmc+YqkmCNSijbJKEaZkJDwrOD/GDIFvYKkmIskxUAqNXNAqcn5Qbky53sqVX0Jzcko5VWSUiY/VPDg4PbnhGHs4tmEKQ0Ts29z8yRF50nl9FiqSndqp9WugxBGuctm359FZ2afJClmXKpQlgZGi6t9SihmUzAx2C/E2VEMBxAJX9J+AkI4v7yqTkNSzD1tXsEhp9MZ4w3l5HQ6o3X6or0uuJx+d1qmiNgWKyLAOQQKk1h+TaQPft7Q+FNu38lBOQrmcDhiFLR6MD0r7/LIyOh7EEK0W4oP7nA4YlLStadlFPM3z5nXPoGJwUYMZ8cndnjv7G83ZN6BNjRtKUPnZ/+ycyOE0OAmLYRQ6gtu2r4rF/1GqlCqPJDh4fZnhDi7h0spJ8kbu47fueOZymx9oY1KU98aGxszeoGR9BBCV2a8JU/JGCQp2uwBxsRgmzeU05uyvXb3AMqVub0Zq/SXfEDd9QA8LTP7FEkpuyehQty0kg/Kpbyyrs/IBUjPyutRaw0X/ID13mln1KtPSuVMlws6C9/8EkaAW37AUBK1+zsuQI6xxPpOssoxYazp4Dp3dyckq26SFM3e360YfOQPivRqeNt1LkhzC1uAjPKF/UCzH7CBc/ukuRLTaIFAYH8SI8BQIODQxZYrbquPUdCaAbXO+EcAYJ3LF5rcXpJi/nRdJ1EouywQKFIi3dHqfl7V6xtr0A6stn1b/MGBeUchKiDxcmbNhJPZykCgkbG7v3Y4PK8U2nWqSndGQWtuXL8+VMwHHR4eLkqiNX+RCuYX1Ewm3Ay2+4O+Fmc77A3l1Hn42/QVScrRHGPxaV93Gs0Zi8pRrXbGJ9GSqbuLsx3TQSOW7/rR6YTRfKUQqa7hkyqUxpK1NV3e4Iqa9UfQcegLytZ51WTQww9mx9n2cxnTQTkVfVC1GQEKSyt7nU5nPtpp6YfVx9BcXkGpBUK4wAPsq0RyColom3RxICqrqGtE3SpTu+a8Jtv4O8pC/vtrt6LPOjouLPUEi8EGPvCSKGvXTMBITc0tJSkqbX8ys+p87cdN69Ac6mqo8s0JY+dNpRpnlXzgpdHWozMF+1Js4j6riAC3UX+fMpdk5wsYASabvLuWvWXrfBzgkAjLZSHO7n2gAwtxYPMFVucerfcVCLXI6oYThvyy7vKmz37WDg074vighpLuclc8gqUeAM+Zzy7AxOAu+kJwhGUApZgPqjV8Ux28qO0f9wWKCPAvsXR7/+vSPQcyVh+pt1j7VdwCQyWWixgBTvl4cUyarBUFKak4XsS3ejrrcKPby2T6hrKw7Saq7chUIpyN4wUHBX36PEaA0/MWtV091jOg8IZuNZ/VoJ0FWtc5CXFQywuddHiIORgj2EEE9y4cEct39j0E1IbecH7BaMwits4V4eCMiACOZNWhTcg4yEgzhopBa8BQbswOb3nR9dIUg7tBC83X5i4w3w4UKMLBNVQbBI8yhKEmCYazOzAcjAQAvIJeMq+EsS8/EtR9oDfZ/b8uoB7DwUERDrowHHQKxWy7EAfFs8NMUTNN6391EHQaAauUhwAAAABJRU5ErkJggg=="
                alt="location icon"
              />
            </form>
          </div>
        </div>
        <WeatherInfo info={weatherData} />
        <WeatherForecast
          lon={weatherData.longitude}
          lat={weatherData.latitude}
          date={weatherData.date}
        />
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
