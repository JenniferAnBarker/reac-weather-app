import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humid, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let iconUrl = ` http://openweathermap.org/img/wn/`;
  let [details, setDetails] = useState();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ff9490c9dd41e395895840259bf64e&units=metric`;

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    console.log(temperature);
    setDesc(response.data.weather[0].description);
    console.log(desc);
    setHumid(response.data.main.humidity);
    console.log(humid);
    setWind(response.data.wind.speed);
    console.log(wind);
    setIcon(response.data.weather[0].icon);
    console.log(icon);
    setDetails(
      <div>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} mps</li>
        <li>
          {" "}
          <img
            src={iconUrl + response.data.weather[0].icon + "@2x.png"}
            alt="weather condition icon"
          />{" "}
        </li>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    axios.get(url).then(showWeather);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search City Here..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>{details}</ul>
    </div>
  );
}
