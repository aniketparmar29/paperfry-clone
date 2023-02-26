import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../../style/form.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Login/action";
import axios from "axios";

export const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { error, loading, isAuthenticated } = useSelector(
  //   (state) => state.user
  // );


    const [isAuthenticate , setisAuthenticated] = useState(false)
 

    const [formData, setFormData] = useState({
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
    });

    const { name, mobileNumber, email, password } = formData;

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://backend-mhwg.onrender.com/api/v1/user/register", requestOptions)
        .then((response) => response.json())
        .then((data) =>{
                if (data) {
                  if (data.success) {
                    alert("Registration successful");
                    props.setTrig(false);
                    setisAuthenticated = true;
                  } else {
                    alert(data.message);
                  }
                }
        })
        .catch((error) => console.log("error", error));
    };





      return props.trig ? (
        <div className="full">
          <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input
              value={name}
              onChange={handleChange}
              type="text"
              className="form"
              name="name"
            />
            <br />
            <br />
            <br />
            <label htmlFor="number">Mobile Number</label>
            <br />
            <input
              value={mobileNumber}
              onChange={handleChange}
              type="number"
              name="mobileNumber"
              className="number"
            />
            <button className="btn-num">VERIFY WITH OTP</button>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="form"
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              value={password}
              onChange={handleChange}
              name="password"
              type="password"
              className="form"
            />
            <br />
            <br />

            <button className="reg" type="submit">
              REGISTER
            </button>
          </form>
          <br />
          <br />
        </div>
      ) : (
        ""
      );
};
