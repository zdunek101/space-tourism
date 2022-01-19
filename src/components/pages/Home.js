import React from "react";
import "../css/Home.scss";
import { Routes, Route, Outlet, NavLink as Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_container-text">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h2>SPACE</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className="home_btn">
          <Link to="/destination">
            <p>EXPLORE</p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
