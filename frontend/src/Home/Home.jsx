import React from 'react'
import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero"
import Navbar from './components/NavbarSecond/Navbar'
import DropdownMenu from './components/NavbarSecond/DropdownMenu'
import Cw from "../CW/Cw"

export const Homediv = () => {
  return (
    <>
      <DropdownMenu/>
      <Navbar/>
      {/* <Cw/> */}
      <Hero/>
      <Footer/>
      </>
  )
}
