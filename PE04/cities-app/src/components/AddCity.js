import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !country || !population) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Added City:", { name, country, population });

    // 模擬存儲後，2秒後重定向
    setTimeout(() => {
      navigate("/cities");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add City</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Country:
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>

          <label>
            Population:
            <input
              type="number"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              required
            />
          </label>

          <button type="submit">Add City</button>
        </form>
      </div>
    </div>
  );
}

export default AddCity;