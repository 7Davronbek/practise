import React from "react";
import Spline from "@splinetool/react-spline";

const SplineDemo = () => {
  return (
    <div className="SplineDemo">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <Spline scene="https://prod.spline.design/CcY1PdwcEELz0kB0/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplineDemo;
