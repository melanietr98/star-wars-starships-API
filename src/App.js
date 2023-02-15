import { useEffect, useState } from "react";
import "./App.css";
import { getStarShip } from "./sw-api";

function App() {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    fetchStarShips();
  }, []);

  async function fetchStarShips() {
    const url = "https://swapi.dev/api/starships";
    const data = await getStarShip(url);
    console.log(data);
    console.log(data.results);
    const starShipCards = data.results.map((item, index) => (
      <div className="card" key={index}>
        <h2>{item.name}</h2>
        <p>Model: {item.model}</p>
        <p>Manufacturer: {item.manufacturer}</p>
        <p>Cost: {item.cost_in_credits} credits</p>
        <p>Length: {item.length} meters</p>
      </div>
    ));
    setStarShips(starShipCards);
  }

  return (
    <div className="App">
      <div className="title-bar">
        <h1>Star Wars Warships</h1>
      </div>
      <div className="card-container">{starShips}</div>
    </div>
  );
}

export default App;
