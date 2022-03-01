import "./style.css";
import React from "react";

function formatName(user) {
  return `This is ${user.firstName} ${user.lastName}'s first react project!`;
}

function Header(props) {
  const user = {
    firstName: "Eric",
    lastName: "Cheong",
  };

  return (
    <section className="standard-spacing">
      <div className="right-align">
        <button onClick={props.modeFunction} className={props.backgroundStatus}>
          {props.buttonStatus}
        </button>
      </div>
      <h1>{formatName(user)}</h1>
      <h2>{props.appName}</h2>
    </section>
  );
}

export { Header };
