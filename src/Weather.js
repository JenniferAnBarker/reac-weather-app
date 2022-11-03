import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather-head">
      <div className="row justify-content-between">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-2">
              <h1>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                />
                6
              </h1>
            </div>
            <div className="col-sm-2">
              <p>°C | °F</p>
            </div>
            <div className="col-sm-4">
              <ul>
                <li>Precipitation: 7%</li>
                <li>Humidity: 66%</li>
                <li>Wind: 10mph</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h2>Zermatt, Switzerland</h2>
          <h3>Thursday 12:00</h3>
          <h3>Cloudy</h3>
        </div>
      </div>
    </div>
  );
}
