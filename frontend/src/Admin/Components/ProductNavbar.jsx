import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";
import signup from "../Images/signup.png";
import login from "../Images/login.png";

const ProductNavbar = () => {
  return (
    <div>
      <Flex id="navbar">
        <Box id="navbar_select">
          <label>Select Category : </label>
          <select>
            <option value="">Select</option>
            <option value="Furniture">Furniture</option>
            <option value="HomeDecor">Home Decor</option>
            <option value="LampAndLighting">Lamp & Lighting</option>
            <option value="KitchenAndDining">Kitchen & Dining</option>
            <option value="Furnishing">Furnishing</option>
            <option value="Mattresses">Mattresses</option>
            <option value="Appliances">Appliances</option>
            <option value="Pets">Pets</option>
          </select>
        </Box>
        <Box id="add_product">
          <Link to={"/addproduct"}>
            <Button>
              <span id="plus">+</span> New Product
            </Button>
          </Link>
        </Box>
        <Flex id="navbar_auth">
          <Flex className="navbar_flex">
            <Image className="navbar_icon" src={signup} alt="" />
            <Link className="navbar_link" to="/admin/signup">
              Admin Signup
            </Link>
          </Flex>

          <Flex className="navbar_flex">
            <Image className="navbar_icon" src={login} alt="" />
            <Link className="navbar_link" to="/admin/login">
              Admin Login
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProductNavbar;
