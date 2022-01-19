import React from "react";

const Titan = () => {
  return (
    <div className="planet-container">
      <p className="planet_description">
        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few
        hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
      </p>

      <div className="planet_distance">
        <div>
          <p className="planet_distance-title">AVG. DISTANCE</p>
          <p className="planet-distance-description">1.6 BIL. km</p>
        </div>
        <div>
          <p className="planet_distance-title">Est. travel time</p>
          <p className="planet-distance-description">7 years</p>
        </div>
      </div>
    </div>
  );
};

export default Titan;
