import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Home from "./Home";
import AddProduct from "../Admin/Pages/AddProduct";
import Admin from "../Admin/Pages/Admin";
import Customer from "../Admin/Pages/Customer";
import Discount from "../Admin/Pages/Discount";
import GiftCard from "../Admin/Pages/GiftCard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Order from "../Admin/Pages/Order";
import Pricing from "../Admin/Pages/Pricing";
import Product from "../Admin/Pages/Product";
// import Signup from "../Admin/Pages/Signup";
import Pagenotfound from "./PagenotFound";
import SingleProduct from './SingleProduct'
import EditProduct from '../Admin/Pages/EditProduct';
import ProductCart from '../CW/pages/productCart'
function MainRoutes() {
  return (
    <div>
      {/* <AdminMainRoute /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/product/:query" element={<ProductPage />} />
        <Route path="/product/op/:id" element={<SingleProduct />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/admin/product"} element={<Product />} />
        <Route path={"/admin/order"} element={<Order />} />
        <Route path={"/admin/customet"} element={<Customer />} />
        {/* <Route path={"/admin/signup"} element={<Signup />} /> */}
        <Route path={"/admin/login"} element={<Login />} />
        <Route path={"/admin/discount"} element={<Discount />} />
        <Route path={"/admin/giftcard"} element={<GiftCard />} />
        <Route path={"/admin/pricing"} element={<Pricing />} />
        <Route path="/admin/editproduct/:id" element={<EditProduct />} />
        <Route path={"/admin/addproduct"} element={<AddProduct />} />
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/cart" element={<ProductCart/>}></Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
