import React from "react";
import WeatherIcon from "./WeatherIcons";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5 mb-5 d-flex justify-content-between">
        <div className="col-6 d-flex ">
          <div className="col-3 temperature">
            {Math.round(props.info.temperature)}
          </div>
          <div className="col-8 m-3 p-3 description-unit">
            <div className="row unit">°C | °F</div>
            <div className="row text-capitalize description">
              {props.info.description}
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-evenly align-items-center">
          <div className="col-5">
            <WeatherIcon
              icon={props.info.icon}
              alt={props.info.description}
            />
            
          </div>
          <div className="col-7">
            <ul className="details">
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nMXQsWoCQRDG8UvhpRFEJJDCh7BQgq1YmCZFkrewj5YKgrFWO6t7jXu4nyxscRwJrneFA8POfLvz34/Jsn8CC+xxwDy7N/BbqfdNACWWsd40BYzaAlYxyyaAAsM2Dgq8tgGUj1siXmoOfoKWOtzBGd3YP2OKE/IUwDfGlf4Jk5hfKYB1+LWmvWMW7lIAH3iraZ8RkuQgxxG9itbDJeznJiAO9LHFrnIO/np8Bf2s4+UAGxtVAAAAAElFTkSuQmCC"
                  alt="weather icon"
                />
                {"  "}
                Feels like: {Math.round(props.info.feelsLike)} °C
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nJ3TPU9UYRAF4AsoBrawcFGhMRQWa0OnJhREjZ2WFlZAQbEkS0VoCAkQKhOyhbFBISHZAsNXgv6/h0wyN1xX2A+meWcy50xmzsxbFAMYXmFqEOx/hjH8wa/iPoZlfMUu3vQCPq74I2WM0+ziCX52Ywu8jPZwgnO0cYkLLKJTwXawid84DG6Bh6glYBRP4834AX5gCRtYrxSrBbcYQINo/zMWeoFmsBMgTOIjtrKbZ+l/yNy7FHS6JDewj7do4QBNzKce7fSbmWslNjiNuzp6jrm+83WRJir+Mf6GiKVgXdibGLOp9BXO8Cln/oIVfKvk9nKFse7vwS3wCPUsNo6jOJRcaZDKg4rci3gzrgf3tlH+OZyhdEjSGraxGhsYukAWeY338Sf6ga8B0/qUeQEfK0gAAAAASUVORK5CYII="
                  alt="weather icon"
                />
                {"  "}
                Humidity: {props.info.humidity} %
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nM3QPWpCQRTFcRstg5WIX6VNIIKNvWRJVlmAJpo+G4luwI8lpE7xHlYW1ha/MPAM8jAwk0I81T2Xe/537lQqdynUMMceOV5DLwXwhk+00cESsxRAHsIXvht6KYBhyQdAFg24El5hWvgBnlE9Dzzh5G9lIVx87Etx3habX0issEOvqANkHB0ugVr4xmPMCdd0wCR2Wx8PqOMLo9TnvuMDjf8CmljjiEVS+Cb6AaIQEsZ/ljwDAAAAAElFTkSuQmCC"
                  alt="weather icon"
                />
                {"  "}
                Wind: {Math.round(props.info.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
