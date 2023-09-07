import React from "react";
import { useState } from "react";

const Offtop = () => {
  const [range, setRange] = useState(0);
  return (
    <div className="Offtop">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              min={0}
              max={10}
              value={range}
              onChange={(e) => setRange(e.target.value)}
              type="range"
              name=""
              id=""
            />
            {range}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offtop;
