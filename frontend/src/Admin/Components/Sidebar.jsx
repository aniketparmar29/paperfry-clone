import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import { Flex, Image } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import adminHome from "../Images/home.png";
import product from "../Images/products.png";
import order from "../Images/order.png";
import customer from "../Images/user.png";
import gift from "../Images/gift.png";
import discount from "../Images/discount.png";
import pricing from "../Images/pricing.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Link id="sidebar_logo" to="/admin">
        <img src={logo} alt="" />
      </Link>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={adminHome} alt="" />
        <Link className="sidebar_link" to="/admin">
          Admin Home
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={product} alt="" />
        <Link className="sidebar_link" to="/admin/product">
          Product
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={order} alt="" />
        <Link className="sidebar_link" to="/admin/order">
          Order
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={customer} alt="" />
        <Link className="sidebar_link" to="/admin/Customet">
          Customer
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={discount} alt="" />
        <Link className="sidebar_link" to="/admin/discount">
          Discount
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={gift} alt="" />
        <Link className="sidebar_link" to="/admin/giftcard">
          Gift Cards
        </Link>
      </Flex>

      <Flex className="sidebar_flex">
        <Image className="sidebar_icon" src={pricing} alt="" />
        <Link className="sidebar_link" to="/admin/pricing">
          Pricing
        </Link>
      </Flex>
    </div>
  );
};

export default Sidebar;
