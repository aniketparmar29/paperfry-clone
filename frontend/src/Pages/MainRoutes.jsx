import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminMainRoute from "../Admin/Pages/AdminMainRoute";
function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <AdminMainRoute />
    </div>
  );
}

export default MainRoutes;
