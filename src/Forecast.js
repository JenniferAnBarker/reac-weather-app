import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <div className="row pt-5">
        <div className="col-sm border forecast">
          <div className="forecast-day">Fri</div>
          <div className="icon">icon</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Sat</div>
          <div className="icon">icon</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Sun</div>
          <div className="icon">icon</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Mon</div>
          <div className="icon">icon</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
        <div className="col-sm border forecast">
          <div className="forecast-day">Tue</div>
          <div className="icon">icon</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">24°</span> |
            <span className="forecast-temperature-min"> 15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
