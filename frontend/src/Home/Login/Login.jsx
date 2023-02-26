import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/form.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/Login/action";

function Login(props) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
   const [isAuthenticate, setisAuthenticated] = React.useState(false);

  const getData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend-mhwg.onrender.com/api/v1/user/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if (data.success) {
            alert("Login successful");
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
    ""
  ) : (
    <div>
      <form action="">
        <label htmlFor="">Email ID/Number</label>
        <br />
        <input
          type="text"
          className="form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="Password"
          className="form"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Link to={"/"}>
          <button className="reg" onClick={() => getData()}>
            LOG IN
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
