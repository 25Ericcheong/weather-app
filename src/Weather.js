import "./style.css";
import React, { useState, useEffect } from "react";

function Weather() {
  let exclude = `minutely,alerts`;
  let api = `531f0a25aceba4d83247acab2d0f7b6c`;

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState([]);
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
        setContent(result);
        console.log(result);
        console.log(result.daily);
      });
  }

  return <section className="app"></section>;
}

export { Weather };
