import {Link} from "react-router-dom";
import {useState} from "react";

import "./Home.css";
import Navigation from "../../components/Navigation/Navigation";
import video from "../../assets/vids/space_ship.mp4";
import {useEffect} from "react";

const Home = () => {
  const [play, setPlay] = useState(true);
  const [statiq, setStatiq] = useState("home-container");

  useEffect(() => {
    setTimeout(() => {
      setPlay(false);
    }, 40000);
  }, []);

  useEffect(() => {
    if (!play) {
      setStatiq("home-container home-container-static");
    }
  }, [play]);

  return (
    <div className={statiq}>
      <Navigation />
      <div className="home-content">
        <div className="home-left">
          <p className="home-left-title">SO, YOU WANT TO TRAVEL TO</p>
          <p className="home-left-main">SPACE</p>
          <p className="home-left-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-right">
          <Link to="/destination">EXPLORE</Link>
        </div>
      </div>
      {play && (
        <video
          src={video}
          autoPlay={true}
          muted={true}
          loop
          id="myVideo"
        ></video>
      )}
      <p className="home-footer">Coded by @PatriceAm 2022</p>
    </div>
  );
};

export default Home;
