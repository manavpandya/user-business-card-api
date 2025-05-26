import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setData(data));
  });

  return (
    <div className="App">
      <h1>User Business Cards</h1>
      <BusinessCard userData={data} />
    </div>
  );
}
