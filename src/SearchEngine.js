import React from "react";
import FormattedDate from "./FormattedDate.js";
import Icon from "./Icon";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm-8 ">
          <div className="row  pt-4">
            <div className="col mb-5 ">
              <div className="left-col">
                <Icon code={props.data.icon} size={60} />
                <span className="todaysTemp"> {props.data.temperature}</span>
                <span className="degrees">°C</span>
              </div>
            </div>

            <div className="col mb-5 mid-col-features">
              <ul>
                <li>
                  Feels Like:{" "}
                  <span className="response">{props.data.feelsLike}%</span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="response">{props.data.humidity}%</span>
                </li>
                <li>
                  Wind: <span className="response">{props.data.wind}mph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-4 pt-4 right-col-display">
          <h1 className="city">{props.data.city}</h1>
          <h3 className="city-desc">
            <FormattedDate date={props.data.date} />
          </h3>
          <h3 className="city-desc">{props.data.description}</h3>
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
}
