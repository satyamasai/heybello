import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signup from "./SignupandLogin/Signup";
import Login from "./SignupandLogin/Login";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     
    </Routes>
  );
};

export default AllRoutes;
