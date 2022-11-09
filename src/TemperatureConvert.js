import React, { useState } from "react";

export default function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        {props.celsius}°
        <p className="second-color convert-btn">
          °C |{" "}
          <a href="/" onClick={showFah}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        {Math.round(fahrenheit)}°
        <p className="second-color convert-btn">
          <a href="/" onClick={showCel}>
            °C
          </a>{" "}
          | °F
        </p>
      </div>
    );
  }
}
