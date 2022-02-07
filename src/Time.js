import "./App.css";
import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // does not participate in data flow
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <section className="App">
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
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
