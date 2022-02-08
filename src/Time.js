import "./App.css";
import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timePaused: false,
    };

    this.timeToggled = this.timeToggled.bind(this);
  }

  componentDidMount() {
    // does not participate in data flow and is called continuously every second after component has been rendered
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // used stop time from ticking and resuming time to current time
  timeToggled() {
    if (!this.state.timePaused) {
      clearInterval(this.timeID);
    } else {
      this.timeID = setInterval(() => {
        this.tick();
      }, 1000);
    }

    this.setState((prevState) => ({
      timePaused: !prevState.timePaused,
    }));
  }

  render() {
    return (
      <section>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.timeToggled} className={this.props.buttonMode}>
          Toggle Time
        </button>
      </section>
    );
  }
}

export default Time;
