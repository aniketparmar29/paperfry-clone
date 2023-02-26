import React, { useEffect, useState } from "react";
import { FormLabel, Input, Button, Box } from "@chakra-ui/react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { usersignup } from "../../Redux/userAuth/user.actions";
import {useDispatch, useSelector} from 'react-redux'
export const Signup = () => {
  const dispatch = useDispatch()
  const {isAuth,register_loading,register_success} = useSelector(val=>val.userAuth)
  const nav = useNavigate()
  const [loginData, setLoginData] = useState({name:"",email:"", phone:"",password:""})
  const handleOnchange = (e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    let user = {...loginData,city:"",cart:[],wishlist:[],orders:[]}
    dispatch(usersignup(user))
    setLoginData({name:"",email:"", phone:"",password:""})
  }
  useEffect(()=>{
    register_success&&alert("registeraiton success, Go to login");
  },[register_success,nav])
  useEffect(() => {
    if(isAuth){
      nav("/")
    }
  }, [isAuth, nav])
  
  return (
    <>
      <div
        className={`h-screen w-screen pt-10 bg-[url('https://user-images.githubusercontent.com/80110392/221399249-35ad0ec7-a7b3-4bf2-af4b-08ccc7fe287b.png')] bg-center bg-no-repeat bg-cover text-white`}
      >
        <div className={styles.maindiv}>
          <div className={styles.div1}>
            <Link to={"/"} >Home</Link>
            <img className={styles.img} src="/fur2.png" alt="hi" />
          </div>
          <div className={styles.div2}>
            <form className={styles.form} onSubmit={handleLogin}>
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  required={true}
                  className={styles.input_field}
                  type="text"
                  name='name'
                  value={loginData.name}
                  onChange={handleOnchange}
                />
              </Box>
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
              <Box>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input
                  required={true}
                  className={styles.input_field}
                  type="number"
                  name='phone'
                  value={loginData.phone}
                  onChange={handleOnchange}
                />
              </Box>
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
              <div className="text-center mt-10">
                <Button className={styles.button} type="submit" isLoading={register_loading}  >
                  Signup
                </Button>
                <br />
                <br />
                <br />
                <p>Already have account? <Link to='/login' className="text-blue-500 underline font-semibold" >Login here</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
