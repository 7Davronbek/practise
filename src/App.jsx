import React from "react";
import { Route, Routes } from "react-router-dom";
import Repatcha from "./pages/Repatcha";
import FetchData from "./componets/FetchData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FetchData />} />
      </Routes>
    </>
  );
};

export default App;
