import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <p className="intro-paragraph">
          In the search of solutions to solve the impeding problem of climate
          change, we get a chance to reconsider current systems and find ways to
          improve them in addition to helping solve the climate problem. In the
          status quo, the typical citizen has to rely on cars to get from point A
          to B, which, on top of causing pollution, can be expensive and
          inefficient. Walkable cities offer an alternative in a city system
          built around humans and walking, ultimately helping eliminate car-based
          emissions and improve the quality of life of thousands of citizens.
        </p>
        <p className="intro-highlight">
          <strong>
            Despite the resource-intensive nature of creating walkable cities,
            their development is still a vital strategy to combat climate change
            by reducing car-related emissions, promoting cleaner transportation
            options like walking and public transit, and fostering healthier,
            more connected communities.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Intro;