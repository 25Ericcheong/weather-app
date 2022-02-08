import "./App.css";
import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // does not participate in data flow and is called continuously every second after component has been rendered
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
    return <h2>It is {this.state.date.toLocaleTimeString()}</h2>;
  }
}

export default Time;
