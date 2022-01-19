import React, { useState, useEffect } from "react";
import { Outlet, NavLink as Link, useLocation } from "react-router-dom";
// import Europa from "./destination/Europa";
// import Titan from "./destination/Titan";
// import Moon from "./destination/Moon";
// import Mars from "./destination/Mars";

import "../css/Destination.scss";

const Destination = () => {
  const [planet, setPlanet] = useState("moon");
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/destination/") {
      setPlanet("moon");
    } else if (location === "/destination/europa") {
      setPlanet("europa");
    } else if (location === "/destination/mars") {
      setPlanet("mars");
    } else if (location === "/destination/titan") {
      setPlanet("titan");
    }
  }, [location]);

  return (
    <>
      <div className="destination_container">
        <div className="destination_section-one">
          <h3 className="destination_title">
            <span>01</span> PICK YOUR DESTINATION
          </h3>
          <img
            className="destination_img"
            src={require(`../image/destination/image-${planet}.png`)}
            alt={`${planet} planet`}
          />
        </div>
        <div className="destination_section-two">
          <nav className="destination_navigation">
            <ul>
              <li>
                <Link to="./" className="destination_links" activeClassName="active" end>
                  Moon
                </Link>
              </li>
              <li>
                <Link to="./mars" className="destination_links" activeClassName="active" end>
                  Mars
                </Link>
              </li>
              <li>
                <Link to="./europa" className="destination_links" activeClassName="active" end>
                  Europa
                </Link>
              </li>
              <li>
                <Link to="./titan" className="destination_links" activeClassName="active" end>
                  Titan
                </Link>
              </li>
            </ul>
          </nav>
          <h3 className="destination_planet">{planet}</h3>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Destination;
