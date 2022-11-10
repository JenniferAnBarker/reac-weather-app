import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = `45ff9490c9dd41e395895840259bf64e`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading Forecast...";
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row pt-5">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm  forecast" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
