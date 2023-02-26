import React from 'react'
import styles from "./Navbar1.module.css"

export const Navbar1 = () => {
  return (
    <div className={styles.maindiv}>
          <div className={styles.submaindiv}>
              <div className={styles.datadiv1}>
                  <div>
                    Sell on Woodenfry
                  </div>
                  <div>
                     Become a Franchisee
                  </div>
                  <div>
                     Buy in Bulk
                  </div>
                  <div>
                     Find a Studio
                  </div>
                  <div>
                     Find Design Inspiration
                  </div>
              </div>


              <div className={styles.datadiv2}>
                  <div>
                    Enter pincode
                  </div>
                  <div>
                      <a style={{color: "red"}} href="">Find Woodenfry studio</a> 
                  </div>
              </div>
          </div>
    </div>
  )
}
