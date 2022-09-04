import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((i) =>
    i.name.common.toLowerCase().includes(country.toLowerCase())
  );

  return (
    <div>
      <Filter filter={country} setFilter={setCountry} text={"Find countries"} />
      {countriesToShow.length > 10 ? (
        <div>Too many matches specify another filter</div>
      ) : (
        <div>
          {countriesToShow.length === 1 ? (
            <Countries countriesToShow={countriesToShow} />
          ) : (
            <div>
              {countriesToShow.map((c) => {
                return (
                  <div key={c.name.common}>
                    <Button item={c} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
