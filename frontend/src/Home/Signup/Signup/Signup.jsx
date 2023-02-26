import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import style from "./Signup.module.css";

const Signup = () => {
    const [value,setValue]=useState({
        name:"",
        email:"",
        password:""
    })
    const [errorMsg,setErrormsg]=useState("");
    const navigate=useNavigate();

    const handlesingup=()=>{
      if(!value.name || !value.email || !value.password){
         setErrormsg("Please fill all the fields");
         return;
      }
      setErrormsg("");
      createUserWithEmailAndPassword(auth,value.email,value.password)
        .then(async (res)=>{
        const user=res.user;
        await updateProfile(user,{displayName:value.name})
        // navigate("/login")
      }).catch((error)=>{
          setErrormsg(error.message)
      })
      
      setValue({
        name:"",
        email:"",
        password:""
    })
    }
  return (
    <div className={style.container}>
       {/* <Link to="/">
           <img className={style.siteLogo} src={logo} alt="logo" />
       </Link> */}
    <div className={style.signupMainDiv}>
        <h1>Sign Up</h1>
        <input value={value.name} type="text" placeholder='Enter name' 
         
        onChange={(e)=>setValue((prev)=>({...prev,name:e.target.value}))}/>
        <br />

        <input value={value.email} type="email" placeholder='Enter email' 

        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}/>
        <br />

        <input value={value.password} type="password" placeholder='Enter password' 

        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        <br />
          <b>
          {errorMsg}
          </b>
         <br />
         <br />
        <button onClick={handlesingup}>Signup</button>
        <p >
            Already have an account ? 
            <Link to="/login" className={style.alreadyAccText}> Login</Link>
        </p>
    </div>
    </div>
  )
}

export default Signup;