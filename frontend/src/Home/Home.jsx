import React from 'react'
import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero"
import Navbar from './components/NavbarSecond/Navbar'
import  './Home.css'

export const Homediv = () => {
  return (
    <div className='homePage'>
      <Navbar/>
      <Hero/>
      <Footer/>
      </div>
  )
}
