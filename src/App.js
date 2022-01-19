import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import { Routes, Route, Outlet, NavLink as Link, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import logo from "./components/image/shared/logo.svg";
import Europa from "./components/pages/destination/Europa";
import Titan from "./components/pages/destination/Titan";
import Moon from "./components/pages/destination/Moon";
import Mars from "./components/pages/destination/Mars";
import Commander from "./components/pages/crew/Commander";
import Engineer from "./components/pages/crew/Engineer";
import Pilot from "./components/pages/crew/Pilot";
import Specjalist from "./components/pages/crew/Specjalist";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination/" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<Commander />} />
            <Route path="specialist" element={<Specjalist />} />
            <Route path="pilot" element={<Pilot />} />
            <Route path="engineer" element={<Engineer />} />
          </Route>
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
};

const Layout = () => {
  const [status, setStatus] = useState("close");
  const [background, setBackground] = useState("home_background");
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setStatus("close");
  };

  useEffect(() => {
    if (status === "open") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [status]);

  const HandleClick = () => {
    setStatus(status === "close" ? "open" : "close");
  };
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      setBackground("home_background");
    } else if (location === "/destination") {
      setBackground("destination_background");
    } else if (location === "/crew") {
      setBackground("crew_background");
    } else if (location === "/technology") {
      setBackground("technology_background");
    }
  }, [location]);

  return (
    <>
      <div className={background}>
        <header className="App-header">
          <div className="navBar">
            <img className="logo" src={logo} alt="logo"></img>

            <div className={`menu_btn ${status}`} role="button" onClick={HandleClick}>
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
            <nav ref={node} className="navigation" id={`${status}`}>
              <ul>
                <li>
                  <Link to="/" className="nav_links" activeClassName="active" end>
                    <span className="nav_links-number">00</span>HOME
                  </Link>
                </li>
                <li>
                  <Link to="/destination" className="nav_links" activeClassName="active" end>
                    <span className="nav_links-number">01</span> DESTINATION
                  </Link>
                </li>
                <li>
                  <Link to="/crew" className="nav_links" activeClassName="active" end>
                    <span className="nav_links-number">02</span>CREW
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="nav_links" activeClassName="active" end>
                    <span className="nav_links-number">03</span>TECHNOLOGY
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default App;
