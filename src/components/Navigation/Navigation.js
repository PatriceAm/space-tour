import {Link, NavLink} from "react-router-dom";

import "./Navigation.css";
import logo from "../../assets/shared/logo.svg";

const Navigation = () => {
  return (
    <div className="nav">
      <Link id="icon" to="/home">
        <img src={logo} alt="logo" className="nav-icon" />
      </Link>
      <div className="nav_line"></div>
      <div className="nav-menu">
        <div>
          <NavLink to="/home">
            <span>00</span> HOME
          </NavLink>
        </div>
        <div>
          <NavLink to="/destination">
            <span>01</span> DESTINATION
          </NavLink>
        </div>
        <div>
          <NavLink to="/crew">
            <span>02</span> CREW
          </NavLink>
        </div>
        <div>
          <NavLink to="/technology">
            <span>03</span> TECHNOLOGY
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
