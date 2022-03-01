import "./style.css";
import React from "react";

function formatName(user) {
  return `This is ${user.firstName} ${user.lastName}'s first React project!`;
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
      <h2>{formatName(user)}</h2>
      <h2>{props.appName}</h2>
    </section>
  );
}

export { Header };
