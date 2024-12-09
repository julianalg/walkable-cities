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
              By switching to walkable cities, cities reduce their emissions
              from car-related transport, which can help drastically reduce the
              climate footprint of a region.
            </strong>{" "}
            According to America Walks, which cites a report from the
            Intergovernmental Panel on Climate Change, cities can reduce their
            transport-related fuel consumption through more combinations of
            compact land use and the less car-dependent infrastructure
            encouraging individuals to walk or bike (Spielmaker). By emphasizing walkability,
            cities can open up alternative forms of transportation like walking,
            which can be cheaper and more convenient for citizens, as well as
            cleaner for the environment as opposed to cars. By shifting to
            walkable cities, cities can cut down on its largest part of its
            emissions while also having additional benefits, such as increased
            business for local economies and improved health for citizens.
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