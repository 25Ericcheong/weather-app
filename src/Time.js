import "./App.css";
import React from "react";

class Time extends React.Component {
  render() {
    return (
      <section className="App">
        <h2>12:30pm</h2>
      </section>
    );
  }
}

// function Time() {

//   const element = (
//     <div>
//       <h2>It is {currentTime.date.toLocaleTimeString()}</h2>
//     </div>
//   );

//   return <div className="App">{element}</div>;
// }

export default Time;
