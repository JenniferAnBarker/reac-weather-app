import React from "react";
import "./Forecast.css";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log("hello from forecast");
  }

  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiKey = `45ff9490c9dd41e395895840259bf64e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <div className="row pt-5">
        <div className="col-sm border forecast">
          <div className="forecast-day">Fri</div>
          <div className="icon">
            <Icon code={"13d"} size={24} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Sat</div>
          <div className="icon">
            <Icon code={"13d"} size={24} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Sun</div>
          <div className="icon">
            <Icon code={"13d"} size={24} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Mon</div>
          <div className="icon">
            <Icon code={"13d"} size={24} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Tue</div>
          <div className="icon">
            <Icon code={"13d"} size={24} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
