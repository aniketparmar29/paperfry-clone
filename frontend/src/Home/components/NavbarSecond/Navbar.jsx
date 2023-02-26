import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar, WholeNavbar} from './NavbarCSS';
import Images from '../../Images/logo.png';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link  } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import "../../style/slider.css"
import { flexbox } from '@mui/system';
// import "../Login/popup.css"
// import { MainLogin } from '../Login/Mainlogin';

const Navbar = () => {
  //var user = JSON.parse(localStorage.getItem('userData'));
  //const [popup,popupTrig] = React.useState(false);
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Super Momma Sale | Up to 60% Off | Use Code <span>MOM</span></LeftText>
          <RightText>Extra 20% Cashback On All Orders | T&C Apply <a href="/">Sign Up</a></RightText>
        </Sale>
      </Header>
    <WholeNavbar>
      <Dummy>
        <DummyLeft>
            <span>Sell on Pepperfry</span>
            <span>Become a Franchisee</span>
            <span>Buy in Bulk</span>
            <span>Find a Studio</span>
        </DummyLeft>
        <DummyRight>
          <p>Enter Pincode</p>
          <span>Find Pepperfry Studio</span>
        </DummyRight>
      </Dummy>
      <Nav>
        <TopNav>
          <div>
            <NavLogo to="/"><img src={Images} alt={"logo"}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
          <div className="iconDiv">
            <div className="iconOne">
              <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt={"help"} className="help" />
            </div>
            <div className="iconOne">
              <Link to='/signup'>
              <button className='log' ><PermIdentityIcon className="icon" />
              {/* onClick={()=>popupTrig(true)} */}
              </button>
              </Link>
              <h6 style={{margin:"0%"}}>Some</h6>
            </div>
            
          <div className="text-center">
            <button className="text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                      <div className="iconOne">
                        <FavoriteBorderOutlinedIcon className="icon" />
                      </div>
            </button>
          </div>
          
          <div id="drawer-example" className="fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform -translate-x-full bg-white w-1/3 dark:bg-gray-800 sm: w-1/2" tabindex="-1" aria-labelledby="drawer-label">
          <div className="h-1/5 bg-black p-5" style={{display:'flex'}}>
            <label for="pincode" className="block mb-2 text-sm font-sm text-white dark:text-dark test-xs">Show Availability At</label>
            <input type="text" id="pincode" className="inline mx-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-30 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <label for="pincode" className="block mb-2 text-sm font-sm text-white dark:text-dark test-xs">Check</label>
         </div>
            
         <div className="overflow-y-auto">
      <ul  style={{display:"flex"}} className="bg-black">
        <li className='bg-black p-5'>
        <button type="button" className="flex items-center active:text-black active:bg-white w-full text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg> */}
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">MY CART</span>
                  {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                  <button className="bg-orange text-white w-90%">PROCEED TO PAY SECURELY</button>
            </button>
           
           
         </li>
         <li className='bg-black p-5'>
            <button type="button"className="flex items-center active:text-black active:bg-white w-full text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg> */}
                  <span className="flex-2 ml-3 text-left whitespace-nowrap">MY WISHLIST</span>
                  {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700">ONE</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Two</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Three</a>
                  </li>
            </ul>
         </li>
      </ul>
   </div>
          </div>
       
       
          <div className="text-center">
            <button className="text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
              <div className="iconOne">
                <Link to="/">
                  <ShoppingCartOutlinedIcon className="icon" />
                </Link>
              </div>
            </button>
          </div>

          </div>
        </TopNav>

        <div className='popup-div'>
          {/* <MainLogin trigger = {popup} setTrigger={popupTrig}/> */}
        </div>
        {/* <DropdownMenu /> */}
      </Nav>
    </WholeNavbar>
    </>
  )
}

export default Navbar;

