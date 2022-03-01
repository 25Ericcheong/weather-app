import "./style.css";
import React, { useState, useEffect } from "react";

function Time(props) {
  const [date, setDate] = useState(new Date());
  const [timePaused, setTimePaused] = useState(false);

  // actively updates time on page
  useEffect(() => {
    let id = null;
    if (!timePaused) {
      id = setInterval(() => {
        setDate(new Date());
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [timePaused]);

  function partOfDay(time) {
    if (time >= 6 && time <= 12) {
      return "Morning";
    } else if (time >= 12 && time <= 18) {
      return "Afternoon";
    } else {
      return "Night";
    }
  }

  function timeToggled() {
    setTimePaused(!timePaused);
  }

  return (
    <section>
      <h3>
        {date.toLocaleTimeString()} {partOfDay(date.getHours())}
      </h3>
      <button onClick={timeToggled} className={props.buttonMode}>
        Toggle Time
      </button>
    </section>
  );
}

export default Time;
