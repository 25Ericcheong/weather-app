import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Time from "./Time.js";

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <Time />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);
