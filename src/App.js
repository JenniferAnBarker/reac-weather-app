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
          <a href="/" className="App-link">
            Jennifer Norton-Barker
          </a>{" "}
          , is open sourced and hosted on Netlify
        </p>
      </div>
    </div>
  );
}

export default App;
