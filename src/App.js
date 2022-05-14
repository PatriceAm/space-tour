import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";

import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

import jsonData from "./data.json";

const App = () => {
  const [destination, setDestination] = useState([]);
  const [crew, setCrew] = useState([]);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    setDestination(jsonData.destinations);
    setCrew(jsonData.crew);
    setTech(jsonData.technology);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/destination"
          element={
            destination.length < 1 ? (
              <Home />
            ) : (
              <Destination destination={destination} />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/crew"
          element={crew.length < 1 ? <Home /> : <Crew crew={crew} />}
        />
        <Route
          path="/technology"
          element={tech.length < 1 ? <Home /> : <Technology tech={tech} />}
        />
      </Routes>
    </div>
  );
};

export default App;
