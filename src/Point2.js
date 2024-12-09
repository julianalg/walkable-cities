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
              By transitioning to walkable cities, urban areas can prioritize and develop cleaner, more sustainable forms of transportation. 
            </strong>{" "}
            According to The Climate Reality Project, transportation accounts for 29% of greenhouse gas emissions, with 58% of these emissions originating from ligh-duty vehicles such as the cars many Americans rely on for daily commutes. Additionally, cars impose a significant financial burden, costing the average American over $9,500 annually, an amount that can be especially overwhelming for lower-income families (The Climate Reality Project). Walkable cities reduce dependence on cars, enabling residents to opt for alternative modes of transport. Beyond walking, cities can invest in efficient public transist sstems such as buses, subways and trains which are noto nly more enviornmentally friendly but also more cost-effective and accessible. By emphasizing walking and public transit, cities can introduce a transportation model that is more convenient, affordable, and efficient, while simultaneously addressing the urgent challebge of climate change. 
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