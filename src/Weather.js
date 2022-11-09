import React, { useState } from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine";

import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      city: response.data.name,
      iconurl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ff9490c9dd41e395895840259bf64e&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Find a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn button" />
            </div>
            <div className="col-md-2">
              <p className="second-color convert-btn">°C | °F</p>
            </div>
          </div>
        </form>
        <SearchEngine data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
