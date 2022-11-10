import React from "react";
import FormattedDate from "./FormattedDate.js";
import Icon from "./Icon";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm-9 ">
          <div className="row align-items-end pt-4">
            <div className="col-sm-6 ">
              <div>
                <Icon code={props.data.icon} size={100} />
                <span className="todaysTemp"> {props.data.temperature}</span>
                <span className="degrees">°C</span>
              </div>
            </div>

            <div className="col-sm-6  mid-col-features">
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
        <div className="col-sm-3 pt-4  right-col-display">
          <h2 className="city">{props.data.city}</h2>
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>
          <h3>{props.data.description}</h3>
        </div>
      </div>
    </div>
  );
}
