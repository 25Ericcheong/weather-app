import "./style.css";
import Time from "./Time.js";
import { Weather } from "./Weather.js";
import React, { useState } from "react";

function formatName(user) {
  return `This is ${user.firstName} ${user.lastName}'s first react project!`;
}

function App(props) {
  const [mode, setMode] = useState("normal");
  const [status, changeStatus] = useState("Dark Mode");

  const user = {
    firstName: "Eric",
    lastName: "Cheong",
  };

  let changeMode = () => {
    setMode((mode) => (mode === "normal" ? "dark" : "normal"));
    changeStatus((status) =>
      status === "Dark Mode" ? "Normal Mode" : "Dark Mode"
    );
  };

  return (
    <section className={`app ${mode}`}>
      <button onClick={changeMode} className={mode}>
        {status}
      </button>
      <h1>{formatName(user)}</h1>
      <h2>{props.appName}</h2>
      <Time buttonMode={mode} />
      <Weather />
    </section>
  );
}

export default App;
