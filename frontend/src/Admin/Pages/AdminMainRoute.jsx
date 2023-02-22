import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Admin from "./Admin";
import Customer from "./Customer";
import Discount from "./Discount";
import GiftCard from "./GiftCard";
import Login from "./Login";
import Order from "./Order";
import Pricing from "./Pricing";
import Product from "./Product";
import Signup from "./Signup";

const AdminMainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/admin/product"} element={<Product />} />
        <Route path={"/admin/order"} element={<Order />} />
        <Route path={"/admin/customet"} element={<Customer />} />
        <Route path={"/admin/signup"} element={<Signup />} />
        <Route path={"/admin/login"} element={<Login />} />
        <Route path={"/admin/discount"} element={<Discount />} />
        <Route path={"/admin/giftcard"} element={<GiftCard />} />
        <Route path={"/admin/pricing"} element={<Pricing />} />
        <Route path={"/admin/addproduct"} element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default AdminMainRoute;
