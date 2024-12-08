import React from "react";
import "./Point3.css";

const Point3 = () => {
  return (
    <div className="point3-container">
      <div className="point3-content">
        <div className="point3-header">
          <div className="point3-number">3</div>
          <h2>Healthier, Connected Communities</h2>
        </div>
        <div className="point3-body">
          <p>
            <strong>
              In addition to their numerous climate benefits, walkable cities
              have been proven to improve the communities of those who inhabit
              it by making them more connected and healthy.
            </strong>{" "}
            According to the Congress for the New Urbanism, walkable cities help
            improve mental health, foster social interactions and reduce health
            conditions like obesity. By investing in walkable city
            infrastructure, cities also help build a more coherent community, as
            more people walk by each other, raising the chances for interaction.
            In addition, as walkable cities prioritize walking as the primary
            form of transportation, citizens are able to have greater physical
            activity and exercise as they go about their normal day. On top of
            the benefits for helping improve the climate, walkable cities also
            help improve both the physical and mental health of citizens,
            especially during a period where many are facing difficulties with
            depression, loneliness and reduced physical activity.
          </p>
        </div>
      </div>
      <div className="point3-image">
        <img
          src="Point3.jpg" /* Replace with the path to your image */
          alt="Healthy communities in walkable cities"
        />
      </div>
    </div>
  );
};

export default Point3;