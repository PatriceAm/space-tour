import {useState} from "react";

import "./Crew.css";
import Navigation from "../../components/Navigation/Navigation";
import ContentTitle from "../../components/contentTitle/ContentTitle";
import CrewCard from "./CrewCard";
import Dots from "./Dots";

const Crew = ({crew}) => {
  const [crewMember, setCrewMember] = useState(crew[0]);
  const [ini, setIni] = useState(crew[0].name);
  const count = "02";
  const text = "Meet your crew";

  const setCrew = (ind) => {
    setCrewMember(crew[ind]);
    if (ini !== null) {
      setIni(null);
    }
  };

  return (
    <div className="crew_container">
      <Navigation />
      <div className="crew_container_content">
        <div className="crew_left">
          <ContentTitle count={count} text={text} />
          <CrewCard crewMember={crewMember} />
          <Dots setCrew={setCrew} ini={ini} />
        </div>
        <div className="crew_image">
          <img src={crewMember.images.png}></img>
        </div>
      </div>
    </div>
  );
};

export default Crew;
