import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Time from "./Time.js";

ReactDOM.render(
  <React.StrictMode>
    <App appName="Weather App" />
  </React.StrictMode>,
  document.getElementById("root")
);
