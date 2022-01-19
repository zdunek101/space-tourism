import React from "react";

const Moon = () => {
  return (
    <div className="planet-container">
      <p className="planet_description">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come
        back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
      </p>

      <div className="planet_distance">
        <div>
          <p className="planet_distance-title">AVG. DISTANCE</p>
          <p className="planet-distance-description">384,400 km</p>
        </div>
        <div>
          <p className="planet_distance-title">Est. travel time</p>
          <p className="planet-distance-description">3 days</p>
        </div>
      </div>
    </div>
  );
};

export default Moon;
