import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Confirmation from "./Components/Confirmation";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Order />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    </>
  );
};

export default App;
