import React, { useState } from "react";
import { FormLabel, Input, Button, Box } from "@chakra-ui/react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/userAuth/user.actions";
import { useEffect } from "react";

export const Login = () => {
  const {isAuth,login_loading,login_error} = useSelector(val=>val.userAuth)
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({email:"",password:""})
  const handleOnchange = (e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const nav = useNavigate()
  useEffect(() => {
      if(isAuth){
        nav("/")
      }
    }, [isAuth, nav])
  useEffect(() => {
      if(login_error){
        alert("Invalid Credentials.")
      }
    }, [login_error])
  useEffect(() => {
      if(isAuth){
        nav("/")
      }
    }, [isAuth, nav])
  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(userLogin(loginData))
  }
  return (
    <>
      <div
        className={`h-screen w-screen pt-20 bg-[url('https://user-images.githubusercontent.com/80110392/221399249-35ad0ec7-a7b3-4bf2-af4b-08ccc7fe287b.png')] bg-center bg-no-repeat bg-cover text-white`}
      >
        <div className={styles.maindiv}>
          <div className={styles.div1}>
            <img className={styles.img} src="/fur2.png" alt="hi" />
          </div>
          <div className={styles.div2}>
            <form className={styles.form} onSubmit={handleLogin}>
              <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  required={true}
                  className={styles.input_field}
                  type="email"
                  name='email'
                  value={loginData.email}
                  onChange={handleOnchange}
                />
              </Box>
              <br />
              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  required={true}
                  className={styles.input_field}
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleOnchange}
                />
              </Box>

              <br />
              <br />
              <br />

              <div className="text-center">
                <Button className={styles.button} type="submit" isLoading={login_loading} >
                  Login
                </Button>
                <br />
                <br />
                <br />
                <p>Don't have account? <Link to='/signup' className="text-blue-500 underline font-semibold" >Register here</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
