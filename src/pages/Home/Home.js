import {Link} from "react-router-dom";

import "./Home.css";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <div className="home-content">
        <div className="home-left">
          <p className="home-left-title">SO, YOU WANT TO TRAVEL TO</p>
          <p className="home-left-main">SPACE</p>
          <p className="home-left-text">
            Let’s face it; if you want to go to space, you might as well <br />
            genuinely go to outer space and not hover kind of on the <br />
            edge of it. Well sit back, and relax because we’ll give you a <br />
            truly out of this world experience!
          </p>
        </div>
        <div className="home-right">
          <Link to="/destination">EXPLORE</Link>
        </div>
      </div>
      <p className="home-footer">Coded by @PatriceAm 2022</p>
    </div>
  );
};

export default Home;
