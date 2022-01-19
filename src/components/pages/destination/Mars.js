import React from "react";

const Mars = () => {
  return (
    <div className="planet-container">
      <p className="planet_description">
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain
        in our solar system. It’s two and a half times the size of Everest!
      </p>
      <div className="planet_distance">
        <div>
          <p className="planet_distance-title">AVG. DISTANCE</p>
          <p className="planet-distance-description">225 MIL. km</p>
        </div>
        <div>
          <p className="planet_distance-title">Est. travel time</p>
          <p className="planet-distance-description">9 months</p>
        </div>
      </div>
    </div>
  );
};

export default Mars;
