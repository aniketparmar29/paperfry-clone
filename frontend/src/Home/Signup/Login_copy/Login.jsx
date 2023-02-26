import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import style from "./Login.module.css"

const Login = () => {

    const [value,setValue]=useState({
        email:"",
        password:""
    })
    const [errorMsg,setErrormsg]=useState("");
    const navigate=useNavigate();

    const handlesingin=()=>{
      if( !value.email || !value.password){
         setErrormsg("Please fill all the fields");
         return;
      }
      setErrormsg("");
      signInWithEmailAndPassword(auth,value.email,value.password)
        .then((res)=>{
        navigate("/")
      }).catch((error)=>{
          setErrormsg(error.message)
      })
      setValue({
       
        email:"",
        password:""
    })
    }

  return (
    <div className={style.container}>
     
    <div className={style.signupMainDiv}>
        <h1>Login</h1>
        <input value={value.email}  type="email" placeholder='Enter email' 
        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}
        />
        <input value={value.password}  type="password" placeholder='Enter password' 
        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        <br/>
        <b>{errorMsg}</b>
        <br/>
        <br/>
       
        <button onClick={handlesingin}>Login</button>
        
        <p>
            If you don't have an account ?
            <Link to="/signup" className={style.alreadyAccText}>
              Signup
            </Link>
        </p>
    </div>
  </div>
  )
}

export default Login