import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CitiesList from "./components/CitiesList";
import CityDetails from "./components/CityDetails";
import AddCity from "./components/AddCity";
import './App.css';
// import './CitiesList.css';
// import './CityDetails.css';
// import './AddCity.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Cities Application</h1>
        <nav>
          <a href="/cities">Cities List</a> | <a href="/add-city">Add City</a>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CitiesList />} />
          <Route path="/cities/:id" element={<CityDetails />} />
          <Route path="/add-city" element={<AddCity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;