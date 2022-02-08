import "./style.css";
import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timePaused: false,
      partOfDay: "",
    };

    this.timeToggled = this.timeToggled.bind(this);
  }

  componentDidMount() {
    // short period of delay if this is not included here but only in tick function
    let time = this.state.date.getHours();
    this.partOfDayUpdate(time);

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

    // used to update part of day to be displayed on app
    let time = this.state.date.getHours();
    this.partOfDayUpdate(time);
  }

  partOfDayUpdate(time) {
    if (time >= 6 && time <= 12) {
      this.setState({
        partOfDay: "morning",
      });
    } else if (time >= 12 && time <= 18) {
      this.setState({
        partOfDay: "afternoon",
      });
    } else {
      this.setState({
        partOfDay: "night",
      });
    }
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
        <h2>
          It is {this.state.date.toLocaleTimeString()} in the{" "}
          {this.state.partOfDay}{" "}
        </h2>
        <button onClick={this.timeToggled} className={this.props.buttonMode}>
          Toggle Time
        </button>
      </section>
    );
  }
}

export default Time;
