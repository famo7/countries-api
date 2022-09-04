import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const Button = ({ item }) => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${item.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        const data = response.data;
        setIcon(data.weather[0].icon);
        setTemp(data.main.temp);
        setWind(data.wind.speed);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {!show && item.name.common}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && (
        <div>
          <Country country={item} />
          <p>temperature: {temp}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={item.name.common}
          />
          <p>wind: {wind}</p>
        </div>
      )}
    </div>
  );
};

export default Button;
