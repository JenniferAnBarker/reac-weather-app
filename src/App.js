import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="london" />
        <p>
          This project was coded by{" "}
          <a href="https://github.com/JenniferAnBarker" className="App-link">
            Jennifer Norton-Barker
          </a>{" "}
          , is{" "}
          <a
            href="https://github.com/JenniferAnBarker/react-weather-app"
            className="App-link"
          >
            {" "}
            open sourced
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/zippy-phoenix-143e11/overview"
            className="App-link"
          >
            {" "}
            Netlify{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
