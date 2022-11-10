import React from "react";
import FormattedDate from "./FormattedDate.js";
import Icon from "./Icon";

export default function SearchEngine(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-9 border">
          <div className="row align-items-end pt-4">
            <div className="col-sm-6 border">
              <div>
                <Icon code={props.data.icon} size={100} />
                <span className="todaysTemp"> {props.data.temperature}°C</span>
              </div>
            </div>

            <div className="col-sm-6 border">
              <ul>
                <li>
                  Feels Like:{" "}
                  <span className="second-color">{props.data.feelsLike}%</span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="second-color">{props.data.humidity}%</span>
                </li>
                <li>
                  Wind:{" "}
                  <span className="second-color">{props.data.wind}mph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-3 pt-4 border">
          <h2>{props.data.city}</h2>
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>
          <h3>{props.data.description}</h3>
        </div>
      </div>
    </div>
  );
}
