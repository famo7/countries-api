import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <h5>Languages</h5>
      <ul>
        {Object.entries(country.languages).map((k) => {
          return <li key={k[1]}>{k[1]}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={""} />
    </div>
  );
};

export default Country;
