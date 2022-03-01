import "./style.css";
import React, { useState, useEffect } from "react";

function Weather() {
  let exclude = `minutely,alerts`;
  let api = `531f0a25aceba4d83247acab2d0f7b6c`;

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  // [] means useEffect will run once only, similar to componentDidMount(), used to acquire coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("lat: ", position.coords.latitude);
      console.log("long: ", position.coords.longitude);

      getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  function getWeatherData(lat, long) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&appid=${api}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
        // console.log(result.daily);
      });
  }

  function displayDailyData() {
    let elements;
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data) {
      const timezone = data.timezone;
      const localDate = new Date();

      console.log(data.daily);
      elements = data.daily.map((element) => {
        // used to convert to local time zone
        const ms = new Date(element.dt * 1000);
        localDate.setTime(ms);
        const timezoneShifted = localDate.toLocaleString();
        const forecastedWeather = element.weather[0].main;
        let describeWeather = element.weather[0].description;

        return (
          <div
            key={element.weather[0].id}
            className="left-align standard-spacing"
          >
            {daysOfWeek[localDate.getDay()]} (
            {localDate.toLocaleDateString("en-UK")})
            <p>Forecasted: {forecastedWeather}</p>
            <p>
              Description:{" "}
              {describeWeather[0].toUpperCase() + describeWeather.slice(1)}
            </p>
          </div>
        );
      });
    }

    console.log(elements);
    return elements;
  }

  return <section className="app">{displayDailyData()}</section>;
}

export { Weather };
