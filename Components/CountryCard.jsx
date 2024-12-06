import React from "react";
import { Link } from "react-router-dom";
function CountryCard({ name, flag, population, region, capital }) {
  return (
    <Link className="country-card" to={`/${name}`}>
      <img src={flag} alt={name + flag} />
      <div className="card-text">
        <h3 className="card-tittle">{name}</h3>
        <p>
          <strong>Population: </strong>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
