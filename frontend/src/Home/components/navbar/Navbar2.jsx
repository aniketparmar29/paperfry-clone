import React from 'react'
import img from "../../imgNav1/woodenfry2.png"
import styles from "./Navbar2.module.css"
import { BiHelpCircle } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import Cw from '../../../CW/Cw';

const Navbar2 = () => {
  return (
      <div className={styles.maindiv}>
          <div className={styles.subdiv}>
              <div> 
                  <img style={{width:"100%"}} src={img} alt="" />  
              </div>
              
             
                  <input className={styles.input} type="" name="" value="" />
      

              {/* <div>
                  <BiHelpCircle />
                  <RiContactsLine /> */}
                  <div class="text-center">
                     <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        Show navigation
                     </button>
                  </div>
                  {/* <BsHeart/>
                  <BsCartDash/>
              </div> */}
          </div> 
    </div>
  )
}

export default Navbar2