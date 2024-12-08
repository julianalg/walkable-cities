import React from "react";
import "./Point2.css";

const Point2 = () => {
  return (
    <div className="point2-container">
      <div className="point2-content">
        <div className="point2-header">
          <div className="point2-number">2</div>
          <h2>Cleaner Transportation</h2>
        </div>
        <div className="point2-body">
          <p>
            <strong>
              By switching to walkable cities, cities can develop and prioritize
              cleaner forms of transportation.
            </strong>{" "}
            According to The Climate Reality Project, transportation accounts
            for 29% of greenhouse gases, 58% of which is from light-duty
            vehicles such as cars that typical Americans use for their daily
            routines. Cars are also cited to cost the common American over
            $9,500 a year, an amount that can become overwhelming especially for
            lower-income families. Walkable cities reduce the reliance for
            people to utilize cars, allowing them to use alternative forms of
            transport. In addition to walking, cities can invest in public
            transit systems such as buses, subways and trains, which can be more
            efficient and cleaner for the environment. With the increased
            emphasis on walking and public transport, cities can introduce a
            better form of transportation for their citizens that is more
            convenient, efficient, cheaper and ultimately helps solve the
            climate change.
          </p>
        </div>
      </div>
      <div className="point2-image">
        <img
          src="Point2.jpg" /* Replace with the path to your image */
          alt="Public transit construction"
        />
      </div>
    </div>
  );
};

export default Point2;