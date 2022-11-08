import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
        <p>
          This project was coded by{" "}
          <a href="/" className="App-link">
            Jennifer Norton-Barker
          </a>{" "}
          and is open sourced
        </p>
      </div>
    </div>
  );
}

export default App;
