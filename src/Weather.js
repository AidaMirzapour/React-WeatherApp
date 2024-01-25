import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather p-5 mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-6">
          <h1 className="m-0 city">Tehran</h1>
          <p className="m-0 date">Thursday, 31 August 2023 | 10:15 PM</p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              className="searchInput"
              autoFocus="on"
            ></input>
            <input
              type="submit"
              value={"Search"}
              className="submitInput"
            ></input>
          </form>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex justify-content-between">
        <div className="col-6 d-flex ">
          <div className="col-3 temperature">12</div>
          <div className="col-8 m-3 p-3 description-unit">
            <div className="row unit">°C | °F</div>
            <div className="row description">Scattered clouds</div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-evenly align-items-center">
          <div className="col-5">
            <img
              src="./images/icon.svg"
              alt="weather icon"
              className="img-fluid"
            />
          </div>
          <div className="col-7">
            <ul className="details">
              <li>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nMXQsWoCQRDG8UvhpRFEJJDCh7BQgq1YmCZFkrewj5YKgrFWO6t7jXu4nyxscRwJrneFA8POfLvz34/Jsn8CC+xxwDy7N/BbqfdNACWWsd40BYzaAlYxyyaAAsM2Dgq8tgGUj1siXmoOfoKWOtzBGd3YP2OKE/IUwDfGlf4Jk5hfKYB1+LWmvWMW7lIAH3iraZ8RkuQgxxG9itbDJeznJiAO9LHFrnIO/np8Bf2s4+UAGxtVAAAAAElFTkSuQmCC" />
                {"  "}
                Feels like: 10°C
              </li>
              <li>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nJ3TPU9UYRAF4AsoBrawcFGhMRQWa0OnJhREjZ2WFlZAQbEkS0VoCAkQKhOyhbFBISHZAsNXgv6/h0wyN1xX2A+meWcy50xmzsxbFAMYXmFqEOx/hjH8wa/iPoZlfMUu3vQCPq74I2WM0+ziCX52Ywu8jPZwgnO0cYkLLKJTwXawid84DG6Bh6glYBRP4834AX5gCRtYrxSrBbcYQINo/zMWeoFmsBMgTOIjtrKbZ+l/yNy7FHS6JDewj7do4QBNzKce7fSbmWslNjiNuzp6jrm+83WRJir+Mf6GiKVgXdibGLOp9BXO8Cln/oIVfKvk9nKFse7vwS3wCPUsNo6jOJRcaZDKg4rci3gzrgf3tlH+OZyhdEjSGraxGhsYukAWeY338Sf6ga8B0/qUeQEfK0gAAAAASUVORK5CYII=" />
                {"  "}
                Humidity: 32%
              </li>
              <li>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nM3QPWpCQRTFcRstg5WIX6VNIIKNvWRJVlmAJpo+G4luwI8lpE7xHlYW1ha/MPAM8jAwk0I81T2Xe/537lQqdynUMMceOV5DLwXwhk+00cESsxRAHsIXvht6KYBhyQdAFg24El5hWvgBnlE9Dzzh5G9lIVx87Etx3habX0issEOvqANkHB0ugVr4xmPMCdd0wCR2Wx8PqOMLo9TnvuMDjf8CmljjiEVS+Cb6AaIQEsZ/ljwDAAAAAElFTkSuQmCC" />
                {"  "}
                Wind: 7 km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
