import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, NavLogo, SearchBar, WholeNavbar} from '../styles/Navbar';
const Navbar = () => {
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Super Momma Sale | Up to 60% Off | Use Code <span>MOM</span></LeftText>
          <RightText>Extra 20% Cashback On All Orders | T&C Apply <a href="/">Sign Up</a></RightText>
        </Sale>
      </Header>
    <WholeNavbar >
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
      <nav className='border-b-2 flex justify-around items-center'>
        <TopNav>
          <div className='flex justify-center items-center'>
            <NavLogo to="/"><img src="/woodenfry2.png" alt={"logo"}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
          <div className="flex justify-around w-52 relative ">
            <div className="iconOne">
              <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt={"help"} className="help" />
            </div>
          </div>
        </TopNav>
        <div className='popup-div'>
        </div>
      </nav>
    </WholeNavbar>
    </>
  )
}

export default Navbar;

