import React from 'react'
import Footer from './Components/Footer'
import Hero from "./Components/Hero"
import Navbar from './Components/Navbar'
import DropdownMenu from './Components/DropdownMenu'
import { useSelector } from 'react-redux'

const Home = () => {
  useSelector(val=>console.log(val))
  return (
    <>
      <Navbar/>
      <div className='sticky top-0 z-50' >
      <DropdownMenu/>
      </div>
      <Hero/>
      <Footer/>
      </>
  )
}
export default Home;