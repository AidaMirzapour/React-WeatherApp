import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  if (unit === "Celsius") {
    return (
      <div className="WeatherTemperature d-flex ">
        <div className="col-4 ml-2 temperature">{Math.round(props.temp)}</div>
        <div className="col-8 m-3 ps-2 description-unit">
          <div className="row unit ">
            <a href="#" onClick={convertToCelsius}>
              °C{" "}
            </a>
            |
            <a href="#" onClick={convertToFahrenheit} className="text-muted ">
              {" "}
              °F
            </a>
          </div>
          <div className="row text-capitalize description">{props.desc}</div>
        </div>
      </div>
    );
  } else {
    let Fahrenheit = (props.temp * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature d-flex ">
        <div className="col-4 ml-2 temperature">{Math.round(Fahrenheit)}</div>
        <div className="col-8 m-3 ps-2 description-unit">
          <div className="row unit">
            <a href="#" onClick={convertToCelsius} className="text-muted">
              °C{" "}
            </a>
            |
            <a href="#" onClick={convertToFahrenheit}>
              {" "}
              °F
            </a>
          </div>
          <div className="row text-capitalize description">{props.desc}</div>
        </div>
      </div>
    );
  }
}
