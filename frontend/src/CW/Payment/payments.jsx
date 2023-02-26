import React, { useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const otpSend = () => {
   
    if (userName === "" || number === "" || cvv === "" || expiry === "") {
      toast({
        title: `Please fill all the information.`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `OTP will be received on your registered mobile No.`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      
      alert("OTP will be received on your registered mobile No.");
      navigate("/OTP");
      
    }
  };

  return (
    <Box className="backgroundColorPayment">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Payment Details</h2>
        </Box>
        <label>Card Holder's Name</label>
        <input
          type="text"
          placeholder="Enter card holder's name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Card Number</label>
        <input
          type="password"
          placeholder="Enter your card number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <label>CVV</label>
        <input
          type="password"
          placeholder="Enter your CVV"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          required
        />
        <label>Expiry date</label>
        <input
          type="date"
          placeholder="Enter card expiry date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <button className="checkoutBtn" onClick={otpSend}>
          Submit
        </button>
      </Box>
    </Box>
  );
};

export default Payments;