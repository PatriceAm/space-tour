// import {Link} from "react-router-dom";
import {useState} from "react";

import "./Destination.css";
import Navigation from "../../components/Navigation/Navigation";
import DestCard from "./DestCard";
import DestNav from "./DestNav";

const Destination = ({destination}) => {
  const manyDest = destination.map((de) => de.name);
  const [selected, setSelected] = useState(destination[0]);
  const [ini, setIni] = useState(destination[0].name);

  const selectNew = (sel) => {
    const selNew = destination.find(
      (se) => se.name.toLowerCase() === sel.toLowerCase()
    );
    setSelected(selNew);
    if (ini !== null) {
      setIni(null);
    }
  };
  const fDest = selected;
  if (!fDest) return;
  const planet = selected.images.png;

  return (
    <div className="destination_container">
      <Navigation />
      <div className="destination_content">
        <div className="destination_left">
          <div className="destination_title">
            <span>01</span> PICK YOUR DESTINATION
          </div>
          <div className="destination_picture">
            <img src={planet} />
          </div>
        </div>

        <div className="destination_right">
          <DestNav manyDest={manyDest} selectNew={selectNew} ini={ini} />
          <DestCard dest={selected} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
