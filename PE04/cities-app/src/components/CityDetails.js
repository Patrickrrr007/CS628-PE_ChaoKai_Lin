import { useParams } from "react-router-dom";

const citiesData = {
  1: { name: "Seattle", country: "USA", population: "733,919" },
};

function CityDetails() {
  let { id } = useParams();
  const city = citiesData[id];

  if (!city) return <h2>City not found</h2>;

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

export default CityDetails;