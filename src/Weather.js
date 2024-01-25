import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Tehran</h1>
          <p>Thursday, 31 August 2023 | 10:15 PM</p>
        </div>
        <div className="col-6">
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              className="searchInput"
            ></input>
            <input
              type="submit"
              value={"Search"}
              className="submitInput"
            ></input>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-2">12</div>
          <div className="col-4">
            <div className="row">°C | °F</div>
            <div className="row">Scattered clouds</div>
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-3">
            <img
              src="https://vanilla-weather-app-one.vercel.app/icons/03d.svg"
              alt="weather icon"
            />
          </div>
          <div className="col-3">
            <ul>
              <li>Feels like: 10°C</li>
              <li>Humidity: 32%</li>
              <li>Wind: 7 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
