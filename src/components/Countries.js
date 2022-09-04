import React from "react";
import Country from "./Country";

const Countries = ({ countriesToShow }) => {
  return (
    <div>
      {Object.keys(countriesToShow).map((key) => (
        <Country key={key} country={countriesToShow[key]} />
      ))}
    </div>
  );
};

export default Countries;
