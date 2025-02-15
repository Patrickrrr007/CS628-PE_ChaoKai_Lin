import { Link } from "react-router-dom";
import { useState } from "react";

function CitiesList() {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "733,919" },
  ]);

  return (
    <div>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;