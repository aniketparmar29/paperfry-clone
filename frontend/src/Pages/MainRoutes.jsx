import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Home from "./Home";
import AdminMainRoute from "../Admin/Pages/AdminMainRoute";
import Pagenotfound from "./PagenotFound";
function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      <AdminMainRoute />
    </div>
  );
}

export default MainRoutes;
