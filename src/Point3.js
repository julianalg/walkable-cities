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
              In addition to their numerous environmental benefits, walkable cities have been shown to enhance community well-being by fostering stronger social connections and promoting better physical and mental health. 
            </strong>{" "}
            According to the Congress for the New Urbanism, walkable cities improve mental health, encourage social interactions and reduce health issues such as obesity (Steuteville). By investing in walkable infrastructure, cities can create environments where people naturally encounter one another, strengthing community bonds and fostering a sense of belonging. Furthermore, as walking becomes the primary mode of transportation, residents integrate physical activity into their daily routines, improving overall fitness and well-being. At a time when many individuals struggle with depression, loneliness, and decling physical activity, walkable cities offer a practical solution to both of these challenges. By addressing both climate change and public health, walkable cities emerge as a holistic approach to creating healtier and more connected communities.
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