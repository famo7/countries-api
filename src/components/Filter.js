import React from "react";

const Filter = ({ filter, setFilter, text }) => {
  return (
    <div>
      {text}:
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
    </div>
  );
};

export default Filter;
