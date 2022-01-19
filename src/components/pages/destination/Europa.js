import React from "react";

const Europa = () => {
  return (
    <div className="planet-container">
      <p className="planet_description">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface,
        it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
      </p>

      <div className="planet_distance">
        <div>
          <p className="planet_distance-title">AVG. DISTANCE</p>
          <p className="planet-distance-description">628 MIL. km</p>
        </div>
        <div>
          <p className="planet_distance-title">Est. travel time</p>
          <p className="planet-distance-description">3 years</p>
        </div>
      </div>
    </div>
  );
};

export default Europa;
