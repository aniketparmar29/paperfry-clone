import React from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/payment.css";
import { useState } from "react";

const Checkout = () => {
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckOut = () => {
    if (
      userName === "" ||
      address === "" ||
      number === "" ||
      state === "" ||
      pincode === ""
    ) {
      toast({
        title: `Please fill all the information.`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `Address Registered Successfully`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      navigate("/payments");
    }
  };
  return (
    <Box className="backgroundColor">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Delivery Address</h2>
        </Box>
        <label>UserName</label>
        <input
          type="text"
          placeholder="Enter full username"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Address with City</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Contact Number</label>
        <input
          type="Number"
          placeholder="Enter your mobile number"
          value={number}
          required
          onChange={(e) => setNumber(e.target.value)}
        />

        <label>State</label>
        <input
          type="text"
          placeholder="Enter your state"
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        />

        <label>Pincode</label>
        <input
          type="Number"
          placeholder="Enter your area pincode"
          value={pincode}
          required
          onChange={(e) => setPincode(e.target.value)}
        />

        <button className="checkoutBtn" onClick={handleCheckOut}>
          Submit
        </button>
      </Box>
    </Box>
  );
};

export default Checkout;