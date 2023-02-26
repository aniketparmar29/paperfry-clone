import React from "react";
import "../styles/Dropdown.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/userAuth/user.actions";
function DropdownMenu() {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(val=>val.userAuth)
  const [nav, setNav] = useState(false);
  const [profileDtl, setProfileDtl] = useState(false);
  const handleProfileMenu = ()=>{
    setProfileDtl(!profileDtl)
  }
  return (
    <>
      <div className="tabbarParent">
        <div
          className="mainDiv">
          <div className="category">
            <Link to='/product/sofasets' className="categoryP" onMouseOut={()=>setNav(false)} onMouseOver={() => {setNav(true) }}>Furniture</Link>
          </div>
          <div className="category">
            <Link to={"/product/recliner"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Sofas & Recliners</Link>
          </div>
          <div className="category">
            <Link to={"/product/Collectibles"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Cabinetry</Link>
          </div>
          <div className="category">
            <Link to={"/product/glasses"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Beds</Link>
          </div>
          <div className="category">
            <Link to={"/product/mounts"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Mattresses</Link>
          </div>
          <div className="category">
            <Link to={"/product/bathmets"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Furnishings</Link>
          </div>
          <div className="category">
            <Link to={"/product/lawsonsofasets"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Decor</Link>
          </div>
          <div className="category">
            <Link to={"/product/modernsofas"} onMouseOut={()=>setNav(false)}  onMouseOver={() => {setNav(true) }}>Lighting</Link>
          </div>
          <div className="category">
            <Link to={"/product/queenbed"} onMouseOut={()=>setNav(false)} onMouseOver={() => {setNav(true) }}>Appliances</Link>
          </div>
          <div className="category">
            <Link to={"/product/Bucketsofas"} onMouseOut={()=>setNav(false)} onMouseOver={() => {setNav(true) }}>Bucketsofas</Link>
          </div>
          <div className="w-32 flex justify-around relative" >
          <PermIdentityIcon className="" onClick={handleProfileMenu} />
          <FavoriteBorderOutlinedIcon className="" />
          <Link to="/cart"><ShoppingCartOutlinedIcon className="" /></Link>
           {profileDtl&&<div className='absolute top-[100%] w-full h-20 border-2 border-gray-200 z-50 text-black bg-white rounded-xl'>
            {
              isAuth?<div className="flex flex-col justify-center items-center" >
                <p onClick={()=>{dispatch(logoutUser()); setProfileDtl(false)} } >Logout</p>
                </div>:
              <div className="flex flex-col justify-center items-center" >
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>Signup</Link>
            </div>}
            </div>}
          </div>
        </div>
        
      </div>
      {nav&&<div className="subCategory" onMouseOver={()=>setNav(true)}>
          <div className="uldiv">
            <p>Sofa</p>
            <Link to="/productlist">
              <ul>
                <li>3-Seater sofas</li>
                <li>2-Seater Sofas</li>
                <li>1-seater Sofas</li>
                <li>Sofa Sets</li>
                <li>Sectional Sofas</li>
                <li>Recliners</li>
                <li>Chaise Loungers</li>
                <li>Sofa Cum beds</li>
                <li>Futons</li>
              </ul>
            </Link>
          </div>
          <div className="uldiv">
            <p>Seating</p>
            <ul>
              <li>Settees</li>
              <li>Benches</li>
              <li>Chaise Loungers</li>
              <li>Recamiers</li>
              <li>Ottamans</li>
              <li>Pouffes</li>
              <li>Foot Stools</li>
              <li>Swings</li>
              <li>Hammocks</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Chairs</p>
            <ul>
              <li>Arm Chairs</li>
              <li>Rocking Chairs</li>
              <li>Lounge Chairs</li>
              <li>Cafe Chairs</li>
              <li>Iconic Chairs</li>
              <li>Slippers Chairs</li>
              <li>Barrels Chairs</li>
              <li>Folding Chairs</li>
              <li>Plastic Chairs</li>
              <li>Wings Chairs</li>
              <li>Office chairs</li>
              <li>Patio Chairs</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Tables</p>
            <ul>
              <li>Coffee Tables</li>
              <li>Coffee Tables Sets</li>
              <li>End Tables</li>
              <li>Nest Tables</li>
              <li>Console Tables</li>
              <li>Portable Tables</li>
              <li>Study Tables</li>
              <li>Dressing Tables</li>
              <li>Office Tables</li>
              <li>Patio Tables</li>
              <li>Patio sets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Tables</p>
            <ul>
              <li>Coffee Tables</li>
              <li>Coffee Tables Sets</li>
              <li>End Tables</li>
              <li>Nest Tables</li>
              <li>Console Tables</li>
              <li>Portable Tables</li>
              <li>Study Tables</li>
              <li>Dressing Tables</li>
              <li>Office Tables</li>
              <li>Patio Tables</li>
              <li>Patio sets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Cabinatory</p>
            <ul>
              <li>Shoe racks</li>
              <li>Entertainment units</li>
              <li>Cabinet & sideboards</li>
              <li>Chest of drawers</li>
              <li>Book Shelves</li>
              <li>Book Shelves</li>
              <li>Book cases</li>
              <li>Trunks</li>
              <li>Wardrobes</li>
              <li>Modular wardrobes</li>
              <li>Plastics cabinets</li>
              <li>Office cabinets</li>
            </ul>
          </div>
          <div className="uldiv">
            <p>Beds</p>
            <ul>
              <li>Settees</li>
              <li>Benches</li>
              <li>Chaise Loungers</li>
              <li>Recamiers</li>
              <li>Ottamans</li>
              <li>Pouffes</li>
              <li>Foot Stools</li>
              <li>Swings</li>
              <li>Hammocks</li>
            </ul>
          </div>
        </div>}
    </>
  );
}

export default DropdownMenu;