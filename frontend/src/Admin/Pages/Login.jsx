import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Admin/Login/action";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import logo from "../Images/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleLoginInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if ((user.email, user.password)) {
      dispatch(userLogin(user));
    } else {
      alert("Please Fill all the Details");
    }
  };

  return (
    <div id="form">
      <Flex onClick={() => navigate("/admin/product")} cursor="pointer">
        <button>
          <AiOutlineArrowLeft />
        </button>
        <Text>Back to Product page</Text>
      </Flex>
      <div id="form_logo">
        <img src={logo} alt="" width={"70%"} />
        <h2>Add Product</h2>
      </div>
      <form onSubmit={handleAdminLogin} id="product_form">
        <label>Email</label>
        <input
          className="form_input"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleLoginInput}
        />
        <label>Password</label>
        <input
          className="form_input"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleLoginInput}
        />
        <input type="submit" value="Login" id="form_button" />
      </form>
    </div>
  );
};

export default Login;
