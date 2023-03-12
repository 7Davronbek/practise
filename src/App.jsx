import React from "react";
import { Route, Routes } from "react-router-dom";
import Repatcha from "./pages/Repatcha";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Repatcha />} />
      </Routes>
    </>
  );
};

export default App;
