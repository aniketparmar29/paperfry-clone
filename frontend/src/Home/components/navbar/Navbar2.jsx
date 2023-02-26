import React from 'react'
import img from "../../imgNav1/woodenfry2.png"
import styles from "./Navbar2.module.css"
import { BiHelpCircle } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

const Navbar2 = () => {
  return (
      <div className={styles.maindiv}>
          <div className={styles.subdiv}>
              <div> 
                  <img style={{width:"100%"}} src={img} alt="" />  
              </div>
              
             
                  <input className={styles.input} type="" name="" value="" />
      

              <div>
                  <BiHelpCircle />
                  <RiContactsLine />
                  <BsHeart />
                  <BsCartDash/>
              </div>
          </div> 
    </div>
  )
}

export default Navbar2