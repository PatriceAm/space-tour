import {useState} from "react";

import "./Technology.css";
import Navigation from "../../components/Navigation/Navigation";
import ContentTitle from "../../components/contentTitle/ContentTitle";
import TechCard from "./TechCard";
import Bullets from "./Bullets";

const Technology = ({tech}) => {
  const [techChoice, setTechChoice] = useState(tech[0]);
  const [ini, setIni] = useState(tech[0].name);
  const count = "03";
  const text = "Space launch 101 ";

  const setTech = (ind) => {
    setTechChoice(tech[ind]);
    if (ini !== null) {
      setIni(null);
    }
  };

  return (
    <div className="tech_container">
      <Navigation />
      <div className="tech_container_content">
        <div className="tech_left">
          <Bullets setTech={setTech} ini={ini} />
        </div>
        <div className="tech_mid">
          <ContentTitle count={count} text={text} />
          <TechCard techChoice={techChoice} />
        </div>
        <div className="tech_image">
          <img src={techChoice.images.portrait}></img>
        </div>
      </div>
    </div>
  );
};

export default Technology;
