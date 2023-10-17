import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Offtop = () => {
  const [range, setRange] = useState(0);

  const create = async () => {
    const { data } = await axios.post(
      "http://localhost:8090/hall",
      {
        country: "Uzbekistan",
        region: "Chilonzori",
        city: "Tashkeni",
        buildingName: "Test halli",
        capacity: 200,
      },
      { headers: { ownerId: "dd1aa54b-418d-4041-a254-0bdaa01f8a8e" } }
    );
  };
  const getHalls = async () => {
    const { data } = await axios.get("localhost:8090/hall");
  };
  useEffect(() => {
    getHalls();
  }, []);
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
