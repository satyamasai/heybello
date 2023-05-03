import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signup from "./SignupandLogin/Signup";
import Login from "./SignupandLogin/Login";
import BrandProduct from "./BrandProduct/BrandProduct";
import SingleProduct from "./Products/SingleProduct";
import ProductSubpage from "./Subpages/ProductSubpage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/specificbrand/:brandname" element={<BrandProduct />} />
      <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path="/product/:productname" element={<ProductSubpage/>} />
     
    </Routes>
  );
};

export default AllRoutes;
