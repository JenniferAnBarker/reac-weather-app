import React from "react";
import Icon from "./Icon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function showDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let newDate = new Date(props.data.dt * 1000);
    let day = days[newDate.getDay()];
    return `${day}`;
  }

  return (
    <div>
      <div className="forecast-day">{showDay()}</div>
      <div className="icon">
        <Icon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{maxTemperature()}</span> |
        <span className="forecast-temperature-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
