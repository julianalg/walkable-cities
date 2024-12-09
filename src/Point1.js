import React from "react";
import "./Point1.css";

const Point1 = () => {
  return (
    <div className="point1-container">
      <div className="point1-content">
        <div className="point1-header">
          <div className="point1-number">1</div>
          <h2>Reducing Car-Related Emissions</h2>
        </div>
        <div className="point1-body">
          <p>
            <strong>
              By transitioning to walkable cities, urban areas can significantly reduce their greenhouse gas emisisons from car-related transportation, thereofre lessening their overall climate footprint. 
            </strong>{" "}
            In a report cited by America Walks based on findings from the Intergovernmental Panel on Cliamte Change, cities can achieve substaintial reductions in fuel consumptions by implementing compact land-use policies and infrastructure designed to prioitize walking and biking (Spielmaker). Emphasizing walkability not only reduces the reliance on cars but also promotes alternative forms of transportation like walking and biking which are both cost-effective and environmentally friendly as opposed to cars. Besides reducing emissions, walkable cities offer other advantages such as stimulating local economies through increased foot traffic and improving public health by encouraging physical activity. This shift in urban design allows cities to address their largest source of emissions while fostering a more sustainable and livable environment for residents. 
          </p>
        </div>
      </div>
      <div className="point1-image">
        <img
          src="Point1.jpg" /* Replace with the path to your image */
          alt="Walkable city"
        />
      </div>
    </div>
  );
};

export default Point1;