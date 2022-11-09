import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      iconurl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Find a city..."
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn button" />
          </div>
          <div className="col-md-2">
            <p className="second-color convert-btn">°C | °F</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-sm-8">
            <div className="row pt-4">
              <div className="col-sm-4">
                <h1>
                  <img src={weatherData.iconurl} alt="weather icon" />
                  {weatherData.temperature}
                </h1>
              </div>

              <div className="col-md-4">
                <ul>
                  <li>
                    Feels Like:{" "}
                    <span className="second-color">
                      {weatherData.feelsLike}%
                    </span>
                  </li>
                  <li>
                    Humidity:{" "}
                    <span className="second-color">
                      {weatherData.humidity}%
                    </span>
                  </li>
                  <li>
                    Wind:{" "}
                    <span className="second-color">{weatherData.wind}mph</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pt-4">
            <h2>Zermatt, Switzerland</h2>
            <h3>
              <FormattedDate date={weatherData.date} />
            </h3>
            <h3>{weatherData.description}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.defaultCity;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ff9490c9dd41e395895840259bf64e&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
