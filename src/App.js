import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";

import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

import jsonData from "./data.json";
import "./App.css";

const App = () => {
  const [destination, setDestination] = useState([]);
  const [crew, setCrew] = useState([]);
  const [tech, setTech] = useState([]);
  // console.log("from APP: ", jsonData.technology);
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
          element={<Destination destination={destination} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crew" element={<Crew crew={crew} />} />
        <Route path="/technology" element={<Technology tech={tech} />} />
      </Routes>

      {/* <div><Home /></div> */}
    </div>
  );
};

export default App;
