import React, { useState, useEffect } from "react";
import "../css/Crew.scss";
import { Outlet, NavLink as Link, useLocation } from "react-router-dom";

const Crew = () => {
  const [crew, setCrew] = useState("image-douglas-hurley");
  const [imgAlt, setImgAlt] = useState("Commander Douglas Hurley");
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/crew/") {
      setCrew("image-douglas-hurley");
      setImgAlt("Commander Douglas Hurley");
    } else if (location === "/crew/specialist") {
      setCrew("image-mark-shuttleworth");
      setImgAlt("Mission Specialist Mark Shuttleworth");
    } else if (location === "/crew/pilot") {
      setCrew("image-victor-glover");
      setImgAlt("Pilot Victor Glover");
    } else if (location === "/crew/engineer") {
      setCrew("image-anousheh-ansari");

      setImgAlt("Flight Engineer Anousheh Ansari");
    }
  }, [location]);

  return (
    <>
      <h3 className="crew_title">
        <span>02</span>Meet your crew
      </h3>
      <div className="crew_container">
        <div className="crew_section-one">
          <img src={require(`../image/crew/${crew}.png`)} alt={`${imgAlt}`} className="crew_img" />
        </div>

        <div className="crew_section-two">
          <nav className="crew_navigation">
            <ul>
              <li>
                <Link to="./" className="crew_link" activeClassName="active" end></Link>
              </li>
              <li>
                <Link to="./specialist" className="crew_link" activeClassName="active" end></Link>
              </li>
              <li>
                <Link to="./pilot" className="crew_link" activeClassName="active" end></Link>
              </li>
              <li>
                <Link to="./engineer" className="crew_link" activeClassName="active" end></Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Crew;
