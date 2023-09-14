import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Offtop = () => {
  const [range, setRange] = useState(0);

  const create = async () => {
    const {data} = await axios.get("http://localhost:8080/user");
  };
  useEffect(() => {
    create()
  }, [])
  return (
    <div className="Offtop">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button>save</button>
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
