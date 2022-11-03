import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
      </div>
    </div>
  );
}

export default App;
